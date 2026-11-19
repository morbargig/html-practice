# Study guide: media and embeds

Module [html.media](specification.md).

## What they are

`video` and `audio` are media elements. `controls` exposes the browser's playback UI. `source` is one file the browser may choose. `type` is the MIME type, a hint so the browser can skip a format it cannot play. `track` is timed text. `kind="captions"` means captions. `label` is the name shown in the player's track menu. `iframe` embeds another browsing context. `title` names that frame for assistive technology. It is the same job as `alt` on an image, for a different element.

## Why they exist

One video file is not enough for every browser. MP4 and WebM are the two sources this exercise offers, in either order. Audio here is one MP3. Captions exist because the soundtrack is not available to every viewer. The iframe exists to include another page without copying it. A frame with no title is an unlabeled region.

The files `media/clip.mp4`, `media/clip.webm`, `media/theme.mp3`, and `media/captions.vtt` are not in the repo. Live Server will not play them. The test does not fetch them.

## How the checks work

The first exercise wants one `video` with the `controls` attribute, and a child `source` for each path with the matching `type`. It wants one `audio` with `controls` and the mp3 source typed `audio/mpeg`. A `src` on the `video` element itself, with no `source` children, fails the source check.

The second exercise wants `controls`, the mp4 source, and a `track` inside the video with that `src`, `kind`, and `label`. The iframe must use `https://example.com` and `title="Example"`. A missing title fails even when the frame loads.

## When to use them

Use `source` children when you offer more than one format. Use `controls` unless a script will build custom controls. This course has no script. Use `track` for captions you actually have. Use `iframe` for another HTML document, not for a video file. A video file belongs in `video`.

## Common mistakes

- Putting the MIME type in `src`.
- `type="mp4"` instead of `video/mp4`, or `audio/mp3` instead of `audio/mpeg`.
- The `track` as a sibling after the video.
- An iframe with no `title`, or with `title` set to the URL.
- Expecting playback. The markup can pass while the player shows an error.

## How to debug

1. `Expected a <source src="...">` means the path differs or the element is not a child of the media element.
2. A type failure quotes the found `type`.
3. `controls` is a boolean attribute. `controls="false"` still makes the attribute present in HTML. Follow the brief and write `controls`.
4. The iframe failure names `title` or `src`. Fix the one it names.
5. Do not add binary files to turn the player green. That is outside the test.

## Knowledge check

1. Why offer both MP4 and WebM?
2. Why is a passing test allowed to show a broken player?
3. What is the iframe title for?
4. Where must the `track` element sit?

Two formats cover different decoders. The test never downloads the file. The title names the frame. The track is inside `video`.

## References

- MDN: [`video`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video), [`track`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/track), [`iframe`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- Exercises in [05 — Media and Embeds](../../../practices/lesson-02/05-media-and-embeds/README.md)
