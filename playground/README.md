# Playground

Part of [HTML Practice](../README.md). Sample pages you can open in the browser. They are not graded, and they have no tests.

## Pages

- [index.html](index.html) — a bird notebook with a sightings table, links to the other two pages, a sighting form, and several ways to set an image `src`
- [guide.html](guide.html) — what this folder is, and how the three pages connect
- [gallery.html](gallery.html) — the bird picture on its own

The bird picture is [images/bird.jpg](images/bird.jpg).

Open `index.html` with Live Server in VS Code. Install steps are in [extensions/README.md](../extensions/README.md). A path such as `images/bird.jpg` is resolved from this folder. A path that starts with `/` starts at the website root instead, so `/images/bird.jpg` does not find the file.
