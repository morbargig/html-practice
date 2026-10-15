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

function rowCells(row, tagName) {
  return [...row.children].filter((cell) => cell.tagName === tagName).map((cell) => textOf(cell));
}

test('the page contains exactly one table', () => {
  const document = loadDocument(__dirname);
  one(document, 'table', '<table> element');
});

test('the table has a Name/Age header and an Alex/21 row', () => {
  const document = loadDocument(__dirname);
  const table = document.querySelector('table');
  if (!table) {
    throw new Error('Expected a <table> with a header row and one data row.');
  }
  const rows = all(table, 'tr').filter((row) => row.closest('table') === table);
  const header = rows.find((row) => rowCells(row, 'TH').join('|') === 'Name|Age');
  const data = rows.find((row) => rowCells(row, 'TD').join('|') === 'Alex|21');
  if (!header) {
    throw new Error('Expected a <tr> of <th> cells "Name" and "Age".');
  }
  if (!data) {
    throw new Error('Expected a <tr> of <td> cells "Alex" and "21".');
  }
});
