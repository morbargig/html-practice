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

test('the page contains exactly one <h1> and one <p>', () => {
  const document = loadDocument(__dirname);
  one(document, 'h1', '<h1> element');
  one(document, 'p', '<p> element');
});

test('the heading and paragraph use the lesson text', () => {
  const document = loadDocument(__dirname);
  const heading = document.querySelector('h1');
  const paragraph = document.querySelector('p');
  if (!heading) {
    throw new Error('Expected an <h1> with the text "Hello World".');
  }
  if (!paragraph) {
    throw new Error('Expected a <p> with the text "Welcome to HTML in VS Code!".');
  }
  expectText(heading, 'Hello World', 'the <h1> text');
  expectText(paragraph, 'Welcome to HTML in VS Code!', 'the <p> text');
});
