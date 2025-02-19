---
Title : PageA
id: pagea
read_time: true
---

{% include focus/page-content-vars.html %}
{% capture include_markdown %}
{% include_relative {{ content_folder }}/{{ page.id}}.md %}
{% endcapture %}
{{ include_markdown | markdownify }}

