---
Title : All Guides
permalink: /guides
---

## My text here
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever

<h2>GUIDES</h2>
{% for page in site.guides %}
<div><a href="{{ page.url | relative_url }}">{{ page.title }}</a> - {{ page.url }}</div>
<div>
	{{ page.excerpt | markdownify | strip_html | truncate: 20 }}
</div>
{% endfor %}