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

test('the page contains exactly one <h1> element', () => {
  const document = loadDocument(__dirname);
  one(document, 'h1', '<h1> element');
});

test('the <h1> text is "Hello World"', () => {
  const document = loadDocument(__dirname);
  const heading = document.querySelector('h1');
  if (!heading) {
    throw new Error('Expected an <h1> element with the text "Hello World". No <h1> was found.');
  }
  expectText(heading, 'Hello World', 'the <h1> text');
});
