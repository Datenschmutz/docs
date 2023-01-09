---
sidebar_position: 6
sidebar_label: 'Git'
id: git-cheat-sheet
description: "Ein umfassendes Repertoire an Git-Befehlen, sowohl für Anfänger als auch für Fortgeschrittene."
slug: /git-cheat-sheet
tags:
- Cheat Sheet
- Git
- Versioning
- Shortcuts
- German/Deutsch
---

# Git - Cheat Sheet

Ein umfassendes Repertoire an Git-Befehlen, sowohl für Anfänger als auch für Fortgeschrittene.

## Basic Commands

| Befehl                    | Beschreibung                                                   |
|---------------------------|----------------------------------------------------------------|
| `git init`                | Initialisieren eines lokalen Git-Repositorys                   |
| `git clone`               | Erstellen einer lokalen Kopie eines entfernten Repositorys     |
| `git add`                 | Hinzufügen einer Datei in den Staging-Bereich                  |
| `git commit -m "message"` | Commit der bereitgestellten Änderungen mit einer Nachricht     |
| `git push`                | Pushen der übertragenen Änderungen in das entfernte Repository |
| `git pull`                | Ziehen der letzten Änderungen aus dem entfernten Repository    |
| `git status`              | Status des Repositorys prüfen                                  |

## Branching

| Befehl                   | Beschreibung                                                |
|--------------------------|-------------------------------------------------------------|
| `git branch`             | Alle lokalen Branches auflisten                             |
| `git branch <branch>`    | Einen neuen Branch erstellen                                |
| `git checkout <branch>`  | Zu einem anderen Branch wechseln                            |
| `git merge <branch>`     | Einen Branch mit dem aktuellen Branch zusammenführen        |
| `git branch -d <branch>` | Einen Branch löschen                                        |
| `git pull`               | Ziehen der letzten Änderungen aus dem entfernten Repository |

## Advanced Commands

| Befehl                     | Beschreibung                                                          |
|----------------------------|-----------------------------------------------------------------------|
| `git stash`                | Die Änderungen in einem "schmutzigen" Arbeitsverzeichnis ablegen      |
| `git log`                  | Einsicht in die Commit-Historie                                       |
| `git diff`                 | Einsehen der Änderungen zwischen Commits, Commit und Arbeitsbaum usw. |
| `git reset <file>`         | Eine Datei unstagen                                                   |
| `git cherry-pick <commit>` | Die Änderungen eines bestimmten Commits übernehmen                    |
| `git rebase <branch>`      | Den aktuellen Zweig auf einen anderen Zweig übertragen                |
