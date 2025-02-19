---
Title : PageA
file: pagea # NOT id
read_time: true
---

What is the date of this post if it hasn't been defined? {{ page.date }}
{% include focus/page__content-vars.html %}
{% capture include_markdown %}
{% include_relative {{ folder }}/{{ page.file}}.md %}
{% endcapture %}
{{ include_markdown | markdownify }}

