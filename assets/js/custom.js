document.addEventListener('DOMContentLoaded', function() {    
    const searchInput = $("#search");

    // Step 1: Get the "topic" URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');

    // Step 2: Pre-fill the search input if the topic exists
    if (topic) {
        searchInput.val(topic); // Set the input field with the topic value
    }
        
    // Hide all Search results on loading
    $(".search-mode.all-posts .item").addClass("is--hidden");

    searchInput.on("input", function() {
        const query = searchInput.val().trim().toLowerCase(); // Get the current input value
        
        const searchItems = $(".search-mode.all-posts .item"); // Select all items using jQuery            
        
        searchItems.each(function() { 
            const item = $(this);

            // Safely get the text content from title, subtitle, and description            
            const titleElement = item.find(".item-title > a");
            const subtitleElement = item.find(".item-subtitle");
            const descriptionElement = item.find(".item-description");
            const tagsElement = item.find(".tags .page__taxonomy");
            const categoriesElement = item.find(".categories .page__taxonomy");
            const tagsInfo1Element = item.find(".tags-info-1");    
            const tagsInfo2Element = item.find(".tags-info-2");

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
                console.log(title + subtitle + description + " is VISIBLE");
                
                // Highlight matching text
                titleElement.html(highlightText(titleElement.text(), query));
                subtitleElement.html(highlightText(subtitleElement.text(), query));
                descriptionElement.html(highlightText(descriptionElement.text(), query));
                tagsElement.html(highlightText(tagsElement.text(), query));
                categoriesElement.html(highlightText(categoriesElement.text(), query));

                item.removeClass("is--hidden");              
            } else {
                console.log(title + subtitle + description + " is hidden");
                item.addClass("is--hidden");                                              
            }
        });
        
        // Optionally, you can also call another function to act on other divs
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
            
            /*
            otherDivs.each(function() {
                $(this).removeClass("is--hidden");              
            });
           */ 
            
        } else {           
            /* Search Mode OFF */
            bodyElement.removeClass("search-mode");            
        }
    }
    
    // Function to highlight matching text
    function highlightText(text, query) {
        if (!query) return text; // Return original text if query is empty
        const regex = new RegExp(`(${query})`, 'gi'); // Create a regex for the query
        return text.replace(regex, '<span class="highlight">$1</span>'); // Wrap matches in <span>
    }

});