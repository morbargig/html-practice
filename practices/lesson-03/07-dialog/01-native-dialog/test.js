'use strict';

const {
  loadDocument,
  textOf,
  all,
  one,
  expectText,
  expectAttr,
  expectAttrIgnoreCase,
  expectInside,
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

function buttonByText(root, label) {
  const button = all(root, 'button').find((node) => textOf(node) === label);
  if (!button) {
    throw new Error(`Expected a button whose text is "${label}".`);
  }
  return button;
}

test('the dialog opens and closes with command buttons', () => {
  const document = loadDocument(__dirname);
  expectHtmlOnly(document);
  expectUniqueIds(document);
  const dialog = one(document, 'dialog', '<dialog> element');
  expectAttr(dialog, 'id', 'info-dialog', 'the dialog');
  const heading = one(dialog, 'h2', '<h2> inside the dialog');
  expectText(heading, 'Information', 'the dialog heading');
  const openButton = buttonByText(document, 'Open Information');
  expectAttrIgnoreCase(openButton, 'type', 'button', 'the open button');
  expectAttr(openButton, 'command', 'show-modal', 'the open button');
  expectAttr(openButton, 'commandfor', 'info-dialog', 'the open button');
  if (dialog.contains(openButton)) {
    throw new Error('Expected the Open Information button to stay outside the dialog.');
  }
  const closeButton = buttonByText(dialog, 'Close');
  expectInside(closeButton, dialog, 'Close button', '<dialog>');
  expectAttrIgnoreCase(closeButton, 'type', 'button', 'the close button');
  expectAttr(closeButton, 'command', 'close', 'the close button');
  expectAttr(closeButton, 'commandfor', 'info-dialog', 'the close button');
});
