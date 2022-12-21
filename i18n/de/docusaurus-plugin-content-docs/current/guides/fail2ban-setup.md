---
sidebar_position: 7
sidebar_label: 'Fail2ban Installation'
id: fail2ban-setup
description: Diese Anleitung erklärt, wie man Fail2ban unter Linux einrichtet.
slug: /fail2ban-setup
last_update:
  author: Fabian
  date: 12/21/2022
tags:
- Guide
- Linux
- SSH
- Terminal
- Fail2ban
- Security 
---

# SSH-Server unter Linux mit Fail2ban absichern

Fail2ban schützt deinen SSH-Server vor unbefugten Zugriffsversuchen. Es überwacht die Protokolldateien und blockiert alle IP-Adressen, die Anzeichen für böswillige Aktivitäten aufweisen, und trägt so zur Sicherheit deines Servers bei.

## Installation

### Server Updaten
Stelle sicher, dass dein System auf dem neuesten Stand ist, indem du den folgenden Befehl ausführst:

```bash
sudo apt update && sudo apt upgrade -y
```

### Fail2ban Installieren

```bash
sudo apt install fail2ban
```

## Konfiguration

### Konfigurationsdatei Kopieren
Kopiere die Standard-Fail2ban-Konfigurationsdatei in eine neue Datei, die Du dann bearbeiten kannst:

```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

### Konfigurationsdatei Bearbeiten

```bash
sudo nano /etc/fail2ban/jail.local
```

Scrolle nach unten zum Abschnitt [sshd] und ändere die Einstellung enabled auf `true`:

```bash
[sshd]
# highlight-next-line
enabled = true
maxretry  = 3
findtime  = 1d
bantime   = 4w
ignoreip  = 127.0.0.1/8 23.34.45.56
```

> Speichere die Konfigurationsdatei mit `Strg + X` gefolgt von `Y` und schließe mit `ENTER`.

### Fail2ban Service Neustarten

```bash
sudo systemctl restart fail2ban
```

### Fail2ban Start
Um sicherzustellen, dass Fail2ban automatisch startet, wenn das System hochfährt, führe den folgenden Befehl aus:

```bash
sudo systemctl enable fail2ban
```

## Fail2ban status Überprüfen
Dies zeigt dir den Status aller Jail-Dienste, die aktiviert sind, einschließlich des sshd-Jail.

```bash
sudo systemctl status fail2ban
```

Die Antwort sollte folgendermaßen aussehen:

```bash
user@datenschmutz:~# sudo systemctl status fail2ban
● fail2ban.service - Fail2Ban Service
     Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor pres>
    Drop-In: /usr/lib/systemd/system/fail2ban.service.d
             └─50-ensure-log.conf
     Active: active (running) since Wed 2022-09-28 12:23:48 CEST; 2 months 23 d>
       Docs: man:fail2ban(1)
   Main PID: 1331502 (fail2ban-server)
      Tasks: 25 (limit: 9485)
     Memory: 47.0M
     CGroup: /system.slice/fail2ban.service
             └─1331502 /usr/bin/python2 /usr/bin/fail2ban-server -xf start
```

### Gesperrte IPs auflisten
Um eine Liste der IP-Adressen anzuzeigen, die von Fail2ban gesperrt wurden, führe den folgenden Befehl aus:

```bash
sudo fail2ban-client statussshd
```

Hier wird eine Liste der IP-Adressen angezeigt, die aufgrund von fehlgeschlagenen Anmeldeversuchen gesperrt wurden.

#### Das war's! Du solltest nun Fail2ban so konfiguriert haben, dass es deinen Server vor unbefugten Zugriffsversuchen schützt.
