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

test('the head links style.css as a stylesheet', () => {
  const document = loadDocument(__dirname);
  const head = one(document, 'head', '<head> element');
  const link = all(head, 'link').find((node) => {
    return (node.getAttribute('rel') || '').toLowerCase().split(/\s+/).includes('stylesheet');
  });
  if (!link) {
    throw new Error('Expected a <link rel="stylesheet"> inside <head>.');
  }
  const href = link.getAttribute('href');
  if (href !== 'style.css' && href !== './style.css') {
    throw new Error('Expected the stylesheet href to be "style.css". Found "' + (href || 'no href attribute') + '".');
  }
});
