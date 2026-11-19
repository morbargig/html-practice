'use strict';

const {
  loadDocument,
  textOf,
  all,
  expectAttr,
  expectAttrIgnoreCase,
  expectHas,
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

test('the help button targets a popover', () => {
  const document = loadDocument(__dirname);
  expectHtmlOnly(document);
  expectUniqueIds(document);
  const button = all(document, 'button').find((node) => textOf(node) === 'Show Help');
  if (!button) {
    throw new Error('Expected a button whose text is "Show Help".');
  }
  expectAttrIgnoreCase(button, 'type', 'button', 'the help button');
  expectAttr(button, 'popovertarget', 'help', 'the help button');
  const panel = document.getElementById('help');
  if (!panel) {
    throw new Error('Expected an element with id="help".');
  }
  if (panel.contains(button)) {
    throw new Error('Expected the Show Help button to stay outside the popover.');
  }
  expectHas(panel, 'popover', 'the help panel');
  const state = (panel.getAttribute('popover') || '').toLowerCase();
  if (state === 'false' || state === 'none') {
    throw new Error('Expected the help panel popover to stay enabled.');
  }
  if (!textOf(panel)) {
    throw new Error('Expected the help panel to contain text.');
  }
});
