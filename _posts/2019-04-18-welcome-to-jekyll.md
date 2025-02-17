---
title: "Welcome to Jekyll!"
title_before: "How to"
title_after: "Let's do it"
date: 2019-04-18T15:34:30-04:00
categories:
  - personal development
  - guide  
tags:
  - jekyll
  - update
classes:
  - myClass
  - myClass2

excerpt: "This post should display a **header with an overlay image**, if the theme supports it."
header:
  overlay_image: /assets/images/placeholder-1200.jpg
  overlay_filter: linear-gradient(rgba(255, 0, 0, 0.5), rgba(0, 255, 255, 0.5))
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  actions:
    - label: "More Info"
      url: "https://unsplash.com"
    - label: "Download"
      url: "https://angeandria.com"        

featured_image: /assets/images/placeholder-1200.jpg

---

{% capture include_markdown %}
{% include_relative _pages_content/.md %}
{% endcapture %}

{{ include_markdown | markdownify }}