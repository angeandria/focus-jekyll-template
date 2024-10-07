---
title: "Post: Quote"
header:
  image: /assets/images/placeholder-1200.jpg
categories:
  - blog
tags:
  - post formats
  - quote
---

{% assign post_date = page.date | date: "%Y-%m-%d" %}
{% assign post_slug = page.title | slugify %}
{% assign full_post_filename = post_date | append: "-" | append: post_slug %} 
{% include_relative content/{{ full_post_filename }}.md %}


