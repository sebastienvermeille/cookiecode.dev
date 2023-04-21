---
layout: post
title:  "linux reset audio volume with command line"
author: sbeex
categories: [ i3 ]
tags: [ linux, i3 ]
cover: assets/img/articles/reset-audio-volume-linux.png
subtheme: sub-theme-git
published: true
---
## Introduction
Sometimes the sound is boosted too much and saturated.

## How
`pactl list short synks` Will list your audio outputs and prefix them with a number that you can then use here:

`pactl set-sink-volume <number> 100%` Will set the volume to 100% for output <number>

