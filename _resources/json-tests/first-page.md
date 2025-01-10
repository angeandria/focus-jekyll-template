---
content_file: "[[_content/first-page.md]]"
resource: guide-1
permalink: /first-page-permalink
aliases: 
  - file1
  - fileA1
---


{% capture include_markdown %}
{% include_relative _content/first-page.md %}
{% endcapture %}
{{ include_markdown | markdownify }}