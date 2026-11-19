# Podcast brief: images and links

## Conceptual questions

- What does the browser fetch, and what does it read aloud, for one image?
- Why is `contact.html` allowed to be missing?
- Why is the clickable part the text inside `a`, not the URL itself?

## Explanations to keep

`src` is a URL. `alt` is a replacement. Absolute and relative `href` values resolve differently. `target="_blank"` is required on the example.com link. `rel` is not in the test. The combined exercise is both resources, not a new kind of element.

## Practical example

A class site links "Office hours" to `hours.html` in the same folder and "the handbook" to a full `https://` URL. Ask which one breaks when the folder is renamed, and which one needs text that is not "click here". Use those labels, not `Visit Site`.

## Misconceptions

- The filename is a fine `alt`.
- A link that 404s has failed the test.
- `target="blank"` is the same as `target="_blank"`.
- The image and the link have to be the same element.

## Debugging scene

The test wanted `src="images/photo.jpg"` and found `images/Photo.jpg`. The case differs. A second scene: the words `Visit Site` sit beside an `a` that has an empty body and an `href`. The hit area is empty and the text check fails.

## Discussion prompts

- When is a new tab a kindness, and when does it hide the way back?
- What alt text would be wrong even if the test's phrase `My Photo` were not required?
- Why does the later meaningful-link chapter exist if this one already has link text?

## Exercises

The four folders under [02 — Images and Links](../../../practices/lesson-01/02-images-and-links/README.md).

## Takeaway

The image needs a file and a description. The link needs a destination and words. The test checks those strings. It does not browse the destination for you.
