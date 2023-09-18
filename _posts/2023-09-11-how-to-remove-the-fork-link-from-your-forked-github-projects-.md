---
layout: post
title:  "[How to] Remove the fork link from a forked GitHub repository"
author: sbeex
categories: [ tools ]
tags: [ git, github ]
cover: assets/img/articles/github-remove-fork-link.png
subtheme: sub-theme-git
published: true
---
## Introduction

Sometimes you fork a repository abandoned by its author and decide to give it a second life.

I did that for this repository https://github.com/sebastienvermeille/another-protobuf-maven-plugin.

The principle of fork is great in theory we can still merge our changes upstream. But in this case, it was just a pain:

Each time I opened a new PR for my own repo it opened a PR by default to the original forked repo (abandoned). I manually had to define another target each time (Imagine if contributors of the new repo get to this mistake too.. their PR will never appear to my project...)


GitHub does not provide at this time an out-of-the-box solution to specify some default target repositories at the moment. But there is a solution!


## How

Use the GitHub chatbot-virtual-assistant at https://support.github.com/contact?tags=rr-forks&subject=Detach%20Fork&flow=detach_fork

This will ask you a few questions about how the fork should be replaced and create a github support ticket automatically.

After a couple of days, your repo will appear totally "unforked". Thank's to GitHub support!

## References
https://stackoverflow.com/a/16052845
