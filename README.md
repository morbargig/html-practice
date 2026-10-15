# HTML Practice

Hands-on HTML exercises for students who are learning to structure a web page. Each practice is a small page, a short brief, and an automated test. The tests look at the document the browser would build, so a passing result means the page has the right elements, text, and attributes.

Each numbered folder at the top is one course presentation. Inside it, chapters follow the subjects in that presentation.

## Google Classroom

Assignments and class materials are in [Google Classroom](https://classroom.google.com/w/ODkxNzk1OTQwMDY3/t/all).

## 🧪 Interactive Colab Labs

Practice HTML directly in your browser with interactive exercises, live previews, and automated tests. Students run each lab in Colab from their own fork.

1. Fork this repository on GitHub.
2. In your fork, replace `morbargig` in each **Open in Colab** link with your own GitHub username.
3. Open the lab from that updated link.
4. In Colab, select **File → Save a copy in Drive**. Work only on your own copy.

A link in this repository looks like this:

`https://colab.research.google.com/github/morbargig/html-practice/blob/main/labs/lab-01-html-fundamentals.ipynb`

After the fork, the same link uses your username:

`https://colab.research.google.com/github/YOUR_USERNAME/html-practice/blob/main/labs/lab-01-html-fundamentals.ipynb`

Finish Lab 01 before Lab 02. Both labs are described in [labs/README.md](labs/README.md).

### Lab 01 — HTML Fundamentals

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/morbargig/html-practice/blob/main/labs/lab-01-html-fundamentals.ipynb)

Notebook: [labs/lab-01-html-fundamentals.ipynb](labs/lab-01-html-fundamentals.ipynb)

Topics:

- HTML document structure
- Headings and paragraphs
- Lists
- Links and images
- Semantic HTML
- Final About Me exercise
- Automated HTML validation

### Lab 02 — Advanced HTML and Native Interactivity

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/morbargig/html-practice/blob/main/labs/lab-02-native-interactivity.ipynb)

Notebook: [labs/lab-02-native-interactivity.ipynb](labs/lab-02-native-interactivity.ipynb)

Topics:

- Attributes and advanced inputs
- Fieldsets, legends, and datalists
- Details, popovers, and dialogs
- Progress and meter
- Final interactive student portal
- Automated HTML checks

Popovers and dialogs need a current version of Chrome. Colab checks the markup. Download `student-portal.html` from the final exercise and open it in the browser to try those controls. This lab uses HTML only.

## Recommended order

Finish presentation 01 before presentation 02. Inside a presentation, finish each chapter before the next one.

| Presentation | Chapters |
| --- | --- |
| [01 — Setting Up Your HTML Development Environment](01-setting-up-html-development-environment/) | Text, Images and Links, Tables and Forms, Head and Metadata, Personal Profile |
| [02 — Introduction to HTML](02-introduction-to-html/) | Text, Links, Lists, Semantic Structure, Media and Embeds, Forms, Pages |

## Who it is for

Students who are new to HTML and can open a folder in VS Code. You edit `index.html`. In [Link a Stylesheet](01-setting-up-html-development-environment/04-head-and-metadata/03-link-a-stylesheet/), you also connect a `style.css` file. You do not need a browser to run the tests.

CSS properties such as color, fonts, the box model, and layout are not in this set. The third course presentation could not be opened (it asks for a Google sign-in), so those topics were left out rather than guessed.

## How a practice works

1. Open the next presentation, starting at [01 — Setting Up Your HTML Development Environment](01-setting-up-html-development-environment/).
2. Open the next chapter in that presentation, starting at [01 — Text](01-setting-up-html-development-environment/01-text/).
3. Open the next exercise, starting at [Hello Heading](01-setting-up-html-development-environment/01-text/01-hello-heading/).
4. Read that folder's `README.md`.
5. Edit `index.html`. A comment marks the spot to write in.
6. Run the test for that exercise.
7. Read the failure message, change the page, and run the test again.

The early pages ask for one element. Later pages ask you to combine headings, regions, media, and forms you have already practiced.

The files `index.html`, `moshe.html`, and `images/` in the repository root are separate from this exercise set. Do the work in the numbered presentation folders.

Leave these files as they are:

- `test.js` in each practice
- `lib/`
- `package.json`, `package-lock.json`, and `jest.config.js`
- `.github/workflows/`
- `scripts/ci-*`
- `solutions/`

`solutions/` holds one finished page per practice so the tests themselves can be checked. Try the exercise before you open a solution.

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
npm test -- 01-setting-up-html-development-environment
```

Check the reference solutions:

```bash
npm run test:solutions
```

A failing practice test means that page is not finished. The message names the missing element or the text it expected, for example: `Expected the <h1> text to be "Hello World".`

## Work on one exercise

```bash
cd 01-setting-up-html-development-environment/02-images-and-links/02-add-a-link
```

Edit `index.html`, then from the repository root:

```bash
npm test -- 02-add-a-link
```

You can also open `index.html` with Live Server in VS Code. The tests do not need that preview.

## GitHub Actions

`.github/workflows/exercise-tests.yml` runs when a presentation, a solution, a test, or the workflow changes. It reads the numbered folders. A new presentation or chapter shows up as its own check. A new exercise is picked up inside its chapter. You do not edit the workflow to add either one.

On the Actions page, open and close each presentation:

| Group | Topics |
| --- | --- |
| 01 · Setting up HTML | Text, Images and links, Tables and forms, Head and metadata, Personal profile |
| 02 · Introduction to HTML | Text, Links, Lists, Semantic structure, Media and embeds, Forms, Pages |

Open a topic to see that chapter's exercises. Each exercise is checked twice: the practice `index.html`, then the matching page in `solutions/`.

A topic runs again when a page, test, or shared test file in that chapter changes. An unchanged topic reuses its cached result.

Practice results stay red until those pages are solved. Solution results should stay green. The progress report lists every exercise on one row, with both results side by side.
