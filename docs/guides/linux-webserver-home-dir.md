---
sidebar_position: 6
sidebar_label: 'Change Webserver home directory'
id: linux-webserver-home-dir
description: This guide explains how to change the Linux Webserver home directory.
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
---

# Change Linux/Ubuntu Webserver home directory

This guide explains how to change the root directory of a Linux web server by changing the default directory from `/var/www/html` to a different one.

## Create new home directory

```bash title='Example'
sudo mkdir /home/user/MyWeb
```

## Open Apache2 Config file

```bash
sudo nano /etc/apache2/sites-available/000-default.conf
```

## Edit Apache2 Config file

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

## Restart Apache2 Service

```bash
sudo service apache2 restart
```

## Optional - Copy existing web files into new directory

```bash
sudo cp /var/www/* /home/user/MyWeb
```
