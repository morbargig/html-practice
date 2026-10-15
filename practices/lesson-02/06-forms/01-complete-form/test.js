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

test('the form posts to /submit', () => {
  const document = loadDocument(__dirname);
  const form = one(document, 'form', '<form> element');
  expectAttr(form, 'action', '/submit', 'the form');
  expectAttrIgnoreCase(form, 'method', 'post', 'the form');
});

test('the text, email, age, and message fields are set up', () => {
  const document = loadDocument(__dirname);
  const form = one(document, 'form', '<form> element');
  const fields = [
    ['name', 'Full Name', 'text', true],
    ['email', 'Email Address', 'email', true],
    ['phone', 'Phone', 'tel', false],
    ['birthday', 'Birthday', 'date', false],
    ['website', 'Website', 'url', false],
    ['password', 'Password', 'password', false],
  ];
  fields.forEach(([id, label, type, required]) => {
    const control = labeledControl(document, id, label);
    expectInside(control, form, id + ' field', 'form');
    expectAttr(control, 'name', id, 'the ' + id + ' field');
    expectAttrIgnoreCase(control, 'type', type, 'the ' + id + ' field');
    if (required) expectHas(control, 'required', 'the ' + id + ' field');
  });
  const age = labeledControl(document, 'age', 'Age');
  expectInside(age, form, 'age field', 'form');
  expectAttr(age, 'name', 'age', 'the age field');
  expectAttrIgnoreCase(age, 'type', 'number', 'the age field');
  expectAttr(age, 'min', '0', 'the age field');
  expectAttr(age, 'max', '120', 'the age field');
  const message = labeledControl(document, 'message', 'Message');
  expectInside(message, form, 'message field', 'form');
  if (message.tagName !== 'TEXTAREA') {
    throw new Error('Expected the message field to be a <textarea>.');
  }
  expectAttr(message, 'name', 'message', 'the message field');
  expectHas(message, 'required', 'the message field');
});

test('the button submits the form', () => {
  const document = loadDocument(__dirname);
  const form = one(document, 'form', '<form> element');
  const button = one(form, 'button', '<button> inside the form');
  expectAttrIgnoreCase(button, 'type', 'submit', 'the button');
  expectText(button, 'Send Message', 'the button text');
});
