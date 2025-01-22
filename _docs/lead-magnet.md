---
layout: focus/landing
template: columns-one
classes :
  - hide-page-title
---

# Lead Magnet : Get x for y without z

## Front matter - Landing page setup

```
template: columns-one
classes:
  - landing
``` 

## Hide page title
to display a custom title within the page content

```
---
layout: focus/landing   // by default for the "products" collection. Set it manually for other collections.
template: columns-one   // by default for the "products" collection. Set it manually for other collections.
classes :
  - hide-page-title
---
# Lead Magnet : Get x for y wihout z
```

## Add a description
this is my lead magnet Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 


## Insert form

<div data-paperform-id="aa-consulting"></div>

To embed code :
```html
<div data-paperform-id="aa-consulting"></div>
<script>(function() {var script = document.createElement('script'); script.src = "https://paperform.co/__embed.min.js"; document.body.appendChild(script); })()</script>
``` 

Note : the script added to focus/footer/custom.html to be included once for the whole site.