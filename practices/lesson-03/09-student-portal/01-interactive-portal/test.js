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
  const withHandler = all(document, '*').find((element) =>
    [...element.attributes].some((attr) => attr.name.toLowerCase().startsWith('on'))
  );
  if (withHandler) {
    throw new Error('Expected HTML only. Remove event-handler attributes.');
  }
}

function expectUniqueIds(document) {
  const seen = new Set();
  all(document, '[id]').forEach((element) => {
    const id = element.getAttribute('id') || '';
    if (!/^[A-Za-z]/.test(id) || id.length < 2) {
      throw new Error(`Expected id="${id}" to start with a letter and contain at least two characters.`);
    }
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

function buttonByText(root, label) {
  const button = all(root, 'button').find((node) => textOf(node) === label);
  if (!button) {
    throw new Error(`Expected a button whose text is "${label}".`);
  }
  return button;
}

test('the portal combines the lesson 03 controls', () => {
  const document = loadDocument(__dirname);
  expectHtmlOnly(document);
  expectUniqueIds(document);
  expectAttr(document.documentElement, 'lang', 'en', 'the page');

  const heading = one(document, 'h1', '<h1> element');
  expectText(heading, 'Interactive Student Portal', 'the portal heading');
  expectAttr(heading, 'id', 'portal-title', 'the portal heading');
  expectAttr(heading, 'class', 'portal-heading', 'the portal heading');
  expectAttr(heading, 'title', 'Student portal', 'the portal heading');
  expectAttr(heading, 'contenteditable', 'true', 'the portal heading');
  expectAttr(heading, 'data-student-id', 's123', 'the portal heading');
  const hidden = all(document, 'p').find((node) => node.hasAttribute('hidden'));
  if (!hidden) {
    throw new Error('Expected a paragraph with the hidden attribute.');
  }
  expectText(hidden, 'Instructor note.', 'the hidden note');

  const form = one(document, 'form', '<form> element');
  if (all(form, 'fieldset').length !== 2) {
    throw new Error('Expected exactly 2 <fieldset> elements inside the form.');
  }
  const personal = fieldsetByLegend(form, 'Personal Details');
  const courses = fieldsetByLegend(form, 'Course Preferences');
  const fields = [
    ['name', 'Name:', 'text', true],
    ['email', 'Email:', 'email', true],
    ['birthday', 'Birthday:', 'date', false],
    ['color', 'Favorite color:', 'color', false],
    ['level', 'Skill level:', 'range', false],
    ['portfolio', 'Portfolio:', 'file', false],
  ];
  fields.forEach(([id, label, type, required]) => {
    const input = labeledControl(document, id, label);
    expectInside(input, personal, `${id} field`, 'Personal Details group');
    expectAttr(input, 'name', id, `the ${id} field`);
    expectAttrIgnoreCase(input, 'type', type, `the ${id} field`);
    if (required) {
      expectHas(input, 'required', `the ${id} field`);
    }
  });
  const level = document.getElementById('level');
  expectAttr(level, 'min', '0', 'the skill level field');
  expectAttr(level, 'max', '100', 'the skill level field');
  const course = labeledControl(document, 'course', 'Course:');
  expectInside(course, courses, 'course field', 'Course Preferences group');
  expectAttr(course, 'name', 'course', 'the course field');
  expectAttr(course, 'list', 'courses', 'the course field');
  const dataList = document.getElementById('courses');
  if (!dataList || dataList.tagName !== 'DATALIST') {
    throw new Error('Expected a <datalist id="courses">.');
  }
  const values = all(dataList, 'option')
    .map((option) => option.getAttribute('value'))
    .filter((value) => value);
  if (values.length < 4 || !values.includes('HTML') || !values.includes('CSS')) {
    throw new Error('Expected at least four course suggestions, including HTML and CSS.');
  }
  const submit = buttonByText(form, 'Register');
  expectAttrIgnoreCase(submit, 'type', 'submit', 'the form button');

  const progress = labeledControl(document, 'course-completion', 'Course completion:');
  if (progress.tagName !== 'PROGRESS') {
    throw new Error('Expected course completion to be a <progress> element.');
  }
  expectAttr(progress, 'value', '70', 'course completion');
  expectAttr(progress, 'max', '100', 'course completion');
  const meter = labeledControl(document, 'academic-performance', 'Academic performance:');
  if (meter.tagName !== 'METER') {
    throw new Error('Expected academic performance to be a <meter> element.');
  }
  expectAttr(meter, 'value', '80', 'academic performance');
  expectAttr(meter, 'min', '0', 'academic performance');
  expectAttr(meter, 'max', '100', 'academic performance');
  expectAttr(meter, 'low', '50', 'academic performance');
  expectAttr(meter, 'high', '85', 'academic performance');
  expectAttr(meter, 'optimum', '100', 'academic performance');

  const questions = all(document, 'details');
  if (questions.length !== 3) {
    throw new Error(`Expected exactly 3 <details> elements. Found ${questions.length}.`);
  }
  const openCount = questions.filter((question) => question.hasAttribute('open')).length;
  if (openCount !== 1) {
    throw new Error(`Expected exactly one <details open>. Found ${openCount}.`);
  }
  questions.forEach((question, index) => {
    const summary = question.querySelector('summary');
    const answer = question.querySelector('p');
    if (!summary || !textOf(summary) || !answer || !textOf(answer)) {
      throw new Error(`Expected question ${index + 1} to have a summary and a paragraph answer.`);
    }
  });

  const helpButton = buttonByText(document, 'Show Help');
  expectAttrIgnoreCase(helpButton, 'type', 'button', 'the help button');
  expectAttr(helpButton, 'popovertarget', 'help', 'the help button');
  const panel = document.getElementById('help');
  if (!panel) {
    throw new Error('Expected an element with id="help".');
  }
  expectHas(panel, 'popover', 'the help panel');
  const popover = (panel.getAttribute('popover') || '').toLowerCase();
  if (popover === 'false' || popover === 'none') {
    throw new Error('Expected the help panel popover to stay enabled.');
  }
  if (panel.contains(helpButton) || !textOf(panel)) {
    throw new Error('Expected the Show Help button to stay outside a popover that contains text.');
  }

  const dialog = one(document, 'dialog', '<dialog> element');
  expectAttr(dialog, 'id', 'info-dialog', 'the dialog');
  expectText(one(dialog, 'h2', '<h2> inside the dialog'), 'Information', 'the dialog heading');
  const openButton = buttonByText(document, 'Open Information');
  expectAttrIgnoreCase(openButton, 'type', 'button', 'the open button');
  expectAttr(openButton, 'command', 'show-modal', 'the open button');
  expectAttr(openButton, 'commandfor', 'info-dialog', 'the open button');
  if (dialog.contains(openButton)) {
    throw new Error('Expected the Open Information button to stay outside the dialog.');
  }
  const closeButton = buttonByText(dialog, 'Close');
  expectAttrIgnoreCase(closeButton, 'type', 'button', 'the close button');
  expectAttr(closeButton, 'command', 'close', 'the close button');
  expectAttr(closeButton, 'commandfor', 'info-dialog', 'the close button');
});
