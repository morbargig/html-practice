# 01 — Expandable FAQ

## 📚 Subject
Learning objective: build an FAQ with `details`, `summary`, and `open`.

Prerequisites: [Course Selection](../../04-datalist/01-course-selection/README.md).

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details
- W3Schools: https://www.w3schools.com/tags/tag_details.asp

## 🎯 Task
Keep the first question. Add two more questions so the page has three `details` elements. Each question needs a `summary` and a paragraph answer. Leave `open` on exactly one question, so that answer is visible when the page loads.

The summary is the control. Click it, or focus it and press Enter or Space, to show or hide the answer. Do not add a script for that.

You choose the wording of the two new questions. Each summary and each answer needs visible text.

Expected behavior: one answer is open on load. The other two are closed until the summary is activated. The test counts the elements. It does not click them.

## ✅ Requirements
- Use exactly three `<details>` elements.
- Put a non-empty `<summary>` and a non-empty `<p>` inside each one.
- Set the `open` attribute on exactly one `<details>` element.
- Do not add `<script>` or `<style>`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-expandable-faq
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.lab-interactivity/study-guide.md).

## 🔧 Debugging
- `open` on every question leaves none of them closed. The check wants exactly one.
- The answer is a paragraph inside the same `details` as its summary.
- A summary with no text fails, even when the tags are present.
- The browser toggles the question. A button is not required.

## ❓ Conceptual questions
1. What is on screen when `open` is absent?
2. Why can the summary be used from the keyboard without a click handler?

## 🌱 Extension
Add a fourth question whose summary is `How do I close a dialog?` The check for this folder still wants exactly three questions. Try the extra question on a scratch copy.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
