'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const ndjsonPath = process.env.CI_RESULT_NDJSON || path.join(root, 'reports', 'exercise-result.ndjson');

function stripAnsi(value) {
  return String(value || '').replace(/\u001b\[[0-9;]*m/g, '').replace(/\s+/g, ' ').trim();
}

function writeSummary(record) {
  const target = process.env.GITHUB_STEP_SUMMARY;
  if (!target) {
    return;
  }
  const icon = record.status === 'pass' ? '✅' : '❌';
  const how = record.source === 'cache' ? 'cached result' : 'ran now';
  const label = record.mode === 'solutions' ? 'Solutions' : 'Practice';
  const lines = [
    `### ${label} · ${record.chapter_title} › ${record.exercise_slug}`,
    '',
    '| | |',
    '| --- | --- |',
    `| Mode | ${record.mode} |`,
    `| Result | ${icon} **${record.status}** |`,
    `| How | ${how} |`,
    `| Path | \`${record.path}\` |`,
    '',
    record.message ? `> ${record.message.replace(/\|/g, '\\|')}` : '',
    '',
  ];
  fs.appendFileSync(target, `${lines.filter((line) => line !== undefined).join('\n')}\n`);
}

function writeRecord(record) {
  fs.mkdirSync(path.dirname(ndjsonPath), { recursive: true });
  fs.writeFileSync(ndjsonPath, `${JSON.stringify(record)}\n`);
  writeSummary(record);
  console.log(`RESULT ${record.status} ${record.message}`);
  process.exit(record.status === 'pass' ? 0 : 1);
}

function fromCache() {
  if (!fs.existsSync(ndjsonPath)) {
    throw new Error(`Cached result not found at ${ndjsonPath}`);
  }
  const record = JSON.parse(fs.readFileSync(ndjsonPath, 'utf8'));
  record.source = 'cache';
  writeRecord(record);
}

function required(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

function runExercise() {
  const mode = required('CI_MODE');
  const exerciseDir = required('CI_EXERCISE_DIR');
  const testFile = required('CI_TEST_FILE');
  const jestBin = path.join(root, 'node_modules', 'jest', 'bin', 'jest.js');
  const outputFile = path.join(root, 'reports', 'jest-result.json');
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });

  const env = { ...process.env, CI: 'true' };
  if (mode === 'solutions') {
    env.SOLUTIONS = '1';
  } else {
    delete env.SOLUTIONS;
  }

  const result = spawnSync(
    process.execPath,
    [jestBin, '--runTestsByPath', testFile, '--json', `--outputFile=${outputFile}`, '--watchman=false'],
    { cwd: root, env, encoding: 'utf8' }
  );

  let report = null;
  if (fs.existsSync(outputFile)) {
    report = JSON.parse(fs.readFileSync(outputFile, 'utf8'));
  }

  const assertions = report && report.testResults
    ? report.testResults.flatMap((suite) => suite.assertionResults || [])
    : [];
  const failed = assertions.filter((test) => test.status !== 'passed');
  const passed = assertions.length - failed.length;
  let status = result.status === 0 && failed.length === 0 && assertions.length > 0 ? 'pass' : 'fail';
  let message = '';
  if (status === 'pass') {
    message = `${passed} check${passed === 1 ? '' : 's'} passed`;
  } else if (failed.length > 0) {
    const first = failed[0];
    const detail = stripAnsi((first.failureMessages && first.failureMessages[0]) || first.title || 'failed');
    message = stripAnsi(`${failed.length} failed — ${detail}`).slice(0, 300);
  } else {
    const detail = stripAnsi(result.stderr || result.stdout || `Jest exited ${result.status}`);
    message = detail.slice(0, 300) || 'Jest failed before reporting a check.';
  }

  writeRecord({
    student_github_username: process.env.PROGRESS_STUDENT_ID || process.env.GITHUB_ACTOR || 'local',
    last_run_utc: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'),
    mode,
    presentation_number: required('CI_PRESENTATION_NUMBER'),
    presentation_title: required('CI_PRESENTATION_TITLE'),
    chapter_number: required('CI_CHAPTER_NUMBER'),
    chapter_title: required('CI_CHAPTER_TITLE'),
    exercise_number: required('CI_EXERCISE_NUMBER'),
    exercise_slug: required('CI_EXERCISE_SLUG'),
    path: exerciseDir,
    status,
    source: 'run',
    message,
  });
}

try {
  if (process.env.CI_FROM_CACHE === '1') {
    fromCache();
  } else {
    runExercise();
  }
} catch (error) {
  console.error(error && error.message ? error.message : error);
  process.exit(1);
}
