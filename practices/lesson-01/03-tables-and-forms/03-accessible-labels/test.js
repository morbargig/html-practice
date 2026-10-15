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

test('the email label is connected to the email input', () => {
  const document = loadDocument(__dirname);
  const form = one(document, 'form', '<form> element');
  const input = labeledControl(document, 'email', 'Email:');
  expectInside(input, form, 'email field', '<form>');
  expectAttrIgnoreCase(input, 'type', 'email', 'the email field');
  expectHas(input, 'required', 'the email field');
  const button = one(form, 'button', '<button> inside the form');
  expectText(button, 'Send', 'the form button');
});
