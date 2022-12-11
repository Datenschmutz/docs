---
sidebar_position: 5
sidebar_label: 'Change SSH Welcome message'
id: ssh-terminal-greeting
description: This guide explains how to change the Linux Welcome message.
slug: /ssh-terminal-greeting
last_update:
  author: Fabian
  date: 12/11/2022
tags:
- Guide
- Linux
- SSH
- Terminal
- Shell
- Welcome message
---
# Change Linux SSH Welcome message

This guide explains how to change the Linux Welcome message.

After each login via SSH a welcome message appears. If this text is annoying and/or you just want to change it, you can do this by two methods.

## Change text-only welcome message

If a text-only greeting is sufficient, you should choose this variant. Shell commands cannot be executed with this variant.

### Edit motd

```bash
sudo nano /etc/motd
```

Delete the old text and write our own text into it. Save with `CTRL + X` followed by `Y` close with `RETURN`.

:::tip
You can enhance your welcome message with ASCII text, a good generator can be found [here](https://patorjk.com/software/taag).
:::

## Change welcome message via. Bash script

The far more powerful method is to use a Bash script. Among other things, colors can be specified for this purpose.

### Edit bash.bashrc

Additional commands can be added at the end of the file.

:::caution
All desired outputs must be specified by command (e.g `echo`) not as stand alone text!
:::

```bash
sudo nano /etc/bash.bashrc
```

### Colorizing Shell - echo

:::info
A complete guide on how to colorize text can be found [here](../cheat-sheets/linux-bash-coloring)
:::

Use the following command for writing colored text.

```bash
echo -e "\e[COLORmSample Text\e[0m"
```
