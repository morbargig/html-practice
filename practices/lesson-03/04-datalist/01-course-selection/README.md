# 01 — Course Selection

## 📚 Subject
Learning objective: offer course suggestions with `datalist` and explain how that differs from `select`.

Prerequisites: [Registration Sections](../../03-fieldset/01-registration-sections/README.md).

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist
- W3Schools: https://www.w3schools.com/tags/tag_datalist.asp

## 🎯 Task
Add suggestions to the course field. Set `list="courses"` on the input. Add a `<datalist id="courses">` with at least four `<option value="...">` entries. Two of the values are `HTML` and `CSS`. Add at least two more course names.

Then add a paragraph, in your own words, that uses the words datalist and select. Say that a datalist suggests values and still lets someone type a different course, and that a select allows only its options. The paragraph needs at least 40 characters.

A `select` is not required on this page. Do not delete the datalist to answer the question.

Expected behavior: focusing the course field offers the suggestions. A course that is not in the list can still be typed. The paragraph states the difference. The test reads the markup and the paragraph. It does not open the suggestion menu.

## ✅ Requirements
- Keep the label `Course:` connected to `id="course"`, with `name="course"` and `list="courses"`.
- Put at least four options in `<datalist id="courses">`, including the values `HTML` and `CSS`.
- Add a paragraph of at least 40 characters that contains the words datalist and select.
- Do not add `<script>` or `<style>`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-course-selection
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.lab-interactivity/study-guide.md).

## 🔧 Debugging
- `list="courses"` and `id="courses"` must match. The datalist id is not the input id.
- Option values are the suggestion text. An empty `<option>` does not count.
- The explanation is a `<p>`. A comment does not count.
- Replacing the datalist with a `select` fails this check.

## ❓ Conceptual questions
1. What can a student type into this field that a `select` with the same four courses would refuse?
2. Why does the input keep its own id when the datalist has a different id?

## 🌱 Extension
Add a `select` with the same four courses so you can compare the two controls. The check does not grade that menu. Keep the datalist.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
