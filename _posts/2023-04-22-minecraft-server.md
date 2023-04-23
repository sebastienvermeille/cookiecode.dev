---
layout: post
title:  "Minecraft server Notes"
author: sbeex
categories: [ tools ]
tags: [ git ]
cover: assets/img/articles/no-cover.png
subtheme: sub-theme-git
published: true
---
## Introduction
I wanted to relearn a bit how to create and see what can be done in 2023 with a minecraft server. (I were very involved in the good times of Bukkit).

Seems that now the trend is to use Spigot so I went on it. (Spigot maintain bukkit)
## Howtos

### Make the server propose to players to install a texture pack

Edit `server.properties`:

```server.properties
resource-pack="https://someurl.tld/file.zip"
resource-pack-prompt="For a better experience on the server, we force players to install the same resource pack" // optional
resource-pack-sha1=13919321931293219321 // optional
require-resource-pack true // default false
```


> WARN: the pack-sha1 is valuable if you don't define it, when doing a change in your pack you have to change your pack url so that the client redownload the new one


### Install a plugin in spigot
As in bukkit -> just drop the jar in `plugins/`
and reboot the server


### Manage permissions
PermissionsEx has been "replaced" by [LuckyPerms](https://luckperms.net/).

Useful commands:
```
lp creategroup <name> <weight> <display name>

lp user <username> group add <group>
```

### Antibuild plugin
Prevent basic griefs https://www.spigotmc.org/resources/antibuild.109196/

By default, then you can grant access to perms:
```
antibuild.break: allows players to break blocks
antibuild.place: allows players to place blocks
antibuild.interact: allows players to open chests and other containers
antibuild.hit: allows players to hit entities
antibuild.pickup: allows players to pick up items
antibuild.drop: allows players to drop items
antibuild.invisible: allows players to become invisible to mobs
antibuild.nohunger: prevents hunger from decreasing for players with this permission.
```

### Admin useful creation tool
Worldedit (still active)
https://dev.bukkit.org/projects/worldedit