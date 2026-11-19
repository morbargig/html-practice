# Study guide: article and aside

Module [html.semantics](specification.md).

## What they are

`article` is a composition that would still make sense if it were syndicated on its own: a post, a story, a comment. `aside` is content related to what is around it, not the main composition: a note, a tangent, a related link. Both are landmarks. They are not synonyms for `div`.

The small exercise uses `h2` `First Post` and the paragraph `This note stands on its own.` inside `article`, and `h2` `Note` with `Asides are related, not the main story.` inside `aside`.

The Campus News page is the combined document. `html lang="en"`. Title and `h1` are `Campus News`. Nav: `Story` to `#story`, `Notes` to `#notes`. Inside `main`: `article id="story"` with `h2` `Campus Fair` and `The campus fair is on Friday.`, and `section id="notes"` with `h2` `Schedule` and `Doors open at 10:00.` The aside is `h2` `Related` and `Bring a notebook.` The footer paragraph is `© 2026 Campus News`.

## Why they exist

The profile page could name its regions and still call the story a `section`. `article` says the fair notice can stand alone. `aside` says the notebook reminder is not that story. Putting both in `div` elements loses that difference. The heading ranks still apply: the page `h1` comes first, and the story `h2` does not skip a level.

## How the checks work

The small test looks inside `article` and `aside` for those headings and paragraphs. Swapping the two regions fails because each string is queried inside its element.

The news test checks the doctype's companion requirements that this starter must keep: `lang="en"` and the title. It checks the heading sequence, so `h1` then a jump to `h3` fails. It requires the article and the section to be inside `main`, the ids the nav uses, the aside text, and the footer sentence.

## When to use them

Use `article` when the block has its own heading and could be copied out. Use `aside` when removing it would leave the main story intact. Use `section` for a region that is part of the page outline but is not an independent composition. The schedule is a `section` on this page. The fair story is an `article`.

## Common mistakes

- The profile landmarks only, with no `article` or `aside`.
- The story `h2` placed before the page `h1`.
- `id="story"` on `main` instead of on the article, so the nav target and the article disagree.
- The aside paragraph pasted into the article.

## How to debug

1. A missing string inside `article` means the paragraph is in the wrong parent.
2. A heading-sequence error names the tag that skipped. Re-rank it.
3. `Expected an element with id="story"` style failures mean the href and the id diverged.
4. `lang` must stay `en`. An empty `lang` fails the news page even when the story text is right.

## Knowledge check

1. Why is the fair an `article` and the schedule a `section`?
2. What happens to the outline if the story uses `h3` directly under the page `h1`?
3. Which landmarks did the profile chapter already require?

The fair stands alone. The schedule is part of this page. The skip fails `expectHeadingSequence`. The profile required header, nav, main, section, and footer, not article or aside.

## References

- MDN: [`article`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article) and [`aside`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/aside)
- Exercises in [04 — Semantic Structure](../../../practices/lesson-02/04-semantic-structure/README.md)
