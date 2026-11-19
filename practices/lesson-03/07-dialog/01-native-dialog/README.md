# 01 — Native Dialog

## 📚 Subject
Learning objective: open and close a `dialog` with `command` and `commandfor`, without JavaScript.

Prerequisites: [Help Popover](../../06-popover/01-help-popover/README.md).

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog
- MDN: https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API

## 🎯 Task
Add a button outside the dialog with the text `Open Information`. It needs `type="button"`, `command="show-modal"`, and `commandfor="info-dialog"`.

Add `<dialog id="info-dialog">`. Give it a heading, `Information`, so the window has a name. Inside the dialog, add a button with the text `Close`, `type="button"`, `command="close"`, and `commandfor="info-dialog"`.

These attributes are not available in every browser. They work in Chrome 135+, Edge 135+, Firefox 144+, and Safari 26.2+. Do not add a script to call `showModal()`. If the button does nothing, test in one of those browsers with Live Server.

Expected behavior: in a supported browser, Open Information opens a modal dialog, so the rest of the page does not take clicks. Close dismisses it. Escape also closes a modal dialog in a current browser. The test checks the attributes. A passing test does not prove the dialog opened.

## ✅ Requirements
- Use `<dialog id="info-dialog">` with an `<h2>Information</h2>`.
- Put the Open Information button outside the dialog. Use `type="button"`, `command="show-modal"`, and `commandfor="info-dialog"`.
- Put the Close button inside the dialog. Use `type="button"`, `command="close"`, and `commandfor="info-dialog"`.
- Do not add `<script>` or `<style>`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-native-dialog
```

`npm test` checks every practice. It parses the HTML. It does not open a browser, so it cannot show that the dialog appeared.

The concept notes are in [the study guide](../../../../curriculum/modules/html.lab-interactivity/study-guide.md).

## 🔧 Debugging
- `commandfor` must match `id="info-dialog"` on both buttons.
- `command="show-modal"` opens the dialog. `command="close"` closes it. The two values are not interchangeable.
- Both buttons need `type="button"`.
- A green test with a button that does nothing usually means the browser is older than the versions above. Open the file in Chrome 135+ or another listed browser.

## ❓ Conceptual questions
1. Why is the Open Information button outside the dialog?
2. Why might the same markup do nothing in an older browser and work in current Chrome?

## 🌱 Extension
Add a sentence inside the dialog that tells the reader which browser you used. The check does not grade that sentence.

## 👀 Preview
Open `index.html` with Live Server in Chrome 135+, Edge 135+, Firefox 144+, or Safari 26.2+. Install steps are in [extensions/README.md](../../../../extensions/README.md).
