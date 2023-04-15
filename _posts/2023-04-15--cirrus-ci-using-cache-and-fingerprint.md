---
layout: post
title:  "[Cirrus CI] Using cache and fingerprint"
author: sbeex
categories: [ CI/CD ]
tags: [ ci, cirrus-ci, cirrus ]
cover: assets/img/articles/no-cover.png
subtheme: sub-theme-git
published: true
---
## Introduction
Imagine: You want to create two tasks in your Cirrus pipeline:
* build_task
* test_task (depends on build_task)

**You should not expect that the output of `build_task` is available in `test_task`**. Some other CI does that some not such as Cirrus.

## How can I share files between multiple Cirrus-CI tasks ?

To address that use case, Cirrus recommends to use `cache`:

> cache: instruction to persist files between task runs.
> 
> cf: https://cirrus-ci.org/guide/writing-tasks/#supported-instructions

So basically the `build_task` will declare a cache:

```yaml
#.cirrus.yml
build_task:
  container:
    image: node:latest
  node_modules_cache: # <--- declare a cache
    folder: node_modules # <--- this cache will contains this particular folder
    fingerprint_script: cat package-lock.json # <--- This is the most important notion that I will explain later
  script:
    - npm install
```
And then this cache can be reused in the `test_task`.

## Importance of fingerprint_script

> There are only two hard things in computer science: cache invalidation and naming things. -- Phil Karlton

This single line is **responsible for the cache invalidation**. 

For cirrus, as long as the evaluation of `fingerprint_script` stays the same -> it reuse the cache. 

The only way to make it repopulate the cache is to have a different value here.


### Situations
(Real life issue) As a beginner I used the following:
`fingerprint_script: echo $CIRRUS_OS`

This was a terrible **mistake**.
Here is why: my cache was based on the OS used by the cirrus agent running the pipeline.
As our cluster was based on linux, that value stayed constantly the same. So whatever I could have build or changed the cached folder was still to reuse from cirrus perspective.

It can be useful to use the CIRRUS_OS as part of the finger print but much more rarely as a single value.


Here are some good candidates for a cirrus cache fingerprint:
* `cat yarn.lock` // It will change as soon as you update the version of a dependency/add/remove dependencies pretty nice to reuse the same node_modules dir
* `cat package-lock.json`

## References
To read more about caching with cirrus: https://cirrus-ci.org/guide/writing-tasks/#cache-instruction