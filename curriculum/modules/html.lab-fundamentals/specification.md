# html.lab-fundamentals — Lab 01

| | |
| --- | --- |
| Status | Existing |
| Prerequisites | None. The lab overlaps [html.text](../html.text/specification.md) through [html.profile](../html.profile/specification.md) with looser checks. |
| Notebook | [labs/lesson-01/lab-01-html-fundamentals.ipynb](../../../labs/lesson-01/lab-01-html-fundamentals.ipynb) |
| Guide | [labs/README.md](../../../labs/README.md) |

## Objectives

1. In Exercise 1, write a document with a doctype, `lang="en"`, a non-empty title, an `h1` with text, and a `p` with text.
2. In Exercise 2, add `h2` text `My Hobbies` (any case), a `ul` with at least three `li` items, and a paragraph that contains `strong` or `em`.
3. In Exercise 3, link to a URL that starts with `https://developer.mozilla.org/`, with visible link text, and an image with a non-empty `src` and alt text at least five characters long.
4. In Exercise 4, include `header`, `nav` with a link, `main`, a `section` inside `main`, and `footer`.
5. In the final About Me page, satisfy the combined check: doctype, English, a title, header, nav, main, footer, a section in main, an `h1` with text, at least two paragraphs, at least three list items, a link with href and text, and an image with src and alt length at least 5.
6. Explain why a passing lab cell does not pass the Jest exercises, which want exact strings.

## How the check works

The notebook defines `check()` with BeautifulSoup. Each exercise has its own HTML string. The final cell says these checks test basic structure and do not guarantee a visually perfect or fully accessible page.

## Outcomes

A student can build a small page in Colab, read a failing check by its label, and then move to the practice folders for the exact contracts.
