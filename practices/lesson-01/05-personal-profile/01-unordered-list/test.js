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

test('the page has one unordered list of the three practiced topics', () => {
  const document = loadDocument(__dirname);
  const list = one(document, 'ul', '<ul> element');
  const items = childByTag(list, 'li').map((item) => textOf(item));
  const expected = ['Headings', 'Links', 'Images'];
  if (items.join('|') !== expected.join('|')) {
    throw new Error('Expected the list items to be Headings, Links, Images. Found "' + (items.join(', ') || 'no items') + '".');
  }
});
