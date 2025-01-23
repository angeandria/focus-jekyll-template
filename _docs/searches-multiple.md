---
classes: 
  - canvas
---
<div class="boxed-s">
    <div class="grid-3">
        <div>
            <div class="col col-1">
                <div id="search-b" class="search-content is--visible">
                    <h3>Docs</h3>
                    {% include_cached search/search_form.html %}
                </div>
                <div id="search-items-b" class="search-items search-mode all-posts">            
                    {% include focus/post-display.html type="page" topic="all" format="compact" order="desc" container_class="search" type_class="" type-item_class="" %}                                    
                </div>            
            </div>
            
            <div class="col col-2">
                <div id="search-c" class="search-content is--visible">
                    <h3>Resources</h3>
                    {% include_cached search/search_form.html %}
                </div>
                <div id="search-items-c" class="search-items search-mode all-posts">            
                    {% include focus/post-display.html type="resource" topic="all" format="compact" order="desc" container_class="search" type_class="" type-item_class="" %}                                    
                </div>       
            </div>
            
            <div class="col col-3">
                <div id="search-d" class="search-content is--visible">
                    <h3>Products</h3>
                    {% include_cached search/search_form.html %}
                </div>
                <div id="search-items-d" class="search-items search-mode all-posts">            
                    {% include focus/post-display.html type="product" topic="all" format="compact" order="desc" container_class="search" type_class="" type-item_class="" %}                                    
                </div>       
            </div>
            
        </div>
        
    </div>

</div>