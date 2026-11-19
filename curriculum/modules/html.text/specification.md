# html.text — Headings and paragraphs

| | |
| --- | --- |
| Status | Existing |
| Repository | html-practice |
| Lesson | [01 — Setting Up Your HTML Development Environment](../../../practices/lesson-01/README.md) |
| Chapter | [01 — Text](../../../practices/lesson-01/01-text/README.md) |

## Prerequisites

None in this course. The starter page already has a doctype, `<html lang="en">`, a charset, and a title such as `Practice 01`. The student writes inside `<body>`, where the comment says to write.

## Required prior knowledge

- An HTML element has a start tag and, for these elements, an end tag.
- The body is what the reader sees. The title in `head` is not the heading on the page.
- The test reads the document jsdom builds from `index.html`. It does not score the preview font.

## Learning objectives

1. Add exactly one `h1` whose text is `Hello World`.
2. Add exactly one `p` whose text is `Welcome to HTML in VS Code!`.
3. Put that heading and that paragraph in one page, one of each.
4. Explain why a second heading, a missing exclamation mark, or text that is not inside the element fails.
5. Use a different sentence in a scratch page and say which tag carries the title and which carries the sentence.

## Core concepts

- `h1` is the top-level heading. It is not the window title.
- `p` is one paragraph. A line break in the source is not a second paragraph.
- Exact text after whitespace is collapsed and trimmed. The words and the exclamation mark still have to match.
- Exactly one of each element on the combined page.

## Exercises

| Role | Path |
| --- | --- |
| Graded | `practices/lesson-01/01-text/01-hello-heading/` |
| Graded | `practices/lesson-01/01-text/02-paragraph/` |
| Graded | `practices/lesson-01/01-text/03-heading-and-paragraph/` |
| Guided example | A scratch page with a different heading and sentence |
| Lab overlap | [html.lab-fundamentals](../html.lab-fundamentals/specification.md) Exercise 1, which accepts any non-empty heading and paragraph |

## Outcomes

A student can add one heading and one paragraph, match the strings the test names, fix a duplicate or a typo from the failure message, and write a different sentence with the same two elements.
