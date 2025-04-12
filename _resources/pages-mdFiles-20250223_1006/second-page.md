---

# File
file: second-page
permalink: resource/second-page-permalink
aliases:

lang: fr
sitemap: 
hidden: 

# Layout
layout: 
template: 
classes: 

# Content
title: My post 2
title-before: 
title-after: 
subtitle: Subtitle 2
description: My post desc 2
excerpt: 
custom-excerpt: 
featured-image: 
caption: 
teaser-image: 
featured-logo: 
link: 
intro: One time
embed: embed 2
table-of-contents: Some content 2
outro: the ending

# Meta
featured: 
priority: 8
status: review
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
resource: 
actions-label: 

# Header

# Sidebar
toc: 
toc-sticky: 
toc-label: 
toc-icon: 
post-aside: 
sidebar:


# Additional content
gallery: 
feature-row: 
feature-row2: 
feature-row3: 
title-display: 
categories:
  - relationships
  - guide
tags:

info1:
  - -0.5
info2:


---


{% capture include_markdown %}
{% include_relative {{ page.content_folder | default: site.content_folder }}/{{ page.file }}.md %}
{% endcapture %}
{{ include_markdown | markdownify }}
