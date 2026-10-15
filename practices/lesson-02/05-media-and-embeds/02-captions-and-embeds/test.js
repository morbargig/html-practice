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

test('the video includes an English captions track', () => {
  const document = loadDocument(__dirname);
  const video = one(document, 'video', '<video> element');
  expectHas(video, 'controls', 'the <video>');
  const source = childByTag(video, 'source').find((element) => element.getAttribute('src') === 'media/clip.mp4');
  if (!source) {
    throw new Error('Expected <source src="media/clip.mp4"> inside the <video>.');
  }
  expectAttrIgnoreCase(source, 'type', 'video/mp4', 'the mp4 source');
  const track = childByTag(video, 'track')[0];
  if (!track) {
    throw new Error('Expected a <track> inside the <video>.');
  }
  expectAttr(track, 'src', 'media/captions.vtt', 'the captions track');
  expectAttrIgnoreCase(track, 'kind', 'captions', 'the captions track');
  expectAttr(track, 'label', 'English', 'the captions track');
});

test('the iframe names the embedded example page', () => {
  const document = loadDocument(__dirname);
  const frame = one(document, 'iframe', '<iframe> element');
  expectAttr(frame, 'src', 'https://example.com', 'the iframe');
  expectAttr(frame, 'title', 'Example', 'the iframe');
});
