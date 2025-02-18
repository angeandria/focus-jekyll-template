---
Title : PageA
---

### BEFORE embed


{% include focus/embed-content.html %}
Full path : {{ full_path }}

{% capture include_markdown %}
{% include_relative {{ full_path }} %}
{% endcapture %}
{{ include_markdown | markdownify }}

