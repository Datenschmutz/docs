---
sidebar_position: 7
sidebar_label: 'CISCO CLI Commands'
id: cisco-cli-commands
description: "A comprehensive reference guide for CISCO CCNA CLI commands, both basic and advanced."
slug: /cisco-cli-commands
tags:
- Cheat Sheet
- CISCO
- CCNA
- Commands
---

# CISCO Command - Cheat Sheet

A comprehensive reference guide for CISCO CCNA CLI commands, both basic and advanced.

## CISCO Modes
| Mode                   | Description        |
|-:-:--------------------|-:-:----------------|
| Router>                | User mode          |
| Router#                | Privilege mode     |
| Router(config)#        | Global Config mode |
| Router(config-if)      | Interface mode     |
| Router(config-vlan)#   | Vlan config mode   |
| Router(config-router)# | router config mode |


## Basic Commands

| Command                                | Purpose                                                                                    |
|-:-:------------------------------------|-:-:----------------------------------------------------------------------------------------|
| `enable`                               | Enters privilege mode                                                                      |
| `configure terminal`                   | Enters configuration mode                                                                  |
| `description` *<name-string>*          | Sets a description to the interface                                                        |
| `hostname` *name*                      | Sets a host name to the current Cisco network device                                       |
| `interface` *fastethernet/number*      | Enters interface configuration mode for the specified fast ethernet interface              |
| `default interface <interface>`        | Rests the specified interface to its default configuration                                 |
| `copy` *from-location to-location*     | copie a file (or set of files) from one location to another                                |
| `copy running-config startup-config`   | It saves the configuration when the device reloads, it loads the latest configuration file |
| `copy startup-config running-config`   | Saves the startup configuration into the running configuration                             |
| `write` / `write memory`               | Save the current configuration                                                             |
| `write erase` / `erase startup-config` | Deletes the startup config                                                                 |
| `reload`                               | Reboots the device                                                                         |
| `exit` / `end`                         | Returns to previous mode                                                                   |
| `logout`/ `disable`                    | Exit User mode                                                                             |
| `shutdown`                             | Shuts down the interface                                                                   |
| `no shutdown`                          | turns up the interface                                                                     |


## Basic show Commads

| Command                                  | Purpose                                              |
|-:-:--------------------------------------|-:-:--------------------------------------------------|
| `show running-config`                    | Displays the current configuration                   |
| `show startup-config`                    | Displays the configuration at startup                |
| `show interfaces`                        | Displays detailed information about interface status |
| `show ip protocols`                      | Displays all the configured routing protocols        |
| `show ip interface`                      | Displays the status for each interface               |
| `show interface status`                  | Displays the interface line status                   |
| `show mac address-table`                 | Displays the MAC address table                       |
| `show interfaces trunk`                  | Displays trunk ports                                 |
| `show interfaces <interface> switchport` | Disables the switchport configuration                |


## Multilayer Switch Config Commands 

| Command          | Purpose                                   |
|-:-:--------------|-:-:---------------------------------------|
| `ip routing`     | Enables layer 3 routing on a switch       |
| `no switch port` | Configures the interface as a routed port | 


## VLAN Config Commands 

| Command                                      | Purpose                                                                              |
|-:-:------------------------------------------|-:-:----------------------------------------------------------------------------------|
| `vlan` *vlan-id*                             | Enter to Config vlan mode                                                     |
| `show vlan/ show vlan brief`                 | Lists each VLAN and all interfaces assigned to that VLAN but does not include trunks |
| `switchport trunk native vlan <vlan-number>` | Configures the native VLAN on a trunk port                                           |
| `switchport mode trunk/access`               | Set the interface  link type as a trunk or access                                    |
| `show interfaces trunk`                      | Displays information about the operational trunks along with their VLANs             |
| `encapsulation dot1q <vlan-number>`          | Configures the VLAN number on a router subinterface                                  |
| `encapsulation dot1q <vlan-id> native`       | Configures the native VLAN on a router subinterface                                  |
| `switchport trunk encapsulation dot1q`       | Sets the 802.1Q encapsulation on the trunk port                                      |
| `switchport voice vlan <vlan id>`            | Configures a voice VLan                                                              |


