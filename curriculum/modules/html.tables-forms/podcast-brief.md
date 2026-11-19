# Podcast brief: a table and a small form

## Questions

- Why is a header cell a different element from a data cell?
- Why can a form look finished and still have a label that does not focus the field?
- What is the chapter deliberately not asking for?

## Explanations

`th` names the column. `td` holds Alex and 21. The form groups the email field and the Send button. `required` is a constraint. `for` and `id` are the connection, and only the third exercise checks them. `caption` and `scope` are real and ungraded here.

## Example

A roster with columns Tool and Version, and a signup form whose label says "Work email". Ask which cells are `th`, and what `for` must repeat. Do not use Name, Age, or Alex.

## Misconceptions

- Any cell with bold text is a header. The test wants `th`.
- The label text `Email:` is the connection. The connection is `for` and `id`.
- The button can sit under the form as a sibling.
- A playground caption is required in the exercise.

## Debugging scene

The header row looks right and the test still wants `th` cells named Name and Age. The author used `td` and CSS was not even involved. A second scene: `for="email"` and `id="user-email"`. The words match and the tokens do not.

## Prompts

- When is a table the wrong layout tool?
- Why teach an unconnected label before a connected one?
- What will `action` and `method` add in the later form?

## Exercises

The three folders in [03 — Tables and Forms](../../../practices/lesson-01/03-tables-and-forms/README.md).

## Takeaway

Headers are `th`. Values are `td`. A form wraps its controls. A label is connected only when `for` and `id` share a token.
