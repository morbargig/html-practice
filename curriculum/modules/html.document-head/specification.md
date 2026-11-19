# html.document-head — Head, metadata, and the stylesheet link

| | |
| --- | --- |
| Status | Existing |
| Prerequisites | [html.text](../html.text/specification.md) |
| Chapter | [04 — Head and Metadata](../../../practices/lesson-01/04-head-and-metadata/README.md) |

This module is the handoff to CSS. The student links `style.css` and does not write rules. Color, borders, and layout are graded in [css-practice](https://github.com/morbargig/css-practice).

## Objectives

1. Put `meta charset="UTF-8"`, `title` `My Page`, and meta `description`, `keywords`, and `author` in `head`, with the lesson's content strings.
2. Add the HTML comment `This section displays the main title` and an `h1` whose text is `My Page`.
3. Add `link rel="stylesheet" href="style.css"` in `head`.
4. Explain why a comment is not visible text, and why the linked file can stay empty of rules.

## Exercises

| Exercise | Contract |
| --- | --- |
| [Head and Metadata](../../../practices/lesson-01/04-head-and-metadata/01-head-and-metadata/README.md) | Charset `UTF-8`. Title `My Page`. Description `My first web page`. Keywords `HTML, tutorial, beginner`. Author `Your Name`. All inside `head` |
| [HTML Comments](../../../practices/lesson-01/04-head-and-metadata/02-comments/README.md) | A comment with that exact sentence, and `h1` text `My Page` |
| [Link a Stylesheet](../../../practices/lesson-01/04-head-and-metadata/03-link-a-stylesheet/README.md) | `rel` includes `stylesheet`, `href` is `style.css`, the link is in `head` |

The head exercise's starter has no `title` yet. The other starters in the course often do. Follow the file you opened.

## Outcomes

A student can fill `head`, hide a note in a comment, and attach a stylesheet without putting presentation rules in this repository.
