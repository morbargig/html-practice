# 02 — HTML Comments

## 📚 Subject
Comments that stay in the file and do not show up on the page.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Comments
- W3Schools: https://www.w3schools.com/html/html_comments.asp

## 🎯 Task
Add an `<h1>` that says `My Page`.

Above it, add this HTML comment:

This section displays the main title

## ✅ Requirements
- The note must be an HTML comment, not visible text.
- The heading text must be exactly `My Page`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 02-comments
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.document-head/study-guide.md).

## 🔧 Debugging
- If you can see the sentence on the page, it is not a comment.
- The comment text is `This section displays the main title`.
- The visible heading is an `<h1>` whose text is `My Page`.
- Putting that sentence in the heading fails both checks.

## ❓ Conceptual questions
1. Who is an HTML comment for?
2. Why is the `<h1>` still required beside the comment?

## 🌱 Extension
Leave yourself a different comment on a scratch page, and keep a visible heading. This folder keeps the lesson sentence. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
