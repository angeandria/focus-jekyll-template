---
content_file: "[[_content/first-page.md]]"
aliases: 
  - file1
  - fileA1
---

{% capture include_markdown %}
{% include_relative _content/first-page.md %}
{% endcapture %}
{{ include_markdown | markdownify }}