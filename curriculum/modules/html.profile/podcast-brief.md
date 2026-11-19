# Podcast brief: the personal profile

## Questions

- What does a list add that three lines of text do not?
- Why does a navigation href need a twin id?
- Why are there two different bios for Alex Rivera?

## Explanations

`ul` and `li` group peers. Landmarks name regions. `#about` is an in-page destination. The skeleton bio is shorter than the full profile bio. The form still needs `for` and `id`, and the message is a textarea.

## Example

A club page lists Meeting, Workshop, and Showcase, and a nav item "Schedule" points at `#schedule`. Ask what is a list item and what is a fragment. Do not reuse Headings, Links, and Images.

## Misconceptions

- A `div class="header"` is a header.
- The hash is optional if the id exists.
- The skill order does not matter.
- Lesson 02 makes this profile optional. It does not. The later page is a different contract.

## Debugging scene

Clicking About does nothing. The link is `href="#about"` and the main element has `id="About"`. A second scene: the full profile fails the bio check because the short sentence was copied from the skeleton.

## Prompts

- Which landmark would you refuse to use twice on a small page, and why does the test want one of each here?
- When should a footer link use a full URL?
- What will `article` and `aside` add that `section` does not say?

## Exercises

The three folders in [05 — Personal Profile](../../../practices/lesson-01/05-personal-profile/README.md).

## Takeaway

The list groups peers. The landmarks and ids make the page navigable. The full profile is those pieces plus a photo, a form, and a longer bio.
