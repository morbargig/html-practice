# Study guide: Lab 02

Module [html.lab-interactivity](specification.md). The notebook is [Lab 02](../../../labs/lesson-02/Lab_02_Advanced_HTML_Native_Interactivity.ipynb). The Jest pages are [Lesson 03](../../../practices/lesson-03/README.md). Fork first, then open Colab from your copy, as [labs/README.md](../../../labs/README.md) describes.

## What the lab is

Lesson 03 grades these controls with Jest. This lab is the guided HTML-only portal for the same topics. The notebook's `check()` reads tags and attributes. It does not click the preview. You still compare the page with the task sentence and the self-check list.

## Where the practices are

The graded pages are in [Lesson 03](../../../practices/lesson-03/README.md). They do not replace the notebook, and the notebook does not replace them. The complete-form exercise still does not ask for a datalist or a dialog. `select`, radio, and checkbox are still not a Jest exercise.

## How the pieces differ

`fieldset` groups controls. `legend` names the group. Exercise B asks for a second group titled Course Preferences and for more datalist options. `datalist` suggests values and still lets the user type something else. `select` limits the user to the options. The notebook asks you to say that difference. It does not ask you to replace the datalist with a select.

`details` and `summary` disclose extra text, such as an FAQ answer. A popover is a transient layer. `dialog` is a modal in this lab. The starter uses `commandfor` and `command` on buttons to show and close it. Those attributes need a current browser. Colab's embedded preview can refuse them. Download the HTML and open it with Live Server, as the labs guide says.

`progress` is how far a task has gone. The notebook starter uses `value="70"` and `max="100"`. `meter` is a measurement inside a range. The notebook starter uses `value="0.8"` with `min`, `max`, `low`, `high`, and `optimum`. Changing the numbers is fine in the notebook if you can say which element is completion and which is a gauge. The lesson 03 academic status exercise fixes the numbers: progress is 70 of 100, and the meter is 80 on a 0–100 scale.

The final cell lists the portal pieces, including two fieldsets, a datalist, FAQ details, a dialog, and both progress and meter. The HTML comment says to replace the starter. Keep the page free of JavaScript. The labs guide says the page uses HTML only.

## Common mistakes

- Answering the datalist question by deleting the datalist.
- Testing the dialog only inside Colab and concluding the attributes are fictional.
- Using `meter` for "70% of the course is done". That story is `progress`.
- Adding a script to open the dialog because `command` was unfamiliar. Try a current browser first.
- Treating a finished notebook as a pass on `01-complete-form` or on a lesson 03 practice. The notebook and the practice page are separate files.

## How to debug

1. If the dialog button does nothing, confirm the `commandfor` value matches the dialog `id`, then leave Colab and open the file locally.
2. If suggestions never appear, the input's `list` attribute must match the datalist `id`.
3. If the FAQ is always open, `details` is missing or `open` is stuck on. The disclosure needs `summary`.
4. Read the final self-check as a list of elements you can point at in the document, not as a feeling that the page looks done.

## Knowledge check

1. What can a user type into a datalist that a `select` would refuse?
2. Why might a correct dialog fail in Colab and work in Chrome?
3. Which element is course completion, and which is a gauge?
4. Does `npm test` grade the notebook?

A datalist allows other text. Colab's preview is limited. `progress` is completion. `meter` is the gauge. The notebook has no Jest file. [Lesson 03](../../../practices/lesson-03/README.md) is what `npm test` grades, and a passing test still does not click the popover or the dialog.

## References

- Notebook: [Lab_02_Advanced_HTML_Native_Interactivity.ipynb](../../../labs/lesson-02/Lab_02_Advanced_HTML_Native_Interactivity.ipynb)
- MDN: [`datalist`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist), [`dialog`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog), [`progress`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress), [`meter`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter)
- The graded form, which stops earlier: [A Complete Form](../../../practices/lesson-02/06-forms/01-complete-form/README.md)
- Practices: [Lesson 03](../../../practices/lesson-03/README.md)
