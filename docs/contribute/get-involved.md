---
sidebar_position: 1
sidebar_label: 'Get Involved'
id: get-involved
description: TBD
slug: /get-involved
last_update:
  author: Fabian
  date: 12/28/2022
tags:
- Guide
- Markdown
- Documenation
- Create
---

# Get Involved

**Thank you** for considering contributing to the docs.datenschmutz.dev! Your help is essential in keeping the website up-to-date and accurate.

The goal of our website is to create a general knowledge collection about general IT topics. we would be very happy about your help! But what we don't want is to become a copy&paste collection.
Of course, many things are already very well described on the Internet, so we ask you to create a doc only if you can better describe, explain or expand the content.

There are several options to contribute to the website, if you want to:

* Report bugs and request features: If you find a bug or have an idea for a new feature, you can open an [GitHub Issues](https://github.com/Datenschmutz/docs/issues/new/choose) in the repository. Be sure to include as much information as possible, including steps to reproduce the bug (if applicable) or details about the proposed feature. If you are reporting a bug, please include your operating system, browser, and version information.

* Fix bugs and implement features: If you have the skills and knowledge to fix a bug or implement a feature, you can submit a pull request. Before submitting your pull request, be sure to read the contribution guidelines (below) and follow the coding style of the project.

* Improve documentation: If you see a problem with the documentation on the website, you can submit a pull request to fix it. This includes typos, formatting issues, and outdated information. If you are making significant changes to the documentation, please consider opening an [GitHub Issues](https://github.com/Datenschmutz/docs/issues/new/choose) first to discuss your proposed changes.

* Help with translation: If you are fluent in a language other than English, you can help us translate the documentation into multiple languages. If you are interested in contributing translations, please reach out to us through the repository's [GitHub Issues](https://github.com/Datenschmutz/docs/issues) tracker.

* Contributing an idea via [GitHub Issues](https://github.com/Datenschmutz/docs/issues/new/choose) - we take over the implementation if we like the idea.

## Base understanding

Datenschmutz docs was created using Docusaurus, a static website generator designed specifically for creating documentation websites. It is open source and developed by Meta.

To add documentation to a Docusaurus site, you will need to create Markdown files that contain your documentation content. Docusaurus uses a specific directory structure to organize these files, so you will need to place your Markdown files in the correct directories (**Highlighted**).

### Directory structure

```bash
my-website
├── blog - DISABLED
# highlight-next-line
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
# highlight-next-line
├── cheat-sheets
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
└── yarn.lock
```