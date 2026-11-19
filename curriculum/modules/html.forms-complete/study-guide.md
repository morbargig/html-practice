# Study guide: a form that posts

Module [html.forms-complete](specification.md).

## What the attributes are

`action="/submit"` is the URL the browser will request. `method="post"` sends the form body rather than stuffing the fields into the query string. `name` is the key in that submission. `id` is the hook for `label for`. They are often the same word. They do different jobs. A control with an `id` and no `name` can be labeled and still be absent from the submission.

`type` chooses the control: `text`, `email`, `number`, `tel`, `date`, `url`, `password`. `min` and `max` on the number limit the age. `required` blocks an empty submit for name, email, and message. The message is a `textarea`, which has no `type`. The button needs `type="submit"` and the text `Send Message`. A button with no type defaults to `submit` inside a form in HTML, and this test still checks the attribute.

## Why it exists

The small email form never left the browser. This one names a destination and a method. Types give the browser a keyboard and a constraint: an email field, a number field, a date picker. The password type hides the characters. None of that replaces a server. `/submit` does not exist in this repo. The test reads the attribute.

## How the check works

`labeledControl` finds `id`, then a `label` whose `for` equals that id, then compares the label text. The texts are `Full Name`, `Email Address`, `Age`, `Phone`, `Birthday`, `Website`, `Password`, and `Message`. Each control must sit inside the form. `name` must equal the id. Types are compared without case sensitivity. Age also needs `min="0"` and `max="120"`. Only one button is expected, inside the form.

## When to use them

Use `post` when the form changes something or carries data you do not want in the URL. Use `get` for a search that should be bookmarkable. This exercise is `post`. Use the type that matches the fact. Do not use `text` for the age and then validate it yourself. Use `required` for fields the lesson names, not for every field. Phone, birthday, website, and password are optional here.

## Common mistakes

- `action="submit"` without the slash, or `method="get"`.
- Label text `Email` when the required text is `Email Address`. The early exercise used `Email:`. This one does not.
- `id` and `for` match, and `name` was forgotten.
- The message is an `input`. The test wants `textarea`.
- A second button for "reset". The test expects one `button`.

## How to debug

1. The action or method error quotes the found attribute.
2. `Expected a form control with id="phone"` means that id is missing.
3. `Expected a <label for="phone">` means the label is not connected, even if it sits beside the field.
4. A type or min/max error names the field. Fix that field only.
5. Submitting in Live Server will not find a real `/submit` handler. A failed navigation is not a failed test.

## Knowledge check

1. Why can `for` and `id` be correct while the server still receives nothing for that field?
2. Which three fields are `required`?
3. Why is the early form's label `Email:` the wrong text here?
4. Where are radio buttons taught, and why are they not in this file?

`name` is the submission key. Name, email, and message are required. The label strings differ by exercise. Radios are in Lab 02 and are not graded here.

## References

- MDN: [`form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form) and [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input)
- Exercise: [A Complete Form](../../../practices/lesson-02/06-forms/01-complete-form/README.md)
