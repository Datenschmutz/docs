---
sidebar_position: 9
sidebar_label: 'CSS Cheat Sheet'
id: css-cheat-sheet
description: "Alle wichtigen CSS-Befehle auf einen Blick. Das ultimative Nachschlagewerk für Webentwickler."
slug: /css-cheat-sheet
tags:
- CSS
- Cheat sheet
- Reference
- Quick guide
- Styling
- Front-end development
- Web design
- HTML/CSS
- Best practices
- Snippets
- German/Deutsch
---

# CSS Cheat Sheet

Alle wichtigen CSS-Befehle auf einen Blick. Das ultimative Nachschlagewerk für Webentwickler.

## Box Model

- `width`: Gibt die Breite eines Elements an
- `height`: Legt die Höhe eines Elements fest
- `padding`: Legt die Abstände innerhalb eines Elementes fest
- `border`: Legt einen Rahmen um ein Element fest
- `margin`: Legt den Seitenabstand außerhalb eines Elements fest.

## Text

- `font-family`: Gibt die Schriftart für den Text an
- `font-size`: Legt die Größe des Textes fest
- `color`: Legt die Farbe des Textes fest
- `text-align`: Legt die horizontale Ausrichtung des Textes fest
- `text-decoration`: Legt die Textdekoration fest (unterstrichen, überstrichen, durchgestrichen)
- `text-align`: Specifies the horizontal alignment of text (left, right, center, justify)
- `text-decoration`: Specifies the decoration of text (none, underline, overline, line-through, blink)
- `text-indent`: Specifies the indentation of the first line of text in a block
- `text-shadow`: Specifies a shadow for text
- `text-transform`: Specifies the capitalization of text (none, capitalize, uppercase, lowercase)
- `vertical-align`: Specifies the vertical alignment of an inline-level element in a line box (baseline, text-top, middle, text-bottom, super, sub)
- `white-space`: Specifies how white space inside an element should be handled (normal, pre, nowrap, pre-wrap, pre-line)

## Hintergrund

- `background-color`: Gibt die Hintergrundfarbe eines Elementes an
- `background-image`: Legt ein Hintergrundbild für ein Element fest
- `background-repeat`: Legt fest, ob ein Hintergrundbild wiederholt werden soll oder nicht
- `background-attachment`: Legt fest, ob ein Hintergrundbild fixiert ist oder mit dem Rest der Seite scrollt

## Display

- `display`: Gibt an, wie ein Element angezeigt werden soll (inline, block, inline-block, none)
- `visibility`: Legt fest, ob ein Element sichtbar oder verborgen ist

## Flexbox

- `display: flex`: Gibt an, dass ein Element ein Flex-Container ist
- `flex-direction`: Gibt die Richtung der Flex-Elemente an (Zeile, Zeile-umgekehrt, Spalte, Spalte-umgekehrt)
- `justify-content`: Legt fest, wie die Flex-Elemente entlang der Hauptachse ausgerichtet werden (flex-start, flex-end, center, space-between, space-around)
- `align-items`: Legt fest, wie die Flex-Elemente entlang der Querachse ausgerichtet werden (flex-start, flex-end, center, baseline, stretch)
- `display: flex`: Gibt an, dass ein Element als Flex-Container angezeigt werden soll
- `flex-direction`: Gibt die Richtung der Hauptachse eines Flex-Containers an (Zeile, Zeilenumkehr, Spalte, Spaltenumkehr)
- `flex-wrap`: Gibt an, ob Flex-Elemente umbrochen werden sollen oder nicht (nowrap, wrap, wrap-reverse)
- `flex-flow`: Shorthand-Eigenschaft für `flex-direction` und `flex-wrap`
- `justify-content`: Legt die Ausrichtung der Flex-Elemente entlang der Hauptachse fest (flex-start, flex-end, center, space-between, space-around)
- `align-items`: Gibt die Ausrichtung von Flex-Elementen entlang der Querachse an (Flex-Start, Flex-Ende, Mitte, Grundlinie, Dehnung)
- `align-content`: Gibt die Ausrichtung der Zeilen eines Flex-Containers innerhalb des Flex-Containers an, wenn entlang der Querachse zusätzlicher Platz vorhanden ist (flex-start, flex-end, center, space-between, space-around, stretch)