## DTP & VTP Config Commands

| Command                                        | Purpose                                    |
|-:-:--------------------------------------------|-:-:----------------------------------------|
| `switchport mode dynamic`                      | Configures DTP                             |
| `switchport mode dynamic` *auto* / *desirable* | Configures dynamic mode                    |
| `switchport nonegotiate`                       | Disables DTP negogotiation on an interface |
| `vtp mode < client / server / tranparent>`     | Configure VTP mode                         |
| `vtp version`                                  | Changes the VTP version                    |
| `vtp domain <domain name>`                     | Changes the VTP domain name                |
| `show vtp status`                              | Disables VTP Config                 |


## RIP Config Commands 

| Command                         | Purpose                                                                |
|-:-:-----------------------------|-:-:--------------------------------------------------------------------|
| `router rip`                    | Enters RIP Config mode                                          |
| `version 2`                     | RIP version 2                                                          |
| `maximum-paths <number>`        | Modifies the number of paths RIP will perform ECMP load-balancing over |
| `no auto-summary`               | Modifys the default RIPv2 behavior of automatic summarization          |
| `default-information originate` | Generates a default route                                              |
| `show ip rip database`          | Displays the contents of the RIP routing database                      |
| `debug ip rip`                  | Enables RIP debugging                                                  |
 

## EIGRP Config Commands 

| Command                                    | Purpose                                                       |
|-:-:----------------------------------------|-:-:-----------------------------------------------------------|
| `router eigrp <Autonomous system number> ` | Enters EIGRP config mode                                      |
| `network ip-address [ wildcard-mask ]`     | Enables EIGRP on interfaces in the specified range            |
| `eigrp router id`                          | Configures EIGRP router ID                                    |
| `no auto-summary `                         | Modifys the default EIGRP behavior of automatic summarization |
| `show ip eigrp neighbors`                  | Disables EIGRP neighbors                                      |


## OSPF Config Commands 

| Command                                     | Purpose                                                   |
|-:-:-----------------------------------------|-:-:-------------------------------------------------------|
| `router ospf ` *number*                     | Enters OSPF config mode                                   |
| `passive-interface` *interface*             | Stops sending 'Hello' messages of the specified interface |
| `router-id` *number*                        | Sets an OSPF router ID in ip format                       |
| `clear ip ospf`                             | Rests OSPF                                                |
| `auto-cost bandwidth` *megabits per second* | Change the refrence bandwidth                             |
| `ip ospf cost`  *cost*                      | Manually configure the OSPF cost                          |
| `ip ospf [process-id] area [area]`          | Activates OSPF on an interface                            |
| `ip priority [Priority]`                    | Changes the OSPF interface priority                       |
| `ip ospf process`                           | Rests the OSPF process                                    |
| `ip ospf network` *type*                    | Manually configure the network type                       |
| `ip ospf database`                          | Displays the contents of the OSPF routing database        |
| `bandwidth` *<bandwidth in kilobits>*       | Changes the interface bandwidth                           |
| `ip ospf authentication`                    | Enables authentication                                    |
| `ip ospf authentication-key <password>`     | Configures an OSPF password on an interface               |
| `show ip interface ospf` *brief*            | Disables each OSPF-enabled interface                      |
| `show ip ospf interface`  *interface*       | Displays the specified OSPF interface                     |
| `show ip ospf neighbor`                     | Disables OSPF neighbors                                   |


## HSRP Config Commands 

| Command                                   | Purpose                              |
|-:-:---------------------------------------|-:-:----------------------------------|
| `standby` *group number*                  | Configures HSRP                      |
| `standby version 2`                       | HSRP version 2                       |
| `standby <group number> ip` *IP address*  | Configures the virtual IP address    |
| `standby <group number> priority` *value* | Manually configure the active router |
| `standby <group number> preempt`          | Enables preemption                   |
| `show standby`                            | Displays global information for HSRP |
 

