---
content_file: "[[Publish/_jekyll-dev/focus-jekyll-template/_pages/content/_pages_content/File1_content]]"
status: draft
published_on: 2024-07-13
last_edit: 
featured: true
priority: 4
layout: 
permalink: myFile1
aliases:
  - file1
  - fileA1
author: Ange Andria
lang: en
category:
  - money
  - guide
  - relationships
tags:
  - a
  - c
title: My best Post
subtitle: My post subtitle
description: My post desc
featured_image: myimage.jpg
hidden: true
---

Let's start

## header 2
something here


{% capture include_markdown %}
{% include_relative _pages_content/File1_content.md %}
{% endcapture %}

{{ include_markdown | markdownify }}

the end