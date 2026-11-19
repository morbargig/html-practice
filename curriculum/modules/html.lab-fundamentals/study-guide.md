# Study guide: Lab 01

Module [html.lab-fundamentals](specification.md). Open the notebook from [labs/README.md](../../../labs/README.md). Work in your own Colab copy. This guide does not replace the notebook cells.

## What the lab is

Lab 01 is a Colab notebook. You edit HTML strings in code cells. `preview` shows the page. `check` runs named tests with BeautifulSoup. A red check names the requirement in words, such as "Image has meaningful alt text". It does not compare your page with `Hello World`.

## Why it sits beside the practices

The practices want exact text, exact hrefs, and exact counts of one. The lab wants the idea: a document, a list of at least three, a link to MDN, landmarks. Students who only pass the lab still have the Jest exercises to do. Students who only do the exercises miss the notebook's looser "any reasonable page" final challenge.

## How each exercise behaves

Exercise 1 looks at the source string for a leading `<!doctype html>`, then at `lang="en"`, a non-empty title, an `h1` with text, and a `p` with text. Any heading words pass. The practice [Hello Heading](../../../practices/lesson-01/01-text/01-hello-heading/README.md) will not accept those words unless they are `Hello World`.

Exercise 2 wants an `h2` whose text is `my hobbies` after case folding, a `ul` of at least three items, and `strong` or `em` somewhere in a paragraph. The practice emphasis exercise wants specific words and both tags.

Exercise 3 wants some anchor whose href starts with `https://developer.mozilla.org/`, some link with text, some image with a src, and some image whose alt is at least five characters. `My Photo` is long enough. `Logo` is not. The practice image exercise wants the photo path and the exact alt `My Photo`.

Exercise 4 wants the five landmarks, a link inside `nav`, and a `section` inside `main`. It does not want Alex Rivera or fragment ids.

The final check adds counts: at least two paragraphs, at least three list items, and the same image and link rules. The lesson 02 [About Me](../../../practices/lesson-02/07-pages/01-about-me/README.md) exercise is stricter.

## When a check fails

Read the label in the tuple that failed. Fix that cell's HTML string. Do not edit the `check()` function. Rerun the cell. Save a copy in Drive, as the notebook's finish cell says. Submit only if the instructor asked.

## Common mistakes

- Treating a green lab as a green GitHub Action.
- Putting the doctype after a blank line that is not stripped. The check uses `lstrip`, so leading space is fine, and a character before the doctype is not.
- An alt of `icon` (four characters) on Exercise 3.
- A `section` that is a sibling of `main` instead of a child.

## Knowledge check

1. Which lab exercise accepts any `h1` text?
2. Why does alt `Logo` fail Exercise 3?
3. What does the final cell say a passing check does not guarantee?
4. Which practice folder still has to match `Hello World`?

Exercise 1. The alt is shorter than five characters. It does not guarantee a perfect or fully accessible page. `01-hello-heading`.

## References

- Notebook: [lab-01-html-fundamentals.ipynb](../../../labs/lesson-01/lab-01-html-fundamentals.ipynb)
- Practices: [lesson 01](../../../practices/lesson-01/README.md) and [lesson 02](../../../practices/lesson-02/README.md)
