# 02 — Heading Hierarchy

## 📚 Subject
Heading levels in order: one `<h1>`, then `<h2>`, then `<h3>`.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements
- W3Schools: https://www.w3schools.com/html/html_headings.asp

## 🎯 Task
Create this outline, and do not skip from `<h1>` straight to `<h3>`.

- `<h1>` Recipes
- `<h2>` Breakfast
- `<h3>` Oatmeal
- `<h2>` Dinner

## ✅ Requirements
- Use those four headings, in that order.
- Do not add another heading level.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 02-heading-hierarchy
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.text-meaning/study-guide.md).

## 🔧 Debugging
- The order is `<h1>` Recipes, `<h2>` Breakfast, `<h3>` Oatmeal, `<h2>` Dinner.
- The first heading must be `<h1>`. Jumping from `<h1>` to `<h3>` fails.
- Dinner returns to `<h2>`. That return is allowed.
- An extra heading changes the sequence.

## ❓ Conceptual questions
1. Why is Dinner an `<h2>` after an `<h3>`?
2. What did the lesson 01 heading exercise not ask you to do?

## 🌱 Extension
Outline a different topic with one subsection and a following section. Do not add that outline to this file. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
