# Study guide: emphasis and heading order

Module [html.text-meaning](specification.md).

## What they are

`em` marks stress. The sentence would be said with weight on that word. `strong` marks importance. The default browser style is often italic for `em` and bold for `strong`. The style is a hint. The tag is the meaning. Swapping them can look similar if CSS later restyles them, and this test still knows which tag you used.

Heading ranks run from `h1` to `h6`. The first heading on the hierarchy exercise must be `h1`. You may go one level deeper, stay at the same level, or return to a higher level. You may not jump from `h1` to `h3`.

The graded sentence is `HTML gives content meaning and importance.` The graded outline is Recipes, Breakfast, Oatmeal, Dinner.

## Why they exist

A whole paragraph in bold tells the reader nothing about which word mattered. `em` and `strong` mark the words. Heading ranks are an outline. Skipping a level is like numbering 1, then 1.1.1, with no 1.1. Assistive technology uses that outline.

## How the checks work

The emphasis test takes the paragraph's text, which includes the words inside `em` and `strong`, and compares the whole sentence. It then requires the `em` text to be `meaning` and the `strong` text to be `importance`. Bolding the words with a `b` tag, or with CSS, fails. Wrapping extra words fails the inner text.

The hierarchy test walks every heading. If the first is not `h1`, it names the tag it found. If a level is more than one deeper than the previous, it names both tags. After that shape check, the texts must be Recipes, Breakfast, Oatmeal, and Dinner in that order. An extra `h2` fails the "do not add another heading" requirement in the brief and the sequence the test expects.

Returning from Oatmeal (`h3`) to Dinner (`h2`) is allowed. Dinner is a sibling of Breakfast, not a child of Oatmeal.

## When to use them

Use `em` for stress you would speak. Use `strong` for urgency or importance. Do not use either just to change the font. Use `h2` for sections under the page `h1`, and `h3` for subsections under an `h2`. Start a new `h2` when the subsection is over.

## Common mistakes

- The whole sentence inside `strong`, so the `strong` text is not the single word `importance`.
- `i` and `b` instead of `em` and `strong`.
- Oatmeal as an `h4`, or Breakfast as an `h3` directly under Recipes.
- A second `h1` for Dinner. The outline has one top heading.
- Putting the words in `title` instead of heading elements.

## How to debug

1. The emphasis failure either quotes the paragraph text or says the `em` or `strong` text differed.
2. `Expected the first heading to be an <h1>` means the outline started too deep.
3. `immediately after <h1>` together with an `h3` is the skipped level. Insert the missing rank or raise the deeper heading.
4. Read the outline aloud: page, section, subsection, next section. Dinner must be a section.

## Knowledge check

1. Why can italic text still fail the emphasis exercise?
2. Why is Dinner an `h2` after an `h3`?
3. What error do you expect from `h1` then `h3`?
4. Which lesson 01 exercise already required an `h1`, and what did it not require?

The test reads the tag, not the italic. Dinner returns to the section level. The error names the skip. Lesson 01 required the words `Hello World` and did not require a deeper outline.

## References

- MDN: [`em`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/em), [`strong`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/strong), [headings](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements)
- Exercises in [Lesson 02 — Text](../../../practices/lesson-02/01-text/README.md)
