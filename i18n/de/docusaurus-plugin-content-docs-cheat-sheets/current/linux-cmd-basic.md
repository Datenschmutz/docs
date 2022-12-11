---
sidebar_position: 3
sidebar_label: 'Linux Cheat Sheet - Standard'
id: linux-cmd-basic
description: Linux CMD Cheat Sheet
slug: /linux-cmd-basic
tags:
- Cheat Sheet
- Linux
- Commands
- Shell
- Bash
- German/Deutsch
---

# Linux CMD Cheat Sheet - Standard

## Datei-Befehle

* `ls` – Verzeichnisauflistung
* `ls -al` – formatierte Auflistung mit versteckten Dateien
* `cd dir` - Verzeichnis in dir ändern
* `cd` – Wechsel ins Stammverzeichnis
* `pwd` – aktuelles Verzeichnis anzeigen
* `mkdir dir` – Verzeichnis erstellen
* `rm file` – Datei löschen
* `rm -r dir` – Verzeichnis dir löschen
* `rm -f file` – Datei entfernen erzwingen
* `rm -rf dir` – Verzeichnis entfernen erzwingen
* `cp file1 file2` – Datei1 nach Datei2 kopieren
* `cp -r dir1 dir2` – Kopiere dir1 nach dir2; erstelle dir2, wenn es nicht existiert
* `mv file1 file2` – Datei1 nach Datei2 umbenennen oder verschieben, wenn Datei2 ein bestehendes Verzeichnis ist, verschiebt Datei1 in das Verzeichnis Datei2
* `ln -s file link` – symbolischen Link zu einer Datei erstellen
* `touch file` – Datei erstellen oder aktualisieren
* `cat > file` – platziert Standardeingabe in Datei
* `more file` – Ausgabe des Inhalts der Datei
* `head file` – Ausgabe der ersten 10 Zeilen der Datei
* `tail file` – Ausgabe der letzten 10 Zeilen der Datei
* `tail -f file` – den Inhalt der Datei ausgeben, während sie wächst, beginnend mit den letzten 10 Zeilen

## Shortcuts

* **Ctrl+C** – hält den aktuellen Befehl an
* **Ctrl+Z** – stoppt den aktuellen Befehl, fortfahren mit
* `fg` in den vordergrung od. `bg` in den hintergrund
* **Ctrl+D** – Abmelden von der aktuellen Sitzung, ähnlich wie bei exit
* **Ctrl+W** – löscht ein Wort in der aktuellen Zeile
* **Ctrl+U** – löscht die gesamte Zeile
* **Ctrl+R** – tippen, um einen aktuellen Befehl aufzurufen
* `!!` - Wiederholt den letzten Befehl
* `exit` – aus der aktuellen Sitzung abmelden

## Dateiberechtigungen

* `chmod octal file` – ändert die Dateiberechtigungen auf oktal, die für Benutzer, Gruppe und Welt getrennt gefunden werden können, indem sie hinzugefügt werden:
  * 4 – lesen (r)
  * 2 – schreiben (w)
  * 1 – ausführen (x)

## Netzwerk/Download

* `wget file` – download datei
* `wget -c file` – einen angehaltenen Download fortsetzen
* `ping host` – host pingen und Ergebnisse Ausgeben
* `whois domain` – Whois-Informationen für Domain abrufen
* `dig domain` – DNS-Informationen für die Domäne abrufen
* `dig -x host` – Reverse-Lookup-Host

## Komprimierung

* `tar cf file.tar files` – erstellt ein tar Archiv namens file.tar
* `tar xf file.tar` – Entpacken der Dateien aus file.tar
* `tar czf file.tar.gz files` – ein tar mit Gzip-Kompression erstellen
* `tar xzf file.tar.gz` – ein tar mit Gzip entpacken
* `tar cjf file.tar.bz2` – ein tar mit Bzip2-Kompression erstellen
* `tar xjf file.tar.bz2` – ein tar mit Bzip2 entpacken
* `gzip file` – komprimiert die Datei und benennt sie in file.gz um
* `gzip -d file.gz` – dekomprimiert file.gz zurück zu file

## Prozess-Management

* `ps` – Ihre derzeit aktiven Prozesse anzeigen
* `top` – alle laufenden Prozesse anzeigen
* `kill pid` – prozess mit pid beenden
* `killall proc` – alle Prozesse mit dem Namen proc * beenden
* `bg` – listet angehaltene oder im Hintergrund laufende Aufträge auf; nimmt einen angehaltenen Auftrag im Hintergrund wieder auf
* `fg` – bringt den letzten Job in den Vordergrund
* `fg n` – rückt den Job n in den Vordergrund


### Examples

* `chmod 777` – lesen, schreiben, ausführen für alle
* `chmod 755` – rwx für besitzer, rx für gruppen and welt

## Suchen

* `grep pattern files` – Suche nach Mustern in Dateien
* `grep -r pattern dir` – rekursiv nach Mustern im Verzeichnis suchen
* `command | grep pattern` – Suche nach einem Muster in der Ausgabe des Befehls
* `locate file` – alle Instanzen der Datei finden

## System Info

* `date` – das aktuelle Datum und die Uhrzeit anzeigen
* `cal` – den Kalender für diesen Monat anzeigen
* `uptime` – aktuelle Betriebszeit anzeigen
* `w` – anzeigen, wer online ist
* `whoami` – als wer du eingeloggt bist
* `finger user` – Informationen über den Benutzer anzeigen
* `uname -a` – Kernel-Informationen anzeigen
* `cat /proc/cpuinfo` – cpu information
* `cat /proc/meminfo` – RAM information
* `man command` – zeige das Benutzerhandbuch für den Befehl
* `df` – Festplattennutzung anzeigen
* `du` – Verzeichnisspeicherverbrauch anzeigen
* `free` – RAM- und Swap-Nutzung anzeigen
* `whereis app` – mögliche Standorte der Anwendung anzeigen
* `which app` – anzeigen, welche Anwendung standardmäßig ausgeführt wird

## Installation

* `dpkg -i pkg.deb` – ein Paket installieren (Debian)
* `rpm -Uvh pkg.rpm` – ein Paket installieren (RPM)

## Von der Quelle installieren

* `./configure`
* `make`
* `make install`

---

[Basierend auf](https://gist.github.com/riipandi/3097780)
