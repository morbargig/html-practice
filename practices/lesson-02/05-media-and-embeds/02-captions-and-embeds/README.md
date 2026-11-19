# 02 — Captions and Embeds

## 📚 Subject
Captions with `<track>`, and an embedded page with `<iframe>`.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/track
- W3Schools: https://www.w3schools.com/html/html_iframe.asp

## 🎯 Task
Add a captioned video and an embedded page.

The video has controls, a source `media/clip.mp4` of type `video/mp4`, and a `<track>` with:
- `src="media/captions.vtt"`
- `kind="captions"`
- `label="English"`

The iframe loads `https://example.com` and has `title="Example"`. The title gives the frame a name for assistive technology, in the same way alt text names an image.

## ✅ Requirements
- Put the `<track>` inside the `<video>`.
- Use the track attributes above.
- Use one `<iframe>` with that src and title.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 02-captions-and-embeds
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.media/study-guide.md).

## 🔧 Debugging
- Put `<track>` inside `<video>`, with `src="media/captions.vtt"`, `kind="captions"`, and `label="English"`.
- The iframe `src` is `https://example.com` and the `title` is `Example`.
- A missing title fails the way a missing alt would.
- Playback files are still absent. Do not add them to force the player.

## ❓ Conceptual questions
1. What job does the iframe title do?
2. Why is an iframe the wrong place for `clip.mp4`?

## 🌱 Extension
Give a scratch iframe the title `Slides` and a different URL. This exercise keeps `Example`. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
