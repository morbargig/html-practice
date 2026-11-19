'use strict';

const {
  loadDocument,
  all,
  one,
  expectText,
  expectAttr,
  expectAttrIgnoreCase,
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
    const id = element.getAttribute('id');
    if (seen.has(id)) {
      throw new Error(`Expected every id to be unique. Found id="${id}" more than once.`);
    }
    seen.add(id);
  });
}

test('the preferences form has color, date, range, and file fields', () => {
  const document = loadDocument(__dirname);
  expectHtmlOnly(document);
  expectUniqueIds(document);
  const form = one(document, 'form', '<form> element');
  const fields = [
    ['color', 'Favorite color:', 'color'],
    ['start', 'Start date:', 'date'],
    ['level', 'Skill level:', 'range'],
    ['portfolio', 'Portfolio:', 'file'],
  ];
  fields.forEach(([id, label, type]) => {
    const input = labeledControl(document, id, label);
    expectInside(input, form, `${id} field`, '<form>');
    expectAttr(input, 'name', id, `the ${id} field`);
    expectAttrIgnoreCase(input, 'type', type, `the ${id} field`);
  });
  const level = document.getElementById('level');
  expectAttr(level, 'min', '0', 'the skill level field');
  expectAttr(level, 'max', '100', 'the skill level field');
  const button = one(form, 'button', '<button> inside the form');
  expectAttrIgnoreCase(button, 'type', 'submit', 'the form button');
  expectText(button, 'Save preferences', 'the form button');
});
