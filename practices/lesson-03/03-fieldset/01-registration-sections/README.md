# 01 — Registration Sections

## 📚 Subject
Learning objective: split a registration form into two groups with `fieldset` and `legend`.

Prerequisites: [Preferences Form](../../02-inputs/01-preferences-form/README.md). You can connect a label with `for` and `id`.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset
- W3Schools: https://www.w3schools.com/tags/tag_fieldset.asp

## 🎯 Task
Keep the Personal Details group and its required email field. Add a second group whose legend is `Course Preferences`. Inside it, add a text field labeled `Course:` with id `course` and name `course`.

The legend is the first element inside its fieldset. The legend is the group's name for assistive technology, so do not replace it with a heading.

Expected behavior: the page shows two named groups. Email stays required. Course is a separate group. Submit still says `Register`.

## ✅ Requirements
- Keep `<legend>Personal Details</legend>` and the required email field, id `email`, name `email`, type `email`, label `Email:`.
- Add `<legend>Course Preferences</legend>` and the course field inside that fieldset.
- Connect `Course:` with `for="course"`.
- Keep both fieldsets inside one form, and keep the submit button text `Register`.
- Do not add `<script>` or `<style>`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-registration-sections
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.lab-interactivity/study-guide.md).

## 🔧 Debugging
- Each legend's text is exact: `Personal Details` and `Course Preferences`.
- The course input sits inside the Course Preferences fieldset, not beside it.
- `for="course"` and `id="course"` are the same token.
- Email stays `required`.

## ❓ Conceptual questions
1. What does the legend tell a reader that a plain paragraph above the fields does not?
2. Why is the email field in a different group from the course field?

## 🌱 Extension
Add a required name field inside Personal Details. This check still grades the email field and the course group. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
