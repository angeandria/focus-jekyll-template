---
template: columns-one
classes: 
  - canvas
---

<section markdown="1">
Full width **canvas** using the template **columns-one** :

```
template: columns-one
classes: 
  - canvas
```
</section>


<div markdown="1" class="boxed-s" style="background-color: #F2F2F9;">
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

```
<section>
   ...
</section>
```
</section>

<section markdown="1">
## Section - Full width image

![image-full-width]({{ page.featured_image | default: '/assets/images/placeholder.jpg' | relative_url }}){: .full}

```
<section>
   ![image-full-width]({{ page.featured_image | default: '/assets/images/placeholder.jpg' | relative_url }}){: .full}
</section>
```
</section>


## Full width image

![image-full-width]({{ page.featured_image | default: '/assets/images/placeholder.jpg' | relative_url }}){: .full}

```
![image-full-width]({{ page.featured_image | default: '/assets/images/placeholder.jpg' | relative_url }}){: .full}
```


## Centered image not working

<img class="" src="{{ page.featured_image | default: '/assets/images/placeholder.jpg' | relative_url }}" alt="Featured Image">{: .align-center}

![image-center]({{ page.featured_image | default: '/assets/images/placeholder.jpg' | relative_url }}){: .align-center .item-featured-img}


```
<img class="" src="...">

![](){: .align-center}
```
