# 01 — Help Popover

## 📚 Subject
Learning objective: open a help panel with `popover` and `popovertarget`, without JavaScript.

Prerequisites: [Expandable FAQ](../../05-details/01-expandable-faq/README.md).

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget

## 🎯 Task
Keep the button text `Show Help`. Set `type="button"` so the button does not submit a form. Set `popovertarget="help"`. Add an element with `id="help"` and the `popover` attribute, and put a short help sentence in it.

The button and the panel share an id token. The panel's id is `help`. The button does not use that id.

Expected behavior: in a current browser, Show Help opens the panel, and activating the button again closes it. The test checks that the attributes match. A passing test does not prove the panel opened.

## ✅ Requirements
- Use a `<button type="button" popovertarget="help">` whose text is `Show Help`.
- Add an element with `id="help"` and the `popover` attribute. Do not set `popover="false"` or `popover="none"`.
- Put visible help text inside that element.
- Do not add `<script>` or `<style>`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-help-popover
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.lab-interactivity/study-guide.md).

## 🔧 Debugging
- `popovertarget="help"` must match `id="help"`.
- `type="button"` matters. The default button type inside a form is `submit`.
- The `popover` attribute is what makes the element a panel. A plain div with the same id does not.
- Preview the page in a current browser. The test does not click the button.

## ❓ Conceptual questions
1. What fails if the button's `popovertarget` and the panel's `id` differ by one letter?
2. Why is this panel not a `details` element?

## 🌱 Extension
Add a second button inside the panel with `popovertarget="help"` and the text `Hide Help`. The check does not grade that button.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
