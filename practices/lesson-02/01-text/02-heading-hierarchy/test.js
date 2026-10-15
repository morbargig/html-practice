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

test('the headings follow Recipes, Breakfast, Oatmeal, Dinner', () => {
  const document = loadDocument(__dirname);
  const headings = expectHeadingSequence(document);
  const actual = headings.map((heading) => heading.tagName.toLowerCase() + ' ' + textOf(heading));
  const expected = ['h1 Recipes', 'h2 Breakfast', 'h3 Oatmeal', 'h2 Dinner'];
  if (actual.join('|') !== expected.join('|')) {
    const found = actual.length ? actual.join(', ') : 'no headings';
    throw new Error('Expected the headings to be h1 "Recipes", h2 "Breakfast", h3 "Oatmeal", h2 "Dinner". Found ' + found + '.');
  }
});
