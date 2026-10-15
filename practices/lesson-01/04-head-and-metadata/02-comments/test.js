'use strict';

const {
  loadDocument,
  textOf,
  all,
  one,
  expectText,
  expectAttr,
  expectAttrIgnoreCase,
  expectHas,
  expectInside,
  comments,
  labeledControl,
  expectHeadingSequence,
  childByTag,
} = require('../../../../lib/practice');

test('the page has a comment for the main title', () => {
  const document = loadDocument(__dirname);
  const found = comments(document);
  if (!found.includes('This section displays the main title')) {
    throw new Error('Expected an HTML comment with the text "This section displays the main title".');
  }
});

test('the page has an <h1> that says My Page', () => {
  const document = loadDocument(__dirname);
  const heading = document.querySelector('h1');
  if (!heading) {
    throw new Error('Expected an <h1> with the text "My Page".');
  }
  expectText(heading, 'My Page', 'the <h1> text');
});
