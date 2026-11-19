# 02 — Page Regions

## 📚 Subject
Page regions: `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header
- W3Schools: https://www.w3schools.com/html/html5_semantic_elements.asp

## 🎯 Task
Build the skeleton of a personal page for Alex Rivera.

- `<header>` with an `<h1>` that says `Alex Rivera`
- `<nav>` with `About` linking to `#about` and `Contact` linking to `#contact`
- `<main id="about">` with a paragraph: `I am learning HTML.`
- `<section id="contact">` with an `<h2>` that says `Contact`
- `<footer>` with a paragraph: `© 2026 Alex Rivera`

## ✅ Requirements
- Use each region once: header, nav, main, section, and footer.
- Point the nav links at the matching ids.
- Keep the sample text exact.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 02-page-regions
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.profile/study-guide.md).

## 🔧 Debugging
- The five regions are `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`. A class named header is not a header.
- `#about` and `#contact` need elements whose ids are `about` and `contact`.
- The bio on this page is `I am learning HTML.` The full profile uses a longer sentence.
- Do not edit `test.js`.

## ❓ Conceptual questions
1. Why does clicking About do nothing when the id is `About`?
2. Which sentence belongs only to this skeleton?

## 🌱 Extension
Add a third nav item on a scratch page and give it a matching id. This exercise has two links. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
