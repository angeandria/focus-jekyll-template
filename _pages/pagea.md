---
Title : PageA
---

### BEFORE embed

{% include focus/embed-content.html %}

{% capture full_path %}
    {{ folder }}/{{ path }}.md
{% endcapture %}
{% capture include_markdown %}
    {% include_relative {{ folder }}/{{ path }} %}
{% endcapture %}
{{ include_markdown | markdownify }}