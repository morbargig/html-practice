# Glossary

The practice folders keep their current names. This page maps the words used in the docs and in GitHub Actions.

| Word in the docs | Folder | Word in Actions |
| --- | --- | --- |
| Lesson, also "course presentation" | `practices/lesson-NN/` | Presentation, or Group in the root README |
| Chapter | `NN-topic/` | Topic |
| Exercise | `NN-slug/` | Exercise |
| Practice page | `index.html` next to `test.js` | The file the practice mode grades |
| Reference page | `solutions/practices/.../index.html` on `student/answers` | Solutions mode, and only when that file exists |
| Lab | `labs/lesson-NN/` | Not a Jest topic. The notebook is the work |

**Not started.** GitHub Actions hashes `index.html`. An untouched starter matches `scripts/starter-hashes.json`, so the progress report says the exercise is not started. The chapter still fails until a real page passes. Local `npm test` does not read those hashes. An untouched starter fails there with a missing-element or wrong-text message.

**Practice mode and solutions mode.** Practice mode parses the exercise `index.html` with jsdom. It does not open a browser. Solutions mode reads `solutions/` only when that directory exists and `SOLUTIONS=1` is set. `main` has no `solutions/` directory.

**Text matching.** The helper collapses whitespace and trims the ends before it compares strings. The words still have to match, including punctuation such as the exclamation mark in `Welcome to HTML in VS Code!`.

**Difficulty marks.** Chapter tables use green, yellow, and red. The mark is a teaching hint. The test does not read it.

**Lesson titles.** The practice lesson 01 title is "Setting Up Your HTML Development Environment". The lab calls the same week "HTML Fundamentals". Actions shortens the lesson to "Setting up HTML". The folders are the stable names. This curriculum uses module IDs so those titles can disagree without moving exercises.
