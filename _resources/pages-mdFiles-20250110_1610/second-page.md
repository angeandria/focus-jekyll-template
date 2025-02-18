---
content_file: "[[_content/second-page.md]]"
permalink: /resource/second-page-permalink
aliases: 
  - file2
  - fileA2
allow_recursion : false  
---


{% capture include_markdown %}
{% include_relative content/second-page.md %}
{% endcapture %}
{{ include_markdown | markdownify }}