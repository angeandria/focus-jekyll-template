---

# File
file: first-page
permalink: resource/first-page-permalink
aliases:
  - file1
  - fileA1
lang: en
sitemap: 
hidden: 

# Layout
layout: 
template: columns-one
classes: wide

# Content
title: My best Post
title-before: 
title-after: 
subtitle: My post subtitle
description: My post desc
excerpt: This is my custom excerpt
custom-excerpt: true
featured-image: 
caption: 
teaser-image: 
featured-logo: 
link: 
intro: Let's start
embed: Embed here!
table-of-contents: ## header 2
something here
outro: the end

# Meta
featured: true
priority: 4
status: draft
date: 2024-07-13
last-modified-at: 
author: 
author-profile: 
show-page-title: 
show-date: 
show-footer-date: 
show-pagination: 
show-taxonomy: 
comments: 
read-time: 
related: 
share: 
allow-recursion: 

# Navigation
navigation: 
breadcrumbs: 
resource: guide-1
actions-label: 

# Header

# Sidebar
toc: 
toc-sticky: 
toc-label: 
toc-icon: 
post-aside: 
sidebar:
  - title:
    image:
    image_alt:
    text:
    nav:
      - main         

# Additional content
gallery: 
feature-row: 
feature-row2: 
feature-row3: 
title-display: 
categories:
  - money
  - guide
  - relationships
tags:
  - black friday
  - abc
  - def
info1:
  - -0.2
info2:
  - code345

---


{% capture include_markdown %}
{% include_relative {{ page.content_folder | default: site.content_folder }}/{{ page.file }}.md %}
{% endcapture %}
{{ include_markdown | markdownify }}
