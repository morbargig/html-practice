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

test('the page contains exactly one <p> element', () => {
  const document = loadDocument(__dirname);
  one(document, 'p', '<p> element');
});

test('the paragraph text is "Welcome to HTML in VS Code!"', () => {
  const document = loadDocument(__dirname);
  const paragraph = document.querySelector('p');
  if (!paragraph) {
    throw new Error('Expected a <p> element with the text "Welcome to HTML in VS Code!". No <p> was found.');
  }
  expectText(paragraph, 'Welcome to HTML in VS Code!', 'the paragraph text');
});
