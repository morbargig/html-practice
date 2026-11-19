# Podcast brief: Lab 01

## Questions

- What is a Colab check proving?
- Why can the lab pass and GitHub Actions stay red?
- What does the notebook admit it does not measure?

## Explanations

BeautifulSoup reads the HTML string. Thresholds are "at least" and "non-empty", plus a few exact phrases such as My Hobbies and an MDN prefix. Jest reads one file and wants the lesson's characters. The finish cell says a pass is not a full accessibility review.

## Example

A page titled "Studio hours" with three list items and a five-character alt passes the spirit of the final check. Ask which practice folders would still fail it. Hello Heading, the profile, and About Me are enough examples.

## Misconceptions

- The notebook is optional once the practices exist. The course lists both.
- Editing `check` is how you fix a red label.
- An MDN link to a non-HTML page fails the lab. The prefix is the whole MDN origin, not the HTML docs path. The meaningful-link exercise is the one that wants the HTML docs URL.

## Debugging scene

Exercise 3 says the image alt is not meaningful. The src is fine. Count the alt characters. Five is the minimum in this notebook only.

## Prompts

- Why keep exact Jest strings if the lab is flexible?
- What should a student do with the notebook after the checks pass?
- Which lab rule is weaker than the practice image alt, and which practice sentence is stricter than "any heading"?

## Notebook

[lab-01-html-fundamentals.ipynb](../../../labs/lesson-01/lab-01-html-fundamentals.ipynb).

## Takeaway

The lab checks that the structures exist. The practices check that the lesson's page exists. Do both.
