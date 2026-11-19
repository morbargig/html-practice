# Podcast brief: Lab 02

## Questions

- Why is there no red Jest failure for this lab?
- How is a datalist different from a select?
- Why would a correct dialog look broken in Colab?

## Explanations

The notebook is a building sequence and a reflection. `fieldset` names a group. `datalist` suggests and allows other text. `select` does not. `details` discloses in place. A dialog is a separate layer and needs a current browser. `progress` is completion. `meter` is a scalar in a known range. The starter numbers are 70 of 100 and 0.8. They are not a hidden answer key.

## Example

A workshop signup suggests three course names and still accepts a fourth typed name, then asks "how full is the room?" as a meter and "how much of the form is done?" as progress. Ask which elements those are. Do not require the portal's TODO text in the answer.

## Misconceptions

- The complete-form exercise is wrong because it has no dialog.
- `commandfor` is JavaScript. It is an attribute, and the page stays HTML-only.
- Any gauge should be `progress`.
- Colab is the final preview for a dialog.

## Debugging scene

The Show button does nothing in Colab. The `commandfor` id matches the dialog. The next step is Live Server in a current browser, not a script tag.

## Prompts

- What would a Jest exercise for `datalist` have to assert that this notebook leaves to the reflection?
- When is a popover the wrong tool and a details block the right one?
- Why keep this lab out of `practices/` until the overlap is approved?

## Notebook

[Lab_02_Advanced_HTML_Native_Interactivity.ipynb](../../../labs/lesson-02/Lab_02_Advanced_HTML_Native_Interactivity.ipynb).

## Takeaway

The lab teaches controls the form test does not grade. Finish the portal in HTML, and preview the dialog where the browser can actually open it.
