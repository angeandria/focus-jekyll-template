---
template: columns-one
classes: 
  - canvas
---

<section markdown="1">
Full width **canvas** using the template **columns-one** :

```
template: columns-one
class: 
  - canvas
```
</section>


<div markdown="1" class="boxed-l" style="background-color: #F2F2F9;">
## Full width styled container

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 

```
<div class="boxed-l" style="background-color: #F2F2F9;">
...
</div>
```
</div>


<section markdown="1">
## Section

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem     
</section>


## Full width image

{: .align-center }

<img class="item-featured-img full" src="{{ page.featured_image | default: '/assets/images/placeholder.jpg' | relative_url }}" alt="Featured Image">

```
<img class="full" src="...">
```




## Centered image

<img class="item-featured-img" src="{{ page.featured_image | default: '/assets/images/placeholder.jpg' | relative_url }}" alt="Featured Image">

{: .align-center}

```
<img class="" src="...">

{: .align-center}
```
