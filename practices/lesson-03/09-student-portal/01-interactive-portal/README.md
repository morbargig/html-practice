# 01 — Interactive Portal

## 📚 Subject
Learning objective: combine the Lesson 03 controls in one HTML page.

Prerequisites: [Academic Status](../../08-progress-meter/01-academic-status/README.md) and the chapters before it. This practice does not replace the Colab lab in [labs/README.md](../../../../labs/README.md).

## 📖 Read About It
- Study guide: [Lab 02](../../../../curriculum/modules/html.lab-interactivity/study-guide.md)
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog

## 🎯 Task
Replace the TODO comments with one student portal. Use HTML only.

Make the heading editable. Keep the text `Interactive Student Portal`. Set `id="portal-title"`, `class="portal-heading"`, `title="Student portal"`, `contenteditable="true"`, and `data-student-id="s123"`. Add a hidden paragraph, `Instructor note.`

Build one registration form with two fieldsets:

- Legend `Personal Details`: required name (`name`, type `text`, label `Name:`), required email (`email`, type `email`, label `Email:`), birthday (`birthday`, type `date`, label `Birthday:`), favorite color (`color`, type `color`, label `Favorite color:`), skill level (`level`, type `range`, min `0`, max `100`, label `Skill level:`), and portfolio (`portfolio`, type `file`, label `Portfolio:`).
- Legend `Course Preferences`: course (`course`, type `text`, label `Course:`) with `list="courses"`. The datalist has at least four suggestions, including `HTML` and `CSS`.

The submit button says `Register`.

Add course completion and academic performance with the same values as [Academic Status](../../08-progress-meter/01-academic-status/README.md). Add three FAQ questions, one of them `open`. Add a Show Help popover, id `help`. Add the Information dialog, id `info-dialog`, opened with `command="show-modal"` and closed with `command="close"`.

Every `id` is unique, starts with a letter, and is at least two characters. Every control has a label whose `for` matches that id.

Expected behavior: the heading can be edited, the form groups the fields, the course field suggests values, one FAQ answer is open, Show Help opens a panel in a current browser, and Open Information opens a modal dialog in Chrome 135+, Edge 135+, Firefox 144+, or Safari 26.2+. The completion bar is progress. The performance gauge is a meter. The test checks the markup. It does not click the popover or the dialog.

## ✅ Requirements
- Keep one editable `<h1>` with the attributes and text named above, plus one hidden note.
- Use one form, two legends, the labeled fields named above, and a `Register` submit button.
- Connect a datalist of at least four courses, including `HTML` and `CSS`.
- Use three `details` questions, exactly one with `open`, each with a summary and a paragraph.
- Wire `popovertarget="help"` to an element that has `popover`.
- Wire `commandfor="info-dialog"` for `show-modal` and `close`. Keep both buttons `type="button"`. Put Close inside the dialog and an `<h2>Information</h2>` in it.
- Use the progress and meter values from Academic Status, with those labels.
- Do not add `<script>` or `<style>`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-interactive-portal
```

`npm test` checks every practice. A pass means the elements and attributes match. It does not prove that the popover or the dialog opened. Preview those in a supported browser.

The concept notes are in [the study guide](../../../../curriculum/modules/html.lab-interactivity/study-guide.md).

## 🔧 Debugging
- Duplicate ids fail even when each tag looks right on its own.
- `list="courses"` points at the datalist. The course input keeps `id="course"`.
- Course completion stays a `progress` element. Do not move that number onto the meter.
- Dialog buttons need a current browser. The attribute check can pass while an older browser shows a button that does nothing.

## ❓ Conceptual questions
1. Which parts of this page can you confirm without opening a browser?
2. Which parts still need Chrome 135+ or another browser from the dialog chapter?

## 🌱 Extension
Add `autocomplete="email"` on the email field. The check does not grade that attribute.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md). Open the dialog in Chrome 135+, Edge 135+, Firefox 144+, or Safari 26.2+.
