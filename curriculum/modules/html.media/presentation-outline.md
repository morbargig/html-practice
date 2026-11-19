# Presentation outline: media and embeds

## 1. Two formats and a soundtrack

| | |
| --- | --- |
| Objective | 1 and the missing-file half of 3 |
| Explanation | `source` children, MIME types, `controls`. No files ship with the repo. |
| Visual | A player chrome with an error, beside markup that still matches. |
| Code | Students write `video` and `audio`. |
| Interaction | Run `npm test -- 01-video-and-audio`. Then open the page and say why it does not play. |
| Exercise | [Video and Audio](../../../practices/lesson-02/05-media-and-embeds/01-video-and-audio/README.md) |

## 2. Captions and a titled frame

| | |
| --- | --- |
| Objective | 2 and 3 |
| Explanation | `track` inside `video`. Iframe `title="Example"` names the frame the way alt names a photo. |
| Visual | A caption line under a silent frame, and an iframe with a name. |
| Code | Students add the track and the iframe. |
| Interaction | Run `npm test -- 02-captions-and-embeds`. |
| Exercise | [Captions and Embeds](../../../practices/lesson-02/05-media-and-embeds/02-captions-and-embeds/README.md) |

## 3. Not an image

| | |
| --- | --- |
| Objective | 3 |
| Explanation | A video URL in `img`, or a video URL in `iframe`, uses the wrong element. |
| Visual | The three elements in a row: img, video, iframe. |
| Code | Discussion only. |
| Interaction | Students assign each URL to an element: a photo, `clip.mp4`, `https://example.com`. |
| Exercise | Discussion. |
