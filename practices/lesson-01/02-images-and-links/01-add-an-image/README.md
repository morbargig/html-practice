# 01 — Add an Image

## 📚 Subject
Images with a relative `src` and an `alt` description.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img
- W3Schools: https://www.w3schools.com/html/html_images.asp

## 🎯 Task
Show the picture in the `images` folder.

Use `images/photo.jpg` as the source and `My Photo` as the alternative text.

## ✅ Requirements
- Use one `<img>` element.
- Set `src` to `images/photo.jpg`.
- Set `alt` to `My Photo`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-add-an-image
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.images-links/study-guide.md).

## 🔧 Debugging
- The failure names `src` or `alt` and the value it found.
- `photo.jpg` without `images/` is a different path. The file lives in `images/photo.jpg`.
- An empty `alt` fails even when the picture is visible.
- Do not edit `test.js`.

## ❓ Conceptual questions
1. Why can the picture look right while a one-character difference in `src` still fails?
2. What is `alt` for when the image does load?

## 🌱 Extension
In a scratch page, describe a different picture in one sentence of alt text. This exercise keeps `My Photo`. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
