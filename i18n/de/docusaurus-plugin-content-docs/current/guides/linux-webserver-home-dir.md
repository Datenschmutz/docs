---
sidebar_position: 6
sidebar_label: 'Webserver-Stammverzeichnis ändern'
id: linux-webserver-home-dir
description: Diese Anleitung erklärt, wie man das Stammverzeichnis eines Linux-Webservers ändert.
slug: /linux-webserver-home-dir
last_update:
  author: Fabian
  date: 05/14/2023
tags:
- Guide
- Linux
- SSH
- Terminal
- Shell
- Webserver
- Home
- Directory 
- German/Deutsch
---

# Linux/Ubuntu Webserver-Stammverzeichnis ändern

In dieser Anleitung wird erläutert, wie das Stammverzeichnis eines Linux-Webservers geändert werden kann, indem das Standardverzeichnis von `/var/www/html` in ein anderes Verzeichnis geändert wird.

## Neues Stammverzeichnis erstellen

```bash title='Beispiel'
sudo mkdir /home/user/MyWeb
```

## Apache2-Konfigurationsdatei öffnen

```bash
sudo nano /etc/apache2/sites-available/000-default.conf
```

## Apache2-Konfigurationsdatei bearbeiten

```bash
<VirtualHost *:80>
        #ServerName www.example.com
        #ServerAdmin webmaster@localhost
        # highlight-next-line
        DocumentRoot /home/user/MyWeb

        <FilesMatch \.php$>
             SetHandler "proxy:unix:/var/run/php/php8.1-fpm.sock|fcgi://localhost"
        </FilesMatch>

        ErrorLog /error.log
        CustomLog /access.log combined
</VirtualHost>
```

## Apache2-Dienst neu starten

```bash
sudo service apache2 restart
```

## Optional - Bereits vorhandene Webdateien in das neue Verzeichnis kopieren

```bash
sudo cp /var/www/* /home/user/MyWeb
```
