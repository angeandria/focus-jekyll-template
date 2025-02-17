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
allow_recursion : true  
---
{% assign parts = page.path | split: '/' %}
{% assign filename_with_extension = parts | last %}
{% assign path = filename_with_extension | split: '.' | first %}
<h1>{{ path }}</h1>

{% capture include_markdown %}
{% include_relative _content/first-page.md %}
{% endcapture %}
{{ include_markdown | markdownify }}