# Podcast brief: article and aside

## Questions

- What would still make sense if you pasted it into another site?
- What is a note that the story does not depend on?
- Why does the outline still start at `h1`?

## Explanations

`article` is the independent piece. `aside` is related. `section` on the news page is the schedule, which belongs to this page. The profile landmarks are necessary and not sufficient. Heading sequence still forbids a skip.

## Example

A match report is an article. "Gates open at noon" beside it is an aside if it is not the report. Ask which tag each one gets. Do not use Campus Fair as the example's title until the listener has chosen.

## Misconceptions

- `article` means "newspaper" and cannot be a short note. The small exercise is a short note that stands alone.
- Aside means a sidebar column created with CSS. The tag comes first. CSS is the other course.
- Any region inside `main` should be an `article`. The schedule is a `section`.

## Debugging scene

The aside text `Bring a notebook.` is inside the article, and the aside is empty. The story test fails the aside paragraph, and the article may fail because its text is wrong too.

## Prompts

- Can a page have more than one `article`? Yes. This news exercise has one.
- Why is `lang` on this page graded when the starter already has it?
- What will About Me use from this module? An aside, landmarks, and an outline.

## Exercises

[Article and Aside](../../../practices/lesson-02/04-semantic-structure/01-article-and-aside/README.md) and [A Semantic Article](../../../practices/lesson-02/04-semantic-structure/02-semantic-article/README.md).

## Takeaway

Choose the element that names the role. Keep the outline legal. Do not paste the profile page over Campus News.
