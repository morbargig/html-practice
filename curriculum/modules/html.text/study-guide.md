# Study guide: headings and paragraphs

Module [html.text](specification.md). Chapter: [01 — Text](../../../practices/lesson-01/01-text/README.md).

Each starter is a complete document. The doctype, the language, the charset, and a `<title>` are already there. The body contains only the comment `Write your solution here`. Replace that comment with the elements the exercise asks for. Leave `test.js` alone.

## What these elements are

`h1` is a heading. The `1` means it is the top rank on the page. The words inside it are the heading's text. `Hello World` is the text the first exercise requires. The tags are not part of that text.

`p` is a paragraph. It groups one block of running text. `Welcome to HTML in VS Code!` is the paragraph the second exercise requires, including the exclamation mark.

The third exercise asks for both, and for exactly one of each.

## Why they exist

A page without a heading is a wall of text. A heading tells the reader, and assistive technology, where the topic starts. A paragraph tells them where one thought ends. The browser's default style makes an `h1` large and a `p` a separate block. That style is not the thing the test grades. The test grades the elements and the text.

The `<title>` in the starter, `Practice 01` or `Practice 02` or `Practice 03`, is the name of the document, often shown on the browser tab. It is not a substitute for the `h1`. Changing the title to `Hello World` and leaving the body empty fails the heading test.

## How the test reads the page

`npm test` parses `index.html`. It does not open Live Server. For the heading exercise it requires one `h1`, then compares that element's text with `Hello World`. The paragraph exercise does the same for one `p` and `Welcome to HTML in VS Code!`. The combined exercise requires one of each and both strings.

Text comparison collapses runs of whitespace and trims the ends. `Hello   World` can match `Hello World`. `Hello World!` does not match `Hello World`. `welcome to HTML in VS Code!` does not match, because the capital letters differ. A second `h1` fails the count even if the first one is correct.

This is a valid shape for a different page, and it is not the graded text:

```html
<h1>Harbor notes</h1>
<p>The morning tide is still out.</p>
```

Use that shape when you want to see the same two roles with your own words. The exercises keep the lesson strings.

## When to use them

Use one `h1` for the page topic. Use a `p` for each paragraph of that topic. Do not use a heading to bold a sentence inside a paragraph. Do not use a paragraph as the page title. Later modules add `h2` and `h3` under the `h1`. This module stops at one level.

## How they sit in the document

The heading and the paragraph belong in `body`. They are not metadata. The starter comment can be removed or left. If it stays, it is a comment, so it adds no element. Text written outside any tag becomes anonymous text in the body. The test looks for an `h1` or a `p`, so loose text does not pass.

Live Server shows the default large heading and the paragraph below it. That preview is how you see the result. The grade is still `npm test`.

## Common mistakes

- Typing the words in the `<title>` and leaving the body empty.
- Using `h2` because it looks smaller and "Hello World" feels small. The test looks for `h1`.
- Wrapping the sentence in `div` or `span`. Those are not a paragraph.
- Adding a second heading "for practice" on the combined page. The count fails.
- Dropping the exclamation mark, or adding one to `Hello World`.
- Editing `test.js` so the expected string matches a typo. The brief says to leave the test alone.

## How to debug

1. Run the exercise command from the repository root, for example `npm test -- 01-hello-heading`.
2. `No <h1> was found` means the tag is missing or misspelled. `H1` in the tag name is fine, because HTML tag names are case-insensitive. `h 1` is not a tag.
3. `Found "Hello world"` means the element exists and the characters differ. Match the brief, including capitals.
4. `Expected to find exactly 1 <h1> element. Found 2.` means you remove the extra heading rather than changing the test.
5. Open the page with Live Server. If you see the words and the test does not, those words are probably not inside the element the test queries.

## Knowledge check

1. Where does `Hello World` go: the `title`, the `h1`, or both?
2. Why does `Welcome to HTML in VS Code` fail the paragraph exercise?
3. The combined page looks right and the test says it found two `h1` elements. What do you delete?
4. Write a heading and a paragraph that are not the lesson strings. Which exercise would reject them, and why is that rejection still a correct use of the same tags?

The visible topic belongs in the `h1`. The paragraph check includes the exclamation mark. Delete the extra `h1`. A scratch sentence is the right idea and the wrong text for these three folders.

## References

- MDN: [Heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) and [`p`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p)
- Exercises: [Hello Heading](../../../practices/lesson-01/01-text/01-hello-heading/README.md), [A Paragraph](../../../practices/lesson-01/01-text/02-paragraph/README.md), [Heading and Paragraph](../../../practices/lesson-01/01-text/03-heading-and-paragraph/README.md)
