# Assessment: the document head

The metadata test checks charset, title, and three `content` strings. The comment test reads comments and the `h1`. The link test checks `rel` and `href`. None of them read CSS declarations. Do not add a color assertion here.

## Traceability

| Objective | Exercise | Check | Slide |
| --- | --- | --- | --- |
| 1. Charset, title, three metas | [01-head-and-metadata](../../../practices/lesson-01/04-head-and-metadata/01-head-and-metadata/README.md) | `charset` UTF-8. Title `My Page`. The three `content` values | 1 |
| 2. Comment and heading | [02-comments](../../../practices/lesson-01/04-head-and-metadata/02-comments/README.md) | Comment text and `h1` `My Page` | 2 |
| 3. Stylesheet link | [03-link-a-stylesheet](../../../practices/lesson-01/04-head-and-metadata/03-link-a-stylesheet/README.md) | `link` in `head`, `rel` includes `stylesheet`, `href` is `style.css` | 3 |
| 4. No rules required | Study guide | `style.css` is not hashed and not asserted | 4 |

## Criteria

- Metadata strings match, including `Your Name` and the keyword spaces.
- The comment is not visible body text.
- The student can say the next course owns `color`.
