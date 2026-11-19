# Study guide: About Me

Module [html.about-me](specification.md).

## What the page is

This is the end of lesson 02, not a new kind of element. It asks for a doctype, `lang="en"`, `title` `About Me`, one `h1` inside `header`, landmarks, a portrait, a list, an aside, and two footer links. The interests are `Hiking`, `Cooking`, `Music`. The aside heading is `Currently learning` and the paragraph is `Semantic HTML`. The footer has `id="profiles"`.

The nav points at `#interests` and `#profiles`. The footer id satisfies Profiles. Some element on the page must have `id="interests"`, or the Interests link has no destination. The test looks up that id. The heading text `Interests` does not create the id by itself.

The image `alt` must be exactly `Portrait of Alex Rivera`. An empty alt fails first. The lesson 01 profile used alt `Alex Rivera`. That shorter phrase fails here.

## Why it exists

Separate exercises proved each piece. This page is where a skipped heading, a vague link, or the wrong alt shows up together. Lab 01's final About Me check is looser: any title, any alt of five characters, any three list items. Passing the lab does not pass this exercise.

## How the checks work

The document test wants `lang` `en`, an HTML5 doctype, and the title. The outline test wants exactly one `h1`, the text `About Me`, that `h1` inside `header`, and no skipped levels. The main test wants the image path `images/photo.jpg` or `./images/photo.jpg`, the exact alt, an `h2` `Interests` in `main`, and a `ul` in `main` whose items are Hiking, Cooking, Music. The last test wants the aside, the footer id, both nav hrefs and their texts, the two footer URLs and their texts, and no link whose text is empty, `click here`, or `here`.

## When to copy, and when not to

Use the profile chapter's landmarks as a pattern. Do not copy its bio, its skill list, or its contact form. This page has no form. Use the meaningful-link rule for every anchor, not only the two you were thinking about.

## Common mistakes

- Alt text `Alex Rivera` from the earlier profile.
- `id="profiles"` missing because the link text already says Profiles.
- No `id="interests"` anywhere.
- A second `h1` in the aside. The outline allows one `h1`.
- Interests in a paragraph instead of a `ul`.

## How to debug

1. Read the first failing test name. Document, outline, main, and links are separate tests.
2. An alt failure quotes the found alt. Match `Portrait of Alex Rivera`.
3. A list failure quotes the items. Order is Hiking, Cooking, Music.
4. `Expected an element with id="interests"` means the href is fine and the target is missing.
5. A vague-link error names `click here` or `here`. Rewrite that anchor even if the GitHub link is already correct.

## Knowledge check

1. Why does Lab 01's About Me check not prove this exercise?
2. Where does `id="profiles"` have to be, and what still has to exist for Interests?
3. Why is a contact form a mistake on this page?
4. Which earlier alt string fails?

The lab accepts any adequate page. The footer carries `profiles`. Interests needs its own id. This contract has no form. `Alex Rivera` is the wrong alt.

## References

- Exercise: [About Me](../../../practices/lesson-02/07-pages/01-about-me/README.md)
- Earlier modules: [html.profile](../html.profile/study-guide.md), [html.meaningful-links](../html.meaningful-links/study-guide.md), [html.semantics](../html.semantics/study-guide.md)
