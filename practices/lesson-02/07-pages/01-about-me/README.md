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
