# Study guide: images and links

Module [html.images-links](specification.md). Chapter: [02 — Images and Links](../../../practices/lesson-01/02-images-and-links/README.md).

## What they are

An `img` is a replaced element. `src` is the URL of the image file. `alt` is the text alternative when the image is not seen. This chapter's file is already in the exercise folder at `images/photo.jpg`. The required alternative is `My Photo`.

An `a` is a hyperlink. `href` is the destination. The text between the start tag and the end tag is what the reader clicks. `target="_blank"` asks the browser to open that destination in a new browsing context. A relative `href` such as `contact.html` is resolved from the page's own folder. An absolute `href` includes the scheme and host.

## Why they exist

A page that only has headings cannot show a picture or send the reader anywhere. The image embeds a resource. The link is a reference, not a copy of the other page. `alt` exists because the picture is not available to every reader and because the test, like a screen reader, needs a description that is not the filename.

## How the checks work

Each exercise expects exactly one of the elements it introduces, except the last exercise, which expects one image and one link. Attributes are compared as strings. `images/photo.jpg` is not the same as `photo.jpg`. `https://example.com` is not the same as `http://example.com` or `https://example.com/`. The visible text `Visit Site` and `Contact` is compared the same way heading text was compared.

`contact.html` is not in the folder. The test never fetches it. A relative link can be correct markup and still 404 when someone clicks it. That is expected here.

`target="_blank"` is required on the external link. The test does not require `rel`. Opening a new tab without `rel="noopener"` is a real browser concern and a proposed later module. Do not expect this chapter's test to fail when `rel` is absent.

## When to use them

Use `img` when the picture is content. Use CSS for a decorative background, which this course does not grade yet. Use an absolute URL for another site. Use a relative URL for a file that belongs with this page. Use link text that can stand alone. `Visit Site` is the required text in the early exercise. Meaningful phrases are graded later in [html.meaningful-links](../html.meaningful-links/specification.md).

## A picture of the page

The photo is a small portrait file already saved beside the exercise. With a correct `src`, Live Server shows that picture. With a wrong `src`, the browser shows a broken image and the test still fails on the attribute, even if you can guess the picture. The link looks like the words `Visit Site`. The underline and color are the browser's default. They are not the grade.

## Common mistakes

- Putting the description in the body as a paragraph and leaving `alt` empty.
- Using `href` on the image instead of `src`.
- Nesting the image exercise's photo and forgetting the link exercise is a different file, or the reverse, until the fourth exercise asks for both.
- Typing `target="blank"` without the underscore.
- Expecting `contact.html` to be created by the test.

## How to debug

1. Run `npm test -- 01-add-an-image`, `02-add-a-link`, `03-relative-link`, or `04-image-and-link`.
2. The message names the attribute and the found value, or says the attribute is missing.
3. `Found 0` means the tag is missing. `Found 2` means you added a spare.
4. If the picture is broken in Live Server and the test passes, the attribute matches and the file path is still wrong for the browser. On these exercises those two facts should agree, because `images/photo.jpg` exists.
5. A relative link that passes and then 404s is still a pass. Do not add a fake page to satisfy a click unless you are exploring outside the test.

## Knowledge check

1. Why can `alt` be correct while the picture is still broken?
2. What is the difference between `https://example.com` and `contact.html` as destinations?
3. Why does the test accept a new tab with no `rel`?
4. Where does the clickable text have to be written?

`alt` does not load the file. One destination is another origin. The other is a sibling file. `rel` is outside this test. The clickable text is the content of `a`.

## References

- MDN: [`img`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) and [`a`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a)
- Exercises in [02 — Images and Links](../../../practices/lesson-01/02-images-and-links/README.md)
