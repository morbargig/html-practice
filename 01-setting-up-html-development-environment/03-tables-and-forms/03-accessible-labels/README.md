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
