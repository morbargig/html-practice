# Study guide: a table and a small form

Module [html.tables-forms](specification.md).

## What they are

A `table` is a grid of rows. `tr` is a row. `th` is a header cell. `td` is a data cell. This exercise wants two columns. The header row reads `Name` and `Age`. The data row reads `Alex` and `21`.

A `form` is a group of controls that can be submitted together. A `label` names a control. An `input` collects one value. `type="email"` asks for an email address. `required` means the browser should block an empty submit. A `button` with the text `Send` is the control the test looks for.

## Why they exist

Name and age are related facts about one person. A paragraph cannot say which number is the age. Header cells give each column a name. A form exists so the browser can collect a value and, later, send it. This chapter does not set `action` or `method`. That arrives in [html.forms-complete](../html.forms-complete/specification.md).

A label that is only visual does not always move focus to the field. `for` and `id` with the same token do. The second exercise allows an unconnected label. The third exercise requires the connection. Both are graded on purpose: first the form exists, then the label is wired.

## How the checks work

The table test finds a row whose direct `th` children are exactly `Name` and `Age`, and a row whose direct `td` children are exactly `Alex` and `21`. Header words inside `td` fail. Data words inside `th` fail. `caption` is not required. The playground shows `caption`, `thead`, and `scope`. Those are good table habits and they are not this assertion.

The simple form test requires the label, the email input, and the button to be inside the one `form`. It does not read `for`. The accessible-label test does. `id="email"` on the input and `for="email"` on the label are the pair. A mismatch leaves the label unconnected even if the words `Email:` are correct.

## When to use them

Use a table for data with the same columns repeated. Do not use it to place a sidebar. Use a form when the user will enter a value. Use `type="email"` for an email, not `type="text"`, on these exercises. Connect labels on any form you keep. The unconnected version exists only as the middle exercise.

## Common mistakes

- One row of four cells instead of a header row and a data row.
- `Name` and `Age` in `td`.
- The button outside the form, where a click does not submit those controls.
- `for="Email"` while `id="email"`. The match is case-sensitive.
- A second input. The simple form test expects one `input`.

## How to debug

1. `Expected a <tr> of <th> cells "Name" and "Age"` means the header row is missing or the cells are the wrong tag.
2. `Expected a <tr> of <td> cells "Alex" and "21"` means the data row's text or tags differ.
3. `Found 0` for the form, label, input, or button means that piece is outside the form or missing.
4. The accessible exercise fails when `for` and `id` differ. Read both attributes before changing the label text.
5. Live Server will show the table grid and the email field. The grade is still the test.

## Knowledge check

1. Why is `Name` a `th` and `Alex` a `td`?
2. What does the second exercise allow that the third exercise rejects?
3. Why must the button be inside the `form`?
4. Where would `caption` belong, and why can this test pass without it?

Headers name columns. The third exercise adds the `for`/`id` pair. The button submits the form that contains it. A caption is a title for the table, and this test never queries it.

## References

- MDN: [`table`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table), [`form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form), [`label`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label)
- Exercises in [03 — Tables and Forms](../../../practices/lesson-01/03-tables-and-forms/README.md)
