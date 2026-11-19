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

test('course completion is progress and academic performance is a meter', () => {
  const document = loadDocument(__dirname);
  expectHtmlOnly(document);
  expectUniqueIds(document);
  const progress = labeledControl(document, 'course-completion', 'Course completion:');
  if (progress.tagName !== 'PROGRESS') {
    throw new Error('Expected course completion to be a <progress> element.');
  }
  expectAttr(progress, 'value', '70', 'course completion');
  expectAttr(progress, 'max', '100', 'course completion');
  const meter = labeledControl(document, 'academic-performance', 'Academic performance:');
  if (meter.tagName !== 'METER') {
    throw new Error('Expected academic performance to be a <meter> element.');
  }
  expectAttr(meter, 'value', '80', 'academic performance');
  expectAttr(meter, 'min', '0', 'academic performance');
  expectAttr(meter, 'max', '100', 'academic performance');
  expectAttr(meter, 'low', '50', 'academic performance');
  expectAttr(meter, 'high', '85', 'academic performance');
  expectAttr(meter, 'optimum', '100', 'academic performance');
  const explanation = all(document, 'p').find((paragraph) => {
    const text = textOf(paragraph).toLowerCase();
    return text.length >= 40 && text.includes('progress') && text.includes('meter');
  });
  if (!explanation) {
    throw new Error(
      'Expected a paragraph of at least 40 characters that uses the words progress and meter.'
    );
  }
});
