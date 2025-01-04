document.addEventListener('DOMContentLoaded', function() {    
    const searchInput = $("#search");

    // Step 1: Get the "topic" URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');

    // Step 2: Pre-fill the search input if the topic exists
    if (topic) {
        searchInput.val(topic); // Set the input field with the topic value
        searchInput.trigger("input"); // Manually trigger the input event
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
                
                // Make visible
                item.removeClass("is--hidden");              
                               
                const elementsToHighlight = [
                    { element: titleElement, query },                
                    { element: subtitleElement, query },
                    { element: descriptionElement, query },
                    { element: tagsElement, query },
                    { element: categoriesElement, query },
                    { element: tagsInfo1Element, query },
                    { element: tagsInfo2Element, query }
                ];
                
                elementsToHighlight.forEach(({ element, query }) => {
                    if (element.length) { // Check if the element exists
                        // Remove existing highlights
                        element.html(element.html().replace(/<span class="highlight">(.*?)<\/span>/gi, '$1'));                        
                        // Highlight new matches
                        element.html(highlightText(element.html(), query));
                    }
                });

                /*
                // Replace all <span class="highlight">...</span> with their text content                
                titleElement.html(titleElement.html().replace(/<span class="highlight">(.*?)<\/span>/gi, '$1'));
                // Highlight matching text
                titleElement.html(highlightText(titleElement.html(), query));
                */
                /*
                subtitleElement.html(subtitleElement.html().replace(/<span class="highlight">(.*?)<\/span>/gi, '$1'));
                subtitleElement.html(highlightText(subtitleElement.html(), query));
                
                descriptionElement.html(descriptionElement.html().replace(/<span class="highlight">(.*?)<\/span>/gi, '$1'));
                descriptionElement.html(highlightText(descriptionElement.html(), query));
                
                tagsElement.html(tagsElement.html().replace(/<span class="highlight">(.*?)<\/span>/gi, '$1'));
                tagsElement.html(highlightText(tagsElement.html(), query));
                
                categoriesElement.html(categoriesElement.html().replace(/<span class="highlight">(.*?)<\/span>/gi, '$1'));
                categoriesElement.html(highlightText(categoriesElement.html(), query));
                
                tagsInfo1Element.html(tagsInfo1Element.html().replace(/<span class="highlight">(.*?)<\/span>/gi, '$1'));
                tagsInfo1Element.html(highlightText(tagsInfo1Element.html(), query));

                tagsInfo2Element.html(tagsInfo2Element.html().replace(/<span class="highlight">(.*?)<\/span>/gi, '$1'));
                tagsInfo2Element.html(highlightText(tagsInfo2Element.html(), query)); 
                */               
                

            } else {
                console.log(title + " is hidden");
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
    function highlightText(html, query) {
        if (!query) return html; // Return original text if query is empty
        const regex = new RegExp(`(${query})`, 'gi'); // Create a regex for the query
        return html.replace(regex, '<span class="highlight">$1</span>'); // Wrap matches in <span>
    }

});