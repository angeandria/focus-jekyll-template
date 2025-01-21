document.addEventListener('DOMContentLoaded', function() {    
    //const searchInput = $("#search");
    
    const searchInputs = $("div[id^='search-'] > #search").toArray();

    // Step 1: Get the "topic" URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('search');
  
    // Step 2: Pre-fill the search input if the topic exists
    if (topic) {
        searchInput.val(topic); // Set the input field with the topic value
         // TODO : Does NOT work
    }
    searchInput.focus();
    // Hide all Search results on loading
    // $(".search-mode.all-posts .item").addClass("is--hidden");
        
    
    function updateSearchInput(inputElement) {
        const query = inputElement.val().trim().toLowerCase(); // Get the current input value
        
         // Extract suffix from the input ID
        const inputId = $(inputElement).attr('id'); // e.g., "search-a"
        const suffix = inputId.replace("search-", ""); // e.g., "a"
        
        // Construct searchItems selector
        //const searchItems = $(".search-mode.all-posts .item"); // Select all items using jQuery            
        const searchItems = $('#search-items${suffix}.search-mode.all-posts'); // Select relevant items
        
        console.log('#search-items${suffix}.search-mode.all-posts');
                
        // Check if searchItems exists
        if (searchItems.length === 0) {
            console.warn('No search items found for selector: #search-items${suffix}.search-items');
            return; // Exit the function if no items are found
        }

        searchItems.each(function() { 
            const item = $(this);
    
    
            // Safely get the text content from title, subtitle, and description            
            const titleElement = item.find(".item-title > a");
            const subtitleElement = item.find(".item-subtitle");
            const authorElement = item.find(".item-author__name a");
            const dateElement = item.find(".page__meta-date time");
            const descriptionElement = item.find(".item-description");
            const contentElement = item.find(".item-content");            
            const tagsElement = item.find(".item-tags .page__taxonomy span a");
            const categoriesElement = item.find(".item-categories .page__taxonomy span a");
            const tagsInfo1Element = item.find(".item-info-1");    
            const tagsInfo2Element = item.find(".item-info-2");
    
            // Safely get the text content from each element
            const title = titleElement.length ? titleElement.text().toLowerCase() : '';
            
            console.log("TITLE" + title);
            
            const subtitle = subtitleElement.length ? subtitleElement.text().toLowerCase() : '';
            const author = authorElement.length ? authorElement.text().toLowerCase() : '';
            const date = dateElement.length ? dateElement.text().toLowerCase() : '';
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
                author.includes(query) ||                
                date.includes(query) ||                                
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
                    { element: authorElement, query },                    
                    { element: dateElement, query },                                        
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
    //updateSearchInput(searchInput); // Trigger manually
    //searchInput.on("input", function() { updateSearchInput(searchInput); }); // Listen for input on the first input
 // Listen to keyboard input and trigger automatically
    
    // Trigger manually for each search input
    searchInputs.forEach(function(searchInput) {
        updateSearchInput(searchInput); // Trigger manually
        
        $(searchInput).on("input", function() { 
            updateSearchInput(searchInput); // Listen for input on each input
        });
    });
    

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
    
    function toggleDarkTheme() {
        $('body').toggleClass('dark-theme');
        
        // Save the current mode in localStorage
        if ($('body').hasClass('dark-theme')) {
            localStorage.setItem('darkTheme', 'enabled');
            $('#darkModeToggle').html('&#9788;'); // Sun icon when dark theme is enabled
        } else {
            localStorage.setItem('darkTheme', 'disabled');
            $('#darkModeToggle').html('&#9790;'); // Moon icon when default theme is enabled
        }
    }

    // Event listener for the toggle button
    $('#darkModeToggle').on('click', toggleDarkTheme);

    // Check localStorage on page load and apply dark theme if enabled
    if (localStorage.getItem('darkTheme') === 'enabled') {
        $('body').addClass('dark-theme');
        $('#darkModeToggle').html('&#9788;'); // Set sun icon if dark theme was enabled
    }

});

