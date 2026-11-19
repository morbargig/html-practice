# html.media — Video, audio, captions, and embeds

| | |
| --- | --- |
| Status | Existing |
| Prerequisites | [html.images-links](../html.images-links/specification.md) |
| Chapter | [Lesson 02 — Media and Embeds](../../../practices/lesson-02/05-media-and-embeds/README.md) |

Playback files are not in the repository. The tests read markup only.

## Objectives

1. Add `video controls` with `source` `media/clip.mp4` (`video/mp4`) and `media/clip.webm` (`video/webm`), and `audio controls` with `source` `media/theme.mp3` (`audio/mpeg`).
2. Add a captions `track` on a video: `src="media/captions.vtt"`, `kind="captions"`, `label="English"`, plus an `iframe` with `src="https://example.com"` and `title="Example"`.
3. Explain why two video sources exist, why the files can be missing, and why the iframe needs a title the way an image needs alt.

## Outcomes

A student can mark up playable elements, a text track, and a titled frame without needing the media binaries.