## IPv6 Config Commands 
| Command                                  | Purpose                         |
|-:-:--------------------------------------|-:-:-----------------------------|
| `ipv6 unicat-routing`                    | Enables IPv6 routing            |
| `ipv6 address <address/prefix>` *eui-64* | Configures an IPv6 address      |
| `ipv6 address autoconfig `               |                                 |
| `ipv6 enable`                            | Enables IPv6                    |
| `show ipv6 nterface` *brief*             |                                 |
| `show ipv6 neighbor`                     | Displays IPv6 neighbor table    |
| `show ipv6 route`                        | Displays the IPv6 routing table |
 

## ACLs Config Commands 

| Command                                                 | Purpose                                                     |
|-:-:-----------------------------------------------------|-:-:---------------------------------------------------------|
| `access-list <number> {deny / permit} ip wildcard mask` | Configures a basic standard ACL                             |
| `ip access-list standard <acl-name>`                    | Enters standard ACL config mode                             |
| `[entry number] {deny / permit} ip wildcard mask`       | Configures a named ACL                                      |
| `access-list <number> remark <remark>`                  | Adds a remark to an ACL                                     |
| `ip access-group <number> {in / out}`                   | Applys the ACL to an interface                              |
| `<permit / deny> ip any any`                            | Creates an extended ACL entry to permit or deny all traffic |
| `show access-list`                                      | Displays all the configured ACLs                            |
| `show ip access-list`                                   | Displays only IP ACLs                                       |
 
 
## STP Config Commands 

| Command                                                 | Purpose                                       |
|-:-:-----------------------------------------------------|-:-:-------------------------------------------|
| `spanning-tree portfast`                                | Enables portfast                              |
| `spanning-tree portfast default`                        | Enables portfast on all access ports          |
| `spanning-tree portfast bpdguard default`               | Enables BPDU Gurad on all portfast interfaces |
| `spanning-tree bpdguard enable`                         | Enbales BPDU Gurad                            |
| `spanning-tree mode` *mode*                             | Configures  STP mode                          |
| `spanning-tree vlan <vlan number> root primary`         | Configures the root bridge                    |
| `spanning-tree vlan <vlan number> root secondary`       | Configures the secondary root bridge          |
| `spanning-tree vlan <vlan-id> cost <cost>`              | Configures the STP cost of an interface       |
| `spanning-tree vlan <vlan-id> port-priority` *priority* | Configures the STP priority of an interface   |
| `show spanning-tree`                                    | Displays global information for STP           |
 

## RSTP  Config Commands

| Command                                             | Purpose                                      |
|-:-:-------------------------------------------------|-:-:------------------------------------------|
| `spanning-tree mode rapid-pvst`                     | Enables rapid PVST mode                      |
| `spanning-tree portfast`                            | Configures a switchport as an RSTP edge port |
| `spanning-tree link-type <point-to-point / shared>` | Configures the RSTP switchport link type     |
 
 
## Etherchannel Config Commands

| Command                                                                                         | Purpose                                                     |
|-:-:---------------------------------------------------------------------------------------------|-:-:---------------------------------------------------------|
| `interface port-channel <channel-group>`                                                        | Enters interface config mode for the specified port channel |
| `channel-group <interface id> mode < active / desirable / on / passive / auto >`                | Configures an interface to be part of an Etherchannel       |
| `channel protocol <lacp / pagp >`                                                               | Manually configures the Etherchannel negotiation protocol   |
| `port channel load-balance < src-mac / dst-mac / src-dst-mac /  dst-ip / src-ip / src-dst-ip >` | Configures the Etherchannl load-balancing method            |
| `show etherchannel summary`                                                                     | Displayes the summary of the etherchannels                  |
| `show etherchannle port-channel`                                                                | Displays information about virtual port-channel interfaces  |
| `show etherchannel load-balance`                                                                | Displays information about the load-balancing settings      |
 

