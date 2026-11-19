# Podcast brief: a form that posts

## Questions

- What does the browser send, and where does the attribute say it goes?
- Why do `id` and `name` both exist?
- Which lesson 01 habit will fail this label text?

## Explanations

`post` puts the named fields in the request body. `for` finds `id`. `name` is the key. Types and min/max are constraints the browser can enforce before the request. `/submit` is not implemented in the repo. The early label `Email:` is the wrong string. The button text is `Send Message`.

## Example

A library form posts to `/holds` with a required card number and an optional note. Ask which attribute is the URL, which is the key, and which connects the label. Do not reuse `/submit`.

## Misconceptions

- A form that does not navigate has failed the test.
- `type="text"` is fine for every field if the label is clear.
- Password hiding is a CSS color. It is the input type.
- Adding a `select` is required because the lab had one.

## Debugging scene

Email's label says `Email Address` and the failure is `Expected the message field to be a <textarea>`. The email field is fine. The message was an input. Fix the element the message names.

## Prompts

- When would `method="get"` be the better choice?
- Why leave phone optional?
- What does Lab 02 add that you should not stuff into this file?

## Exercise

[A Complete Form](../../../practices/lesson-02/06-forms/01-complete-form/README.md).

## Takeaway

The form names a destination. Each control has a label, a type, and a submission name. The test checks that contract. It does not run a server.
