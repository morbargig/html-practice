'use strict';

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function repoRoot(start) {
  let dir = start;
  while (dir !== path.dirname(dir)) {
    if (fs.existsSync(path.join(dir, 'package.json')) && fs.existsSync(path.join(dir, 'solutions'))) {
      return dir;
    }
    dir = path.dirname(dir);
  }
  throw new Error('Could not find the practice repository root.');
}

function practiceDirectory(callerDir) {
  if (process.env.SOLUTIONS === '1') {
    const root = repoRoot(callerDir);
    return path.join(root, 'solutions', path.relative(root, callerDir));
  }
  return callerDir;
}

function loadDocument(callerDir) {
  const dir = practiceDirectory(callerDir);
  const htmlPath = path.join(dir, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Could not find index.html at ${htmlPath}.`);
  }
  const html = fs.readFileSync(htmlPath, 'utf8');
  return new JSDOM(html).window.document;
}

function textOf(node) {
  return (node && node.textContent ? node.textContent : '').replace(/\s+/g, ' ').trim();
}

function all(root, selector) {
  return [...root.querySelectorAll(selector)];
}

function expectCount(nodes, count, description) {
  if (nodes.length !== count) {
    throw new Error(
      `Expected to find exactly ${count} ${description}. Found ${nodes.length}.`
    );
  }
  return nodes;
}

function one(root, selector, description) {
  return expectCount(all(root, selector), 1, description)[0];
}

function expectText(node, expected, description) {
  if (!node) {
    throw new Error(`Expected ${description} to be "${expected}". That element was not found.`);
  }
  const actual = textOf(node);
  if (actual !== expected) {
    throw new Error(`Expected ${description} to be "${expected}". Found "${actual}".`);
  }
}

function expectAttr(node, name, expected, description) {
  if (!node) {
    throw new Error(`Expected ${description} to have ${name}="${expected}". That element was not found.`);
  }
  const actual = node.getAttribute(name);
  if (actual !== expected) {
    const found = actual === null ? `no ${name} attribute` : `"${actual}"`;
    throw new Error(`Expected ${description} to have ${name}="${expected}". Found ${found}.`);
  }
}

function expectAttrIgnoreCase(node, name, expected, description) {
  if (!node) {
    throw new Error(`Expected ${description} to have ${name}="${expected}". That element was not found.`);
  }
  const actual = node.getAttribute(name);
  if (!actual || actual.toLowerCase() !== expected.toLowerCase()) {
    const found = actual === null || actual === '' ? `no ${name} attribute` : `"${actual}"`;
    throw new Error(`Expected ${description} to have ${name}="${expected}". Found ${found}.`);
  }
}

function expectHas(node, name, description) {
  if (!node || !node.hasAttribute(name)) {
    throw new Error(`Expected ${description} to include the ${name} attribute.`);
  }
}

function expectInside(child, parent, childDescription, parentDescription) {
  if (!parent || !child || !parent.contains(child)) {
    throw new Error(`Expected the ${childDescription} to be inside the ${parentDescription}.`);
  }
}

function comments(document) {
  const walker = document.createTreeWalker(
    document,
    document.defaultView.NodeFilter.SHOW_COMMENT
  );
  const found = [];
  while (walker.nextNode()) {
    found.push(walker.currentNode.nodeValue.replace(/\s+/g, ' ').trim());
  }
  return found;
}

function labeledControl(document, id, labelText) {
  const control = document.getElementById(id);
  if (!control) {
    throw new Error(`Expected a form control with id="${id}".`);
  }
  const label = all(document, 'label').find((node) => node.getAttribute('for') === id);
  if (!label) {
    throw new Error(`Expected a <label for="${id}"> connected to the ${id} field.`);
  }
  expectText(label, labelText, `the label for "${id}"`);
  return control;
}

function expectHeadingSequence(document) {
  const headings = all(document, 'h1, h2, h3, h4, h5, h6');
  let previous = 0;
  headings.forEach((heading) => {
    const level = Number(heading.tagName.slice(1));
    if (previous === 0 && level !== 1) {
      throw new Error(
        `Expected the first heading to be an <h1>. Found <h${level}> with text "${textOf(heading)}".`
      );
    }
    if (previous > 0 && level > previous + 1) {
      throw new Error(
        `Expected headings to go one level at a time. Found <h${level}> ("${textOf(heading)}") immediately after <h${previous}>.`
      );
    }
    previous = level;
  });
  return headings;
}

function childByTag(parent, tagName) {
  return [...parent.children].filter((element) => element.tagName === tagName.toUpperCase());
}

module.exports = {
  loadDocument,
  textOf,
  all,
  expectCount,
  one,
  expectText,
  expectAttr,
  expectAttrIgnoreCase,
  expectHas,
  expectInside,
  comments,
  labeledControl,
  expectHeadingSequence,
  childByTag,
};
