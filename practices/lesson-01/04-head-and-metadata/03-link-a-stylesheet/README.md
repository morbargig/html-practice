# 03 — Link a Stylesheet

## 📚 Subject
Connecting `style.css` from the document head. This practice is the link itself.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link
- W3Schools: https://www.w3schools.com/html/html_css.asp

## 🎯 Task
Connect the `style.css` file that is already in this folder.

Add `<link rel="stylesheet" href="style.css">` inside `<head>`.

You do not need to write any CSS rules. The course slides introduce the link here, before styling properties.

## ✅ Requirements
- Put the `<link>` in `<head>`.
- Set `rel` to `stylesheet`.
- Set `href` to `style.css`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 03-link-a-stylesheet
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.document-head/study-guide.md).

## 🔧 Debugging
- The element is `<link>`, in `<head>`, with `rel="stylesheet"` and `href="style.css"`.
- A `<style>` block does not satisfy the link check.
- `style.css` can stay free of rules. This course does not grade `color`.
- `href="styles.css"` is a different file.

## ❓ Conceptual questions
1. What does a passing link prove about the page's appearance?
2. Which course grades the first color rule?

## 🌱 Extension
Open the empty `style.css` and name the property you would set later for text. Do not add that rule for this test. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
