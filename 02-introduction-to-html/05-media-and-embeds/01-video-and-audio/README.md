# 01 — Video and Audio

## 📚 Subject
`<video>` and `<audio>` with controls, plus `<source>` files.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video
- W3Schools: https://www.w3schools.com/html/html5_video.asp

## 🎯 Task
Add a video and an audio clip. Playback files are not included; the test checks the markup.

Video, with controls:
- `media/clip.mp4`, type `video/mp4`
- `media/clip.webm`, type `video/webm`

Audio, with controls:
- `media/theme.mp3`, type `audio/mpeg`

Put each file in a `<source>` element inside the media element.

## ✅ Requirements
- Use one `<video controls>` and one `<audio controls>`.
- Give the video both sources, in either order.
- Give the audio its mp3 source.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-video-and-audio
```

`npm test` checks every practice.
