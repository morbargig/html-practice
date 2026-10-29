# HTML Practice

Hands-on HTML exercises for students who are learning to structure a web page. Each practice is a small page, a short brief, and an automated test. The tests look at the document the browser would build, so a passing result means the page has the right elements, text, and attributes.

Lessons live in `practices/lesson-01/` and `practices/lesson-02/`. Inside a lesson, chapters follow the subjects in that presentation.

## Google Classroom

Assignments and class materials are in [Google Classroom](https://classroom.google.com/w/ODkxNzk1OTQwMDY3/t/all).

## 🧪 Interactive Colab Labs

Practice HTML directly in your browser with interactive exercises, live previews, and automated tests.

### Lab 01 — HTML Fundamentals

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/morbargig/html-practice/blob/main/labs/lesson-01/lab-01-html-fundamentals.ipynb)

Notebook: [labs/lesson-01/lab-01-html-fundamentals.ipynb](labs/lesson-01/lab-01-html-fundamentals.ipynb)

Topics:

- HTML document structure
- Headings and paragraphs
- Lists
- Links and images
- Semantic HTML
- Final About Me exercise
- Automated HTML validation

### Lab 02 — Advanced HTML & Native Interactivity

**HTML Lesson 2: Beyond the Basics.** Build an interactive student portal with HTML only.

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/morbargig/html-practice/blob/main/labs/lesson-02/Lab_02_Advanced_HTML_Native_Interactivity.ipynb)

Notebook: [labs/lesson-02/Lab_02_Advanced_HTML_Native_Interactivity.ipynb](labs/lesson-02/Lab_02_Advanced_HTML_Native_Interactivity.ipynb)

Topics:

- Attributes and advanced inputs
- Fieldset, legend, and datalist
- Details, popovers, and dialogs
- Progress and meter
- Final interactive student portal

Open the lab in Colab and select **File → Save a copy in Drive**. Work only on your own copy.

## Who it is for

Students who are new to HTML and can open a folder in VS Code. You edit `index.html`. In [Link a Stylesheet](practices/lesson-01/04-head-and-metadata/03-link-a-stylesheet/), you also connect a `style.css` file. You do not need a browser to run the tests.

CSS properties such as color, fonts, the box model, and layout are not in this set. The third course presentation could not be opened (it asks for a Google sign-in), so those topics were left out rather than guessed.

## How a practice works

1. Open the next lesson, starting at [01 — Setting Up Your HTML Development Environment](practices/lesson-01/).
2. Open the next chapter in that lesson, starting at [01 — Text](practices/lesson-01/01-text/).
3. Open the next exercise, starting at [Hello Heading](practices/lesson-01/01-text/01-hello-heading/).
4. Read that folder's `README.md`.
5. Edit `index.html`. A comment marks the spot to write in.
6. Run the test for that exercise.
7. Read the failure message, change the page, and run the test again.

The early pages ask for one element. Later pages ask you to combine headings, regions, media, and forms you have already practiced.

The files `index.html`, `moshe.html`, and `images/` in the repository root are separate from this exercise set. Do the work in `practices/`.

Leave these files as they are:

- `test.js` in each practice
- `lib/`
- `package.json`, `package-lock.json`, and `jest.config.js`
- `.github/workflows/`
- `scripts/`

Finished pages are not in this branch. They are checked on `student/answers`.

## Install

You need Node.js 20 or newer. The GitHub Action uses Node.js 24.

```bash
npm install
```

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

You can also open `index.html` with Live Server in VS Code. The tests do not need that preview.

## Fork this repository

1. Fork [html-practice](https://github.com/morbargig/html-practice). The fork starts from `main`.
2. Open the **Actions** tab on your fork. Enable workflows if GitHub says they are disabled.
3. Edit `index.html` in a practice folder. Leave `test.js` as it is.
4. Commit that page and push it to your fork.
5. Open the push on the **Actions** tab. **Progress report** lists every practice and the result for its `index.html`.

Answering one practice rechecks that page on your fork. Pages you have not finished stay failed. A topic turns green when every practice in that topic passes.

## GitHub Actions

`.github/workflows/exercise-tests.yml` runs when a practice page, a lab, a test, or the workflow changes. It reads `practices/lesson-NN/` and tests each topic's `index.html` files. `main` has no `solutions/` pages, so your fork is graded from the practice page you edit.

| Group | Topics |
| --- | --- |
| 01 · Setting up HTML | 01 · Text, 02 · Images and links, 03 · Tables and forms, 04 · Head and metadata, 05 · Personal profile |
| 02 · Introduction to HTML | 01 · Text, 02 · Links, 03 · Lists, 04 · Semantic structure, 05 · Media and embeds, 06 · Forms, 07 · Pages |

A topic runs again when a page or test in that topic changes. An unchanged topic reuses its cached result.

## Recommended order

Finish lesson 01 before lesson 02. Inside a lesson, finish each chapter before the next one.

| Lesson | Chapters |
| --- | --- |
| [01 — Setting Up Your HTML Development Environment](practices/lesson-01/) | Text, Images and Links, Tables and Forms, Head and Metadata, Personal Profile |
| [02 — Introduction to HTML](practices/lesson-02/) | Text, Links, Lists, Semantic Structure, Media and Embeds, Forms, Pages |
