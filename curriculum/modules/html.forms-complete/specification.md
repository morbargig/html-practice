# html.forms-complete — A form that posts

| | |
| --- | --- |
| Status | Existing |
| Prerequisites | [html.tables-forms](../html.tables-forms/specification.md) |
| Chapter | [Lesson 02 — Forms](../../../practices/lesson-02/06-forms/README.md) |
| Exercise | [A Complete Form](../../../practices/lesson-02/06-forms/01-complete-form/README.md) |

## What is new

The early form was one email field and a Send button, then a `for`/`id` pair. This form sets `action` and `method`, gives every control a `name`, uses several input types, limits age, and uses a textarea.

## Objectives

1. Post the form to `/submit` with `method="post"`.
2. Connect each label to a control that has the same `id` and `name`: Full Name (`text`, required), Email Address (`email`, required), Age (`number`, min 0, max 120), Phone (`tel`), Birthday (`date`), Website (`url`), Password (`password`), Message (`textarea`, required).
3. Use a submit button whose text is `Send Message`.
4. Explain why `name` is what a server receives, and why `id` is what the label targets.

## Not in this exercise

Radio buttons, checkboxes, and `select` are Lab 02, not this test. Do not add them here to satisfy the lab.

## Outcomes

A student can build a labeled form whose types, names, and limits match the contract, and can say what `post` is for.
