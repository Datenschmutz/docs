---
sidebar_position: 3
sidebar_label: 'Linux Uhrzeit und Datum'
id: linux-time-date
description: Diese Anleitung erklärt, wie du Uhrzeit und Datum unter Linux einstellst.
slug: /linux-time-date
last_update:
  author: Fabian
  date: 12/06/2022
tags:
- Guide
- Linux
- Time
- Date
- Bash
- Terminal
- Shell
- German/Deutsch
---

# Uhrzeit und Datum unter Linux

Diese Anleitung erklärt, wie du Uhrzeit und Datum unter Linux einstellst.

## Aktuelle Uhrzeit und Datum anzeigen

Gib den folgenden Befehl in die Linux-Eingabeaufforderung ein, um grundlegende Zeit- und Datumsinformationen anzuzeigen.

```bash
date
```

Die Rückmeldung sollte in etwa so aussehen:
>Tue 2022-12-06 16:18:53 CET

### Erweiterte Konfiguration mit timedatectl

Enter the following command into the Linux command prompt to show **Advanced** Time and Date information.

```bash
timedatectl
```

Die Rückmeldung sollte in etwa so aussehen:

>Local time: Tue 2022-12-06 16:18:53 CET<br/>
>Universal time: Tue 2022-12-06 15:18:53 UTC<br/>
>RTC time: Tue 2022-12-06 15:18:54<br/>
>Time zone: Europe/Vienna (CET, +0100)<br/>
>System clock synchronized: yes<br/>
>NTP service: n/a<br/>
>RTC in local TZ: no

### Anzeige der Hardware-Uhr (RTC)

Verwende einen der folgenden hwclock-Befehle, um die Hardware-Uhrzeit anzuzeigen:

```bash title="Option 1"
hwclock -r
```

```bash title="Option 2"
hwclock --show
```

## Uhrzeit und Datum einstellen

**In vielen Fällen würde die Zeit passen, nur die Zeitzone ist nicht korrekt [Klick hier](#zeitzone-ändern), um direkt zum Abschnitt Zeitzone ändern zu gelangen**

:::info
Obwohl es möglich ist, eine feste Zeit einzustellen, **empfehlen** wir Ihnen dringend, **NTP (Network Time Protocol)** zu verwenden. Dadurch wird auch die Zeit **synchronisiert**.
:::

### NTP

:::note
Sobald NTP aktiviert ist, wird die Zeit der aktuellen Zeitzone eingestellt. Du kannst dies wie [hier](#zeitzone-ändern) beschrieben einstellen.
:::

#### Aktivieren

```bash
sudo timedatectl set-ntp true
```

#### Deaktivieren

```bash
sudo timedatectl set-ntp false
```

### Zeitzone ändern

#### Verfügbare Zeitzonen

Mit dem folgenden Befehl kannst du dir die verfügbaren Zeitzonen anzeigen lassen. Suche nach deinem Kontinent und der nächstgelegenen Hauptstadt.

```bash
sudo timedatectl list-timezones
```

:::note
Verwende die `F`- und `B`-Taste auf deiner Tastatur, um **vorwärts und rückwärts** durch die aufgelisteten Zeitzonen zu blättern. **Alternativ** kannst du auch die `Pfeiltasten` zum Scrollen verwenden. **Mit `STRG+C` verläßt du die Liste**.
:::

#### Zeitzone auswählen

Sobald du deine Zeitzone gefunden hast, kannst du sie mit dem folgenden Befehl auswählen:

```bash title="In diesem Beispiel Europe/Vienna"
sudo timedatectl set-timezone Europe/Vienna
```

### Manuell

Um die Zeit manuell einzustellen, verwende den folgenden Befehl.

```bash title="In diesem Beispiel wird die Uhrzeit auf 12 Uhr Mitternacht eingestellt."
sudo timedatectl set-time 00:00:00
```

>Syntax: hh:mm:ss
