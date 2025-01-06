document.addEventListener('DOMContentLoaded', function() {    
    const searchInput = $("#search");

    // Step 1: Get the "topic" URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('search');

    // Step 2: Pre-fill the search input if the topic exists
    if (topic) {
        searchInput.val(topic); // Set the input field with the topic value
        searchInput.focus(); // Set the input field with the topic value
    }
        
    // Hide all Search results on loading
    // $(".search-mode.all-posts .item").addClass("is--hidden");
        
    function updateSearchInput() {
        const query = searchInput.val().trim().toLowerCase(); // Get the current input value
        
        const searchItems = $(".search-mode.all-posts .item"); // Select all items using jQuery            
        
        searchItems.each(function() { 
            const item = $(this);
    
            // Safely get the text content from title, subtitle, and description            
            const titleElement = item.find(".item-title > a");
            const subtitleElement = item.find(".item-subtitle");
            const descriptionElement = item.find(".item-description");
            const contentElement = item.find(".item-content");            
            const tagsElement = item.find(".tags .page__taxonomy span a");
            const categoriesElement = item.find(".categories .page__taxonomy span a");
            const tagsInfo1Element = item.find(".item-info-1");    
            const tagsInfo2Element = item.find(".item-info-2");
    
            // Safely get the text content from each element
            const title = titleElement.length ? titleElement.text().toLowerCase() : '';
            const subtitle = subtitleElement.length ? subtitleElement.text().toLowerCase() : '';
            const description = descriptionElement.length ? descriptionElement.text().toLowerCase() : '';
            const content = contentElement.length ? contentElement.text().toLowerCase() : '';
            const tags = tagsElement.map(function() { return $(this).text().toLowerCase(); }).get().join(' ');
            const categories = categoriesElement.map(function() { return $(this).text().toLowerCase(); }).get().join(' ');
            const tagsInfo1 = tagsInfo1Element.length ? tagsInfo1Element.text().toLowerCase() : '';
            const tagsInfo2 = tagsInfo2Element.length ? tagsInfo2Element.text().toLowerCase() : '';
    
            // Check if any of the content matches the query 
            const isVisible = (
                title.includes(query) ||
                subtitle.includes(query) ||
                description.includes(query) ||
                content.includes(query) ||
                tags.includes(query) ||
                categories.includes(query) ||
                tagsInfo1.includes(query) ||
                tagsInfo2.includes(query)
            );
            
            if (isVisible) {         
                // Make visible
                item.removeClass("is--hidden");              
                               
                const elementsToHighlight = [
                    { element: titleElement, query },                
                    { element: subtitleElement, query },
                    { element: descriptionElement, query },
                    { element: contentElement, query }
                ];                
                elementsToHighlight.forEach(({ element, query }) => {
                    if (element.length) { // Check if the element exists
                        // Remove highlights
                        element.html(removeTextHighlight(element.html()));
                        // Highlight new matches
                        element.html(addTextHighlight(element.html(), query));
                    }
                });
                
                // Process tags, categories, and additional info elements using a helper function
                processElementCollection(tagsElement, query);
                processElementCollection(categoriesElement, query);
                processElementCollection(tagsInfo1Element, query);
                processElementCollection(tagsInfo2Element, query);
                                
            } else {
                item.addClass("is--hidden");                                              
            }
        });
        
        // Toggle Search Mode
        toggleSearchMode(query);
    }
    
    // Function to process each element in a jQuery collection
    function processElementCollection(elements, query) {
        elements.each(function() {
            const elem = $(this); // Get the current jQuery element
    
            // Remove existing highlights
            elem.html(removeTextHighlight(elem.html()));
            // Highlight new matches
            elem.html(addTextHighlight(elem.html(), query));
        });
    }
    
    // Trigger manually and listen to input events
    updateSearchInput(); // Trigger manually
    searchInput.on("input", updateSearchInput); // Listen to keyboard input and trigger automatically

    

    function toggleSearchMode(query) {
        
        // Get the body element 
        const bodyElement = $("body");
                
        if (query.length > 0) {
            /* Search Mode ON */
            bodyElement.addClass("search-mode");            
            
        } else {           
            /* Search Mode OFF */
            bodyElement.removeClass("search-mode");            
        }
    }
            
    function addTextHighlight(html, query) {

        if (!query) return html; // Return original text if query is empty
        
        // Escape special characters in query for regex
        const escapedQuery = query.replace(/[-[${}()*+?.,\\^$|#\s]/g, '\\$&');
    
        // Create a regex for the escaped query
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
    
        // Wrap matches in <span> and ensure correct application
        return html.replace(regex, '<span class="search-highlight">$1</span>');
    }
    
    function removeTextHighlight(html) {
        // Remove existing highlights
        return html.replace(/<span class="search-highlight">(.*?)<\/span>/gi, '$1');
    }

});