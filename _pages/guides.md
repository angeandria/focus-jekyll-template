---
title : All Resources
permalink: /resources/
---

## My text here
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever

<h2>RESOURCES</h2>
{% include focus/post-display.html type="resource" topic="main" order="desc" container_class="" pages_class="" pages-item_class="box-shadow" posts_class="" posts-item_class="" %}

---

{% for page in site.resources %}
<div><a href="{{ page.url | relative_url }}">{{ page.title }}</a> - {{ page.url }}</div>
<div>
	{{ page.excerpt | markdownify | strip_html | truncate: 20 }}
</div>
{% endfor %}