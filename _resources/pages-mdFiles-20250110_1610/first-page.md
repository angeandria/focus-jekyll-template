---
content_file: "[[_content/first-page.md]]"
permalink: /first-page-permalink
categories:
  - main
aliases: 
  - file1
  - fileA1
excerpt : This is a custom excerpt
custom_excerpt : true
---


{% capture include_markdown %}
{% include_relative _content/first-page.md %}
{% endcapture %}
{{ include_markdown | markdownify }}