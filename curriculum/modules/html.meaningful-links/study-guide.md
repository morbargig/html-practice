# Study guide: meaningful link text

Module [html.meaningful-links](specification.md).

## What it is

The link text is the content of `a`. It is the only part some readers hear when they pull up a list of links. `href` is still the destination. This exercise wants two destinations and two labels: `guide.pdf` with `Download the guide`, and the MDN HTML docs URL with `HTML documentation`.

## Why it exists

`Visit Site` and `click here` say nothing about where the reader will go. Out of context they are useless. The earlier exercise used `Visit Site` as a first link. This one replaces that habit.

## How the check works

If any `a` has the text `click here`, the test stops with that message. It does not give credit for a second, better link on the same page. The guide link is found by `href="guide.pdf"`. The docs link is found by the exact MDN URL. A shortened MDN URL fails even if the text is `HTML documentation`.

## When to use it

Write the destination into the sentence: "Download the guide", "HTML documentation", "Alex Rivera's GitHub". Do not append "click here" beside a good label. The About Me page later rejects both `click here` and `here`.

## Common mistakes

- A correct href with the text `click here`.
- The right words on the wrong href.
- `https://developer.mozilla.org/` without the `/en-US/docs/Web/HTML` path.
- Adding `target="_blank"` and expecting it to be required. This test does not read `target`.

## How to debug

1. The `click here` error means you delete or rewrite that link. A good second link does not cancel it.
2. `Expected a link with href="guide.pdf"` means the path differs.
3. A text mismatch quotes the found label. The href was good.
4. The PDF 404s in the browser. The test still passes. The file is not part of the repo.

## Knowledge check

1. Why does lesson 01's `Visit Site` not belong on this page?
2. Why is one bad link enough to fail?
3. What is the difference between a wrong href and a wrong label in the failure text?

`Visit Site` does not name a destination. The test scans every link for the banned phrase. A missing href error and a text mismatch name different problems.

## References

- MDN: [Link text](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#accessibility)
- Exercise: [Meaningful Link Text](../../../practices/lesson-02/02-links/01-meaningful-link-text/README.md)