## Positionierung

- `position`: Gibt die Art der Positionierung für ein Element an (statisch, relativ, absolut, fest)
- `top`: Bestimmt den Abstand eines Elements vom oberen Rand des Elements, das es enthält
- `bottom`: Gibt den Abstand eines Elements vom unteren Rand des Elements an, das es enthält
- `left`: Gibt den Abstand eines Elements von der linken Seite des Elements an, das es enthält
- `right`: Gibt den Abstand eines Elements von der rechten Seite des Elements an, das es enthält.

## Transforms

- `transform`: Gibt die auf ein Element anzuwendende Transformation an
- `translate`: Gibt die Verschiebung (Bewegung) eines Elements in der x- und y-Achse an
- `rotate`: Legt die Rotation eines Elements fest
- `scale`: Legt die Skalierung eines Elements in der x- und y-Achse fest
- `skew`: Legt die Schrägstellung eines Elements in der x- und y-Achse fest

## Übergänge

- `transition`: Gibt den Übergangseffekt für ein Element an
- `transition-property`: Legt die CSS-Eigenschaft fest, auf die der Übergangseffekt angewendet werden soll
- `transition-duration`: Legt die Dauer des Übergangseffekts fest
- `transition-timing-function`: Legt die Geschwindigkeitskurve des Übergangseffekts fest
- `transition-delay`: Legt die Verzögerung vor dem Beginn des Übergangseffekts fest

## Animationen

- `animation`: Gibt die Animation für ein Element an
- `animation-name`: Legt den Namen der @keyframes-Animation fest
- `animation-duration`: Legt die Dauer der Animation fest
- `animation-timing-function`: Legt die Geschwindigkeitskurve der Animation fest
- `animation-delay`: Legt die Verzögerung vor dem Start der Animation fest
- `animation-iteration-count`: Gibt an, wie oft die Animation laufen soll
- `animation-direction`: Legt die Richtung der Animation fest (normal, rückwärts, alternierend, alternierend-rückwärts)

## Border

- `border`: Legt einen Rahmen für ein Element fest
- `border-width`: Gibt die Breite des Rahmens eines Elements an
- `border-style`: Gibt den Stil der Umrandung eines Elements an (einfarbig, gepunktet, gestrichelt, doppelt, Rille, Grat, Einfügung, Vorsprung)
- `border-color`: Legt die Farbe des Rahmens eines Elements fest.
- `border-top`, `border-right`, `border-bottom`, `border-left`: Gibt die Breite, den Stil und die Farbe eines Rahmens für jede einzelne Seite eines Elements an
- `border-radius`: Bestimmt die Abrundung der Ecken eines Rahmens

## Schatten

- `box-shadow`: Gibt einen Schatten für ein Element an
- `text-shadow`: Legt einen Schatten für Text fest

## Typografie

- `line-height`: Gibt die Höhe einer Textzeile an
- `letter-spacing`: Legt den Abstand zwischen den Zeichen im Text fest
- `word-spacing`: Legt den Abstand zwischen den Wörtern im Text fest
- `text-transform`: Legt die Großschreibung des Textes fest (keine, Großschreibung, Großbuchstaben, Kleinbuchstaben)

## Listen

- `list-style`: Gibt den Stil einer Liste an (Scheibe, Kreis, Quadrat, keine)
- `list-style-position`: Gibt die Position der Listenmarkierung an (innen, außen)
- `list-style-image`: Gibt ein Bild als Listenmarkierung an

## Tabellen

- `border-collapse`: Legt fest, ob Tabellenränder zu einem einzigen Rahmen zusammengeklappt oder getrennt werden sollen
- `border-spacing`: Gibt den Abstand zwischen den Rändern benachbarter Zellen an
- `caption-side`: Gibt die Position der Tabellenüberschrift an (oben, unten)
- `empty-cells`: Gibt an, ob Rahmen und Hintergründe für leere Zellen in einer Tabelle angezeigt werden sollen oder nicht

