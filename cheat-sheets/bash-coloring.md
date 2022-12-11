---
sidebar_position: 4
sidebar_label: 'Bash Coloring'
id: linux-bash-coloring
description: Linux Bash Coloring
slug: /linux-bash-coloring
tags:
- Cheat Sheet
- Linux
- Bash
- Shell
- Terminal
- Color
---

# Linux Bash/Shell Coloring

You can beautify your BASH script by coloring its output. Use ANSI escape sequences to set text properties such as foreground and background colors.

## Syntax

```Bash
echo -e "\e[COLORmSample Text\e[0m"
```

| Option | Description                                      |
|--------|--------------------------------------------------|
| -e     | Enabling the interpretation of backslash escapes |
| \e[    | Start of color changes                           |
| COLORm | Color code + 'm' at the end                      |
| \e[0m  | End of color changes                             |

### Example

```Bash title="Green Text"
echo -e "\e[32mGreen Text\e[0m"
```

## ANSI — Color Codes

| Color      | Foreground Code | Background Code |
|------------|-----------------|-----------------|
| Black      | 30              | 40              |
| Red        | 31              | 41              |
| Green      | 32              | 42              |
| Brown      | 33              | 43              |
| Blue       | 34              | 44              |
| Purple     | 35              | 45              |
| Cyan       | 36              | 46              |
| Light Gray | 37              | 47              |

**There are some differences between colors when combining colors with the Bold Formating Code**

|     Color    | Foreground Code | Background Code |
|:------------:|:---------------:|:---------------:|
| Dark Gray    | 1;30            | 1;40            |
| Light Red    | 1;31            | 1;41            |
| Light Green  | 1;32            | 1;42            |
| Yellow       | 1;33            | 1;43            |
| Light Blue   | 1;34            | 1;44            |
| Light Purple | 1;35            | 1;45            |
| Light Cyan   | 1;36            | 1;46            |
| White        | 1;37            | 1;47            |

### Example

```Bash
echo -e "\e[1;34mLight Blue Text\e[0m"
```

## ANSI - Formating Codes

The ANSI codes also lets you control the way characters are displayed on the screen

| ANSI Code | Description   |
|-----------|---------------|
| 0         | Normal        |
| 1         | Bold          |
| 4         | Underlined    |
| 5         | Blinking      |
| 7         | Reverse video |

### Examples

```Bash
echo -e "\e[1mBold Text\e[0m"
```

```Bash
echo -e "\e[3mUnderlined Text\e[0m"
```