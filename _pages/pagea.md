---
Title : PageA
---

### BEFORE embed


{% assign parts = page.path | split: '/' %}
{% assign filename_with_extension = parts | last %}
{% assign path = filename_with_extension | split: '.' | first %}
{% assign folder = include.folder | default: 'content' %}

{% assign base_folder = parts | slice: 0, parts.size | join: '/' | replace: filename_with_extension, '' %}

{% capture full_path %}
    {{ folder }}/{{ path }}.md
{% endcapture %}

{% capture include_markdown %}
    {% include_relative {{ folder }}/{{ path }} %}
{% endcapture %}

{{ include_markdown | markdownify }}