# CDP Config Commands 
| Command                     | Purpose                                                |
|-:-:-------------------------|-:-:----------------------------------------------------|
| `cdp run`                   | Enables cdp                                            |
| `cdp enable`                | Enables cdp                                            |
| `cdp timer`                 | Configres the CDP timer                                |
| `cdp holdtime` *seconds*    | Configures cdp holdtimer                               |
| `cdp advertise-v2`          | Configres CPDv2                                        |
| `show cdp`                  | Displays global information for CDP                    |
| `show cdp traffic`          | Displayes the cdp trafic                               |
| `show cdp neighbors`        | Displays all CDP neighbors                             |
| `show cdp entry <hostname>` | Shows detailed information for a specific CDP neighbor |


## LLDP Config Commands 

| Command                      | Purpose                                               |
|-:-:--------------------------|-:-:---------------------------------------------------|
| `lldp run`                   | Enables LLDP                                          |
| `lldp transmit`              | Enables LLDP transmition on a specfic interface       |
| `lldp receive`               | Enables LLDP to revceive                              |
| `lldp timer` *seconds*       | Configures the LLDP timer                             |
| `lldp holdtime` *seconds*    | Configures LLDP holdtimer                             |
| `lldp reinit` *seconds*      | Configures the LLDP reinit timer                      |
| `show lldp`                  | Displays global information for LLDP                  |
| `show lldp traffic`          | Displayes the LLDP trafic                             |
| `show lldp neighbors`        | Displays the list of LLDP neighbors                   |
| `show lldp neighbors detail` | Displays more details from the list of LLDP neighbors |

 
## Clock & NTP Config Commands 

| Command                                                     | Purpose                                               |
|-:-:---------------------------------------------------------|-:-:---------------------------------------------------|
| `clock set hh:mm:ss {day/month} {month/day} year`           | Manually configure the software clock                 |
| `calendar set hh:mm:ss {day/month} {month/day} year`        | Manually configure the hardware clock                 |
| `clock timezone  <name of time zone> [minuits-offest]`      | Configures the timezone                               |
| `clock update calendar`                                     | Synchronizes the hardware to the software's time      |
| `clock read calender`                                       | Synchronizes the software to the calender's time      |
| `clock summer-time reccuring <name> <start> <end> [offest]` | Automatically configure summer time                   |
| `ntp server <IP>`                                           | Configures ntp server                                 |
| `ntp master` [number]                                       | Manually configure an device to act like an ntp sever |
| `ntp peer <IP address>`                                     | Symmetric active mode                                 |
| `ntp authenticate`                                          | Enable NTP authentication                             |
| `ntp authentication-key <key number> md5 <key>`             | Create the authentication key(s)                      |
| `ntp trusted-key <key-number>`                              | Specified which key(s) is trusted                     |
| `show clock`                                                | View the time                                         |
| `show clock detail`                                         | View the time source of the device                    |
| `show calendar`                                             | View the calendar                                     |
| `show ntp status`                                           | View the ntp status                                   |
| `show ntp associations`                                     | View all the servers you configured                   |


## SNMP Config Commands 

| Command                                         | Purpose                                       |
|-:-:---------------------------------------------|-:-:-------------------------------------------|
| `snmp-server contact` *contact*                 | Configures contact infomation                 |
| `snmp-server location` *location*               | Configures the location of the SNMP server    |
| `snmp-server community <string> ro`             | Configures the community strings (read only)  |
| `snmp-server community <string> rw`             | Configures the community strings (read/write) |
| `snmp-server host <host> version 2c <string>`   | Configures the NMC address                    |
| `snmp-server enable traps snmp linkdown linkup` |                                               |
| `snmp-server enable traps config`               |                                               |


# SYSLOG Config Commnads

| Command                                           | Purpose                                                                         |
|-:-:-----------------------------------------------|-:-:-----------------------------------------------------------------------------|
| `logging console` *level*                         | Configures logging to the console line                                          |
| `logging monitor` *level key-word*                | Configures logging to the VTY lines                                             |
| `logging buffered ` *size* *level*                | Configures logging to the buffer                                                |
| `logging <server-ip>`/ `logging host <server-ip>` | Configures logging to an external server                                        |
| `logging trap <level>`                            | Limits messages that are logged to the syslog servers based on severity         |
| `logging synchronus`                              | Prevents every logging output from immediately interrupting the console session |
| `terminal monitor`                                | Sends a copy of all syslog messages to Telnet or SSH                            |
| `service timestamps log` *datetime* / *uptime*    | Enables timestamps                                                              |
| `service squence-numbers`                         | Enable squence numbers                                                          |
| `show logging`                                    | Displays the device's logs                                                      |

 
## Console Port Security Commands

