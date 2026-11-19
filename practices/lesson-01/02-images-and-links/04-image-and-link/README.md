# 04 — Image and Link

## 📚 Subject
An image and an external link on the same page.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img
- W3Schools: https://www.w3schools.com/html/html_links.asp

## 🎯 Task
Add both of these:

- an image of `images/photo.jpg` with alt text `My Photo`
- a link to `https://example.com` that opens in a new tab and reads `Visit Site`

## ✅ Requirements
- Include one `<img>` and one `<a>`.
- Keep the image path, alt text, link URL, target, and link text exact.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 04-image-and-link
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.images-links/study-guide.md).

## 🔧 Debugging
- This folder wants one image and one external link together. Copying only one of the earlier files fails the other half.
- The image contract is still `images/photo.jpg` and `My Photo`.
- The link contract is still `https://example.com`, `Visit Site`, and `target="_blank"`.

## ❓ Conceptual questions
1. Why are the image and the link separate elements?
2. Which earlier exercise is allowed to omit the picture?

## 🌱 Extension
In a scratch page, pair a different image with a link whose text names the destination. This folder keeps the lesson values. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
