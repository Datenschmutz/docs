---
sidebar_position: 2
sidebar_label: 'Cron - Cronjobs'
id: cron
description: Automatische Ausführung von Aufgaben zu von dir festgelegten (wiederkehrenden) Zeiten.
slug: /cron
last_update:
  author: Fabian
  date: 12/04/2022
---

# Cron - Cronjobs

Der "Cron"-Dienst ist unter Linux als gleichnamiges Paket bereits vorinstalliert. Mit Hilfe von Cron-Jobs kannst du bestimmte Aufgaben zu von dir festgelegten (wiederkehrenden) Zeiten automatisch ausführen lassen. Cron-Jobs sind daher z.B. für automatische Backups nützlich.

:::caution Serverzeit prüfen
Für die automatische Ausführung verwendet cron die lokal eingestellte Zeit. Du kannst sie mit dem Befehl `timedatectl` überprüfen.
Wenn die Zeit nicht korrekt ist, kannst du sie mit [dieser Anleitung](./linux-time-date) anpassen
:::

## Crontab
Die einzelnen Cronjobs werden in einer Tabelle, der sogenannten "Crontab", gespeichert. In dieser Tabelle wird pro Zeile ein Cronjob definiert. Jede Zeile enthält den Zeitpunkt, zu dem der Befehl ausgeführt werden soll, und den Befehl selbst. Die Syntax einer Crontab-Zeile sieht wie folgt aus:

## Cronjobs Erstellen

Um die crontab des aktuell angemeldeten Benutzers zu bearbeiten, verwende den Befehl.

```bash
crontab -e.
```

### Crontab-Zeilen Syntax

```bash
0 12 * * * Command
```

| 0 | 12 | * | * | * | Command |
|---|---|---|---|---|---|
| Minute (0-59) | Stunde (0-23) | Tag (1-31) | Monat (1-12) | Wochentag (1-7) | Auszuführender Befehl |

>Bei allen Zeitangaben kann auch ein "*" verwendet werden, um anzugeben, dass die Ausführung zu einer beliebigen Minute, Stunde usw. erfolgen soll.

>Im obigen Beispiel wird der Befehl jeden Tag um 12:00 Uhr ausgeführt.

:::tip
Die Erstellung eines Cronjobs mit den unten aufgeführten Ergänzungen kann sehr mühsam sein, daher wird die Verwendung eines [Online-Cronjob-Generators] (https://www.google.com/search?q=crontab+generator) dringend empfohlen.
:::

#### Es ist möglich, mehr als einen Wert pro Zeiteintrag zu definieren, indem man sie mit einem `,` trennt.

```bash
0 6,18 1,28 1,6,12 * Command
```

>Der obige Cronjob wird am 1. und 28. Tag im Januar, Juni und Dezember jeweils um 06:00 und 18:00 Uhr ausgeführt

#### Neben der Verwendung fester Zeiten ist es auch möglich, ein Intervall durch die Verwendung eines `/` anzugeben.

```bash
*/5 * * * * Command
```

>Der obige Befehl wird alle 5 Minuten ausgeführt

#### Zu guter Letzt ist es auch möglich, einen Befehl automatisch beim Neustart auszuführen.

```bash
@reboot Command
```

>Der obige Befehl wird beim Neustart ausgeführt

## Cronjob ausgabe

Standardmäßig werden alle Ausgaben von Befehlen oder Skripten, die über Cronjobs ausgeführt werden, per E-Mail an den jeweiligen Benutzer auf dem Server gesendet, der den Cronjob in seiner Crontab gespeichert hat.

Es ist jedoch möglich, diese Ausgabe in eine (Log-)Datei umzuleiten oder ganz zu deaktivieren, falls gewünscht.

### Cronjob Log ausgabe

Um die Ausgabe eines Befehls oder Skripts in eine Logdatei umzuleiten, musst du in deiner Crontab-Zeile nach dem Befehl oder Skript `>>` schreiben, gefolgt von dem Pfad der Datei, in die diese Ausgabe umgeleitet werden soll.

Nach dem Pfad der Datei muss auch `2>&1` stehen, damit nicht nur die normale Ausgabe, sondern auch Fehler in diese Datei umgeleitet werden.

```bash Beispiel für einen vollständigen Cronjob mit Log
0 12 * * * /usr/bin/script.sh >> /var/log/script.log 2>&1
```

>Der obige Befehl führt das Skript alle 12 Stunden aus und sendet die Ergebnisse des Befehls in eine Logdatei

### Cronjob-Ausgabe deaktivieren

Um die Ausgabe zu deaktivieren, verwende `> /dev/null` anstelle des doppelten Größer-als-Zeichens und den Pfad der Ausgabedatei nach dem Befehl oder Skript. Dies ist das sogenannte [Null Device](https://en.wikipedia.org/wiki/Null_device) unter Linux.

Nach den Pfad der Datei muss auch `"2>&1"` sein, dies stellt sicher, dass nicht nur die normale Ausgabe, sondern auch Fehler auf das Null Device umgeleitet werden.

```bash Beispiel für einen vollständigen Cronjob mit deaktiviertem Log
0 12 * * * /usr/bin/script.sh > /dev/null 2>&1
```

>Der obige Befehl führt das Skript alle 12 Stunden aus und sendet die Befehlsergebnisse an das Null-Device (löscht sie)

## Vollständige Aufschlüsselung der Crontab-Zeilen

| Minute (0-59) | Stunde (0-23) | Tag (1-31) | Monat (1-12) | Wochentag (1-7) | Befehl | > Sendet ausgabe<br/> >> Sendet ausgabe ohne ziel zu überschreiben | Ausgabe Ziel | Sendet auch fehler ans ziel |
|---|---|---|---|---|---|---|---|---|
| 0 | 12 | * | * | * | /usr/bin/script.sh | >> | /var/log/script.log | 2>&1 |
| 0 | 12 | * | * | * | /usr/bin/script.sh | > | /dev/null| 2>&1 |

```bash Beispiel für einen vollständigen Cronjob mit Protokoll
0 12 * * * /usr/bin/script.sh >> /var/log/script.log 2>&1
```

```bash Beispiel für einen vollständigen Cronjob mit deaktiviertem Log
0 12 * * * /usr/bin/script.sh > /dev/null 2>&1
```

- `> /dev/null`: Dies ist das so genannte [Null Device](https://en.wikipedia.org/wiki/Null_device), an das alles gesendet wird, was gelöscht wird.
- `2>&1`: stellt sicher, dass nicht nur normale Ausgaben, sondern auch Fehler in die Löschung umgeleitet werden.

## Cronjob ordner

Zusätzlich zu crontab gibt es auch vordefinierte Ordner für bestimmte Zeitintervalle.

Es gibt die folgenden Ordner:

- `/etc/cron.daily/`
- `/etc/cron.hourly/`
- `/etc/cron.weekly/`
- `/etc/cron.monthly/`

Ziemlich selbsterklärend werden alle ausführbaren Dateien (z. B. Skripte) mit der im Ordnernamen angegebenen Interwall ausgeführt.
