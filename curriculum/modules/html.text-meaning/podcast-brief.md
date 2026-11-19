# Podcast brief: emphasis and heading order

## Questions

- Why are `em` and `strong` not font buttons?
- Why may a heading go back up a level?
- What did lesson 01 leave unfinished about headings?

## Explanations

The paragraph text stays one sentence. The inner elements name the words. The outline helper tracks the numeric level. A jump greater than one fails. A return to `h2` is a new section.

## Example

A recipe site of your own: "Soup", "Ingredients", "Stock", "Method". Ask which headings those are. Do not use the graded words Recipes and Oatmeal in the answer key for that example. Map them only after the listener has tried.

## Misconceptions

- Bold means `strong` even when the tag is `b`.
- Every section on a page should be `h1`.
- Dinner should stay `h3` because it comes after Oatmeal in the file.
- The emphasis exercise wants two paragraphs.

## Debugging scene

The test says it found `h3` immediately after `h1`. Breakfast was skipped. A second scene: the paragraph reads correctly and `em` contains `meaning and`. The inner text is too long.

## Prompts

- When would you refuse to use `strong` at all?
- How does this outline show up in a screen reader's heading list?
- What heading would a contact section get under Recipes? It would not. Contact is a different page.

## Exercises

[Emphasis](../../../practices/lesson-02/01-text/01-emphasis/README.md) and [Heading Hierarchy](../../../practices/lesson-02/01-text/02-heading-hierarchy/README.md).

## Takeaway

Mark the word, not the font. Step heading levels one at a time, and step back up when the section changes.
