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

function expectSource(parent, src, type, owner) {
  const source = childByTag(parent, 'source').find((element) => element.getAttribute('src') === src);
  if (!source) {
    throw new Error('Expected a <source src="' + src + '"> inside the ' + owner + '.');
  }
  expectAttrIgnoreCase(source, 'type', type, 'the source for ' + src);
}

test('the video has controls and two file formats', () => {
  const document = loadDocument(__dirname);
  const video = one(document, 'video', '<video> element');
  expectHas(video, 'controls', 'the <video>');
  expectSource(video, 'media/clip.mp4', 'video/mp4', '<video>');
  expectSource(video, 'media/clip.webm', 'video/webm', '<video>');
});

test('the audio has controls and an mp3 source', () => {
  const document = loadDocument(__dirname);
  const audio = one(document, 'audio', '<audio> element');
  expectHas(audio, 'controls', 'the <audio>');
  expectSource(audio, 'media/theme.mp3', 'audio/mpeg', '<audio>');
});
