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

> Weitere Informationen über Markdown findest du unter [www.markdownguide.org](https://www.markdownguide.org/getting-started/#whats-markdown)

## Headers

Um Überschriften zu erstellen, verwende das Symbol `#`, gefolgt von einem Leerzeichen und dem Überschriftentext. Die Anzahl der `#`-Symbole gibt die Überschriftsebene an, wobei ein # die größte und sechs `#`-Symbole die kleinste Überschrift darstellen.

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

Um Text hervorzuheben, kannst du entweder `*` oder `_` verwenden, um den Text, den du hervorheben möchtest, einzuschließen. Um kursiven Text zu erzeugen, verwende ein einzelnes * oder Symbol auf beiden Seiten des Textes. Um fetten Text zu erzeugen, verwende zwei Symbole `*` oder `_` auf beiden Seiten des Textes.

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

Um eine Aufzählung zu erstellen, verwende das Symbol `-` oder `*`, gefolgt von einem Leerzeichen und dem Text des Listenelements.

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

Um ein Bild in ein Dokument einzufügen, verwende die Syntax `![image alt text](image URL)`.

```markdown
Format:  ![Alt Text](url)
Beispiel: ![Datenschmutz Logo](@site/static/img/dmz-logo-main-350x-border.png)
```

![Datenschmutz Logo](@site/static/img/dmz-logo-main-350x-border.png)

## Links

Um einen Link zu erstellen, verwende einfach die Syntax `[Linktext](Link-URL)`.

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

To create a blockquote, use the `>` symbol followed by a space and the quote text.

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

## Code blöcke (Inline code)

Um einen Codeblock zu erstellen, schließe den Code in Backticks (\`) ein. Um einen Codeblock zu erstellen, der sich über mehrere Zeilen erstreckt, schließe den Code in drei Backticks (\`) auf jeder Seite ein.

```markdown
Ich denke, du solltest hier stattdessen ein `<addr>`-Element verwenden.
```

Ich denke, du solltest hier stattdessen ein `<addr>`-Element verwenden.

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

Um eine Tabelle zu erstellen, verwende das Pipe-Symbol (|), um die Spalten zu trennen, und das Bindestrich-Symbol (-), um den Tabellenkopf zu erstellen.

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
