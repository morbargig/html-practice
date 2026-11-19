# 01 — Profile Page

## 📚 Subject
Learning objective: mark up a student profile with `id`, `class`, `title`, `hidden`, `contenteditable`, and `data-*`.

Prerequisites: [lesson 01](../../../lesson-01/README.md) and [lesson 02](../../../lesson-02/README.md). You can already write a heading and a paragraph.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes
- W3Schools: https://www.w3schools.com/html/html_attributes.asp

## 🎯 Task
Build a profile section. Keep the heading text `Student Profile`.

Give the section `id="profile"`, `class="student-profile"`, and `data-student-id="s123"`. Add `title="Student profile for the HTML course"` to the heading. Add a paragraph with `contenteditable="true"` and the text `I am learning advanced HTML.` Add a second paragraph with the `hidden` attribute and the text `This note is hidden.`

`class` only names the section. This course does not ask you to write CSS. `hidden` removes that note from the page and from the accessibility tree. Do not hide the heading. `data-student-id` stores a custom token. It does not run code.

Expected behavior: resting the pointer on the heading shows the tooltip. Clicking the bio lets you type. The hidden note is not visible. The page has no stylesheet and no script.

## ✅ Requirements
- Use one `<section id="profile" class="student-profile" data-student-id="s123">`.
- Keep the heading text `Student Profile` and set its `title` to `Student profile for the HTML course`.
- Use one editable paragraph, `contenteditable="true"`, with the bio text above.
- Use one hidden paragraph with the note text above.
- Keep every `id` unique. Do not add `<script>` or `<style>`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-profile-page
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.lab-interactivity/study-guide.md).

## 🔧 Debugging
- `id="profile"` appears once. A second element with the same id fails the check.
- `contenteditable="true"` is the attribute. Typing in the browser is the preview, not the test.
- `hidden` belongs on the note, not on the heading or the bio.
- `data-student-id` is one word in the attribute name. The value is `s123`.

## ❓ Conceptual questions
1. What does a reader miss if the only copy of the bio is inside a `hidden` paragraph?
2. What does `class="student-profile"` change on this page before any CSS is written?

## 🌱 Extension
Add `data-cohort="html"` on a scratch copy of the section. This folder stays on `data-student-id="s123"`. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
