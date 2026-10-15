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

function metaByName(document, name) {
  return all(document, 'meta').find((meta) => (meta.getAttribute('name') || '').toLowerCase() === name);
}

test('the head sets UTF-8 and the title My Page', () => {
  const document = loadDocument(__dirname);
  const head = one(document, 'head', '<head> element');
  const charset = document.querySelector('meta[charset]');
  if (!charset || (charset.getAttribute('charset') || '').toLowerCase() !== 'utf-8') {
    throw new Error('Expected <meta charset="UTF-8"> in the <head>.');
  }
  expectInside(charset, head, 'charset meta element', '<head>');
  const title = document.querySelector('title');
  expectInside(title, head, '<title> element', '<head>');
  expectText(title, 'My Page', 'the <title> text');
});

test('the head includes description, keywords, and author', () => {
  const document = loadDocument(__dirname);
  const head = document.querySelector('head');
  const expected = [
    ['description', 'My first web page'],
    ['keywords', 'HTML, tutorial, beginner'],
    ['author', 'Your Name'],
  ];
  expected.forEach(([name, content]) => {
    const meta = metaByName(document, name);
    if (!meta) {
      throw new Error('Expected <meta name="' + name + '"> with content "' + content + '".');
    }
    expectInside(meta, head, name + ' meta element', '<head>');
    expectAttr(meta, 'content', content, 'the ' + name + ' meta element');
  });
});
