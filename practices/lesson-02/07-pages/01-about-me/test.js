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

test('the document is in English and titled About Me', () => {
  const document = loadDocument(__dirname);
  const lang = document.documentElement.getAttribute('lang');
  if ((lang || '').toLowerCase() !== 'en') {
    throw new Error('Expected <html lang="en">. Found ' + (lang ? 'lang="' + lang + '"' : 'no lang attribute') + '.');
  }
  if (!document.doctype || document.doctype.name.toLowerCase() !== 'html') {
    throw new Error('Expected an HTML5 <!DOCTYPE html> at the top of the document.');
  }
  expectText(document.querySelector('title'), 'About Me', 'the <title> text');
});

test('the page uses one h1 and does not skip heading levels', () => {
  const document = loadDocument(__dirname);
  const headings = expectHeadingSequence(document);
  const h1s = headings.filter((heading) => heading.tagName === 'H1');
  if (h1s.length !== 1) {
    throw new Error('Expected exactly one <h1>. Found ' + h1s.length + '.');
  }
  expectText(h1s[0], 'About Me', 'the <h1> text');
  const header = one(document, 'header', '<header> element');
  expectInside(h1s[0], header, '<h1>', '<header>');
});

test('main shows the portrait and the interest list', () => {
  const document = loadDocument(__dirname);
  const main = one(document, 'main', '<main> element');
  const image = one(main, 'img', '<img> inside <main>');
  const src = image.getAttribute('src');
  if (src !== 'images/photo.jpg' && src !== './images/photo.jpg') {
    throw new Error('Expected the image src to be "images/photo.jpg". Found "' + (src || 'no src') + '".');
  }
  const alt = image.getAttribute('alt');
  if (!alt || !alt.trim()) {
    throw new Error('Expected the image to have a non-empty alt attribute.');
  }
  expectAttr(image, 'alt', 'Portrait of Alex Rivera', 'the portrait');
  const interests = all(main, 'h2').find((heading) => textOf(heading) === 'Interests');
  if (!interests) {
    throw new Error('Expected an <h2> inside <main> with the text "Interests".');
  }
  const items = childByTag(one(main, 'ul', '<ul> inside <main>'), 'li').map((item) => textOf(item));
  if (items.join('|') !== 'Hiking|Cooking|Music') {
    throw new Error('Expected the interests to be Hiking, Cooking, Music. Found "' + (items.join(', ') || 'no items') + '".');
  }
});

test('the aside, navigation, and profile links are present', () => {
  const document = loadDocument(__dirname);
  const nav = one(document, 'nav', '<nav> element');
  const aside = one(document, 'aside', '<aside> element');
  const footer = one(document, 'footer', '<footer> element');
  expectAttr(footer, 'id', 'profiles', 'the footer');
  expectText(one(aside, 'h2', '<h2> inside <aside>'), 'Currently learning', 'the aside heading');
  const note = all(aside, 'p').find((paragraph) => textOf(paragraph) === 'Semantic HTML');
  if (!note) {
    throw new Error('Expected the aside to contain "Semantic HTML".');
  }
  const interests = all(nav, 'a').find((link) => link.getAttribute('href') === '#interests');
  const profiles = all(nav, 'a').find((link) => link.getAttribute('href') === '#profiles');
  if (!interests) throw new Error('Expected a nav link with href="#interests".');
  if (!profiles) throw new Error('Expected a nav link with href="#profiles".');
  if (!document.getElementById('interests')) {
    throw new Error('Expected an element with id="interests" so the Interests link has a destination.');
  }
  expectText(interests, 'Interests', 'the Interests link');
  expectText(profiles, 'Profiles', 'the Profiles link');
  const github = all(footer, 'a').find((link) => link.getAttribute('href') === 'https://github.com/alexrivera');
  const portfolio = all(footer, 'a').find((link) => link.getAttribute('href') === 'https://example.com');
  if (!github) throw new Error('Expected a GitHub link to https://github.com/alexrivera.');
  if (!portfolio) throw new Error('Expected a Portfolio link to https://example.com.');
  expectText(github, 'GitHub', 'the GitHub link');
  expectText(portfolio, 'Portfolio', 'the Portfolio link');
  all(document, 'a').forEach((link) => {
    const label = textOf(link);
    if (!label) {
      throw new Error('Expected every link to contain visible text.');
    }
    if (label.toLowerCase() === 'click here' || label.toLowerCase() === 'here') {
      throw new Error('Expected descriptive link text. Found "' + label + '".');
    }
  });
});
