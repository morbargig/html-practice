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

test('the document language is English and the title is Campus News', () => {
  const document = loadDocument(__dirname);
  const lang = document.documentElement.getAttribute('lang');
  if ((lang || '').toLowerCase() !== 'en') {
    throw new Error('Expected <html lang="en">. Found ' + (lang ? 'lang="' + lang + '"' : 'no lang attribute') + '.');
  }
  expectText(document.querySelector('title'), 'Campus News', 'the <title> text');
});

test('the landmarks and story text are in place', () => {
  const document = loadDocument(__dirname);
  const header = one(document, 'header', '<header> element');
  const nav = one(document, 'nav', '<nav> element');
  const main = one(document, 'main', '<main> element');
  const article = one(document, 'article', '<article> element');
  const section = one(document, 'section', '<section> element');
  const aside = one(document, 'aside', '<aside> element');
  const footer = one(document, 'footer', '<footer> element');
  expectInside(article, main, '<article>', '<main>');
  expectInside(section, main, '<section>', '<main>');
  expectText(one(header, 'h1', '<h1> inside <header>'), 'Campus News', 'the page heading');
  expectAttr(article, 'id', 'story', 'the article');
  expectAttr(section, 'id', 'notes', 'the section');
  expectText(one(article, 'h2', '<h2> inside <article>'), 'Campus Fair', 'the article heading');
  const story = all(article, 'p').find((paragraph) => textOf(paragraph) === 'The campus fair is on Friday.');
  if (!story) throw new Error('Expected the article to say "The campus fair is on Friday.".');
  expectText(one(section, 'h2', '<h2> inside <section>'), 'Schedule', 'the section heading');
  const notes = all(section, 'p').find((paragraph) => textOf(paragraph) === 'Doors open at 10:00.');
  if (!notes) throw new Error('Expected the section to say "Doors open at 10:00.".');
  expectText(one(aside, 'h2', '<h2> inside <aside>'), 'Related', 'the aside heading');
  const related = all(aside, 'p').find((paragraph) => textOf(paragraph) === 'Bring a notebook.');
  if (!related) throw new Error('Expected the aside to say "Bring a notebook.".');
  const footerLine = all(footer, 'p').find((paragraph) => textOf(paragraph) === '© 2026 Campus News');
  if (!footerLine) throw new Error('Expected the footer to say "© 2026 Campus News".');
  const storyLink = all(nav, 'a').find((link) => link.getAttribute('href') === '#story');
  const notesLink = all(nav, 'a').find((link) => link.getAttribute('href') === '#notes');
  if (!storyLink) throw new Error('Expected a nav link with href="#story".');
  if (!notesLink) throw new Error('Expected a nav link with href="#notes".');
  expectText(storyLink, 'Story', 'the Story link');
  expectText(notesLink, 'Notes', 'the Notes link');
  expectHeadingSequence(document);
});
