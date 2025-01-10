---
content_file: "[[_content/third-page.md]]"
permalink: /myFile3
aliases: 
  - file3
  - fileA3
---


{% capture include_markdown %}
{% include_relative _content/third-page.md %}
{% endcapture %}
{{ include_markdown | markdownify }}