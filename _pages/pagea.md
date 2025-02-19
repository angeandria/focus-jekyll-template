---
Title : PageA
file: pagea # NOT id
read_time: true
---

What is the date of this post if it hasn't been defined? {{ page.date }}
{% include focus/page__content-vars.html %}
{% capture include_markdown %}
{% include_relative {{ content_folder }}/{{ page.name }} %}
{% endcapture %}
{{ include_markdown | markdownify }}

