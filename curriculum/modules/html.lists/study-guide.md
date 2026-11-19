# Study guide: unordered and ordered lists

Module [html.lists](specification.md).

## What they are

`ul` is a set. The bullets are the browser's marker. `ol` is a sequence. The numbers are the browser's marker. `li` is one item in either list. Do not type the number into the item text. `1. Create the file` is the wrong string. The required step text is `Create the file`.

The bullets are `Headings`, `Paragraphs`, `Links`. The steps are `Create the file`, `Add a heading`, `Save the page`.

## Why a second list chapter exists

The profile list proved you can write a `ul`. It did not ask for a sequence, and its items were the lesson 01 topics `Headings`, `Links`, `Images`. This page asks which element matches the kind of group. Swapping the tags gives a numbered set of topics and bulleted steps. The test wants the topics in `ul` and the steps in `ol`.

## How the check works

Each list is found once. Its `li` texts are compared in order. An extra item fails. A missing item fails. Nesting the steps inside the topics makes the `ul` items include more than the three strings, and the `ol` may not be a sibling the test can see as its own list. Keep them as two lists.

## When to use them

Use `ul` when reordering the items would not change the meaning. Use `ol` when step 2 depends on step 1. Do not use a list for a whole article. Do not use headings as fake list items when the content is a set of peers.

## Common mistakes

- Copying the profile items, which include `Images` and omit `Paragraphs`.
- Typing numbers into the `ol` items.
- One list with six items.
- `ol` for the topics because the brief numbered them for you. That numbering was the brief's outline, not the tag.

## How to debug

1. The failure names the list and the items it found.
2. If you see numbers in the found string, they were typed into the HTML.
3. If `Images` appears, you copied the earlier exercise.
4. Preview both markers. Bullets and numbers are the clue. The test still reads the tags.

## Knowledge check

1. Which earlier exercise used `Headings`, `Links`, and `Images`?
2. Why are the steps an `ol`?
3. What found text do you expect if you type `1. Create the file`?

The profile list. The steps are a sequence. The found text would include the digit you typed.

## References

- MDN: [`ul`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul) and [`ol`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol)
- Exercise: [Lists](../../../practices/lesson-02/03-lists/01-lists/README.md)
