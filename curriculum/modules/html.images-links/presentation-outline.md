# Presentation outline: images and links

Matches [specification.md](specification.md).

## 1. A file and a description

| | |
| --- | --- |
| Objective | 1 |
| Explanation | `src` locates `images/photo.jpg`. `alt` is `My Photo`. One `img`. |
| Visual | The portrait file next to an empty `alt` and a filled `alt`. |
| Code | Students write the element. Do not leave a finished tag projected as the answer key. |
| Interaction | Run `npm test -- 01-add-an-image`. |
| Exercise | [Add an Image](../../../practices/lesson-01/02-images-and-links/01-add-an-image/README.md) |

## 2. An absolute link in a new tab

| | |
| --- | --- |
| Objective | 2 |
| Explanation | `href` is `https://example.com`, the text is `Visit Site`, and `target` is `_blank`. |
| Visual | The words as the hit target, the URL in the status bar. |
| Code | Students write one `a`. |
| Interaction | Run `npm test -- 02-add-a-link`. Ask what the test does not say about `rel`. |
| Exercise | [Add a Link](../../../practices/lesson-01/02-images-and-links/02-add-a-link/README.md) |

## 3. A relative link

| | |
| --- | --- |
| Objective | 3 and 5 |
| Explanation | `contact.html` is resolved from this folder. The file is intentionally absent. The test reads the attribute. |
| Visual | A URL without a scheme, beside the absolute URL from the previous slide. |
| Code | Students write `href="contact.html"` and the text `Contact`. |
| Interaction | Run `npm test -- 03-relative-link`, then try the click and say why a 404 can still be a pass. |
| Exercise | [A Relative Link](../../../practices/lesson-01/02-images-and-links/03-relative-link/README.md) |

## 4. Both on one page

| | |
| --- | --- |
| Objective | 4 |
| Explanation | The last exercise wants the portrait and the external link together. |
| Visual | Picture above the words `Visit Site`. |
| Code | Students edit the fourth folder, not a copy of only one of the earlier files. |
| Interaction | Run `npm test -- 04-image-and-link`. |
| Exercise | [Image and Link](../../../practices/lesson-01/02-images-and-links/04-image-and-link/README.md) |

## 5. A different picture

| | |
| --- | --- |
| Objective | Reuse `src` and `alt` without the lesson filename. |
| Explanation | A scratch image can use another path and an alt sentence of the student's own. |
| Visual | A different photo with a specific alt sentence. |
| Code | Not the exercise file. |
| Interaction | Students say which exercise would reject that path. |
| Exercise | Ungraded. |
