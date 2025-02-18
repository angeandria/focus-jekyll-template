---
Title : PageA
---

### BEFORE embed

{% capture include_markdown %}
{% include_relative content/pagea.md %}
{% endcapture %}
{{ include_markdown | markdownify }}
