'use strict';

const {
  loadDocument,
  textOf,
  all,
  one,
  expectText,
  expectAttr,
} = require('../../../../lib/practice');

function expectHtmlOnly(document) {
  if (all(document, 'script, style').length > 0) {
    throw new Error('Expected HTML only. Remove <script> and <style>.');
  }
  const withHandler = all(document, '*').find((element) =>
    [...element.attributes].some((attr) => attr.name.toLowerCase().startsWith('on'))
  );
  if (withHandler) {
    throw new Error('Expected HTML only. Remove event-handler attributes.');
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

test('the profile page uses advanced attributes', () => {
  const document = loadDocument(__dirname);
  expectHtmlOnly(document);
  expectUniqueIds(document);
  expectAttr(document.documentElement, 'lang', 'en', 'the page');
  const section = one(document, 'section', '<section> element');
  expectAttr(section, 'id', 'profile', 'the profile section');
  expectAttr(section, 'class', 'student-profile', 'the profile section');
  expectAttr(section, 'data-student-id', 's123', 'the profile section');
  const heading = one(section, 'h1', '<h1> inside the profile section');
  expectText(heading, 'Student Profile', 'the profile heading');
  expectAttr(heading, 'title', 'Student profile for the HTML course', 'the profile heading');
  const bio = all(section, 'p').find((node) => node.getAttribute('contenteditable') === 'true');
  if (!bio) {
    throw new Error('Expected a paragraph with contenteditable="true".');
  }
  expectText(bio, 'I am learning advanced HTML.', 'the editable bio');
  const hidden = all(section, 'p').find((node) => node.hasAttribute('hidden'));
  if (!hidden) {
    throw new Error('Expected a paragraph with the hidden attribute.');
  }
  expectText(hidden, 'This note is hidden.', 'the hidden note');
  if (hidden === bio) {
    throw new Error('Expected the hidden note and the editable bio to be different paragraphs.');
  }
  expect(textOf(hidden).length).toBeGreaterThan(0);
});
