# html.tables-forms — A table and a small form

| | |
| --- | --- |
| Status | Existing |
| Prerequisites | [html.text](../html.text/specification.md) |
| Chapter | [03 — Tables and Forms](../../../practices/lesson-01/03-tables-and-forms/README.md) |

## Objectives

1. Build one table whose header cells are `Name` and `Age` and whose data cells are `Alex` and `21`.
2. Build one form that contains a label `Email:`, a required `input type="email"`, and a button `Send`.
3. Connect that label with `for="email"` and `id="email"` in the third exercise.
4. Explain why header text in `td` fails, and why a label beside a field is not yet connected.

## Exercises

| Exercise | What the test actually checks |
| --- | --- |
| [A Simple Table](../../../practices/lesson-01/03-tables-and-forms/01-simple-table/README.md) | One `table`. A `tr` of `th` cells `Name` and `Age`. A `tr` of `td` cells `Alex` and `21`. No `caption`, `thead`, or `scope` check |
| [A Simple Form](../../../practices/lesson-01/03-tables-and-forms/02-simple-form/README.md) | One `form`. Label, input, and button inside it. Type `email`, `required`, label text `Email:`, button text `Send`. `for` and `id` are not required |
| [Accessible Labels](../../../practices/lesson-01/03-tables-and-forms/03-accessible-labels/README.md) | The same form, plus `for="email"` matching `id="email"` |

## Outcomes

A student can mark headers as headers, put a control inside a form, and connect a label by id. The playground's `caption` and `scope` demo is not this test.
