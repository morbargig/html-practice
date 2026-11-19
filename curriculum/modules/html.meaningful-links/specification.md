# html.meaningful-links — Link text

| | |
| --- | --- |
| Status | Existing |
| Prerequisites | [html.images-links](../html.images-links/specification.md) |
| Chapter | [Lesson 02 — Links](../../../practices/lesson-02/02-links/README.md) |
| Exercise | [Meaningful Link Text](../../../practices/lesson-02/02-links/01-meaningful-link-text/README.md) |

Lesson 01 accepted `Visit Site`. This module requires the text to name the destination.

## Objectives

1. Link `guide.pdf` with the text `Download the guide`.
2. Link `https://developer.mozilla.org/en-US/docs/Web/HTML` with the text `HTML documentation`.
3. Explain why `click here` fails even when the `href` is right.

## Contract

The test rejects any link whose text is `click here`, case-insensitive. It then finds `href="guide.pdf"` and `href` equal to the MDN HTML URL, and compares their texts. `guide.pdf` does not need to exist. The URL must match exactly.

## Outcomes

A student can write a link that still makes sense if the URL is hidden, and can fix a vague label without changing the destination.
