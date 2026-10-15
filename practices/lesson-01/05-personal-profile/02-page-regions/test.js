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

test('the header shows Alex Rivera in an h1', () => {
  const document = loadDocument(__dirname);
  const header = one(document, 'header', '<header> element');
  expectText(one(header, 'h1', '<h1> inside <header>'), 'Alex Rivera', 'the <h1> inside <header>');
});

test('the nav links to the About and Contact regions', () => {
  const document = loadDocument(__dirname);
  const nav = one(document, 'nav', '<nav> element');
  const links = all(nav, 'a');
  const about = links.find((link) => link.getAttribute('href') === '#about');
  const contact = links.find((link) => link.getAttribute('href') === '#contact');
  if (!about) {
    throw new Error('Expected a nav link with href="#about".');
  }
  if (!contact) {
    throw new Error('Expected a nav link with href="#contact".');
  }
  expectText(about, 'About', 'the About link');
  expectText(contact, 'Contact', 'the Contact link');
});

test('main introduces Alex and the contact section has a heading', () => {
  const document = loadDocument(__dirname);
  const main = one(document, 'main', '<main> element');
  const section = one(document, 'section', '<section> element');
  expectAttr(main, 'id', 'about', 'the <main> element');
  expectAttr(section, 'id', 'contact', 'the <section> element');
  const intro = all(main, 'p').find((paragraph) => textOf(paragraph) === 'I am learning HTML.');
  if (!intro) {
    throw new Error('Expected <main> to contain a paragraph with the text "I am learning HTML.".');
  }
  expectText(one(section, 'h2', '<h2> inside <section>'), 'Contact', 'the <h2> inside <section>');
});

test('the footer contains the copyright line', () => {
  const document = loadDocument(__dirname);
  const footer = one(document, 'footer', '<footer> element');
  const line = all(footer, 'p').find((paragraph) => textOf(paragraph) === '© 2026 Alex Rivera');
  if (!line) {
    throw new Error('Expected the <footer> to contain a paragraph with the text "© 2026 Alex Rivera".');
  }
});
