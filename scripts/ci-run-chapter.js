'use strict';

const fs = require('fs');
const path = require('path');
const { runExercise } = require('./ci-run-exercise');

const root = path.resolve(__dirname, '..');
const ndjsonPath = process.env.CI_RESULT_NDJSON || path.join(root, 'reports', 'chapter.ndjson');

function required(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

function humanize(slug) {
  const name = slug.replace(/^\d+-/, '').replace(/-/g, ' ').trim();
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : slug;
}

function exercisesIn(chapterPath) {
  const absolute = path.join(root, chapterPath);
  return fs.readdirSync(absolute, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d{2}-/.test(entry.name))
    .map((entry) => entry.name)
    .sort()
    .filter((name) => fs.existsSync(path.join(absolute, name, 'test.js')));
}

function icon(status) {
  if (status === 'pass') return '✅';
  if (status === 'skipped') return '⬜';
  return '❌';
}

function statusLabel(status) {
  return status === 'skipped' ? 'not started' : status;
}

function hasSolutionPage(exerciseDir) {
  return fs.existsSync(path.join(root, 'solutions', exerciseDir, 'index.html'));
}

function writeChapterSummary(records) {
  const target = process.env.GITHUB_STEP_SUMMARY;
  if (!target) {
    return;
  }
  const includeSolutions = records.some((record) => record.mode === 'solutions');
  const title = `${required('CI_PRESENTATION_NUMBER')} · ${required('CI_CHAPTER_TITLE')}`;
  const lines = [
    `### ${title}`,
    '',
    includeSolutions
      ? '| Exercise | Practice | Solutions |'
      : '| Exercise | Practice |',
    includeSolutions ? '| --- | --- | --- |' : '| --- | --- |',
  ];
  const bySlug = new Map();
  records.forEach((record) => {
    if (!bySlug.has(record.exercise_slug)) {
      bySlug.set(record.exercise_slug, {});
    }
    bySlug.get(record.exercise_slug)[record.mode] = record;
  });
  bySlug.forEach((modes, slug) => {
    const practice = modes.practice;
    const solutions = modes.solutions;
    const cell = (row) => (row ? `${icon(row.status)} **${statusLabel(row.status)}**` : '—');
    lines.push(
      includeSolutions
        ? `| ${humanize(slug)} | ${cell(practice)} | ${cell(solutions)} |`
        : `| ${humanize(slug)} | ${cell(practice)} |`
    );
  });
  lines.push('');
  fs.appendFileSync(target, `${lines.join('\n')}\n`);
}

function save(records) {
  fs.mkdirSync(path.dirname(ndjsonPath), { recursive: true });
  fs.writeFileSync(ndjsonPath, `${records.map((record) => JSON.stringify(record)).join('\n')}\n`);
}

function runChapter() {
  const chapterPath = required('CI_CHAPTER_PATH');
  const names = exercisesIn(chapterPath);
  if (names.length === 0) {
    throw new Error(`No exercises with test.js in ${chapterPath}`);
  }
  const records = [];
  names.forEach((slug) => {
    const exerciseDir = `${chapterPath}/${slug}`;
    const shared = {
      CI_EXERCISE_DIR: exerciseDir,
      CI_TEST_FILE: `${exerciseDir}/test.js`,
      CI_EXERCISE_NUMBER: slug.slice(0, 2),
      CI_EXERCISE_SLUG: slug,
    };
    console.log(`::group::${humanize(slug)}`);
    const modes = ['practice'];
    if (hasSolutionPage(exerciseDir)) {
      modes.push('solutions');
    }
    modes.forEach((mode) => {
      Object.assign(process.env, shared, { CI_MODE: mode });
      records.push(runExercise({ write: false }));
    });
    console.log('::endgroup::');
  });
  save(records);
  writeChapterSummary(records);
  return records;
}

function fromCache() {
  if (!fs.existsSync(ndjsonPath)) {
    throw new Error(`Cached chapter result not found at ${ndjsonPath}`);
  }
  const records = fs.readFileSync(ndjsonPath, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  records.forEach((record) => {
    record.source = 'cache';
  });
  save(records);
  writeChapterSummary(records);
  records.forEach((record) => {
    console.log(`RESULT ${record.mode} ${record.status} ${record.message}`);
  });
  return records;
}

function annotate(records) {
  records.forEach((record) => {
    if (record.status === 'pass') {
      return;
    }
    const file = `${record.path}/index.html`;
    if (record.status === 'skipped') {
      console.log(`::notice title=Not started,file=${file}::${record.path}: ${record.message}`);
      return;
    }
    console.log(`::error title=Failed,file=${file}::${record.path}: ${record.message}`);
  });
}

function chapterFailed(records) {
  const practice = records.filter((record) => record.mode === 'practice');
  if (records.some((record) => record.status === 'fail')) {
    return true;
  }
  if (!practice.some((record) => record.status !== 'skipped')) {
    console.log('::error::This topic is not started. Edit a practice index.html and push to test it.');
    return true;
  }
  return false;
}

try {
  const records = process.env.CI_FROM_CACHE === '1' ? fromCache() : runChapter();
  annotate(records);
  process.exit(chapterFailed(records) ? 1 : 0);
} catch (error) {
  console.error(error && error.message ? error.message : error);
  process.exit(1);
}
