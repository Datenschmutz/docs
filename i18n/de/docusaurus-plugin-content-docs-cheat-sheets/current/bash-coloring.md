---
sidebar_position: 4
sidebar_label: 'Bash Färbung'
id: linux-bash-coloring
description: Linux Bash Färbung
slug: /linux-bash-coloring
tags:
- Cheat Sheet
- Linux
- Bash
- Shell
- Terminal
- Color
- German/Deutsch
---

# Linux Bash/Shell Färbung

Man kann sein BASH-Skript verschönern, indem man seine Ausgabe einfärbt. Verwende ANSI-Escape-Sequenzen, um Texteigenschaften wie Vorder- und Hintergrundfarben festzulegen.

## Syntax

```Bash
echo -e "\e[COLORmBeispiel Text\e[0m"
```

| Option | Beschreibung                                         |
|--------|------------------------------------------------------|
| -e     | Aktivierung der Interpretation von Backslash-Escapes |
| \e[    | Start der Farbwechsel                                |
| COLORm | Farbcode + 'm' am Ende                               |
| \e[0m  | Ende der Farbwechsel                                 |

### Beispiel

```Bash title="Grüner Text"
echo -e "\e[32mGrüner Text\e[0m"
```

## ANSI - Farb Codes

| Farbe     | Vordergrund Code | Hintergrund Code |
|-----------|------------------|------------------|
| Schwarz   | 30               | 40               |
| Rot       | 31               | 41               |
| Grün      | 32               | 42               |
| Braun     | 33               | 43               |
| Blau      | 34               | 44               |
| Lila      | 35               | 45               |
| Cyan      | 36               | 46               |
| Hell Grau | 37               | 47               |

**Es gibt einige Unterschiede zwischen den Farben, wenn man Farben mit dem Fett Formatierungs Code kombiniert**

|    Farbe   | Vordergrund Code | Hintergrund Code |
|:----------:|:----------------:|:----------------:|
| Dunkelgrau | 1;30             | 1;40             |
| Hellrot    | 1;31             | 1;41             |
| Hellgrün   | 1;32             | 1;42             |
| Gelb       | 1;33             | 1;43             |
| Hellblau   | 1;34             | 1;44             |
| Hell Lila  | 1;35             | 1;45             |
| Hell Cyan  | 1;36             | 1;46             |
| Weiß       | 1;37             | 1;47             |

### Beispiel

```Bash
echo -e "\e[1;34mHellblauer Text\e[0m"
```

## ANSI - Formatierungs Codes

The ANSI codes also lets you control the way characters are displayed on the screen

| ANSI Code | Beschreibung        |
|-----------|---------------------|
| 0         | Normal              |
| 1         | **Fett**            |
| 4         | _*Unterstrichen*_   |
| 5         | Blinkend            |
| 7         | Reverse darstellung |

### Beispiele

```Bash
echo -e "\e[1mBold Text\e[0m"
```

```Bash
echo -e "\e[3mUnterstrichener Text\e[0m"
```