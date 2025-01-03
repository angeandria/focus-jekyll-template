document.addEventListener('DOMContentLoaded', function() {
    const searchInput = $("#search"); // Get the input field using jQuery
    
    // Step 1: Get the "topic" URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');
    
    // Step 2: Pre-fill the search input if the topic exists
    if (topic) {
        searchInput.val(topic); // Set the input field with the topic value using jQuery
    }
        
    // Hide all Search results on loading
    //$(".search-mode.all-posts .item").addClass("is--hidden"); // Add hidden class to all items

    searchInput.on("input", function() { // jQuery event listener for input
        const query = searchInput.val().trim().toLowerCase(); // Get the current input value
        
        const searchItems = $(".search-mode.all-posts .item"); // Select all items using jQuery            
        searchItems.each(function() { 
            const item = $(this); // Convert current item to jQuery object

            // Safely get the text content from title, subtitle, and description            
            const titleElement = item.find(".post-display .item-title");
            const subtitleElement = item.find(".post-display .item-subtitle");
            const descriptionElement = item.find(".post-display .item-description");
            const tagsElement = item.find(".post-display .tags .page__taxonomy");
            const categoriesElement = item.find(".post-display .categories .page__taxonomy");
            const tagsInfo1Element = item.find(".post-display .tags-info-1");
            const tagsInfo2Element = item.find(".post-display .tags-info-2");
            
            // Safely get the text content from each element
            const title = titleElement.length ? titleElement.text().toLowerCase() : '';
            const subtitle = subtitleElement.length ? subtitleElement.text().toLowerCase() : '';
            const description = descriptionElement.length ? descriptionElement.text().toLowerCase() : '';
            const tags = tagsElement.length ? tagsElement.text().toLowerCase() : '';
            const categories = categoriesElement.length ? categoriesElement.text().toLowerCase() : '';
            const tagsInfo1 = tagsInfo1Element.length ? tagsInfo1Element.text().toLowerCase() : '';
            const tagsInfo2 = tagsInfo2Element.length ? tagsInfo2Element.text().toLowerCase() : '';

            // Check if any of the content matches the query 
            const isVisible = (
                title.includes(query) ||
                subtitle.includes(query) ||
                description.includes(query) ||
                tags.includes(query) ||
                categories.includes(query) ||
                tagsInfo1.includes(query) ||
                tagsInfo2.includes(query)
            );
            
            if (isVisible) {         
                console.log(title + " is visible");
                item.removeClass("is--hidden");              
            } else {
                console.log(title + " is hidden");
                item.addClass("is--hidden");                
            }
        });
        
        // Call another function to act on other divs
        displaySearchResults(query);
    });
    
    function displaySearchResults(query) {
        console.log("Update other divs?");
        
        // Implement logic to act on other divs based on the query
        const otherDivs = $('.search-mode.all-posts .item');
                
        // Get the body element
        const bodyElement = $("body");        
                
        if (query.length > 0) {
            /* Search Mode ON */
            bodyElement.addClass("search-mode");
                            
            $(".search-content #results").removeClass("is--visible");
            
            otherDivs.each(function() {
                $(this).removeClass("is--hidden");              
            }); 
            
        } else {           
            /* Search Mode OFF */
            bodyElement.removeClass("search-mode");            
        }
    }
});