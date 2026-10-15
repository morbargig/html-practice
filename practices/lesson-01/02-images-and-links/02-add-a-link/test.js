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

test('the link opens https://example.com in a new tab', () => {
  const document = loadDocument(__dirname);
  const link = document.querySelector('a');
  if (!link) {
    throw new Error('Expected an <a> element linking to https://example.com.');
  }
  expectAttr(link, 'href', 'https://example.com', 'the link');
  expectAttr(link, 'target', '_blank', 'the link');
  expectText(link, 'Visit Site', 'the link text');
});
