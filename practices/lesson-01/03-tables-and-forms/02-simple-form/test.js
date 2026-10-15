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

test('the page contains exactly one form', () => {
  const document = loadDocument(__dirname);
  one(document, 'form', '<form> element');
});

test('the form collects a required email and can be sent', () => {
  const document = loadDocument(__dirname);
  const form = document.querySelector('form');
  if (!form) {
    throw new Error('Expected a <form> with an email field, a label, and a Send button.');
  }
  const input = one(form, 'input', '<input> inside the form');
  const label = one(form, 'label', '<label> inside the form');
  const button = one(form, 'button', '<button> inside the form');
  expectAttrIgnoreCase(input, 'type', 'email', 'the email input');
  expectHas(input, 'required', 'the email input');
  expectText(label, 'Email:', 'the email label');
  expectText(button, 'Send', 'the form button');
});
