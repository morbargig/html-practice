# 03 — Personal Profile

## 📚 Subject
A profile page that combines regions, a photo, a skill list, and a contact form.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main
- W3Schools: https://www.w3schools.com/html/html5_semantic_elements.asp

## 🎯 Task
Build Alex Rivera's profile page.

Header and navigation
- `<h1>` text: `Alex Rivera`
- nav links: `About` to `#about`, and `Contact` to `#contact`

Main region, with `id="about"`
- paragraph: `I am learning to build web pages with HTML.`
- image `images/photo.jpg` with alt text `Alex Rivera`
- a bulleted skill list, in this order: `HTML`, `Accessibility`, `Tables`

Contact section, with `id="contact"`
- a form with connected labels:
  - `Full Name`, `id="name"`, text, required
  - `Email`, `id="email"`, email, required
  - `Message`, `id="message"`, a `<textarea>`, required
- a button that says `Send`

Footer
- paragraph: `© 2026 Alex Rivera`
- a `GitHub` link to `https://github.com/alexrivera`

## ✅ Requirements
- Use `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.
- Keep the sample text, ids, and image path exact.
- Connect every label to its field with `for` and `id`.
- Use a `<textarea>` for the message.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 03-personal-profile
```

`npm test` checks every practice.
