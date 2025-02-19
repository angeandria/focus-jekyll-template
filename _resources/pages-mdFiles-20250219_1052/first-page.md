---
id: first-page
content_file: "[[_content/first-page.md]]"
permalink: /resource/first-page-permalink
aliases: 
  - file1
  - fileA1  
categories:
  - money
  - guide
  - relationships
tags:
  - black friday
  - abc
  - def
info-1: 
  - -0.2  
info-2: 
  - code345
---


{% capture include_markdown %}
{% include_relative _content/first-page.md %}
{% endcapture %}
{{ include_markdown | markdownify }}