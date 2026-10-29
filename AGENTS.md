# Agent notes

The root [README.md](README.md) is the map of this repository. Keep that file short, and keep the detail in the README that sits next to the files it describes.

## How the READMEs connect

| Topic | File | What belongs there |
| --- | --- | --- |
| Course map | [README.md](README.md) | Table of contents, one-paragraph summaries, the lesson 01 Colab badge, install, tests, and CI |
| Labs | [labs/README.md](labs/README.md) | Fork steps, every notebook, lab topics, and preview notes |
| Practices | [practices/README.md](practices/README.md) | The lesson list |
| A lesson | `practices/lesson-NN/README.md` | That lesson's chapters |
| A chapter | `practices/lesson-NN/NN-topic/README.md` | That chapter's exercises |
| An exercise | the exercise folder's `README.md` | The student brief |
| Solutions | [solutions/README.md](solutions/README.md) | How reference pages are laid out |
| Playground | [playground/README.md](playground/README.md) | The sample pages and what each section demonstrates |
| Extensions | [extensions/README.md](extensions/README.md) | VS Code extensions, including Live Server install and how to preview a page |

Link with a relative path to the `README.md` file, for example [labs/README.md](labs/README.md). A link to the folder is not a substitute. GitHub renders each folder's README when the link target is `README.md`.

Do not embed a README or a notebook in an iframe. GitHub removes iframe tags, so the link is the page.

## When you add or rename something

1. Write or update the README in that folder.
2. Link it from the parent README: exercise from chapter, chapter from lesson, lesson from [practices/README.md](practices/README.md) or notebook from [labs/README.md](labs/README.md).
3. Add a row to the contents table in the root [README.md](README.md) when the new page is a lab guide, a lesson, or another top-level README.
4. Leave fork steps, the lesson 02 lab write-up, and exercise lists out of the root README. The root page may keep the lesson 01 **Open in Colab** badge and a short topic line, then send the reader to [labs/README.md](labs/README.md).

Follow the "Add a lesson" steps in the root README when a lesson, chapter, or notebook is new. Do not copy a solution into a lab or a practice while moving folders.
