---
sidebar_position: 2
sidebar_label: 'Markdown Cheat Sheet'
id: markdown-cheat-sheet
description: Markdown Cheat Sheet
slug: /markdown-cheat-sheet
tags:
- Cheat Sheets
- Markdown
- Formating
---

# Markdown Cheat Sheet

> To learn more about markdown visit [www.markdownguide.org](https://www.markdownguide.org/getting-started/#whats-markdown)

## Headers

```markdown
# This is an <h1> tag
  
## This is an <h2> tag 

### This is an <h3> tag   
  
#### This is an <h4> tag 
  
##### This is an <h5> tag
  
###### This is an <h6> tag
```

# This is an \<h1\> tag
  
## This is an \<h2\> tag

### This is an \<h3\> tag
  
#### This is an \<h4\> tag
  
##### This is an \<h5\> tag
  
###### This is an \<h6\> tag
  
## Comment

```markdown
[//]: # (This is a non-visible comment)
```

[//]: # (This is a non-visible comment)

## Emphasis

```markdown
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

~~This text will be crossed out (strikethrough)~~ 

_You **can** combine them_

***All this text is bold and italic***
```

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

~~This text will be crossed out (strikethrough)~~

_You **can** combine them_

***All this text is bold and italic***

## Lists

### Unordered

```markdown
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```

* Item 1
* Item 2
  * Item 2a
  * Item 2b

```markdown
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

- Item 1
- Item 2
  - Item 2a
  - Item 2b

### Ordered

```markdown
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

## Images

```markdown
Format:  ![Alt Text](url)
Example: ![Datenschmutz Logo](@site/static/img/dmz-logo-main-350x-border.png)
```

![Datenschmutz Logo](@site/static/img/dmz-logo-main-350x-border.png)

## Links

```markdown
https://docsdatenschmutz.dev - automatic!
```

https://docs.datenschmutz.dev - automatic!

```markdown
Format:  [Text](url)
Example: [Docs](https://docs.datenschmutz.dev)
```

[Docs](https://docs.datenschmutz.dev)

## Blockquotes

```markdown
> Life is like riding a bicycle.
> To keep your balance, you must keep moving.

Albert Einstein
```

> Life is like riding a bicycle.
> To keep your balance, you must keep moving.

Albert Einstein

Blockquotes can be nested.

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## Horizontal Rules

Horizontal rules can be created using three or more asterisks (\*\*\*), dashes (\-\-\-), or underscores (\_\_\_) on a line by themselves.

```markdown
*** 
----
______
```

***
----
______

## Inline code

```markdown
I think you should use an `<addr>` element here instead.
```

I think you should use an `<addr>` element here instead.

## Fenced Code Blocks

### No highlighting

````markdown
```
if (isAwesome){
  return true
}
```
````

```
if (isAwesome) {
  return true
}
```

### Highlighting 

````markdown
```javascript 
if (isAwesome){
  return true
}
```
````

```javascript
if (isAwesome) {
  return true
}
```

## Tabels 

```markdown
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

Your Markdown does't have to be pretty. 

There must be at least 3 dashes separating each header cell. The outer pipes (`|`) are optional, and you don't need to make the table columns line up prettily.

```markdown
Less | Pretty | Markdown 
--- | --- | ---
1 | 2 | 3 
*Still* | `renders` | **as expected**
4 | 5 | 6
```

Less | Pretty | Markdown 
--- | --- | ---
1 | 2 | 3 
*Still* | `renders` | **as expected**
4 | 5 | 6

## Blackslash escape

Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown’s formating syntax.

| Name                  | Markdown  | Result |
| --------------------- | --------- | ------ |
| backslash             | `\\`      | \\     |
| backtick              | `` \` ``  | \`     |
| asterisk              | `\*`      | \*     |
| underscore            | `\_`      | \_     |
| curly braces          | `\{\}`    | \{\}   |
| square brackets       | `\[\]`    | \[ \]  |
| parentheses           | `\(\)`    | \(\)   |
| hash mark             | `\#`      | \#     |
| plus sign             | `\+`      | \+     |
| minus sign (hyphen)   | `\-`      | \-     |
| dot                   | `\.`      | \.     |
| exclamation mark      | `\!`      | \!     |

## Task Lists

```
- [x] this is a complete item 
- [ ] this is an incomplete it
```

- [x] this is a complete item 
- [ ] this is an incomplete it

## Inline HTML

Markdown also supports raw HTML.

```html
<dl>
  <dt>First Term</dt>
  <dd>This is the definition of the first term.</dd>
  <dt>Second Term</dt>
  <dd>This is one definition of the second term. </dd>
  <dd>This is another definition of the second term.</dd>
</dl>
```

<dl>
  <dt>First Term</dt>
  <dd>This is the definition of the first term.</dd>
  <dt>Second Term</dt>
  <dd>This is one definition of the second term. </dd>
  <dd>This is another definition of the second term.</dd>
</dl>

```html
<p>Markdown and HTML does *not* work **well**. Use <i>HTML</i> <b>tags</b> instead.</p>
```

<p>Markdown in HTML does *not* work **well**. Use <i>HTML</i> <b>tags</b> instead.</p>

## Emoji

```markdown
:+1: :sparkles: :camel: :tada: :rocket:
```

:+1: :sparkles: :camel: :tada: :rocket:

***

[Source](https://gist.github.com/Robert-96/048fddefc20e6860aeca6949a2443adf)
