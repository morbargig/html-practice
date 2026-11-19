# 02 — A Paragraph

## 📚 Subject
The `<p>` element for a sentence of body text.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p
- W3Schools: https://www.w3schools.com/html/html_paragraphs.asp

## 🎯 Task
Create a `<p>` element containing:

Welcome to HTML in VS Code!

The exclamation mark is part of the text. The concept notes are in [the text study guide](../../../../curriculum/modules/html.text/study-guide.md).

## ✅ Requirements
- Use a `<p>` element.
- The text must be exactly `Welcome to HTML in VS Code!`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 02-paragraph
```

`npm test` checks every practice.

## 🔧 Debugging
- `No <p> was found` means the sentence is not inside a paragraph.
- A missing `!` fails even when the rest of the sentence matches.
- Extra spaces in the middle are collapsed. Different capitals are not.
- Do not edit `test.js`.

## ❓ Conceptual questions
1. Why is a line break in the HTML source not the same as a `<p>`?
2. Why does `Welcome to HTML in VS Code` fail?

## 🌱 Extension
Write one paragraph of your own in a scratch file. Keep this exercise on the lesson sentence. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
