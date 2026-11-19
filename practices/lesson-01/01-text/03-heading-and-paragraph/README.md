# 03 — Heading and Paragraph

## 📚 Subject
A heading and a paragraph together, as in the first Live Server example.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements
- W3Schools: https://www.w3schools.com/html/html_paragraphs.asp

## 🎯 Task
Put both of these on the page:

- an `<h1>` with the text `Hello World`
- a `<p>` with the text `Welcome to HTML in VS Code!`

Use each element once. The concept notes are in [the text study guide](../../../../curriculum/modules/html.text/study-guide.md).

## ✅ Requirements
- Include exactly one `<h1>` and exactly one `<p>`.
- Match both strings exactly.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 03-heading-and-paragraph
```

`npm test` checks every practice.

## 🔧 Debugging
- The count test fails before the text test if either element is missing or duplicated.
- Fix the string the message quotes. Do not add a second heading to "be sure".
- The heading exercise and this exercise are different files. Finish this file on its own.

## ❓ Conceptual questions
1. Why does exactly one `h1` matter on a page that only has one topic?
2. What does the test still ignore about how large the heading looks?

## 🌱 Extension
Combine a different heading and sentence in a scratch file. This folder keeps the lesson strings. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
