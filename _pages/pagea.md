---
Title : PageA
---

### BEFORE embed

{% include focus/embed-content.html %}

{% capture full_path %}
    {{ folder }}/{{ path }}.md
{% endcapture %}
{% capture include_markdown %}
    {% include_relative {{ full_path }} %}
{% endcapture %}
{{ include_markdown | markdownify }}