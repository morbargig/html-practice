# 03 — A Relative Link

## 📚 Subject
A relative URL that points at another file in the project.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a
- W3Schools: https://www.w3schools.com/html/html_links.asp

## 🎯 Task
Create a link to a page in this same folder named `contact.html`. Give the link the text `Contact`.

## ✅ Requirements
- Use one `<a>` element.
- Set `href` to `contact.html`.
- The visible text must be exactly `Contact`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 03-relative-link
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.images-links/study-guide.md).

## 🔧 Debugging
- `href="contact.html"` is the whole check, along with the text `Contact`.
- The file `contact.html` is not in this folder. A 404 on click can still be a pass.
- An absolute URL to a contact page fails this exercise.
- Do not edit `test.js`.

## ❓ Conceptual questions
1. What is a relative URL resolved against?
2. Why does the test not fetch `contact.html`?

## 🌱 Extension
Add a real `contact.html` beside a scratch page and click the link. Do not add that file to this exercise to chase a click. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
