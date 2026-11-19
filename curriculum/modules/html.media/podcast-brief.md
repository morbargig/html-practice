# Podcast brief: media and embeds

## Questions

- Why can the test pass when nothing plays?
- Why list two video files?
- What is the iframe's title doing?

## Explanations

The grade is the element tree: controls, source, type, track, iframe title. MIME types are hints. Captions are a track inside the video. The binaries are intentionally absent, the same way `contact.html` was.

## Example

A lecture offers `lesson.mp4` and `lesson.webm`, captions in `lesson.vtt`, and embeds the slides at an `https://` URL with the title "Slides". Ask which element owns each URL. Those filenames are not the graded ones.

## Misconceptions

- `type="mp4"` is a MIME type.
- Autoplay is required. It is not, and this course does not ask for it.
- An iframe is how you play `clip.mp4`.
- Adding the missing files is what turns the exercise green.

## Debugging scene

The video element has `src="media/clip.mp4"` and no `source` children. The player might try the one file. The test still wants `source` elements, including the WebM one.

## Prompts

- When are captions required even if the test did not exist?
- Why give a frame a title that is not the URL?
- What would a transcript add that a captions track does not, and why is a transcript not in this test?

## Exercises

[Video and Audio](../../../practices/lesson-02/05-media-and-embeds/01-video-and-audio/README.md) and [Captions and Embeds](../../../practices/lesson-02/05-media-and-embeds/02-captions-and-embeds/README.md).

## Takeaway

Mark up the player, the formats, the captions, and the frame's name. Playback files are a separate delivery problem.
