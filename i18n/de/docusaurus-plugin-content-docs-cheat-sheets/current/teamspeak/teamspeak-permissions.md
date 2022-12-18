---
sidebar_position: 2
sidebar_label: 'TeamSpeak Permissions'
id: teamspeak-permissions
description: A list with all available TeamSpeak permissions.
slug: /teamspeak-permissions
last_update:
  author: Fabian
  date: 12/18/2022
tags:
  - TeamSpeak
  - List
  - Permissions
---

# TeamSpeak Permissions List

i18n Tranlation of TeamSpeak Permissions List -WIP

A list with all available TeamSpeak permissions.

| name                                                       | description                                                                    |
|------------------------------------------------------------|--------------------------------------------------------------------------------|
| `unknown`                                                  | Kann bei Fehlerrückgaben ohne zugehörige Berechtigung auftreten                |
| `b_serverinstance_help_view`                               | Abrufen von Informationen über ServerQuery-Befehle                             |
| `b_serverinstance_version_view`                            | Abrufen der globalen Serverversion (einschließlich Plattform und Build-Nummer) |
| `b_serverinstance_info_view`                               | Abrufen von globalen Serverinformationen                                       |
| `b_serverinstance_virtualserver_list`                      | Auflisten der in der Datenbank gespeicherten virtuellen Server                 |
| `b_serverinstance_binding_list`                            | Auflistung aktiver IP-Bindungen auf Multi-Homed-Maschinen                      |
| `b_serverinstance_permission_list`                         | Auflisten der auf der Serverinstanz verfügbaren Berechtigungen                 |
| `b_serverinstance_permission_find`                         | Suche nach Berechtigungszuweisungen nach Name oder ID                          |
| `b_virtualserver_create`                                   | Virtuelle Server erstellen                                                     |
| `b_virtualserver_delete`                                   | Virtuelle Server löschen                                                       |
| `b_virtualserver_start_any`                                | Starten eines beliebigen virtuellen Servers in der Serverinstanz               |
| `b_virtualserver_stop_any`                                 | Anhalten eines beliebigen virtuellen Servers in der Serverinstanz              |
| `b_virtualserver_change_machine_id`                        | Ändern der Maschinen-ID eines virtuellen Servers                               |
| `b_virtualserver_change_template`                          | Bearbeiten von Standardvorlagenwerten für virtuelle Server                     |
| `b_serverquery_login`                                      | Anmeldung bei ServerQuery                                                      |
| `b_serverinstance_textmessage_send`                        | Senden von Textnachrichten an alle virtuellen Server auf einmal                |
| `b_serverinstance_log_view`                                | Abrufen des globalen Serverprotokolls                                          |
| `b_serverinstance_log_add`                                 | In das globale Serverprotokoll schreiben                                       |
| `b_serverinstance_stop`                                    | Den Serverprozess herunterfahren                                               |
| `b_serverinstance_modify_settings`                         | Globale Einstellungen bearbeiten                                               |
| `b_serverinstance_modify_querygroup`                       | Globale ServerQuery-Gruppen bearbeiten                                         |
| `b_serverinstance_modify_templates`                        | Globale Vorlagengruppen bearbeiten                                             |
| `b_virtualserver_select`                                   | Auswählen eines virtuellen Servers                                             |
| `b_virtualserver_info_view`                                | Abrufen von Informationen über virtuelle Server                                |
| `b_virtualserver_connectioninfo_view`                      | Abrufen von Verbindungsinformationen des virtuellen Servers                    |
| `b_virtualserver_channel_list`                             | Auflisten von Channels auf einem virtuellen Server                             |
| `b_virtualserver_channel_search`                           | Suche nach Channels auf einem virtuellen Server                                |
| `b_virtualserver_client_list`                              | Clients auflisten, die auf einem virtuellen Server online sind                 |
| `b_virtualserver_client_search`                            | Suche nach Clients, die auf einem virtuellen Server online sind                |
| `b_virtualserver_client_dblist`                            | Auflisten der dem virtuellen Server bekannten Client-Identitäten               |
| `b_virtualserver_client_dbsearch`                          | Suche nach Client-Identitäten, die der virtuelle Server kennt                  |
| `b_virtualserver_client_dbinfo`                            | Abrufen von Client-Informationen                                               |
| `b_virtualserver_permission_find`                          | Berechtigungen suchen                                                          |
| `b_virtualserver_custom_search`                            | Benutzerdefinierte Felder finden                                               |
| `b_virtualserver_start`                                    | Eigenen virtuellen Server starten                                              |
| `b_virtualserver_stop`                                     | Beenden des eigenen virtuellen Servers                                         |
| `b_virtualserver_token_list`                               | Verfügbare Berechtigungsschlüssel auflisten                                    |
| `b_virtualserver_token_add`                                | Neue Privilegienschlüssel erstellen                                            |
| `b_virtualserver_token_use`                                | PriviBerechtigungs Schlüssel verwenden, um Zugang zu Gruppen zu erhalten       |
| `b_virtualserver_token_delete`                             | Löschen eines Berechtigungsschlüssels                                          |
| `b_virtualserver_log_view`                                 | Abrufen des Protokolls des virtuellen Servers                                  |
| `b_virtualserver_log_add`                                  | In das Protokoll des virtuellen Servers schreiben                              |
| `b_virtualserver_join_ignore_password`                     | Virtuellem Server beitreten, ohne sein Passwort zu kennen                      |
| `b_virtualserver_notify_register`                          | Für Server-Benachrichtigungen registrieren                                     |
| `b_virtualserver_notify_unregister`                        | Abmeldung von Server-Benachrichtigungen                                        |
| `b_virtualserver_snapshot_create`                          | Server-Snapshots erstellen                                                     |
| `b_virtualserver_snapshot_deploy`                          | Bereitstellen von Server-Snapshots                                             |
| `b_virtualserver_permission_reset`                         | Zurücksetzen der Serverberechtigungseinstellungen auf Standardwerte            |
| `b_virtualserver_modify_name`                              | Ändern des Servernamens                                                        |
| `b_virtualserver_modify_welcomemessage`                    | Willkommensnachricht ändern                                                    |
| `b_virtualserver_modify_maxclients`                        | Ändern der maximalen Anzahl von Clients auf dem Server                         |
| `b_virtualserver_modify_reserved_slots`                    | Reservierte Slots ändern                                                       |
| `b_virtualserver_modify_password`                          | Ändern des Server-Passworts                                                    |
| `b_virtualserver_modify_default_servergroup`               | Ändern der Standard-Servergruppe                                               |
| `b_virtualserver_modify_default_channelgroup`              | Standard-Channel-Gruppe ändern                                                 |
| `b_virtualserver_modify_default_channeladmingroup`         | Standard Channel Admin Gruppe ändern                                           |
| `b_virtualserver_modify_channel_forced_silence`            | Channel-Zwangsstille-Wert ändern                                               |
| `b_virtualserver_modify_complain`                          | Ändern der individuellen Beschwerdeeinstellungen                               |
| `b_virtualserver_modify_antiflood`                         | Individuelle Antiflood-Einstellungen ändern                                    |
| `b_virtualserver_modify_ft_settings`                       | Ändern der Dateiübertragungseinstellungen                                      |
| `b_virtualserver_modify_ft_quotas`                         | Ändern von Dateiübertragungsquoten                                             |
| `b_virtualserver_modify_hostmessage`                       | Individuelle Hostmessage-Einstellungen ändern                                  |
| `b_virtualserver_modify_hostbanner`                        | Individuelle Hostbanner-Einstellungen ändern                                   |
| `b_virtualserver_modify_hostbutton`                        | Individuelle Hostbutton-Einstellungen ändern                                   |
| `b_virtualserver_modify_port`                              | Ändern des Serverports                                                         |
| `b_virtualserver_modify_autostart`                         | Ändern des Server-Autostarts                                                   |
| `b_virtualserver_modify_needed_identity_security_level`    | Erforderliche Sicherheitsstufe der Identität ändern                            |
| `b_virtualserver_modify_priority_speaker_dimm_modificator` | Ändern der Priorität des Lautsprecher-Dimmmodifikators                         |
| `b_virtualserver_modify_log_settings`                      | Ändern der Log-Einstellungen                                                   |
| `b_virtualserver_modify_min_client_version`                | Ändern der minimalen Client-Version                                            |
| `b_virtualserver_modify_icon_id`                           | Ändern des Serversymbols                                                       |
| `b_virtualserver_modify_weblist`                           | Ändern der Einstellungen für Webserver-Listenberichte                          |
| `b_virtualserver_modify_codec_encryption_mode`             | Ändern des Codec-Verschlüsselungsmodus                                         |
| `b_virtualserver_modify_temporary_passwords`               | Ändern der temporären Serverpasswörter                                         |
| `b_virtualserver_modify_temporary_passwords_own`           | Ändern der eigenen temporären Serverpasswörter                                 |
| `b_virtualserver_modify_channel_temp_delete_delay_default` | Standardverzögerung für das Löschen temporärer Channels ändern                 |
| `b_virtualserver_modify_nickname`                          | Ändern von Server-Nicknames                                                    |
| `b_virtualserver_modify_integrations`                      | Ändern von Integrationen                                                       |
| `i_channel_min_depth`                                      | Minimale Channel-Erstellungstiefe in der Hierarchie                            |
| `i_channel_max_depth`                                      | Maximale Channel-Erstellungstiefe in der Hierarchie                            |
| `b_channel_group_inheritance_end`                          | Vererbung von Channelgruppenberechtigungen stoppen                             |
| `i_channel_permission_modify_power`                        | Stärke der Channel-Berechtigungspwoer ändern                                   |
| `i_channel_needed_permission_modify_power`                 | Erforderliche Änderungspower der Channelberechtigung                           |
| `b_channel_info_view`                                      | Abrufen von Channelinformationen                                               |
| `b_channel_create_child`                                   | Unterchannels erstellen                                                        |
| `b_channel_create_permanent`                               | Permanente Channels erstellen                                                  |
| `b_channel_create_semi_permanent`                          | Semi-permanente Channels erstellen                                             |
| `b_channel_create_temporary`                               | Temporäre Channels erstellen                                                   |
| `b_channel_create_private`                                 | Private Channels erstellen                                                     |
| `b_channel_create_with_topic`                              | Channels mit einem Thema erstellen                                             |
| `b_channel_create_with_description`                        | Channels mit einer Beschreibung erstellen                                      |
| `b_channel_create_with_password`                           | Erstellen von passwortgeschützten Channels                                     |
| `b_channel_create_modify_with_codec_speex8`                | Erstellen von Channels mit Speex Narrowband (8 kHz) Codecs                     |
| `b_channel_create_modify_with_codec_speex16`               | Erstellen von Channels mit Speex Wideband (16 kHz) Codecs                      |
| `b_channel_create_modify_with_codec_speex32`               | Erstellen von Channels mit Speex Ultra-Breitband (32 kHz) Codecs               |
| `b_channel_create_modify_with_codec_celtmono48`            | Erstellen von Channels mit dem CELT Mono (48 kHz) Codec                        |
| `b_channel_create_modify_with_codec_opusvoice`             | Erstellen von Channels mit dem OPUS-Codec (Sprache)                            |
| `b_channel_create_modify_with_codec_opusmusic`             | Erstellen von Channels mit dem OPUS (Musik)-Codec                              |
| `i_channel_create_modify_with_codec_maxquality`            | Erstellen von Channels mit benutzerdefinierter Codec-Qualität                  |
| `i_channel_create_modify_with_codec_latency_factor_min`    | Erstellen von Channels mit minimalem benutzerdefinierten Codec-Latenzfaktor    |
| `b_channel_create_with_maxclients`                         | Erstellen von Channels mit benutzerdefinierten Max-Clients                     |
| `b_channel_create_with_maxfamilyclients`                   | Erstellen von Channels mit benutzerdefinierten maximalen Familienclients       |
| `b_channel_create_with_sortorder`                          | Erstellen von Channels mit benutzerdefinierter Sortierreihenfolge              |
| `b_channel_create_with_default`                            | Erstellen von StandardChannels                                                 |
| `b_channel_create_with_needed_talk_power`                  | Erstellen von Channels mit benötigter Sprechpower                              |
| `b_channel_create_modify_with_force_password`              | Neue Channels nur mit Passwort erstellen                                       |
| `i_channel_create_modify_with_temp_delete_delay`           | Maximale Löschverzögerung für temporäre Channels                               |
| `b_channel_modify_parent`                                  | Channels verschieben                                                           |
| `b_channel_modify_make_default`                            | Channel als Standard festlegen                                                 |
| `b_channel_modify_make_permanent`                          | Channel permanent machen                                                       |
| `b_channel_modify_make_semi_permanent`                     | Channel semi-permanent machen                                                  |
| `b_channel_modify_make_temporary`                          | Channel temporär machen                                                        |
| `b_channel_modify_name`                                    | Channelnamen ändern                                                            |
| `b_channel_modify_topic`                                   | Thema des Channels ändern                                                      |
| `b_channel_modify_description`                             | Channelbeschreibung ändern                                                     |
| `b_channel_modify_password`                                | Channelpasswort ändern                                                         |
| `b_channel_modify_codec`                                   | Channelcodec ändern                                                            |
| `b_channel_modify_codec_quality`                           | Channelcodec-Qualität ändern                                                   |
| `b_channel_modify_codec_latency_factor`                    | Channel-Codec Latenzfaktor ändern                                              |
| `b_channel_modify_maxclients`                              | Maximale Anzahl der Clients eines Channels ändern                              |
| `b_channel_modify_maxfamilyclients`                        | Maximale Anzahl der Familien-Clients des Channels ändern                       |
| `b_channel_modify_sortorder`                               | Sortierreihenfolge der Channels ändern                                         |
| `b_channel_modify_needed_talk_power`                       | Benötigte Talk Power des Channels ändern                                       |
| `i_channel_modify_power`                                   | Channel Modify Power                                                           |
| `i_channel_needed_modify_power`                            | Benötigte Channel Modify Power                                                 |
| `b_channel_modify_make_codec_encrypted`                    | Channelcodec verschlüsseln                                                     |
| `b_channel_modify_temp_delete_delay`                       | Temporären Channel ändern Verzögerung löschen                                  |
| `b_channel_delete_permanent`                               | Permanente Channels löschen                                                    |
| `b_channel_delete_semi_permanent`                          | Semi-permanente Channels löschen                                               |
| `b_channel_delete_temporary`                               | Temporäre Channels löschen                                                     |
| `b_channel_delete_flag_force`                              | Löschen von Channels erzwingen                                                 |
| `i_channel_delete_power`                                   | Channellöschpower                                                              |
| `i_channel_needed_delete_power`                            | Benötigte Channellöschpower                                                    |
| `b_channel_join_permanent`                                 | Permanente Channels betreten                                                   |
| `b_channel_join_semi_permanent`                            | Semi-permanenten Channels beitreten                                            |
| `b_channel_join_temporary`                                 | Temporären Channels beitreten                                                  |
| `b_channel_join_ignore_password`                           | Channel beitreten, ohne sein Passwort zu kennen                                |
| `b_channel_join_ignore_maxclients`                         | Maximale Anzahl von Clients für Channels ignorieren                            |
| `i_channel_join_power`                                     | Channel beitritts power                                                        |
| `i_channel_needed_join_power`                              | Benötigte Channel-Beitrittspower                                               |
| `i_channel_subscribe_power`                                | Channelabonnement Power                                                        |
| `i_channel_needed_subscribe_power`                         | Benötigte Channel-Abonnement-Power                                             |
| `i_channel_description_view_power`                         | Channelbeschreibung sicht Power                                                |
| `i_channel_needed_description_view_power`                  | Benötigte Channelbeschreibung Sichtspower                                      |
| `i_icon_id`                                                | Kennung des Gruppensymbols                                                     |
| `i_max_icon_filesize`                                      | Maximale Dateigröße des Symbols in Bytes                                       |
| `b_icon_manage`                                            | Aktiviert die Symbolverwaltung                                                 |
| `b_group_is_permanent`                                     | Gruppe ist permanent                                                           |
| `i_group_auto_update_type`                                 | Typ der automatischen Gruppenaktualisierung                                    |
| `i_group_auto_update_max_value`                            | Maximaler Wert für die automatische Aktualisierung der Gruppe                  |
| `i_group_sort_id`                                          | Gruppensortier-ID                                                              |
| `i_group_show_name_in_tree`                                | Anzeige des Gruppennamens in der Struktur je nach ausgewähltem Modus           |
| `b_virtualserver_servergroup_list`                         | Servergruppen auflisten                                                        |
| `b_virtualserver_servergroup_permission_list`              | Servergruppen-Berechtigungen auflisten                                         |
| `b_virtualserver_servergroup_client_list`                  | Clients einer Servergruppe auflisten                                           |
| `b_virtualserver_channelgroup_list`                        | Channel-Gruppen auflisten                                                      |
| `b_virtualserver_channelgroup_permission_list`             | Berechtigungen für Channel-Gruppen auflisten                                   |
| `b_virtualserver_channelgroup_client_list`                 | Clients einer Channel-Gruppe auflisten                                         |
| `b_virtualserver_client_permission_list`                   | Client-Berechtigungen auflisten                                                |
| `b_virtualserver_channel_permission_list`                  | Channel-Berechtigungen auflisten                                               |
| `b_virtualserver_channelclient_permission_list`            | Channel-Client-Berechtigungen auflisten                                        |
| `b_virtualserver_servergroup_create`                       | Servergruppen erstellen                                                        |
| `b_virtualserver_channelgroup_create`                      | Channel-Gruppen erstellen                                                      |
| `i_group_modify_power`                                     | Gruppen Power ändern                                                           |
| `i_group_needed_modify_power`                              | Benötigte Gruppenveränderungs Power ändern                                     |
| `i_group_member_add_power`                                 | Gruppenmitglied hinzufügen Power                                               |
| `i_group_needed_member_add_power`                          | Benötigtes Gruppenmitglied fügt Power hinzu                                 |
| `i_group_member_remove_power`                              | Gruppenmitglied löscht Power                                                |
| `i_group_needed_member_remove_power`                       | Benötigtes Gruppenmitglied löscht Power                                     |
| `i_permission_modify_power`                                | Erlaubnis Energie ändern                                                       |
| `b_permission_modify_power_ignore`                         | Benötigte Berechtigung zum Ändern der Power ignorieren                      |
| `b_virtualserver_servergroup_delete`                       | Servergruppen löschen                                                          |
| `b_virtualserver_channelgroup_delete`                      | Channelgruppen löschen                                                           |
| `i_client_permission_modify_power`                         | Client-Erlaubnis Power ändern                                               |
| `i_client_needed_permission_modify_power`                  | Erforderliche Client-Erlaubnis Power ändern                                 |
| `i_client_max_clones_uid`                                  | Max. zusätzliche Verbindungen pro Client-Identität                             |
| `i_client_max_idletime`                                    | Maximale Leerlaufzeit in Sekunden                                              |
| `i_client_max_avatar_filesize`                             | Maximale Dateigröße des Avatars in Bytes                                       |
| `i_client_max_channel_subscriptions`                       | Maximale Channelabonnements                                                      |
| `b_client_is_priority_speaker`                             | Client ist vorrangiger Sprecher                                                |
| `b_client_skip_channelgroup_permissions`                   | Channelgruppenberechtigungen ignorieren                                          |
| `b_client_force_push_to_talk`                              | Push-To-Talk-Erfassungsmodus erzwingen                                         |
| `b_client_ignore_bans`                                     | Verbote ignorieren                                                             |
| `b_client_ignore_antiflood`                                | Antiflood-Messungen ignorieren                                                 |
| `b_client_issue_client_query_command`                      | Abfragebefehle vom Client ausgeben                                             |
| `b_client_use_reserved_slot`                               | Einen reservierten Steckplatz verwenden                                        |
| `b_client_use_channel_commander`                           | Channel-Commander verwenden                                                    |
| `b_client_request_talker`                                  | GesprächsPower anfordern können                                             |
| `b_client_avatar_delete_other`                             | Löschen von Avataren anderer Klienten zulassen                                 |
| `b_client_is_sticky`                                       | Klient bleibt am aktuellen Channel hängen                                        |
| `b_client_ignore_sticky`                                   | Klient ignoriert Sticky-Flag                                                   |
| `b_client_info_view`                                       | Abrufen von Client-Informationen                                               |
| `b_client_permissionoverview_view`                         | Übersicht der Client-Berechtigungen abrufen                                    |
| `b_client_permissionoverview_own`                          | Übersicht über die eigenen Berechtigungen des Clients abrufen                  |
| `b_client_remoteaddress_view`                              | IP-Adresse und Port des Clients anzeigen                                       |
| `i_client_serverquery_view_power`                          | Power der ServerQuery-Ansicht                                               |
| `i_client_needed_serverquery_view_power`                   | Benötigte Power der ServerQuery-Ansicht                                     |
| `b_client_custom_info_view`                                | Benutzerdefinierte Felder anzeigen                                             |
| `i_client_kick_from_server_power`                          | Client Kick Power vom Server                                                   |
| `i_client_needed_kick_from_server_power`                   | Benötigte Client-KickPower vom Server                                       |
| `i_client_kick_from_channel_power`                         | Client-Kick-Power vom Channel                                                 |
| `i_client_needed_kick_from_channel_power`                  | Benötigte Client-Kick-Power vom Channel                                        |
| `i_client_ban_power`                                       | Client-Bann-Power                                                              |
| `i_client_needed_ban_power`                                | Benötigte Client-Ban-Power                                                     |
| `i_client_move_power`                                      | Client-Bewegungsbefugnis                                                       |
| `i_client_needed_move_power`                               | Benötigte Client-Bewegungsbefugnis                                             |
| `i_client_complain_power`                                  | Macht der Beschwerde                                                           |
| `i_client_needed_complain_power`                           | Benötigte Beschwerdebefugnis                                                   |
| `b_client_complain_list`                                   | Beschwerdeliste anzeigen                                                       |
| `b_client_complain_delete_own`                             | Eigene Reklamationen löschen                                                   |
| `b_client_complain_delete`                                 | Beschwerden löschen                                                            |
| `b_client_ban_list`                                        | Verbotsliste anzeigen                                                          |
| `b_client_ban_create`                                      | Bann hinzufügen                                                                |
| `b_client_ban_delete_own`                                  | Eigene Bans löschen                                                            |
| `b_client_ban_delete`                                      | Banns löschen                                                                  |
| `i_client_ban_max_bantime`                                 | Maximale Bannzeit                                                              |
| `i_client_private_textmessage_power`                       | Private NachrichtenPower des Clients                                        |
| `i_client_needed_private_textmessage_power`                | Benötigte Power für private Client-Nachrichten                              |
| `b_client_server_textmessage_send`                         | Senden von Textnachrichten an den virtuellen Server                            |
| `b_client_channel_textmessage_send`                        | Senden von Textnachrichten an den Channel                                        |
| `b_client_offline_textmessage_send`                        | Senden von Offline-Nachrichten an Clients                                      |
| `i_client_talk_power`                                      | Client-GesprächsPower                                                       |
| `i_client_needed_talk_power`                               | Benötigte Client-GesprächsPower                                             |
| `i_client_poke_power`                                      | Client-Stocherkraft                                                            |
| `i_client_needed_poke_power`                               | Benötigte Client-Poke-Power                                                    |
| `b_client_set_flag_talker`                                 | Setzen Sie das Talker-Flag für Clients und erlauben Sie ihnen zu sprechen      |
| `i_client_whisper_power`                                   | Flüsterkraft des Clients                                                       |
| `i_client_needed_whisper_power`                            | Klient benötigt Flüsterkraft                                                   |
| `b_client_modify_description`                              | Beschreibung eines Clients bearbeiten                                          |
| `b_client_modify_own_description`                          | Dem Klienten erlauben, seine eigene Beschreibung zu bearbeiten                 |
| `b_client_modify_dbproperties`                             | Bearbeiten der Eigenschaften eines Kunden in der Datenbank                     |
| `b_client_delete_dbproperties`                             | Löschen der Eigenschaften eines Kunden in der Datenbank                        |
| `b_client_create_modify_serverquery_login`                 | Eigenes ServerQuery-Konto erstellen oder ändern                                |
| `b_ft_ignore_password`                                     | Dateien ohne Channelpasswort durchsuchen                                         |
| `b_ft_transfer_list`                                       | Abrufen der Liste der laufenden Dateiübertragungen                             |
| `i_ft_file_upload_power`                                   | Datei-Upload-Power                                                          |
| `i_ft_needed_file_upload_power`                            | Benötigte Datei-Upload-Power                                                |
| `i_ft_file_download_power`                                 | Dateidownload-Power                                                         |
| `i_ft_needed_file_download_power`                          | Benötigte Power für den Dateidownload                                       |
| `i_ft_file_delete_power`                                   | Power zum Löschen von Dateien                                               |
| `i_ft_needed_file_delete_power`                            | Benötigte DateilöschPower                                                   |
| `i_ft_file_rename_power`                                   | Datei umbenennen Power                                                      |
| `i_ft_needed_file_rename_power`                            | Benötigte Power zum Umbenennen von Dateien                                  |
| `i_ft_file_browse_power`                                   | Power "Datei durchsuchen                                                    |
| `i_ft_needed_file_browse_power`                            | Benötigte Power "Datei durchsuchen                                          |
| `i_ft_directory_create_power`                              | Power "Verzeichnis erstellen                                                |
| `i_ft_needed_directory_create_power`                       | Benötigte Power zum Erstellen eines Verzeichnisses                          |
| `i_ft_quota_mb_download_per_client`                        | Download-Kontingent pro Client in MByte                                        |
| `i_ft_quota_mb_upload_per_client`                          | Upload-Kontingent pro Kunde in MByte                                           |