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

function expectPhoto(image) {
  const src = image.getAttribute('src');
  if (src !== 'images/photo.jpg' && src !== './images/photo.jpg') {
    throw new Error('Expected the image src to be "images/photo.jpg". Found "' + (src || 'no src attribute') + '".');
  }
  expectAttr(image, 'alt', 'My Photo', 'the image');
}

test('the page contains exactly one image', () => {
  const document = loadDocument(__dirname);
  one(document, 'img', '<img> element');
});

test('the image points at images/photo.jpg and describes it', () => {
  const document = loadDocument(__dirname);
  const image = document.querySelector('img');
  if (!image) {
    throw new Error('Expected an <img> with src="images/photo.jpg" and alt="My Photo".');
  }
  expectPhoto(image);
});
