# 02 — Add a Link

## 📚 Subject
An absolute link that opens in a new tab.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a
- W3Schools: https://www.w3schools.com/html/html_links.asp

## 🎯 Task
Create a link that goes to `https://example.com`, opens in a new tab, and shows the text `Visit Site`.

## ✅ Requirements
- Use one `<a>` element.
- Set `href` to `https://example.com`.
- Set `target` to `_blank`.
- The visible text must be exactly `Visit Site`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 02-add-a-link
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.images-links/study-guide.md).

## 🔧 Debugging
- The text `Visit Site` has to be inside the `<a>`, not beside it.
- `target="blank"` is missing the underscore. The required value is `_blank`.
- A trailing slash on `https://example.com/` is a different href.
- `rel` is not part of this test.

## ❓ Conceptual questions
1. Why is the visible text a separate check from the href?
2. What does this test deliberately ignore about new tabs?

## 🌱 Extension
Write a link whose text is `Office hours` and whose href is a page of your own. Leave this exercise on `Visit Site`. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
