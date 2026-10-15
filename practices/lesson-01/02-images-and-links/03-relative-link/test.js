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

test('the page contains exactly one link', () => {
  const document = loadDocument(__dirname);
  one(document, 'a', '<a> element');
});

test('the link uses the relative URL contact.html', () => {
  const document = loadDocument(__dirname);
  const link = document.querySelector('a');
  if (!link) {
    throw new Error('Expected an <a> element with href="contact.html".');
  }
  expectAttr(link, 'href', 'contact.html', 'the link');
  expectText(link, 'Contact', 'the link text');
});