## Raster

- `display: grid`: Gibt an, dass ein Element als Grid-Container angezeigt werden soll
- `grid-template-columns`: Gibt die Größe und Anzahl der Spalten in einem Gitter an
- `grid-template-rows`: Gibt die Größe und Anzahl der Zeilen in einem Gitter an
- `grid-template-areas`: Legt benannte Gitterbereiche fest
- `grid-column-gap`: Gibt die Größe des Abstandes zwischen den Spalten in einem Raster an
- `grid-row-gap`: Gibt die Größe des Abstands zwischen den Zeilen in einem Gitter an
- `grid-gap`: Shorthand-Eigenschaft für `grid-column-gap` und `grid-row-gap`.
- `justify-items`: Legt die Ausrichtung der Gitterelemente entlang der Zeilenachse fest (Anfang, Ende, Mitte, Dehnung)
- `align-items`: Legt die Ausrichtung der Gitterelemente entlang der Spaltenachse fest (Anfang, Ende, Mitte, Dehnung)
- `justify-content`: Legt die Ausrichtung von Gitterelementen entlang der Zeilenachse innerhalb des Gitterbereichs fest (Anfang, Ende, Mitte, Zwischenraum, Raum-um)
- `align-content`: Legt die Ausrichtung von Gitterelementen entlang der Spaltenachse innerhalb des Gitterbereichs fest (Anfang, Ende, Mitte, Zwischenraum zwischen den Spalten, Zwischenraum um die Spalten, Dehnung)

## Hintergrund

- `background`: Legt alle hintergrundbezogenen Eigenschaften in einer einzigen Codezeile fest
- `background-color`: Gibt die Hintergrundfarbe eines Elements an
- `background-image`: Legt ein Bild als Hintergrund für ein Element fest
- `background-repeat`: Gibt an, ob und wie ein Hintergrundbild wiederholt werden soll (repeat, repeat-x, repeat-y, no-repeat)
- `background-attachment`: Gibt an, ob ein Hintergrundbild fixiert oder mit dem Rest der Seite verschoben werden soll (scroll, fixed)
- `background-position`: Gibt die Position eines Hintergrundbildes an (oben, unten, links, rechts, mittig)

## Dimensionen

- `width`: Gibt die Breite eines Elements an
- `height`: Gibt die Höhe eines Elements an
- `max-width`: Gibt die maximale Breite eines Elements an
- `max-height`: Gibt die maximale Höhe eines Elements an
- `min-width`: Gibt die Mindestbreite eines Elements an
- `min-height`: Gibt die Mindesthöhe eines Elements an

## Margins

- `margin`: Gibt den Rand eines Elements an (kann für alle Seiten mit einer Eigenschaft oder für jede Seite einzeln mit `margin-top`, `margin-right`, `margin-bottom`, `margin-left` festgelegt werden)
- `auto`: Lässt den Browser den Rand berechnen

## Padding

- `padding`: Bestimmt die Auffüllung eines Elements (kann für alle Seiten mit einer Eigenschaft oder für jede Seite einzeln mit `padding-top`, `padding-right`, `padding-bottom`, `padding-left` festgelegt werden)

## Sonstiges

- `opacity`: Gibt die Deckkraft eines Elements an
- `overflow`: Legt fest, was zu tun ist, wenn der Inhalt den Rahmen eines Elements übersteigt (sichtbar, verborgen, scrollen, auto)
- `cursor`: Gibt die Art des anzuzeigenden Cursors an (Standard, Zeiger, Auto usw.)
- `transition`: Gibt den Übergangseffekt für ein Element an, um von einem Stil zu einem anderen zu wechseln (Eigenschaft, Dauer, Zeitfunktion, Verzögerung)
- `transform`: Gibt eine zweidimensionale Transformation für ein Element an (Skalieren, Drehen, Übersetzen, Schrägstellen)
