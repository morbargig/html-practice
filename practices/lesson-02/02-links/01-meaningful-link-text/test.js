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

test('the guide link says Download the guide', () => {
  const document = loadDocument(__dirname);
  const links = all(document, 'a');
  if (links.some((link) => textOf(link).toLowerCase() === 'click here')) {
    throw new Error('Expected descriptive link text. Found "click here". Name the destination, for example "Download the guide".');
  }
  const guide = links.find((link) => link.getAttribute('href') === 'guide.pdf');
  if (!guide) {
    throw new Error('Expected a link with href="guide.pdf".');
  }
  expectText(guide, 'Download the guide', 'the guide link');
});

test('the documentation link names the HTML documentation', () => {
  const document = loadDocument(__dirname);
  const docs = all(document, 'a').find((link) => {
    return link.getAttribute('href') === 'https://developer.mozilla.org/en-US/docs/Web/HTML';
  });
  if (!docs) {
    throw new Error('Expected a link to https://developer.mozilla.org/en-US/docs/Web/HTML.');
  }
  expectText(docs, 'HTML documentation', 'the documentation link');
});
