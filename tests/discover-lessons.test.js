'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function walk(dir, predicate, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, predicate, found);
    } else if (predicate(full)) {
      found.push(full);
    }
  }
  return found;
}

test('each practice lesson is discovered with a matching solution page', () => {
  const lessons = fs.readdirSync(path.join(root, 'practices'))
    .filter((name) => /^lesson-\d{2}$/.test(name))
    .sort();
  expect(lessons).toEqual(['lesson-01', 'lesson-02']);

  const tests = walk(
    path.join(root, 'practices'),
    (file) => file.endsWith(`${path.sep}test.js`)
  );
  expect(tests.length).toBe(26);

  tests.forEach((testFile) => {
    const exerciseDir = path.dirname(testFile);
    const relative = path.relative(root, exerciseDir);
    const solutionHtml = path.join(root, 'solutions', relative, 'index.html');
    expect(fs.existsSync(solutionHtml)).toBe(true);
    expect(fs.readFileSync(testFile, 'utf8')).toContain("require('../../../../lib/practice')");
  });
});

test('labs use the lesson number from the course, and empty lessons are absent', () => {
  expect(fs.existsSync(path.join(root, 'labs/lesson-01/lab-01-html-fundamentals.ipynb'))).toBe(true);
  expect(fs.existsSync(path.join(root, 'labs/lesson-03/Lab_02_Advanced_HTML_Native_Interactivity.ipynb'))).toBe(true);
  expect(fs.existsSync(path.join(root, 'labs/lesson-02'))).toBe(false);
  expect(fs.existsSync(path.join(root, 'practices/lesson-03'))).toBe(false);
});
