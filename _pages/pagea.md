---
Title : PageA
---

### BEFORE embed

{% include focus/embed-content.html %}

Full path : {{ full_path }}
Folder : {{ folder }}
Path : {{ path }}

{% capture include_markdown %}
{% include_relative {{ folder }}/pagea.md %}
{% endcapture %}
{{ include_markdown | markdownify }}

