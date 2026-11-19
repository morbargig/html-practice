# Assessment: a table and a small form

Do not require `caption` or `scope` without changing the test on purpose. Do not require `for` on the simple form. The third exercise is where that requirement lives.

## Traceability

| Objective | Exercise | Check | Slide |
| --- | --- | --- | --- |
| 1. Header row and data row | [01-simple-table](../../../practices/lesson-01/03-tables-and-forms/01-simple-table/README.md) | `th` text `Name\|Age`, `td` text `Alex\|21`, one table | 1 |
| 2. Email form | [02-simple-form](../../../practices/lesson-01/03-tables-and-forms/02-simple-form/README.md) | One form. Label `Email:`, `type="email"`, `required`, button `Send`, all inside | 2 |
| 3. Connected label | [03-accessible-labels](../../../practices/lesson-01/03-tables-and-forms/03-accessible-labels/README.md) | `for="email"` and `id="email"` | 3 |
| 4. Ungraded table features | Study guide | Not asserted | 4 |

## Criteria

- The header tags and the data tags are different.
- The third exercise fails if the ids disagree, even when the simple form would have passed.
- The student can name one table feature this test ignores.
