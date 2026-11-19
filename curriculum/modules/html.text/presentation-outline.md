# Presentation outline: headings and paragraphs

Matches [specification.md](specification.md).

## 1. The starter is already a document

| | |
| --- | --- |
| Objective | 5, in reverse: know what not to rebuild. |
| Explanation | Doctype, `lang`, charset, and `title` are present. The body is a comment. |
| Visual | The starter file with the comment marked. |
| Code | The comment `Write your solution here`. Do not show a finished lesson page. |
| Interaction | Students name the file they edit. |
| Exercise | [Hello Heading](../../../practices/lesson-01/01-text/01-hello-heading/README.md) |

## 2. A heading is not the tab title

| | |
| --- | --- |
| Objective | 1. |
| Explanation | `title` names the document. `h1` is the on-page topic. The required text is `Hello World`. |
| Visual | A browser tab reading `Practice 01` and an empty page. |
| Code | Students add one `h1` in the body. |
| Interaction | Run `npm test -- 01-hello-heading`. |
| Exercise | [Hello Heading](../../../practices/lesson-01/01-text/01-hello-heading/README.md) |

## 3. A paragraph is one block of text

| | |
| --- | --- |
| Objective | 2. |
| Explanation | `p` wraps the sentence. The exclamation mark is part of the text. Whitespace at the edges is collapsed. Capitals are not. |
| Visual | The sentence as a block under nothing else. |
| Code | Students add one `p` in the paragraph exercise, not in the heading file. |
| Interaction | Run `npm test -- 02-paragraph`. |
| Exercise | [A Paragraph](../../../practices/lesson-01/01-text/02-paragraph/README.md) |

## 4. One of each

| | |
| --- | --- |
| Objective | 3 and 4. |
| Explanation | The combined page needs both strings and exactly one of each element. A second heading fails the count. |
| Visual | Heading, then paragraph, in source order. |
| Code | Students edit the third folder only. |
| Interaction | Run `npm test -- 03-heading-and-paragraph`. Ask what `Found 2` means. |
| Exercise | [Heading and Paragraph](../../../practices/lesson-01/01-text/03-heading-and-paragraph/README.md) |

## 5. The same tags, different words

| | |
| --- | --- |
| Objective | 5. |
| Explanation | `Harbor notes` and a tide sentence use the same elements. They fail these exercises because the strings are the contract. |
| Visual | A scratch page beside the graded page. |
| Code | The harbor example from the study guide, written in a file that is not an exercise. |
| Interaction | Students say which check would fail and which idea is still correct. |
| Exercise | Ungraded. The three graded folders stay on the lesson strings. |
