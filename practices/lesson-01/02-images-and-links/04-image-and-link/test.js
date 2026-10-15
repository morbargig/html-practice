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

test('the page has one image and one link', () => {
  const document = loadDocument(__dirname);
  one(document, 'img', '<img> element');
  one(document, 'a', '<a> element');
});

test('the image and link match the lesson example', () => {
  const document = loadDocument(__dirname);
  const image = document.querySelector('img');
  const link = document.querySelector('a');
  if (!image) {
    throw new Error('Expected an <img> with src="images/photo.jpg" and alt="My Photo".');
  }
  if (!link) {
    throw new Error('Expected an <a> to https://example.com with the text "Visit Site".');
  }
  const src = image.getAttribute('src');
  if (src !== 'images/photo.jpg' && src !== './images/photo.jpg') {
    throw new Error('Expected the image src to be "images/photo.jpg". Found "' + (src || 'no src attribute') + '".');
  }
  expectAttr(image, 'alt', 'My Photo', 'the image');
  expectAttr(link, 'href', 'https://example.com', 'the link');
  expectAttr(link, 'target', '_blank', 'the link');
  expectText(link, 'Visit Site', 'the link text');
});
