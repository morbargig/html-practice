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
  labeledControl,
} = require('../../../../lib/practice');

function expectHtmlOnly(document) {
  if (all(document, 'script, style').length > 0) {
    throw new Error('Expected HTML only. Remove <script> and <style>.');
  }
}

function expectUniqueIds(document) {
  const seen = new Set();
  all(document, '[id]').forEach((element) => {
    const id = element.getAttribute('id');
    if (seen.has(id)) {
      throw new Error(`Expected every id to be unique. Found id="${id}" more than once.`);
    }
    seen.add(id);
  });
}

function fieldsetByLegend(form, legendText) {
  const match = all(form, 'fieldset').find((fieldset) => {
    const legend = fieldset.querySelector('legend');
    return legend && textOf(legend) === legendText;
  });
  if (!match) {
    throw new Error(`Expected a <fieldset> whose <legend> is "${legendText}".`);
  }
  return match;
}

test('the registration form has two labeled groups', () => {
  const document = loadDocument(__dirname);
  expectHtmlOnly(document);
  expectUniqueIds(document);
  const form = one(document, 'form', '<form> element');
  const groups = all(form, 'fieldset');
  if (groups.length !== 2) {
    throw new Error(`Expected exactly 2 <fieldset> elements inside the form. Found ${groups.length}.`);
  }
  const personal = fieldsetByLegend(form, 'Personal Details');
  const email = labeledControl(document, 'email', 'Email:');
  expectInside(email, personal, 'email field', 'Personal Details group');
  expectAttr(email, 'name', 'email', 'the email field');
  expectAttrIgnoreCase(email, 'type', 'email', 'the email field');
  expectHas(email, 'required', 'the email field');
  const courses = fieldsetByLegend(form, 'Course Preferences');
  const course = labeledControl(document, 'course', 'Course:');
  expectInside(course, courses, 'course field', 'Course Preferences group');
  expectAttr(course, 'name', 'course', 'the course field');
  expectAttrIgnoreCase(course, 'type', 'text', 'the course field');
  const button = one(form, 'button', '<button> inside the form');
  expectAttrIgnoreCase(button, 'type', 'submit', 'the form button');
  expectText(button, 'Register', 'the form button');
});
