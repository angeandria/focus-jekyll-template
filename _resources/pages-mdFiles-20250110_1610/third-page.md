---
content_file: "[[_content/third-page.md]]"
permalink: /resource/myFile3
aliases: 
  - file3
  - fileA3
allow_recursion : true  
---


{% capture include_markdown %}
{% include_relative content/third-page.md %}
{% endcapture %}
{{ include_markdown | markdownify }}