# HTML Practice

Hands-on HTML exercises for students who are learning to structure a web page. Each practice is a small page, a short brief, and an automated test. The tests look at the document the browser would build, so a passing result means the page has the right elements, text, and attributes.

Lessons use the same numbering in `labs/` and `practices/`. A lesson folder is created only when that lesson has a lab or a practice set.

## Contents

| | Where to go |
| --- | --- |
| [Google Classroom](#google-classroom) | Class assignments |
| [Labs](#labs) | [labs/README.md](labs/README.md) |
| [Practices](#practices) | [practices/README.md](practices/README.md) |
| [Lesson 01 practices](#practices) | [practices/lesson-01/README.md](practices/lesson-01/README.md) |
| [Lesson 02 practices](#practices) | [practices/lesson-02/README.md](practices/lesson-02/README.md) |
| [Playground](#playground) | [playground/README.md](playground/README.md) |
| [Extensions](#extensions) | [extensions/README.md](extensions/README.md) |
| [Repository structure](#repository-structure) | Folders in this repo |
| [Recommended order](#recommended-order) | What to finish first |
| [Who it is for](#who-it-is-for) | |
| [How a practice works](#how-a-practice-works) | |
| [Install](#install) | |
| [Run the tests](#run-the-tests) | |
| [Work on one exercise](#work-on-one-exercise) | |
| [GitHub Actions](#github-actions) | |
| [Add a lesson](#add-a-lesson) | |

Each linked README continues the map. A lesson README links its chapters. A chapter README links its exercises. Layout rules for later edits are in [AGENTS.md](AGENTS.md).

## Google Classroom

Assignments and class materials are in [Google Classroom](https://classroom.google.com/w/ODkxNzk1OTQwMDY3/t/all).

## Labs

A lab is a notebook you open in Google Colab. It walks through HTML exercises and shows a live preview. Lab 01 also checks your HTML. Finish lesson 01 before lesson 02.

Fork this repository first, then open the notebook from your own copy. The fork steps, the lesson 02 notebook, and the preview notes are in [labs/README.md](labs/README.md).

### Lesson 01 — HTML Fundamentals

Start with this notebook.

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/morbargig/html-practice/blob/main/labs/lesson-01/lab-01-html-fundamentals.ipynb)

Notebook: [labs/lesson-01/lab-01-html-fundamentals.ipynb](labs/lesson-01/lab-01-html-fundamentals.ipynb)

Topics: document structure, headings, paragraphs, lists, links, images, semantic HTML, and a final About Me page.

## Practices

You edit `index.html` in an exercise folder, read that folder's `README.md`, and run its test. The lesson list is in [practices/README.md](practices/README.md).

| Lesson | README |
| --- | --- |
| 01 — Setting Up Your HTML Development Environment | [practices/lesson-01/README.md](practices/lesson-01/README.md) |
| 02 — Introduction to HTML | [practices/lesson-02/README.md](practices/lesson-02/README.md) |

## Playground

[playground/README.md](playground/README.md) holds the sample pages. They are separate from the practices.

## Extensions

[extensions/README.md](extensions/README.md) lists the VS Code extensions for this course. Install Live Server there, then open a practice `index.html` and review the page in the browser.

## Repository structure

```text
labs/
  README.md     Lab guide, fork steps, and both notebooks
  lesson-01/    HTML Fundamentals notebook
  lesson-02/    Lab 02 notebook
practices/
  README.md     Practice lesson list
  lesson-01/    Setting Up Your HTML Development Environment
  lesson-02/    Introduction to HTML
playground/
  README.md     What the sample pages demonstrate
  index.html    Bird notebook: table, links, form, and images
  guide.html    What the playground folder is for
  gallery.html  The bird picture on its own
  images/       The bird picture used by the notebook
extensions/
  README.md     VS Code extensions, including how to install Live Server
```

## Recommended order

Finish lesson 01 before lesson 02. Inside a lesson, finish each chapter before the next one. Lesson 02 also includes the Colab lab in [labs/README.md](labs/README.md).

| Lesson | Next README |
| --- | --- |
| [01 — Setting Up Your HTML Development Environment](practices/lesson-01/README.md) | Text, Images and Links, Tables and Forms, Head and Metadata, Personal Profile |
| [02 — Introduction to HTML](practices/lesson-02/README.md) | Text, Links, Lists, Semantic Structure, Media and Embeds, Forms, Pages, and the Colab lab |

## Who it is for

Students who are new to HTML and can open a folder in VS Code. You edit `index.html`. In [Link a Stylesheet](practices/lesson-01/04-head-and-metadata/03-link-a-stylesheet/README.md), you also connect a `style.css` file. You do not need a browser to run the tests. Use Live Server, listed in [extensions/README.md](extensions/README.md), when you want to review the page.

CSS properties such as color, fonts, the box model, and layout are not in this set. The third course presentation could not be opened (it asks for a Google sign-in), so those topics were left out rather than guessed.

## How a practice works

1. Open the next lesson, starting at [01 — Setting Up Your HTML Development Environment](practices/lesson-01/README.md).
2. Open the next chapter in that lesson, starting at [01 — Text](practices/lesson-01/01-text/README.md).
3. Open the next exercise, starting at [Hello Heading](practices/lesson-01/01-text/01-hello-heading/README.md).
4. Read that folder's `README.md`.
5. Edit `index.html`. A comment marks the spot to write in.
6. Run the test for that exercise.
7. Read the failure message, change the page, and run the test again.
8. Open `index.html` with Live Server and review the page. Install steps are in [extensions/README.md](extensions/README.md).

The early pages ask for one element. Later pages ask you to combine headings, regions, media, and forms you have already practiced.

The sample pages in [playground/README.md](playground/README.md) are separate from this exercise set. Do the work in `practices/`.

Leave these files as they are:

- `test.js` in each practice
- `lib/`
- `package.json`, `package-lock.json`, and `jest.config.js`
- `.github/workflows/`
- `scripts/`

Finished pages are not in this branch. They stay on `student/answers`.

## Install

You need Node.js 20 or newer. The GitHub Action uses Node.js 24.

```bash
npm install
```

Install Live Server in VS Code before you preview a page. The steps are in [extensions/README.md](extensions/README.md).

## Run the tests

Every practice:

```bash
npm test
```

One exercise:

```bash
npm test -- 02-add-a-link
```

One chapter:

```bash
npm test -- 02-images-and-links
```

One presentation:

```bash
npm test -- practices/lesson-01
```

A failing practice test means that page is not finished. The message names the missing element or the text it expected, for example: `Expected the <h1> text to be "Hello World".`

## Work on one exercise

```bash
cd practices/lesson-01/02-images-and-links/02-add-a-link
```

Edit `index.html`, then from the repository root:

```bash
npm test -- 02-add-a-link
```

Open that same `index.html` with Live Server to review the page. Install steps are in [extensions/README.md](extensions/README.md).

## GitHub Actions

`.github/workflows/exercise-tests.yml` runs when a practice page, a lab, a test, or the workflow changes. It reads `practices/lesson-NN/` and tests each topic's `index.html` files. `main` has no `solutions/` pages, so your fork is graded from the practice page you edit.

Fork [html-practice](https://github.com/morbargig/html-practice). The fork starts from `main`. Open the **Actions** tab on your fork and enable workflows if GitHub says they are disabled. Edit `index.html` in a practice folder, commit that page, and push it to your fork.

Each push tests every practice `index.html`. A page you have not edited is **not started** and fails that topic. A page you edited is tested, and a wrong answer fails that topic. The check is green only when every practice page passes. Open **Progress report** to see which pages passed, which failed, and which are still not started.

| Group | Topics |
| --- | --- |
| 01 · Setting up HTML | 01 · Text, 02 · Images and links, 03 · Tables and forms, 04 · Head and metadata, 05 · Personal profile |
| 02 · Introduction to HTML | 01 · Text, 02 · Links, 03 · Lists, 04 · Semantic structure, 05 · Media and embeds, 06 · Forms, 07 · Pages |

A topic runs again when a page or test in that topic changes. An unchanged topic reuses its cached result.

## Add a lesson

1. Create `practices/lesson-NN/README.md` and link it from [practices/README.md](practices/README.md) and from the contents table in this file.
2. Add chapters as `NN-topic/NN-exercise/`, each with `index.html`, `README.md`, and `test.js`. Keep the exercise names that already exist when you are only moving a lesson. Link each new README from its parent README. End each exercise README with a Live Server preview step that links to [extensions/README.md](extensions/README.md), so the student can review the page after the test.
3. Put the finished reference page on `student/answers`, under `solutions/practices/lesson-NN/.../index.html`. Leave the practice `index.html` on `main` as the unfinished starter.
4. Put a Colab notebook in `labs/lesson-NN/` when that lesson has one, and add it to [labs/README.md](labs/README.md). The root README keeps the lesson 01 Colab link and points here for the rest.
5. Add a short title to `LESSON_TITLES` in `scripts/ci_discover_matrix.py` when the Actions check should use a course name.

The workflow already watches `labs/**` and `practices/**`. A new `practices/lesson-NN` folder with a README and tested chapters is picked up on the next run.
