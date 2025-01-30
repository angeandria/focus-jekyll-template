---
classes :
  - canvas
---

<div class="boxed-s">
{% include focus/post-display.html type="doc" filter="all" format="cards" order="desc" container_class="grid-6 search" type_class="" type-item_class="box-shadow" %}     
</div>

<section markdown="1">
    
## Header 2
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem.
</section>


<section class="boxed-s">
    <h2>ALL DOCS</h2>
    <div id="search-default" class="search-content is--visible">
        {% include_cached search/search_form.html %}
    </div>
    <div id="search-items-default" class="search-items search-mode all-posts">            
        {% include focus/post-display.html type="doc" filter="all" format="cards" order="desc" container_class="grid-2 search" type_class="" type-item_class="box-shadow" %}     
    </div>
</section>

<hr>

<div class="boxed-s">
    <div class="grid-3">
        <div>
            <div class="col col-1">
                <div id="search-b" class="search-content is--visible">
                    <h3>Doc</h3>
                    {% include_cached search/search_form.html %}
                </div>
                <div id="search-items-b" class="search-items search-mode all-posts">            
                    {% include focus/post-display.html type="doc" filter="all" format="compact" order="desc" container_class="search" type_class="" type-item_class="" %}                                    
                </div>            
            </div>
            
            <div class="col col-2">
                <div id="search-c" class="search-content is--visible">
                    <h3>Resources</h3>
                    {% include_cached search/search_form.html %}
                </div>
                <div id="search-items-c" class="search-items search-mode all-posts">            
                    {% include focus/post-display.html type="resource" filter="all" format="compact" order="desc" container_class="search" type_class="" type-item_class="" %}                                    
                </div>       
            </div>
            
            <div class="col col-3">
                <div id="search-d" class="search-content is--visible">
                    <h3>Products</h3>
                    {% include_cached search/search_form.html %}
                </div>
                <div id="search-items-d" class="search-items search-mode all-posts">            
                    {% include focus/post-display.html type="product" filter="all" format="compact" order="desc" container_class="search" type_class="" type-item_class="" %}                                    
                </div>       
            </div>
            
        </div>
        
    </div>

</div>