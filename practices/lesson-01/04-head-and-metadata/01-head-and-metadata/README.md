# 01 — Head and Metadata

## 📚 Subject
Document metadata in `<head>`: charset, title, description, keywords, and author.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata
- W3Schools: https://www.w3schools.com/html/html_head.asp

## 🎯 Task
Fill in the `<head>` with the lesson example:

- charset `UTF-8`
- title `My Page`
- description `My first web page`
- keywords `HTML, tutorial, beginner`
- author `Your Name`

## ✅ Requirements
- Put the metadata inside `<head>`.
- Use `<meta charset="UTF-8">`.
- Use `<title>My Page</title>`.
- Use `name="description"`, `name="keywords"`, and `name="author"` with the values above.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-head-and-metadata
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.document-head/study-guide.md).

## 🔧 Debugging
- Charset is the attribute `charset="UTF-8"` on `<meta>`, inside `<head>`.
- The title text is `My Page`. Description, keywords, and author must match the brief, including the spaces in the keywords.
- The author value is the words `Your Name`, not your personal name.
- Do not edit `test.js`.

## ❓ Conceptual questions
1. Why can the tab show `My Page` while the body is empty?
2. Which of these values is metadata rather than a heading?

## 🌱 Extension
In a scratch file, set the title to a page name of your own. This exercise keeps `My Page`. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
