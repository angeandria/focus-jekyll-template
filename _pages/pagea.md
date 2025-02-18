---
Title : PageA
---

### BEFORE embed

{% include focus/embed-content.html %}
{% capture include_markdown %}
    {% include_relative content/pagea.md %}
{% endcapture %}
{{ include_markdown | markdownify }}

Full path : {{ full_path }}