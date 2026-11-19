# Learning path

This file is the sequence index for the HTML course and the CSS course that follows it. HTML teaches the document. CSS teaches presentation. The only shared exercise is the stylesheet link in `html.document-head`. The student attaches `style.css` and does not write rules in this repository.

Folder names stay as they are. A proposed module is not a lesson yet.

## HTML, existing

Study notes for each row are linked from [curriculum/README.md](README.md).

| ID | What the student learns | Exercises or lab |
| --- | --- | --- |
| [html.text](modules/html.text/specification.md) | One heading, one paragraph, then both | [01 — Text](../practices/lesson-01/01-text/README.md) |
| [html.images-links](modules/html.images-links/specification.md) | An image, an absolute link, a relative link | [02 — Images and Links](../practices/lesson-01/02-images-and-links/README.md) |
| [html.tables-forms](modules/html.tables-forms/specification.md) | A two-column table, then a labeled email form | [03 — Tables and Forms](../practices/lesson-01/03-tables-and-forms/README.md) |
| [html.document-head](modules/html.document-head/specification.md) | Charset, title, meta, a comment, and the stylesheet link | [04 — Head and Metadata](../practices/lesson-01/04-head-and-metadata/README.md) |
| [html.profile](modules/html.profile/specification.md) | A list, page regions, and a combined profile | [05 — Personal Profile](../practices/lesson-01/05-personal-profile/README.md) |
| [html.text-meaning](modules/html.text-meaning/specification.md) | `em`, `strong`, and heading levels that do not skip | [Lesson 02 — Text](../practices/lesson-02/01-text/README.md) |
| [html.meaningful-links](modules/html.meaningful-links/specification.md) | Link text that names the destination | [Lesson 02 — Links](../practices/lesson-02/02-links/README.md) |
| [html.lists](modules/html.lists/specification.md) | One unordered list and one ordered list | [Lesson 02 — Lists](../practices/lesson-02/03-lists/README.md) |
| [html.semantics](modules/html.semantics/specification.md) | `article`, `aside`, and a landmark page | [Lesson 02 — Semantic Structure](../practices/lesson-02/04-semantic-structure/README.md) |
| [html.media](modules/html.media/specification.md) | Video, audio, captions, and a titled iframe | [Lesson 02 — Media and Embeds](../practices/lesson-02/05-media-and-embeds/README.md) |
| [html.forms-complete](modules/html.forms-complete/specification.md) | A form that posts named, typed controls | [Lesson 02 — Forms](../practices/lesson-02/06-forms/README.md) |
| [html.about-me](modules/html.about-me/specification.md) | A combined About Me page | [Lesson 02 — Pages](../practices/lesson-02/07-pages/README.md) |
| [html.lab-fundamentals](modules/html.lab-fundamentals/specification.md) | The lesson 01 Colab notebook | [Lab 01](../labs/README.md) |
| [html.lab-interactivity](modules/html.lab-interactivity/specification.md) | The lesson 02 Colab notebook and the lesson 03 practices | [Lab 02](../labs/README.md) and [Lesson 03](../practices/lesson-03/README.md) |

`html.lists` and `html.semantics` revisit the list and the landmarks from `html.profile`. The later modules add ordered lists, `article`, and `aside`.

`html.lab-fundamentals` overlaps the early practices with looser checks. `html.lab-interactivity` is the Colab notebook. Lesson 03 grades those controls. `select`, radio, and checkbox stay in the proposed `html.forms-choices` module.

## HTML, proposed

These are not exercises yet. Lesson 03 is the approved practice set for the Lab 02 controls other than `select`, radio, and checkbox.

| ID | Why it is listed | Depends on |
| --- | --- | --- |
| `html.forms-choices` | `select`, radio, and checkbox are named in Lab 02 and are not a Jest exercise | `html.forms-complete` |
| `html.figures` | `figure` and `figcaption` are not graded | `html.images-links` |
| `html.link-safety` | `rel="noopener"` on `target="_blank"` is not graded | `html.images-links` |

## CSS, after this course

Graded in [css-practice](https://github.com/morbargig/css-practice). The pathway there keeps the current lesson 01 order and lists selectors, the cascade, and the box model as proposed modules that are not inserted into that lesson.

| ID | What the student learns |
| --- | --- |
| `css.color` | Computed text color on a class |
| `css.border` | A solid border on every side |
| `css.display` | `inline-block` on items that already have a size |
| `css.float` | A right-floated aside whose right edge meets the section |
| `css.flex` | A row of cards with a 16px gap |

## What a finished module lets a student do

1. Say what the element or attribute is for.
2. Explain why the browser or the test treats it that way.
3. Implement it in the exercise.
4. Debug a wrong tag, a wrong string, or a missing attribute.
5. Use the same idea in a different sentence or a different region.
