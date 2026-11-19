# 01 — A Simple Table

## 📚 Subject
A table for rows and columns of data. Tables are for data, not page layout.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table
- W3Schools: https://www.w3schools.com/html/html_tables.asp

## 🎯 Task
Build a table with two columns, Name and Age. Add one person: Alex, age 21.

Use `<th>` for the column names and `<td>` for Alex and 21.

## ✅ Requirements
- Use one `<table>`.
- Include a header row: `Name`, `Age`.
- Include a data row: `Alex`, `21`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-simple-table
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.tables-forms/study-guide.md).

## 🔧 Debugging
- Header words in `<td>` fail. The test wants `<th>` cells `Name` and `Age`.
- The data row wants `<td>` cells `Alex` and `21`.
- `caption` and `scope` are not required. A missing header row still fails.
- Do not edit `test.js`.

## ❓ Conceptual questions
1. Why is `Name` a header cell and `Alex` a data cell?
2. Why can the playground table show a caption that this exercise does not grade?

## 🌱 Extension
Add a caption on a scratch table. Say which check in this folder would still ignore it. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
