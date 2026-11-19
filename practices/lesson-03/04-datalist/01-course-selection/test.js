'use strict';

const {
  loadDocument,
  textOf,
  all,
  expectAttr,
  labeledControl,
} = require('../../../../lib/practice');

function expectHtmlOnly(document) {
  if (all(document, 'script, style').length > 0) {
    throw new Error('Expected HTML only. Remove <script> and <style>.');
  }
}

function expectUniqueIds(document) {
  const seen = new Set();
  all(document, '[id]').forEach((element) => {
    const id = element.getAttribute('id');
    if (seen.has(id)) {
      throw new Error(`Expected every id to be unique. Found id="${id}" more than once.`);
    }
    seen.add(id);
  });
}

test('the course field suggests values and the page explains datalist', () => {
  const document = loadDocument(__dirname);
  expectHtmlOnly(document);
  expectUniqueIds(document);
  const input = labeledControl(document, 'course', 'Course:');
  expectAttr(input, 'name', 'course', 'the course field');
  expectAttr(input, 'list', 'courses', 'the course field');
  const dataList = document.getElementById('courses');
  if (!dataList || dataList.tagName !== 'DATALIST') {
    throw new Error('Expected a <datalist id="courses">.');
  }
  const values = all(dataList, 'option')
    .map((option) => option.getAttribute('value'))
    .filter((value) => value);
  if (values.length < 4) {
    throw new Error(`Expected at least 4 datalist suggestions. Found ${values.length}.`);
  }
  ['HTML', 'CSS'].forEach((course) => {
    if (!values.includes(course)) {
      throw new Error(`Expected a datalist option with value="${course}".`);
    }
  });
  const explanation = all(document, 'p').find((paragraph) => {
    const text = textOf(paragraph).toLowerCase();
    return text.length >= 40 && text.includes('datalist') && text.includes('select');
  });
  if (!explanation) {
    throw new Error(
      'Expected a paragraph of at least 40 characters that uses the words datalist and select.'
    );
  }
});
