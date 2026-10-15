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

test('the paragraph emphasizes meaning and marks importance', () => {
  const document = loadDocument(__dirname);
  const paragraph = one(document, 'p', '<p> element');
  expectText(paragraph, 'HTML gives content meaning and importance.', 'the paragraph text');
  expectText(one(paragraph, 'em', '<em> inside the paragraph'), 'meaning', 'the <em> text');
  expectText(one(paragraph, 'strong', '<strong> inside the paragraph'), 'importance', 'the <strong> text');
});
