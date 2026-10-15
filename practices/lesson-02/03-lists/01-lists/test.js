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

test('the unordered list names Headings, Paragraphs, and Links', () => {
  const document = loadDocument(__dirname);
  const list = one(document, 'ul', '<ul> element');
  const items = childByTag(list, 'li').map((item) => textOf(item));
  if (items.join('|') !== 'Headings|Paragraphs|Links') {
    throw new Error('Expected the bulleted items to be Headings, Paragraphs, Links. Found "' + (items.join(', ') || 'no items') + '".');
  }
});

test('the ordered list gives the three steps in order', () => {
  const document = loadDocument(__dirname);
  const list = one(document, 'ol', '<ol> element');
  const items = childByTag(list, 'li').map((item) => textOf(item));
  if (items.join('|') !== 'Create the file|Add a heading|Save the page') {
    throw new Error('Expected the numbered steps to be "Create the file", "Add a heading", "Save the page". Found "' + (items.join(', ') || 'no items') + '".');
  }
});
