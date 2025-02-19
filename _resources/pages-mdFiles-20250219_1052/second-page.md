---
id: second-page
content_file: "[[_content/second-page.md]]"
permalink: /resource/second-page-permalink
aliases: 
  - file2
  - fileA2  
categories:
  - relationships
  - guide
tags:
  - main
  - yo
info-1: 
  - -0.5  
info-2: 
  - 
---


{% capture include_markdown %}
{% include_relative _content/second-page.md %}
{% endcapture %}
{{ include_markdown | markdownify }}