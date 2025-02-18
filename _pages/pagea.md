---
Title : PageA
file: pagea
---

### BEFORE embed

{% include focus/page-content-vars.html %}
{% capture include_markdown %}
{% include_relative {{ folder }}/{{ page.file}}.md %}
{% endcapture %}
{{ include_markdown | markdownify }}

