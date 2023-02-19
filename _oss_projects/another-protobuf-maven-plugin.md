---
layout: oss_project
title:  Another protobuf maven plugin
description: A plugin that integrates protocol buffers compiler (protoc) into Maven lifecycle.
author: sbeex
tags: [ maven, protobuf, java ]
image: assets/img/oss/Apache_Maven_logo.svg
repository: https://github.com/sebastienvermeille/another-protobuf-maven-plugin
documentation: https://another-protobuf-maven-plugin.cookiecode.dev/
license: Apache license 2.0
subtheme: sub-theme-oss
---
A plugin that integrates protocol buffers compiler (protoc) into Maven lifecycle. This is a continuation of maven-protoc-plugin that was started at Google and later developed by GitHub community.

I forked this project as the initial maintainer no longer upgraded it.

To use it simply declare the following in your dependencies:

```xml
<dependency>
  <groupId>dev.cookiecode</groupId>
  <artifactId>protobuf-maven-plugin</artifactId>
  <version>0.7.1</version>
  <type>maven-plugin</type>
</dependency>
```

Or simply [visit maven repository page for latest versions](https://mvnrepository.com/artifact/dev.cookiecode/protobuf-maven-plugin).