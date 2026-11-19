# 01 — Academic Status

## 📚 Subject
Learning objective: show course completion with `progress` and academic performance with `meter`.

Prerequisites: [Native Dialog](../../07-dialog/01-native-dialog/README.md). You can connect a label with `for` and `id`.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter

## 🎯 Task
Label the progress element `Course completion:` and set `value="70"` and `max="100"`. That bar is how much of the course is finished.

Label the meter `Academic performance:` and set `value="80"`, `min="0"`, `max="100"`, `low="50"`, `high="85"`, and `optimum="100"`. That gauge is a score on a known scale. The optimum is the high end of the scale.

Add a paragraph, in your own words, of at least 40 characters. Use the words progress and meter. Say that progress is how far a task has gone, and that meter is a measurement on a known scale.

Do not use `meter` for course completion. That story belongs on `progress`.

Expected behavior: the page shows a completion bar at 70 of 100 and a performance gauge at 80 of 100. The paragraph states the difference. The test reads the attributes and the paragraph. It does not judge the colors the browser paints.

## ✅ Requirements
- Use `<progress id="course-completion" value="70" max="100">` with the label `Course completion:`.
- Use `<meter id="academic-performance" value="80" min="0" max="100" low="50" high="85" optimum="100">` with the label `Academic performance:`.
- Add a paragraph of at least 40 characters that contains the words progress and meter.
- Do not add `<script>` or `<style>`.
- Do not modify the test files.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-academic-status
```

`npm test` checks every practice.

The concept notes are in [the study guide](../../../../curriculum/modules/html.lab-interactivity/study-guide.md).

## 🔧 Debugging
- `for` matches the element id: `course-completion` and `academic-performance`.
- Course completion is the `progress` element. Academic performance is the `meter`.
- `low`, `high`, and `optimum` stay on the same 0–100 scale as `min` and `max`.
- The explanation is a `<p>`, not a comment.

## ❓ Conceptual questions
1. Why is "70% of the course is done" a progress bar and not a meter?
2. What do `low`, `high`, and `optimum` add that `value` alone does not?

## 🌱 Extension
Add a second meter for a quiz score, with its own `low`, `high`, and `optimum`. The check still grades the academic performance meter.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Install steps are in [extensions/README.md](../../../../extensions/README.md).
