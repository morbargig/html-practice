# 03 — Accessible Labels

## 📚 Subject
Connecting a `<label>` to its input with `for` and `id`.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label
- W3Schools: https://www.w3schools.com/html/html_forms_attributes.asp

## 🎯 Task
Build the email form again, and connect the label to the input.

The label says `Email:` and its `for` value matches the input `id`. Use `email` for that id. The input is `type="email"` and `required`. The button says `Send`.

## ✅ Requirements
- Use `<label for="email">` and `<input id="email">`.
- Keep the field required and the button text exact.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 03-accessible-labels
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.tables-forms/study-guide.md).

## 🔧 Debugging
- `for="email"` and `id="email"` must be the same token. Case differs.
- The label text, the email type, `required`, and the `Send` button still apply.
- A label wrapped around the input without `for` is not this check.

## ❓ Conceptual questions
1. What does the matching token do when the reader clicks `Email:`?
2. Why did the previous exercise pass without `for`?

## 🌱 Extension
Connect a label to a field named `topic` on a scratch form. This folder stays on `email`. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
