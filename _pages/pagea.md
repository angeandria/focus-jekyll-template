---
Title : PageA
---

### BEFORE embed

{% include focus/embed-content.html %}
{% capture include_markdown %}
{% include_relative include_path %}
{% endcapture %}
{{ include_markdown | markdownify }}