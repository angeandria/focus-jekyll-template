---
Title : PageA
file: pagea # NOT id
read_time: true
---

{% include focus/page__content-vars.html %}
{% capture include_markdown %}
{% include_relative {{ folder }}/{{ page.file}}.md %}
{% endcapture %}
{{ include_markdown | markdownify }}

