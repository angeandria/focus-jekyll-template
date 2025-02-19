---
Title : PageA
file: pagea # NOT id
read_time: true
---

What is the date of this post if it hasn't been defined? {{ page.date }}
Page name : {{ page.name }}
{% include focus/page__content-vars.html %}
{% capture include_markdown %}
{% include_relative {{ site.content_folder }}/{{ page.slug }} %}
{% endcapture %}
{{ include_markdown | markdownify }}

