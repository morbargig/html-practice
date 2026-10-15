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

test('the header and navigation identify Alex', () => {
  const document = loadDocument(__dirname);
  const header = one(document, 'header', '<header> element');
  const nav = one(document, 'nav', '<nav> element');
  expectText(one(header, 'h1', '<h1> inside <header>'), 'Alex Rivera', 'the <h1> inside <header>');
  if (all(document, 'h1').length !== 1) {
    throw new Error('Expected the page to contain exactly one <h1>. Found ' + all(document, 'h1').length + '.');
  }
  const about = all(nav, 'a').find((link) => link.getAttribute('href') === '#about');
  const contact = all(nav, 'a').find((link) => link.getAttribute('href') === '#contact');
  if (!about) throw new Error('Expected a nav link with href="#about".');
  if (!contact) throw new Error('Expected a nav link with href="#contact".');
  expectText(about, 'About', 'the About link');
  expectText(contact, 'Contact', 'the Contact link');
});

test('main contains the bio, photo, and skills', () => {
  const document = loadDocument(__dirname);
  const main = one(document, 'main', '<main> element');
  expectAttr(main, 'id', 'about', 'the <main> element');
  const bio = all(main, 'p').find((paragraph) => textOf(paragraph) === 'I am learning to build web pages with HTML.');
  if (!bio) {
    throw new Error('Expected <main> to contain the bio "I am learning to build web pages with HTML.".');
  }
  const image = one(main, 'img', '<img> inside <main>');
  const src = image.getAttribute('src');
  if (src !== 'images/photo.jpg' && src !== './images/photo.jpg') {
    throw new Error('Expected the profile image src to be "images/photo.jpg". Found "' + (src || 'no src') + '".');
  }
  expectAttr(image, 'alt', 'Alex Rivera', 'the profile image');
  const items = childByTag(one(main, 'ul', '<ul> inside <main>'), 'li').map((item) => textOf(item));
  if (items.join('|') !== 'HTML|Accessibility|Tables') {
    throw new Error('Expected the skills to be HTML, Accessibility, Tables. Found "' + (items.join(', ') || 'no items') + '".');
  }
});

test('the contact section has a labeled name, email, message, and Send button', () => {
  const document = loadDocument(__dirname);
  const section = one(document, 'section', '<section> element');
  expectAttr(section, 'id', 'contact', 'the contact section');
  const form = one(section, 'form', '<form> inside the contact section');
  const name = labeledControl(document, 'name', 'Full Name');
  const email = labeledControl(document, 'email', 'Email');
  const message = labeledControl(document, 'message', 'Message');
  expectInside(name, form, 'name field', 'contact form');
  expectInside(email, form, 'email field', 'contact form');
  expectInside(message, form, 'message field', 'contact form');
  expectAttrIgnoreCase(name, 'type', 'text', 'the name field');
  expectHas(name, 'required', 'the name field');
  expectAttrIgnoreCase(email, 'type', 'email', 'the email field');
  expectHas(email, 'required', 'the email field');
  if (message.tagName !== 'TEXTAREA') {
    throw new Error('Expected the message field to be a <textarea>.');
  }
  expectHas(message, 'required', 'the message field');
  expectText(one(form, 'button', '<button> inside the contact form'), 'Send', 'the form button');
});

test('the footer has the copyright line and a GitHub link', () => {
  const document = loadDocument(__dirname);
  const footer = one(document, 'footer', '<footer> element');
  const line = all(footer, 'p').find((paragraph) => textOf(paragraph) === '© 2026 Alex Rivera');
  if (!line) {
    throw new Error('Expected the footer to contain "© 2026 Alex Rivera".');
  }
  const github = all(footer, 'a').find((link) => link.getAttribute('href') === 'https://github.com/alexrivera');
  if (!github) {
    throw new Error('Expected a footer link to https://github.com/alexrivera.');
  }
  expectText(github, 'GitHub', 'the GitHub link');
});
