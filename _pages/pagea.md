---
Title : PageA
id: pagea
read_time: true
---

{% include focus/page__content-vars.html %}
{% capture include_markdown %}
{% include_relative {{ folder }}/{{ page.id}}.md %}
{% endcapture %}
{{ include_markdown | markdownify }}

