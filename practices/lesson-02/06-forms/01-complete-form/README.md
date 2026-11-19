# 01 — A Complete Form

## 📚 Subject
Form action, method, input types, and built-in limits.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input
- W3Schools: https://www.w3schools.com/html/html_form_input_types.asp

## 🎯 Task
Create one form that posts to `/submit`.

Connect each label to its control. Use these fields:

- Full Name: id `name`, name `name`, type `text`, required
- Email Address: id `email`, name `email`, type `email`, required
- Age: id `age`, name `age`, type `number`, min `0`, max `120`
- Phone: id `phone`, name `phone`, type `tel`
- Birthday: id `birthday`, name `birthday`, type `date`
- Website: id `website`, name `website`, type `url`
- Password: id `password`, name `password`, type `password`
- Message: id `message`, name `message`, a required `<textarea>`

The submit button says `Send Message` and its type is `submit`.

## ✅ Requirements
- Set `action="/submit"` and `method="post"`.
- Use the ids, names, and types above.
- Require the name, email, and message.
- Limit age with `min="0"` and `max="120"`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-complete-form
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.forms-complete/study-guide.md).

## 🔧 Debugging
- `action="/submit"` and `method="post"`. The server does not need to exist.
- Each label's `for` matches the control `id`, and each control's `name` matches that id.
- Label texts are exact, including `Email Address` and `Full Name`. The early form's `Email:` fails here.
- Age needs `min="0"` and `max="120"`. Message is a required `<textarea>`.
- One button, `type="submit"`, text `Send Message`.

## ❓ Conceptual questions
1. Why can a label be connected and the field still be missing from a submission?
2. Which controls in Lab 02 are outside this test?

## 🌱 Extension
Describe a library form that posts somewhere other than `/submit`. Do not change this file's action. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
