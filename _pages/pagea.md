---
title : PageA
file: pagea # NOT id
read_time: true
breadcrumbs:
---

{% capture include_markdown %}
{% include_relative {{ page.content_folder | default: site.content_folder }}/{{ page.file }}.md %}
{% endcapture %}
{{ include_markdown | markdownify }}

