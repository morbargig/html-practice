# Podcast brief: meaningful link text

## Questions

- What does a person hear if they skip from link to link?
- Why is a correct URL not enough?
- Why did the first link exercise allow a vaguer label?

## Explanations

Text and href are separate checks. One banned phrase fails the page. The PDF file is absent on purpose, as `contact.html` was. The MDN URL is exact.

## Example

A syllabus links "Week 3 notes" to `week-03.html`. Ask what the links list should say. Then ask what `click here` would do to a page that also has a good link.

## Misconceptions

- The URL is visible, so the text can be "here".
- `target="_blank"` is part of this grade.
- A 404 on `guide.pdf` means the test failed.

## Debugging scene

The guide href is right and the text is `click here to download the guide`. If the visible text is exactly `click here`, it fails the ban. If it is a longer sentence, compare it with `Download the guide`, which is the required string, not merely a non-empty one.

## Prompts

- When is "Read more" acceptable, and when is it the same problem as "click here"?
- Should the MDN link say the site name, the page name, or both? This exercise chooses `HTML documentation`.
- What will the About Me page add to this rule?

## Exercise

[Meaningful Link Text](../../../practices/lesson-02/02-links/01-meaningful-link-text/README.md).

## Takeaway

The words are the destination for anyone who cannot see the URL. The href still has to be the one the test named.
