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
- German/Deutsch
---

# Markdown Cheat Sheet

To learn more about markdown visit [www.markdownguide.org](https://www.markdownguide.org/getting-started/#whats-markdown)

## Headers

```markdown
# Das ist ein <h1> Tag
  
## Das ist ein <h2> Tag 

### Das ist ein <h3> Tag   
  
#### Das ist ein <h4> Tag 
  
##### Das ist ein <h5> Tag
  
###### Das ist ein <h6> Tag
```

# Das ist ein \<h1\> Tag
  
## Das ist ein \<h2\> Tag

### Das ist ein \<h3\> Tag
  
#### Das ist ein \<h4\> Tag
  
##### Das ist ein \<h5\> Tag
  
###### Das ist ein \<h6\> Tag
  
## Kommentar

```markdown
[//]: # (Dies ist ein nicht sichtbarer Kommentar)
```

[//]: # (Dies ist ein nicht sichtbarer Kommentar)

## Hervorhebung

```markdown
*Dieser Text wird kursiv gedruckt*.
_Dieser Text wird ebenfalls kursiv dargestellt._

**Dieser Text wird fett sein**
__Dieser Text wird ebenfalls fett gedruckt.__

~~Dieser Text wird durchgestrichen.~~

_Du **kannst** sie Kombinieren_

***Der gesamte Text ist fett und kursiv gedruckt.***
```

*Dieser Text wird kursiv gedruckt*.
_Dieser Text wird ebenfalls kursiv dargestellt._

**Dieser Text wird fett sein**
__Dieser Text wird ebenfalls fett gedruckt.__

~~Dieser Text wird durchgestrichen.~~

_Du **kannst** sie Kombinieren_

***Der gesamte Text ist fett und kursiv gedruckt.***

## Listen

### Ungeordnete

```markdown
* Punkt 1
* Punkt 2
  * Punkt 2a
  * Punkt 2b
```

* Punkt 1
* Punkt 2
  * Punkt 2a
  * Punkt 2b

```markdown
- Punkt 1
- Punkt 2
  - Punkt 2a
  - Punkt 2b
```

- Punkt 1
- Punkt 2
  - Punkt 2a
  - Punkt 2b

### Geordnet

```markdown
1. Punkt 1
1. Punkt 2
1. Punkt 3
   1. Punkt 3a
   1. Punkt 3b
```

1. Punkt 1
1. Punkt 2
1. Punkt 3
   1. Punkt 3a
   1. Punkt 3b

## Bilder

```markdown
Format:  ![Alt Text](url)
Beispiel: ![Datenschmutz Logo](@site/static/img/dmz-logo-main-350x-border.png)
```

![Datenschmutz Logo](@site/static/img/dmz-logo-main-350x-border.png)

## Links

```markdown
https://docsdatenschmutz.dev - automatisch!
```

https://docs.datenschmutz.dev - automatisch!

```markdown
Format:  [Text](url)
Beispiel: [Docs](https://docs.datenschmutz.dev)
```

[Docs](https://docs.datenschmutz.dev)

## Blockzitate

```markdown
> Das Leben ist wie Fahrradfahren.
> Um das Gleichgewicht zu halten, muss man in Bewegung bleiben.

Albert Einstein
```

> Das Leben ist wie Fahrradfahren.
> Um das Gleichgewicht zu halten, muss man in Bewegung bleiben.

Albert Einstein

Blockzitate können verschachtelt werden.

```markdown
> Dorothy folgte ihr durch viele der schönen Räume in ihrem Schloss.
>
>> Die Hexe befahl ihr, die Töpfe und Kessel zu reinigen, den Boden zu fegen und das Feuer mit Holz zu versorgen.
```

> Dorothy folgte ihr durch viele der schönen Räume in ihrem Schloss.
>
>> Die Hexe befahl ihr, die Töpfe und Kessel zu reinigen, den Boden zu fegen und das Feuer mit Holz zu versorgen.

## Abtrennungs Striche

Horizontale Regeln können mit drei oder mehr Sternchen (\*\*\*), Bindestrichen (\-\-\-) oder Unterstrichen (\_\_\_) in einer Zeile erstellt werden.

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
Ich denke, du solltest hier stattdessen ein `<addr>`-Element verwenden.
```

Ich denke, du solltest hier stattdessen ein `<addr>`-Element verwenden.

## Abgegrenzte Code-Blöcke

### Keine Hervorhebung

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

### Hervorhebung 

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

## Tabellen

```markdown
| Erste Überschrift  | Zweite Überschrift |
| ------------------ | ------------------ |
| Inhalt der Zelle  | Inhalt der Zelle  |
| Inhalt der Zelle  | Inhalt der Zelle  |
```

| Erste Überschrift  | Zweite Überschrift |
| ------------------ | ------------------ |
| Inhalt der Zelle  | Inhalt der Zelle  |
| Inhalt der Zelle  | Inhalt der Zelle  |

```markdown
| Linksbündig | Mittig ausgerichtet | Rechtsbündig |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

| Linksbündig | Mittig ausgerichtet | Rechtsbündig |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

Dein Markdown muss nicht schön sein.

Jede Kopfzelle muss durch mindestens 3 Bindestriche voneinander getrennt sein. Die äußeren Striche (`|`) sind optional, und du musst die Tabellenspalten nicht hübsch aneinanderreihen.

```markdown
Weniger | Schönes | Markdown 
--- | --- | ---
1 | 2 | 3 
*Still* | `renders` | **as expected**
4 | 5 | 6
```

Weniger | Schönes | Markdown 
--- | --- | ---
1 | 2 | 3 
*Still* | `renders` | **as expected**
4 | 5 | 6

## Blackslash escape

Mit Markdown kann man Backslash-Escapes verwenden, um literale Zeichen zu erzeugen, die sonst in der Formatierungssyntax von Markdown eine besondere Bedeutung haben würden.

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

## Aufgabenlisten

```
- [x] dies ist ein vollständiger Punkt 
- [ ] dies ist ein unvollständiger Punkt
```

- [x] dies ist ein vollständiger Punkt 
- [ ] dies ist ein unvollständiger Punkt

## Inline HTML

Markdown unterstützt auch rohes HTML.

```html
<dl>
  <dt>Erste Bezeichnung</dt>
  <dd>Dies ist die Definition des ersten Begriffs.</dd>
  <dt>Zweite Bezeichnung</dt>
  <dd>Dies ist eine Definition des zweiten Begriffs.</dd>
  <dd>Dies ist eine weitere Definition des zweiten Begriffs.</dd>
</dl>
```

<dl>
  <dt>Erste Bezeichnung</dt>
  <dd>Dies ist die Definition des ersten Begriffs.</dd>
  <dt>Zweite Bezeichnung</dt>
  <dd>Dies ist eine Definition des zweiten Begriffs.</dd>
  <dd>Dies ist eine weitere Definition des zweiten Begriffs.</dd>
</dl>

```html
<p>Markdown und HTML funktionierten *nicht* sehr **gut** miteinander. Verwende deshalb<i>HTML</i> <b>tags</b></p>
```

<p>Markdown und HTML funktionierten *nicht* sehr **gut** miteinander. Verwende deshalb<i>HTML</i> <b>tags</b></p>

## Emoji

```markdown
:+1: :sparkles: :camel: :tada: :rocket:
```

:+1: :sparkles: :camel: :tada: :rocket:

***

[Quelle](https://gist.github.com/Robert-96/048fddefc20e6860aeca6949a2443adf)
