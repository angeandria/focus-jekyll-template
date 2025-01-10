---
content_file: "[[_content/second-page.md]]"
permalink: /second-page-permalink
aliases: 
  - file2
  - fileA2
---


{% capture include_markdown %}
{% include_relative _content/second-page.md %}
{% endcapture %}
{{ include_markdown | markdownify }}