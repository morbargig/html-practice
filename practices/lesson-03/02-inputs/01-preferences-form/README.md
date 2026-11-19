# 01 — Preferences Form

## 📚 Subject
Learning objective: add `color`, `range`, `date`, and `file` inputs, each with a label, `id`, and `name`.

Prerequisites: [Profile Page](../../01-attributes/01-profile-page/README.md) and [Accessible Labels](../../../lesson-01/03-tables-and-forms/03-accessible-labels/README.md).

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input
- W3Schools: https://www.w3schools.com/html/html_form_input_types.asp

## 🎯 Task
Build a preferences form. Connect each label to its control with `for` and `id`. Give every control a `name` that matches its `id`.

- Favorite color: id `color`, name `color`, type `color`
- Start date: id `start`, name `start`, type `date`
- Skill level: id `level`, name `level`, type `range`, min `0`, max `100`
- Portfolio: id `portfolio`, name `portfolio`, type `file`

The label texts are `Favorite color:`, `Start date:`, `Skill level:`, and `Portfolio:`. Keep the submit button text `Save preferences`.

Expected behavior: the color, date, and range controls open the browser's own UI. The file control opens a file picker. The test checks the markup. It does not choose a color or upload a file.

## ✅ Requirements
- Put the four controls inside one `<form>`.
- Match each `for` value to the control `id`, and match each `name` to that id.
- Set the range `min` to `0` and `max` to `100`.
- Keep one submit button with the text `Save preferences`.
- Do not add `<script>` or `<style>`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-preferences-form
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.lab-interactivity/study-guide.md).

## 🔧 Debugging
- The label text includes the colon, as in `Favorite color:`.
- A range without `min` and `max` fails even when the type is `range`.
- `type="file"` still needs a label. The file name is not part of the check.
- The button stays `type="submit"`.

## ❓ Conceptual questions
1. Which of these four controls still needs a typed value from the keyboard?
2. Why does the skill field use `min` and `max` instead of a paragraph that says "0 to 100"?

## 🌱 Extension
Add `value="40"` on the range. The check does not grade that value. This folder still requires `min="0"` and `max="100"`.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
