# Podcast brief: the document head

## Questions

- What is in `head` that the reader does not see as body text?
- Why hide a sentence in a comment instead of in a paragraph?
- What does linking `style.css` prove if the file has no rules?

## Explanations

Charset, title, and named metas describe the document. The comment is source-only. The link is a relationship, `stylesheet`, plus a URL, `style.css`. Presentation properties are the next course.

## Example

A portfolio sets the tab to the person's name, a description for search results, and a comment that says which photo is the current one. Ask which of those three a visitor sees. Do not use the lesson's `Your Name` string as if it were the student's own name. In the exercise, `Your Name` is the required content.

## Misconceptions

- The `title` replaces the need for an `h1`.
- Keywords metadata is what makes the page accessible.
- A `style` block satisfies the link test.
- Writing `color` in `style.css` is part of this HTML exercise.

## Debugging scene

The keywords meta fails. The author wrote `HTML,tutorial,beginner` without the spaces the lesson string includes. A second scene: the comment sentence is on the page in a `p`. The reader can see it, so it is not a comment.

## Prompts

- Which metadata would you drop on a page that is not public, and which must stay?
- Why keep CSS in another file instead of in `style` attributes?
- What breaks for a non-English name when charset is wrong?

## Exercises

The three folders in [04 — Head and Metadata](../../../practices/lesson-01/04-head-and-metadata/README.md).

## Takeaway

`head` describes the document. Comments are for editors. The link attaches CSS and does not itself paint the page.
