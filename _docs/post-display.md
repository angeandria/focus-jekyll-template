---
---

located at focus/post-display.html

Allows to display posts or any custom collection in several formats :

- list (default)
- compact
- cards

### How to use
```
{% include focus/post-display.html type="post" filter="all" format="cards" order="desc" container_class="grid-3" type_class="" type-item_class="box-shadow" %}     
``` 

Allowed :

- type : post, resource, product, docs...
- format : list, compact, cards
- order : desc
- container_class : grid-x, hide-title/description/x...
- type_class : empty most of the time
- type-item_class : box-shadow...