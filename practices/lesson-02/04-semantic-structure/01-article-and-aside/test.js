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

test('the article contains the standalone post', () => {
  const document = loadDocument(__dirname);
  const article = one(document, 'article', '<article> element');
  expectText(one(article, 'h2', '<h2> inside <article>'), 'First Post', 'the article heading');
  const paragraph = all(article, 'p').find((node) => textOf(node) === 'This note stands on its own.');
  if (!paragraph) {
    throw new Error('Expected the article to contain "This note stands on its own.".');
  }
});

test('the aside contains the related note', () => {
  const document = loadDocument(__dirname);
  const aside = one(document, 'aside', '<aside> element');
  expectText(one(aside, 'h2', '<h2> inside <aside>'), 'Note', 'the aside heading');
  const paragraph = all(aside, 'p').find((node) => textOf(node) === 'Asides are related, not the main story.');
  if (!paragraph) {
    throw new Error('Expected the aside to contain "Asides are related, not the main story.".');
  }
});
