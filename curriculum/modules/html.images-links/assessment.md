# Assessment: images and links

The tests count elements and compare `src`, `alt`, `href`, `target`, and link text. They do not request `contact.html`, and they do not require `rel`. Do not add a network fetch to make the relative link "really work".

## Traceability

| Objective | Exercise | Check | Slide |
| --- | --- | --- | --- |
| 1. Photo path and alt | [01-add-an-image](../../../practices/lesson-01/02-images-and-links/01-add-an-image/README.md) | One `img`. `src` and `alt` match | 1 |
| 2. Absolute link, new tab | [02-add-a-link](../../../practices/lesson-01/02-images-and-links/02-add-a-link/README.md) | One `a`. `href`, `target`, and text match. `rel` is not read | 2 |
| 3. Relative link | [03-relative-link](../../../practices/lesson-01/02-images-and-links/03-relative-link/README.md) | `href="contact.html"` and text `Contact` | 3 |
| 4. Both together | [04-image-and-link](../../../practices/lesson-01/02-images-and-links/04-image-and-link/README.md) | One image and one external link | 4 |
| 5. Explain a bad attribute or a 404 | All four | The failure quotes the found attribute or the count | 3 |

Podcast prompts: the missing `contact.html`, and the empty link body. The scratch image is ungraded.

## Criteria

- Attribute strings match. A nearby URL fails.
- The student can say the relative file is absent on purpose.
- `rel="noopener"` can be discussed. It is not required for a pass.
