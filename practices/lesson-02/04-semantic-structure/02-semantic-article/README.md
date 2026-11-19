# 02 — A Semantic Article

## 📚 Subject
A full page of landmarks: header, nav, main, article, section, aside, and footer.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main
- W3Schools: https://www.w3schools.com/html/html5_semantic_elements.asp

## 🎯 Task
Build a short news page titled `Campus News`. Set `lang="en"` on `<html>` and keep the HTML5 doctype.

- header `<h1>`: `Campus News`
- nav: `Story` to `#story`, and `Notes` to `#notes`
- `<main>` contains:
  - an `<article id="story">` with `<h2>Campus Fair</h2>` and `<p>The campus fair is on Friday.</p>`
  - a `<section id="notes">` with `<h2>Schedule</h2>` and `<p>Doors open at 10:00.</p>`
- an `<aside>` with `<h2>Related</h2>` and `<p>Bring a notebook.</p>`
- a footer paragraph: `© 2026 Campus News`

The page title in `<head>` is `Campus News`. Move one heading level at a time.

## ✅ Requirements
- Include `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`.
- Put the article and the section inside `<main>`.
- Use `lang="en"` on `<html>`.
- Keep the sample text exact.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 02-semantic-article
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.semantics/study-guide.md).

## 🔧 Debugging
- Keep `lang="en"` and the title `Campus News`. The `<h1>` matches that title.
- The article and the schedule section are inside `<main>`, with ids `story` and `notes`.
- A heading that skips a level fails even when the words are right.
- The aside text is `Bring a notebook.` The footer is `© 2026 Campus News`.

## ❓ Conceptual questions
1. Why is the fair an `<article>` and the schedule a `<section>`?
2. Which landmarks did the profile page already require?

## 🌱 Extension
Sketch a one-story page for a different event in a scratch file, with one aside. Do not replace Campus News. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
