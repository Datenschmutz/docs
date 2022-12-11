---
sidebar_position: 5
sidebar_label: 'SSH-Willkommensnachricht ändern'
id: ssh-terminal-greeting
description: Diese Anleitung erklärt, wie man die Linux-Willkommensnachricht ändern kann.
slug: /ssh-terminal-greeting
last_update:
  author: Fabian
  date: 12/11/2022
tags:
- Linux
- SSH
- Terminal
- Welcome message
---
# Linux SSH-Willkommensnachricht ändern

Diese Anleitung erklärt, wie man die Linux-Willkommensnachricht ändern kann.

Nach jeder Anmeldung über SSH erscheint eine Willkommensnachricht. Wenn dich dieser Text stört und/oder du ihn einfach ändern möchtest, kannst du das auf zwei Arten tun.

## Nur-Text Begrüßungsnachricht ändern

Wenn eine reine Textbegrüßung ausreichend ist, solltest du diese Variante wählen. Shell-Befehle können bei dieser Variante nicht ausgeführt werden.

### Motd Bearbeiten

```bash
sudo nano /etc/motd
```

Lösche den alten Text und schreibe deinen eigenen Text hinein. Speichere mit `CTRL + X` gefolgt von `Y` und schließe mit `ENTER`.

:::tip
Du kannst deine Willkommensnachricht mit ASCII-Text ergänzen, einen guten Generator findest du [hier](https://patorjk.com/software/taag).
:::

## Ändern der Willkommensnachricht über. Bash-Skript

Die weitaus leistungsfähigere Methode ist die Verwendung eines Bash-Skripts. Zu diesem Zweck können z.B Farben festgelegt werden.

### Bash.bashrc Bearbeiten

Zusätzliche Befehle können am Ende der Datei hinzugefügt werden.

:::caution
Alle gewünschten Ausgaben müssen per Befehl (z.B. `echo`) angegeben werden, nicht als einfacher Text!
:::

```bash
sudo nano /etc/bash.bashrc
```

### Shell Einfärben - echo

:::info
Eine vollständige Anleitung zum Einfärben von Text findest du [hier](../cheat-sheets/linux-bash-coloring)
:::

Verwende den folgenden Befehl, um farbigen Text zu schreiben.

```bash
echo -e "\e[COLORmSample Text\e[0m"
```
