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
