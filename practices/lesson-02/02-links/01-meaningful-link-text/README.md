# 01 — Meaningful Link Text

## 📚 Subject
Link text that names the destination.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a
- W3Schools: https://www.w3schools.com/html/html_links.asp

## 🎯 Task
Add two links. The visible text should say where each one goes.

- `Download the guide` points to `guide.pdf`
- `HTML documentation` points to `https://developer.mozilla.org/en-US/docs/Web/HTML`

Write the destination in the link text. `click here` does not say where the link goes.

## ✅ Requirements
- Use those two href values and those two labels.
- Every link on the page needs visible text that describes the destination.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-meaningful-link-text
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.meaningful-links/study-guide.md).

## 🔧 Debugging
- Any link whose text is `click here` fails the page, even if another link is well named.
- `guide.pdf` must say `Download the guide`. The PDF does not need to exist.
- The MDN href has to be the full HTML docs URL, and the text is `HTML documentation`.
- Do not edit `test.js`.

## ❓ Conceptual questions
1. Why is `Visit Site` from lesson 01 the wrong habit here?
2. What is the difference between a missing href and a wrong label in the failure text?

## 🌱 Extension
Write `Office hours` as the text of a scratch link. This folder keeps the two lesson labels. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
