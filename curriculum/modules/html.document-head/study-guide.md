# Study guide: the document head

Module [html.document-head](specification.md).

## What the head is

`head` holds information about the document. It is not the on-page heading. `meta charset` names the character encoding. `UTF-8` is the encoding these pages use. `title` is the document name, often the tab label. A `meta` element with `name` and `content` stores a named fact: description, keywords, or author.

An HTML comment is `<!--` … `-->`. The browser does not render it as text. The test can still read it.

`link rel="stylesheet"` tells the browser to load a CSS file. `href="style.css"` is that file, next to `index.html`. The file in the exercise is a comment that says you do not need style rules.

## Why it exists

Without a charset, non-English characters can be misread. Without a title, the tab has nothing reliable to show. Description, keywords, and author are metadata. Search engines may use a description. Keywords are an old mechanism and this exercise still requires the lesson string. The comment lets an author leave a note that is not content. The stylesheet link is how HTML hands a page to CSS. The rules themselves are a different course.

## How the checks work

Charset must be a `meta` whose `charset` is `UTF-8`, case-insensitive, inside `head`. The title text is `My Page`, also inside `head`. Each named meta must be inside `head` and its `content` must match:

- description: `My first web page`
- keywords: `HTML, tutorial, beginner`
- author: `Your Name`

The comment exercise looks for the sentence `This section displays the main title` in a comment, plus an `h1` of `My Page`. Text in a paragraph with that sentence fails the comment check. The sentence inside `h1` fails both, because the heading text would be wrong and the comment would be missing.

The link exercise requires a `link` in `head` whose `rel` includes `stylesheet` and whose `href` is `style.css`. A `style` element full of rules is not that link.

## When to use them

Put metadata in `head`. Put the visible topic in an `h1` in `body`. Use a comment for a note to the next editor, not for text you want a reader to see. Use `link` when the CSS lives in another file. Use a `style` element only for a fixture this course already wrote, not as a substitute for the link exercise.

## Common mistakes

- Putting `title` in the body.
- Using `content` on the charset meta instead of the `charset` attribute. The test reads `meta[charset]`.
- Writing the author as your own name. The required content is the words `Your Name`.
- Typing the comment as ordinary text.
- Setting `href` to `styles.css` or to an absolute path. The required value is `style.css`.

## How to debug

1. A charset error means the attribute is missing, misspelled, or not in `head`.
2. A meta error quotes the `name` and the content it expected. Compare commas and spaces in the keywords string.
3. If the comment sentence is visible on the page, it is not a comment.
4. If the link test fails, confirm both attributes and that the element is in `head`, not in `body`.
5. Opening `style.css` and adding a color does not help this test. The CSS course grades colors later.

## Knowledge check

1. Why can the tab say `My Page` while the body is empty?
2. What does the reader see of an HTML comment?
3. Why is an empty `style.css` still a successful link?
4. Which later course sets `color` on a class?

The title is metadata. A comment is hidden. The link only has to point at the file. Color is `css.color` in css-practice.

## References

- MDN: [`meta`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta), [comments](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments), [`link`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link)
- Exercises in [04 — Head and Metadata](../../../practices/lesson-01/04-head-and-metadata/README.md)
