# 01 — Article and Aside

## 📚 Subject
`<article>` for a piece that stands alone, and `<aside>` for a related note.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article
- W3Schools: https://www.w3schools.com/html/html5_semantic_elements.asp

## 🎯 Task
Add two regions.

An `<article>` titled `First Post` with the paragraph `This note stands on its own.`

An `<aside>` titled `Note` with the paragraph `Asides are related, not the main story.`

Use an `<h2>` for each title.

## ✅ Requirements
- Use one `<article>` and one `<aside>`.
- Keep the headings and paragraphs exact.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-article-and-aside
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.semantics/study-guide.md).

## 🔧 Debugging
- The post's heading and paragraph have to be inside `<article>`.
- The note's heading and paragraph have to be inside `<aside>`.
- Both titles are `<h2>`. Swapping the paragraphs fails the parent check.
- Do not edit `test.js`.

## ❓ Conceptual questions
1. What does "stands on its own" change about the element you choose?
2. Why is the aside not a second article?

## 🌱 Extension
Mark a short match report as an article and a gate time as an aside in a scratch file. This folder keeps the lesson sentences. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
