# 01 — About Me

## 📚 Subject
An About page that combines landmarks, a photo, a list, and descriptive links.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents
- W3Schools: https://www.w3schools.com/html/html5_semantic_elements.asp

## 🎯 Task
Build the About Me page from the HTML introduction. Use this sample content so the tests can check the result.

- `<html lang="en">` and an HTML5 doctype
- `<title>About Me</title>`
- a header `<h1>`: `About Me`
- nav: `Interests` to `#interests`, and `Profiles` to `#profiles`
- `<main>` contains an image `images/photo.jpg` with alt text `Portrait of Alex Rivera`, an `<h2>` `Interests`, and a bulleted list: `Hiking`, `Cooking`, `Music`
- an `<aside>` with `<h2>Currently learning</h2>` and `<p>Semantic HTML</p>`
- a `<footer id="profiles">` with:
  - `GitHub` linking to `https://github.com/alexrivera`
  - `Portfolio` linking to `https://example.com`

Use one `<h1>`. After that, step through heading levels one at a time. Give every link text that names its destination.

## ✅ Requirements
- Include `<header>`, `<nav>`, `<main>`, `<aside>`, and `<footer>`.
- Give the image a useful alt attribute.
- Keep the sample text, list order, and URLs exact.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-about-me
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.about-me/study-guide.md).

## 🔧 Debugging
- This is not the lesson 01 profile and not the loose Lab 01 About Me page.
- Alt text is exactly `Portrait of Alex Rivera`. The list is Hiking, Cooking, Music.
- `#interests` needs an element with `id="interests"`. The footer id is `profiles`.
- One `<h1>`, inside `<header>`, with no skipped heading level.
- Any link with no text, or with the text `click here` or `here`, fails.

## ❓ Conceptual questions
1. Why does a green Lab 01 final cell not pass this exercise?
2. Why does the word Interests in a heading not create the fragment by itself?

## 🌱 Extension
Write a three-item interest list for someone else in a scratch file. This page keeps Hiking, Cooking, and Music. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
