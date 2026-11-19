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

The concept notes are in [the study guide](../../../../curriculum/modules/html.profile/study-guide.md).

## 🔧 Debugging
- Use the long bio, `I am learning to build web pages with HTML.` The skeleton sentence fails here.
- The image path is `images/photo.jpg` and the alt is `Alex Rivera`.
- Skills are `HTML`, `Accessibility`, `Tables`. The message is a `<textarea>`. Labels use `for` and `id`.
- The GitHub link text is `GitHub` and the href is `https://github.com/alexrivera`.

## ❓ Conceptual questions
1. Why is the message not an `<input>`?
2. What does this page still not include that lesson 02's About Me page will require?

## 🌱 Extension
Draft a one-paragraph bio for someone else in a scratch file. This page stays Alex Rivera. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
