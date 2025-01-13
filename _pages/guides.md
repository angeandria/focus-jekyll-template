---
title : All Resources
permalink: /resources/
---

## My text here
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever

<h2>RESOURCES</h2>
{% include focus/post-display.html type="resource" topic="main" format="list" order="desc" container_class="grid-3" type_class="" type-item_class="boxed-s box-shadow" %}     
---

{% for page in site.resources %}
<div><a href="{{ page.url | relative_url }}">{{ page.title }}</a> - {{ page.url }}</div>
<div>
	{{ page.excerpt | markdownify | strip_html | truncate: 20 }}
</div>
{% endfor %}