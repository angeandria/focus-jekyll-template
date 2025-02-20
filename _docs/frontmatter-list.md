---
---


```
# File
file (NOT id since it's a jekyll native variable)
permalink
content_file
aliases
lang
allow_recursion

# Layout
layout ([focus layouts] + archive, collection, categories, posts, tag, search, splash)
template
classes

# Content
title
title_before
title_after
subtitle
description
excerpt
custom_excerpt
featured_image
caption
teaser_image
featured_logo
categories
taxonomy (single category, do not use taxonom)
collection (add layout: collection | Refers to the custom collection you want to display within that **page**)
entries_layout: grid
tags
info1
info2

# Meta
featured
priority
status
author
author_profile
date
last_modified_at
show_page_title: 
show_date: true
show_footer_date: true
show_pagination: true      
show_taxonomy: true
sitemap: false (plugin jekyll-sitemap)
hidden
comments: false
read_time: false
related: false
share: false

# Navigation
navigation
breadcrumbs
resource

# Header
header:
    image:
    teaser:
    overlay_color: "#000"
    overlay_filter: "0.5"
    overlay_image: /assets/images/unsplash-image-1.jpg
    actions:
      - label: "<i class='fas fa-download'></i> Install now"
        url: "/docs/quick-start-guide/"        
    caption: "Photo credit: [**Unsplash**](https://unsplash.com)"    
intro:
  - excerpt: 
actions:
  - label:
    url:
  - label:
    url:

# Sidebar
toc
toc_sticky
toc_label
toc_icon
post_aside
sidebar:
  - title:
    image:
    image_alt:
    text:
    nav:
      - main            
      
      


# Additional content
gallery:
  - url: /assets/images/unsplash-gallery-image-1.jpg
    image_path: assets/images/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
feature_row:
  - image_path: assets/images/unsplash-gallery-image-1-th.jpg
    image_caption: "Image courtesy of [Unsplash](https://unsplash.com/)"
    alt: "placeholder image 1"
    title: "Placeholder 1"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder 2"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
```