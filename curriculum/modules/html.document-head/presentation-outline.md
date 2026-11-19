# Presentation outline: the document head

## 1. Metadata is not the page

| | |
| --- | --- |
| Objective | 1 |
| Explanation | Charset, title, description, keywords, and author live in `head`. |
| Visual | The tab labeled `My Page`, the window still empty. |
| Code | Students fill `head` in the metadata exercise. |
| Interaction | Run `npm test -- 01-head-and-metadata`. |
| Exercise | [Head and Metadata](../../../practices/lesson-01/04-head-and-metadata/01-head-and-metadata/README.md) |

## 2. A note the page does not show

| | |
| --- | --- |
| Objective | 2 |
| Explanation | The comment text is for editors. The `h1` text `My Page` is for readers. |
| Visual | View source showing the comment, and the rendered page without it. |
| Code | Students add the comment and the heading. |
| Interaction | Run `npm test -- 02-comments`. Ask who can see the comment. |
| Exercise | [HTML Comments](../../../practices/lesson-01/04-head-and-metadata/02-comments/README.md) |

## 3. The stylesheet link

| | |
| --- | --- |
| Objective | 3 and 4 |
| Explanation | `rel="stylesheet"` and `href="style.css"`. No rules in this course. |
| Visual | The HTML file pointing at the CSS file, the CSS file still only a comment. |
| Code | Students add the `link` in `head`. |
| Interaction | Run `npm test -- 03-link-a-stylesheet`. |
| Exercise | [Link a Stylesheet](../../../practices/lesson-01/04-head-and-metadata/03-link-a-stylesheet/README.md) |

## 4. Where color will be graded

| | |
| --- | --- |
| Objective | 4 |
| Explanation | css-practice starts at computed `color` on a class. This page only attaches the file. |
| Visual | A pointer from this link to the CSS lesson list. |
| Code | No color declaration. |
| Interaction | Students say which repository owns the first color rule. |
| Exercise | This link exercise, then [css-practice](https://github.com/morbargig/css-practice). |
