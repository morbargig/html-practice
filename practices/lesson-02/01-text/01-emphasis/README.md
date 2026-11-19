# 01 — Emphasis

## 📚 Subject
`<em>` for emphasis and `<strong>` for importance.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/em
- W3Schools: https://www.w3schools.com/html/html_formatting.asp

## 🎯 Task
Write this sentence in one paragraph:

HTML gives content meaning and importance.

Mark `meaning` with `<em>` and `importance` with `<strong>`.

## ✅ Requirements
- Use one `<p>`.
- The full sentence stays readable as one paragraph.
- `meaning` is inside `<em>`, and `importance` is inside `<strong>`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-emphasis
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.text-meaning/study-guide.md).

## 🔧 Debugging
- One `<p>`. The full sentence includes the words inside `<em>` and `<strong>`.
- `<em>` contains `meaning` only. `<strong>` contains `importance` only.
- `<i>` and `<b>` fail even when the sentence looks right.
- Do not edit `test.js`.

## ❓ Conceptual questions
1. Why is italic text not enough?
2. Why does wrapping the whole sentence in `<strong>` fail?

## 🌱 Extension
Mark one stressed word and one important word in a sentence of your own. This folder keeps the lesson sentence. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
