# Podcast brief: headings and paragraphs

Use this with [study-guide.md](study-guide.md). Do not read the slides. The listener should be able to place one heading and one paragraph before opening a folder.

## Conceptual questions

- Why does a page need a heading if the browser tab already has a title?
- What makes a paragraph different from two lines separated by pressing Enter in the source?
- Why does the third exercise reject a second `h1` that also says `Hello World`?

## Explanations to keep

The `h1` is the topic in the body. The `title` is metadata. The `p` is one thought. The test builds a document with jsdom and compares text after collapsing whitespace. The exclamation mark and the capitals are part of the paragraph contract. Exactly one means the count, not "at least one".

## Practical example

A slip of paper titled "Harbor notes" with one sentence under it, "The morning tide is still out." Ask which tag is the slip's title and which is the sentence. Those strings are not the graded ones.

## Misconceptions

- The `<title>` is the heading the reader sees.
- `<br>` inside the body creates the paragraph the test wants.
- Any heading level is fine if the words are right.
- A passing Live Server preview is the grade. The grade is the test.

## Debugging scene

The test says it expected `Welcome to HTML in VS Code!` and found `Welcome to HTML in VS Code`. The element is right. One character is missing. A second scene: the words are on the page and the test says no `h1` was found, because they were typed under the title in `head`.

## Discussion prompts

- When would a page be allowed more than one `h1`, and why does this chapter forbid it?
- What should the next chapter add under this heading: a picture, a link, or another topic of the same rank?
- Why keep the lesson strings fixed instead of accepting any sentence?

## Exercises

[Hello Heading](../../../practices/lesson-01/01-text/01-hello-heading/README.md), [A Paragraph](../../../practices/lesson-01/01-text/02-paragraph/README.md), and [Heading and Paragraph](../../../practices/lesson-01/01-text/03-heading-and-paragraph/README.md).

## Takeaway

The heading names the page in the body. The paragraph holds the sentence. The test wants those roles once each, with the lesson's characters intact.