| Command                            | Purpose                                                 |
|-:-:--------------------------------|-:-:-----------------------------------------------------|
| `line console 0`                   | Enters console configuration mode                       |
| `passowrd <passowrd>`              | Sets up a passowrd                                      |
| `login`                            | Requires a user to enter the passowrd to access the CLI |
| `login local`                      | login with the username                                 |
| `exec-timeout <minuits> <seconds>` | Log out after a certain period of incativity            |

 
## SSH Config Commands 

| Command                   | Purpose                                   |
|-:-:-----------------------|-:-:---------------------------------------|
| `crypto key generate rsa` | Creates the keys that are required by SSH |
| `ip ssh version 2`        | Restricts SSH version 2 only              |
| `ip domain name <name>`   | Configures a domain name                  |
| `tranport input ssh`      | Limits connection to SSH only             |
| `show ip ssh`             | Shows if SSH is enabled or not            |
| `line vty 0 15`           | Access all VTY lines                      |


## FTP & TFTP Config Commands 

| Command                         | Purpose                                          |
|-:-:-----------------------------|-:-:----------------------------------------------|
| `ip ftp username <username>`    | Configures a username                            |
| `ip ftp password <pasword>`     | Configures a passowrd                            |
| `copy ftp: flash:`              | Copies files from a FTP server the device flash  |
| `copy tftp: flash:`             | Copies files from a TFTP server the device flash |
| `boot system flash <file name>` | Configures the new IOS                           |
| `delete flash:<file name>`      | Deletes a file                                   |
| `show file systems`             | View the file systems on a CISCO IOS             |
| `show flash`                    | View the contents of flash                       |
 
 
## NAT Config Commands 

| Command                                                                       | Purpose                                           |
|-:-:---------------------------------------------------------------------------|-:-:-----------------------------------------------|
| `ip nat` *inside* / *outside*                                                 | Designatea an inside or outside interface         |
| `ip nat inside source <inside local ip> <inside global ip>`                   | Configures the one-to-one ip mappings             |
| `ip nat inside source list <acess-list> pool <pool-name>`                     | Configures dynamic NAT by mapping to the ACL pool |
| ` ip nat inside source list <acess-listacess-list> pool <pool-name> overload` | Configures PAT                                    |
| `ip nat inside source list <acess-list> interface <interface> overload`       | Configures PAT                                    |
| `ip nat pool <pool>`                                                          | Creates a NAT pool                                |
| `show ip nat translations`                                                    |                                                   |
| `show ip nat statistics`                                                      |                                                   |
| `clear ip nat translation *`                                                  | Clears the NAT translation table                  |

 
## Voice vlan Commands 

| Command                           | Purpose                 |
|-:-:-------------------------------|-:-:---------------------|
| `switchport voice vlan <vlan-id>` | Configures a voice VLAN |
 
 
## Port security Commands

| Command                                                              | Purpose                                                                 |
|-:-:------------------------------------------------------------------|-:-:---------------------------------------------------------------------|
| `switchport port-security`                                           | Enables port security                                                   |
| `switchport port-security mac-address <mac address>`                 | Adds a MAC address to the list of secure MAC addresses                  |
| `switchport port-security aging time <minutes / inactivity>`         | Configures the aging time                                               |
| `switchport port-security aging type <absolute / inactivity>`        | Configures the the aging type                                           |
| `switchport port-security aging static`                              |                                                                         |
| `switchport port-security violation <shutdown / restrict / protect>` | Sets the action to be taken when a security violation is detected       |
| `switchport port-security maximum maximum`                           | Sets the maximum number of secure MAC addresses on the port             |
| `switchport port-security mac-address sticky`                        | Enables sticky secure mac address                                       |
| `switchport port-security mac-address sticky <mac address>`          | Configures a sticky mac address                                         |
| `errdisable recovery cause psecure-violation`                        | Re-enables an interface                                                 |
| `show port-security`                                                 | Displays the port security interfaces                                   |
| `errdisable recovery interval <seconds>`                             | Configures the timer interval                                           |
| `show port-security interface <interface>`                           | Displays information about security options configured on the interface |
| `show errdisable recovery`                                           | Displays reasons an interface  is errdisabled                           |


