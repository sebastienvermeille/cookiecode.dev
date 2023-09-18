---
layout: post
title:  "[Howto] Bind PrtScr key in i3wm with Falmeshot to take screenshots"
author: sbeex
categories: [ linux ]
tags: [i3wm]
cover: assets/img/articles/i3-printscreen.png
subtheme: sub-theme-git
---

`nano ~/.config/i3/config` (or vim whatever)

```bash
# ~/.config/i3/config

# bind flameshot to printscr button
bindsym Print exec flameshot gui
```

Then:
`i3-msg reload` and `i3-msg restart`

Voila !
