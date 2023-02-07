---
sidebar_position: 9
sidebar_label: 'HTML Guide'
id: html-guide
description: Get started with HTML and improve your web development skills with our comprehensive guide for beginners and pros alike. Discover everything you need to know about HTML coding and website creation.
slug: /html-guide
last_update:
  author: Fabian
  date: 02/05/2023
tags:
- Guide
- HTML
- Web Development
- Tutorial
- Coding
- Web Design
---

# Learn HTML: A Comprehensive Guide for Beginners and Pros

:::caution
Wir brauchen deine Hilfe! Diesen Guide wude noch nicht übersetzt. Hilf mit diese Seite zu übersetzen, in dem du den "[✎Diese seite bearbeiten](https://github.com/datenschmutz/docs/tree/main/i18n/de/docusaurus-plugin-content-docs/current/guides/html-guide.md)" button verwendest! DANKE!
:::

## 1. Introduction to HTML
### What is HTML?
HTML stands for HyperText Markup Language and is the standard language used to create web pages. It provides the structure and content of a web page, while styling is added using CSS.

### History of HTML
HTML was first introduced in 1993 by the World Wide Web Consortium (W3C) as a means of creating structured and accessible web pages.

### Evolution of HTML
HTML has undergone several updates since its creation, with the latest version being HTML5. HTML5 introduced new elements and capabilities, such as audio and video playback, local storage, and improved semantic elements.

## 2. Basic HTML Structure
### Document Type Declaration
The first line of an HTML document should be the Document Type Declaration, which specifies the version of HTML being used.
```html
<!DOCTYPE html>
```

### HTML Elements

:::info
**A compact and comprehensive HTML cheat sheet can be found here [*HTML Cheat Sheet*](../cheat-sheets/html-cheat-sheet)**
:::

HTML elements are the building blocks of a web page. They consist of a tag, surrounded by angle brackets, and content, which is placed between the opening and closing tags.

For example:
```html
<p>This is a paragraph element.</p>
```

### Nested Elements
HTML elements can be nested within each other to create a more complex and structured layout.

For example:
```html
<div>
  <h1>This is a heading element</h1>
  <p>This is a paragraph element within a div container.</p>
</div>
```

## 3. HTML Headings
h1 to h6 Heading Elements
HTML provides six levels of headings, ranging from h1 to h6. h1 is the most important heading, while h6 is the least important.

For example:
```html
<h1>This is an h1 heading</h1>
<h2>This is an h2 heading</h2>
<h3>This is an h3 heading</h3>
<h4>This is an h4 heading</h4>
<h5>This is an h5 heading</h5>
<h6>This is an h6 heading</h6>
```

### Importance of Headings for SEO
Headings are important for both web accessibility and search engine optimization (SEO). They provide a visual hierarchy of content, making it easier for users to understand the structure and flow of a web page.

For search engines, headings are used to understand the topic and content of a web page. It is recommended to use only one h1 heading per page, with the rest of the headings being used to subhead and further break down the content.

## 4. HTML Paragraphs and Text Formatting
### p Element
The p element is used to create paragraphs of text.

For example:
```html
<p>This is a paragraph of text.</p>
<p>This is another paragraph of text.</p>
```

### Strong and Emphasis Elements
The strong and em elements are used to add emphasis to text. The strong element makes text bold, while the em element makes text italic.

For example:
```html
<p>This is a <strong>bold</strong> paragraph of text.</p>
<p>This is an <em>italic</em> paragraph of text.</p>
```

### Small Element
The small element is used to create smaller text, typically used for fine print or legal disclaimers.

For example:
```html
<small>This is smaller text.</small>
```

## 1. HTML Lists
### Unordered Lists (ul)
Unordered lists are used to create lists of items, where the order of the items does not matter. Each list item is marked with a bullet point.

For example:
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Ordered Lists (ol)
Ordered lists are used to create lists of items, where the order of the items does matter. Each list item is marked with a numbered point.

For example:
```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

### Definition Lists (dl)
Definition lists are used to create a list of terms and their definitions.

For example:
```html
<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>
  <dt>Term 2</dt>
  <dd>Definition 2</dd>
  <dt>Term 3</dt>
  <dd>Definition 3</dd>
</dl>
```

## 6. HTML Links
### a Element
The a element is used to create hyperlinks to other web pages, files, or locations on the same page.

For example:
```html
<a href="https://www.example.com">This is a link to example.com</a>
```

### Link Target Attribute
The target attribute can be added to a link to specify how it should be opened.

For example:
```html
<a href="https://www.example.com" target="_blank">This link will open in a new tab</a>
```

## 7. HTML Images
img Element
The img element is used to embed images into a web page.

For example:
```html
<img src="image.jpg" alt="This is a description of the image">
```

The src attribute specifies the source URL of the image, while the alt attribute provides a text description of the image for accessibility and SEO purposes.

## 8. HTML Tables
Tables are used to display data in a grid of rows and columns.

For example:
```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Column 1</td>
    <td>Row 1, Column 2</td>
  </tr>
  <tr>
    <td>Row 2, Column 1</td>
    <td>Row 2, Column 2</td>
  </tr>
</table>
```

The tr element defines a table row, while the td and th elements define table cells. The th element is used for header cells, while the td element is used for regular cells.

## 9. HTML Forms
Forms are used to gather user input, such as text fields, checkboxes, and submit buttons.

For example:
```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name">
  <input type="submit" value="Submit">
</form>
```

The label element is used to provide a text description for a form control, while the input element is used to create various form controls, such as text fields, checkboxes, and submit buttons.

## 10. HTML Iframes
Iframes are used to embed content from another web page within a page.

For example:
```html
<iframe src="https://www.example.com"></iframe>
```
The src attribute specifies the source URL of the content to be embedded in the iframe.

## 11.  HTML Media Elements
HTML provides several elements for embedding audio and video content, such as the audio and video elements.

For example:
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <p>Your browser does not support the video element.</p>
</video>
```

The controls attribute adds controls to the video player, while the source element specifies the source URL and type of the video file. The p element provides a fallback message for browsers that do not support the video element.

## 12. HTML Styles and Layout
HTML provides several ways to apply styles to a web page, such as using CSS.

For example:
```html
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>

<body>
  <p>This is a red paragraph.</p>
</body>
```

In this example, the style element is used to define a CSS style for p elements, which makes the text color red. The style element should be placed in the head of the HTML document.

## 13. HTML Semantic Elements
HTML provides several semantic elements to provide meaning to web page content, such as header, nav, main, article, and footer.

For example:
```html
<header>
  <h1>Header</h1>
</header>

<nav>
  <a href="#">Home</a> |
  <a href="#">About</a> |
  <a href="#">Contact</a>
</nav>

<main>
  <h1>Main Content</h1>
  <p>This is the main content of the page.</p>
</main>

<article>
  <h2>Article</h2>
  <p>This is an article within the main content.</p>
</article>

<footer>
  <p>Footer</p>
</footer>
```

These semantic elements provide additional information about the structure and purpose of the content, which can improve accessibility and SEO.

## 14. Title, Meta Description, and Meta Tags
```html
<head>
  <title>HTML Guide: Learn HTML Basics and Best Practices</title>
  <meta name="description" content="This HTML guide provides an introduction to HTML, including basic syntax, elements, and best practices for web development.">
  <meta name="keywords" content="HTML, web development, guide, tutorial, basics, best practices">
</head>
```
The title element provides the title of the web page, which is displayed in the browser tab and search engine results. The meta description provides a brief description of the web page, which is used by search engines to display a snippet of text in the search results. The meta keywords provide a list of keywords related to the web page, although they have limited use in modern SEO.