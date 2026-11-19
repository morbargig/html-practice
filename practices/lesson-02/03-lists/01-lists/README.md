# 01 — Lists

## 📚 Subject
Unordered lists and ordered lists.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol
- W3Schools: https://www.w3schools.com/html/html_lists.asp

## 🎯 Task
Add two lists.

Bulleted topics, in order: `Headings`, `Paragraphs`, `Links`.

Numbered steps, in order: `Create the file`, `Add a heading`, `Save the page`.

## ✅ Requirements
- Use one `<ul>` and one `<ol>`.
- Keep the item text and order exact.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-lists
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.lists/study-guide.md).

## 🔧 Debugging
- The bullets are `Headings`, `Paragraphs`, `Links`. That is not the profile list, which used `Images`.
- The steps are an `<ol>`: `Create the file`, `Add a heading`, `Save the page`.
- Do not type `1.` into the step text. The `<ol>` supplies the number.
- One list of six items does not satisfy both checks.

## ❓ Conceptual questions
1. Why are the topics a `<ul>` and the steps an `<ol>`?
2. Which earlier list should you refuse to paste here?

## 🌱 Extension
Write ingredients as a `<ul>` and three cooking steps as an `<ol>` in a scratch file. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
