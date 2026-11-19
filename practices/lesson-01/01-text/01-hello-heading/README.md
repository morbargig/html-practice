# 01 — Hello Heading

## 📚 Subject
The `<h1>` heading, the first HTML element from the preview lesson.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements
- W3Schools: https://www.w3schools.com/html/html_headings.asp

## 🎯 Task
Create an `<h1>` element containing:

Hello World

The heading is the words on the page, not the `Practice 01` title in the tab. The concept notes are in [the text study guide](../../../../curriculum/modules/html.text/study-guide.md).

## ✅ Requirements
- Use an `<h1>` element.
- The text must be exactly `Hello World`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-hello-heading
```

`npm test` checks every practice.

## 🔧 Debugging
- `No <h1> was found` means the tag is missing. Words in `<title>` do not count.
- `Found "Hello world"` means the letters differ. Match `Hello World`.
- `Found 2` means there is an extra heading. Remove it. Do not edit `test.js`.
- Live Server shows the page. `npm test` is the grade.

## ❓ Conceptual questions
1. Why can the browser tab still say `Practice 01` after this exercise passes?
2. Why does a second `h1` with the same text fail?

## 🌱 Extension
In a scratch file, write a different heading, such as `Harbor notes`. Leave this exercise as `Hello World`. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
