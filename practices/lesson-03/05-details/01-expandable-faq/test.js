'use strict';

const {
  loadDocument,
  textOf,
  all,
} = require('../../../../lib/practice');

function expectHtmlOnly(document) {
  if (all(document, 'script, style').length > 0) {
    throw new Error('Expected HTML only. Remove <script> and <style>.');
  }
}

test('the FAQ has three questions and one is open', () => {
  const document = loadDocument(__dirname);
  expectHtmlOnly(document);
  const questions = all(document, 'details');
  if (questions.length !== 3) {
    throw new Error(`Expected exactly 3 <details> elements. Found ${questions.length}.`);
  }
  let openCount = 0;
  questions.forEach((question, index) => {
    const summary = question.querySelector('summary');
    if (!summary || !textOf(summary)) {
      throw new Error(`Expected question ${index + 1} to have a summary with text.`);
    }
    const answer = question.querySelector('p');
    if (!answer || !textOf(answer)) {
      throw new Error(`Expected question ${index + 1} to have a paragraph answer.`);
    }
    if (question.hasAttribute('open')) {
      openCount += 1;
    }
  });
  if (openCount !== 1) {
    throw new Error(`Expected exactly one <details open>. Found ${openCount}.`);
  }
});
