# Study guide: the personal profile

Module [html.profile](specification.md).

## What the pieces are

`ul` is an unordered list. `li` is one item. Order in the source is the order readers and the test see. This list's items are `Headings`, `Links`, `Images`.

`header` introduces the page. `nav` is the navigation. `main` is the primary content. `section` is a region of that content. `footer` closes the page. These names are landmarks. A `div` can look the same and fails a test that queries `header`.

`href="#about"` looks for an element whose `id` is `about` in this document. The hash is not a separate file.

The full profile adds the photo, a skill list, and a form. The form reuses `for` and `id`. The message is a `textarea`, not a one-line input. The footer links the word `GitHub` to `https://github.com/alexrivera`.

## Why they exist

A profile is the first page that has more than one job: introduce a person, list skills, and offer contact. Landmarks let a reader jump. The list keeps three skills from becoming three unrelated paragraphs. The fragment links let `About` and `Contact` move the viewport to those regions.

## How the checks work

The list test wants one `ul` and those three strings in order. `Links` before `Headings` fails.

The regions test wants one of each landmark, the `h1`, the two nav hrefs, `main id="about"`, the sentence `I am learning HTML.`, `section id="contact"`, `h2` `Contact`, and the copyright paragraph. The full profile uses a longer bio. Copying the skeleton sentence into the full page fails that string.

The full profile also wants the image path and alt `Alex Rivera`, the skill items `HTML`, `Accessibility`, `Tables`, labeled required `name` and `email`, a required `textarea` for the message, button `Send`, and the GitHub link. Label `for` values must match the field ids.

## When to use them

Use `ul` when the items are a set. The next list chapter adds `ol` for steps. Use landmarks when a page has those roles. Do not wrap every paragraph in a `section`. Use a fragment when the destination is on this page. Use a full URL when it is not.

## Common mistakes

- Numbering the skill list by hand (`1. Headings`) instead of using `li`.
- `href="about"` without the hash, which looks for a file.
- `id="About"` while the link says `#about`. Ids are case-sensitive.
- The short bio on the long page, or the long bio on the skeleton.
- An `input` for the message. The full profile wants `textarea`.

## How to debug

1. A list failure quotes the items it found. Reorder or retype them.
2. A missing landmark is a missing tag, not a missing CSS class.
3. A nav failure names the href it wanted. Check the hash and the matching id.
4. A form failure on the full page usually means `for` and `id` disagree, or the control is the wrong kind.
5. Preview with Live Server and click `About`. If the page does not move, the id is missing or spelled differently from the href.

## Knowledge check

1. Why is this list `ul` rather than three paragraphs?
2. What element makes `#contact` a real destination?
3. Which sentence belongs to the skeleton, and which to the full profile?
4. Why does lesson 02's list chapter still have work to do after this one?

The list is a set of peers. The element with `id="contact"` is the destination. The skeleton says `I am learning HTML.` The full page says `I am learning to build web pages with HTML.` Lesson 02 adds an ordered list and different items.

## References

- MDN: [`ul`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul), [content sectioning](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#content_sectioning)
- Exercises in [05 — Personal Profile](../../../practices/lesson-01/05-personal-profile/README.md)