## DHCP Snooping Commands 

| Command                                                 | Purpose                                             |
|-:-:-----------------------------------------------------|-:-:-------------------------------------------------|
| `ip dhcp snooping`                                      | Enables DHCP snooping globally                      |
| `ip dhcp snooping vlan <vlan-num>`                      | Enables DHCP snooping on the specified VLan         |
| `ip dhcp snooping trust`                                | Configures an interface as a trusted port           |
| `ip dhcp snooping rate limit rate <packets per second>` | Configures DHCP rate limitation                     |
| `errdisable recovery cause dhcp-rate-limit`             | Enables  errdisable recovery for DHCP rate limiting |
| `no ip dhcp snooping information option`                | Disables DHCP option 82                             |
| `show ip dhcp snooping biding`                          |                                                     |
 
 
## DAI Config Commands 

| Command                                               | Purpose                                       |
|-:-:---------------------------------------------------|-:-:-------------------------------------------|
| `ip arp  inspection vlan <vlan-num>`                  | Enables DAI                                   |
| `ip arp inspection trust`                             | Configures an interface as a trusted port     |
| `ip arp inspection validate <dst-mac / src-mac / ip>` |                                               |
| `ip arp inspection limit rate `                       | Configures DAI rate limiting                  |
| `errdiable recovery cause arp-inspection`             | Manually re-enable disabled interfaces        |
| `show ip arp inspection`                              | Displays the summury of the DAI configuration |


## Client DNS Config Check Commands 

### Windows Commads

| Command                | Purpose              |
|-:-:--------------------|-:-:------------------|
| `ipconfig /displaydns` | View the DNS cache   |
| `ipconfig /flushdns`   | Clears the DNS cache |


### IOS Commands

| Command                       | Purpose                                   |
|-:-:---------------------------|-:-:---------------------------------------|
| `ip dns server`               | Configures a router as a DNS server       |
| `ip host <host> <IP address>` | Configures a list of mappings             |
| `ip name-server <IP address>` | Configures an external DNS server         |
| `ip domain-name` *name*       | Conﬁgures a DNS domain name               |
| `ip domain lookup`            | Enables DNS lookup                        |
| `show hosts`                  | Disables the configured and learned hosts |
 

## DHCP Config Commands

### Windows Commads
| Command             | Purpose                               |
|-:-:-----------------|-:-:-----------------------------------|
| `ipconfig /release` | Releases the DHCP learned IP address  |
| `ipconfig /renew`   | Gets an IP address from a DHCP server |
 

### IOS Commands

| Command                                                 | Purpose                                                                     |
|-:-:-----------------------------------------------------|-:-:-------------------------------------------------------------------------|
| `ip dhcp excluded-address <low-address> <high-address>` | Specifies IP addresses that a DHCP server should not assign to DHCP clients |
| `ip dhcp pool` *name*                                   | Creates a DHCP pool / Entres DHCP config mode                               |
| `network <network-number> <mask>`                       | Configures the network number and mask for a DHCP address pool              |
| `default-router <address>`                              | Specifies the default router list for a DHCP client                         |
| `lease` *days* *hours* *minuts*                         | Configures the lease time                                                   |
| `lease infinit`                                         |                                                                             |
| `show dhcp biding`                                      | Displays all of the DHCP clients                                            |
| `ip helper-address` *address*                           | Configure a DHCP relay-agent                                                |
| `ip address dhcp`                                       | Configures a DHCP client                                                    |
