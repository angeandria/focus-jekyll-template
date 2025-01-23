document.addEventListener('DOMContentLoaded', function() {    
    
    /*    
    *  HANDLING URL PARAMETERS
    */
    //
    // Get Url Parameter "search" to fill the search input
    //
    /*const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('search');
    const category = urlParams.get('search');
    */
    // Function to get URL parameters
    function getUrlParameter(name) {
        var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results ? decodeURIComponent(results[1]) : null;
    }
    
    // Get parameters
    var topic = getUrlParameter('search');
    var category = getUrlParameter('category');

    if (category) {
        // Find the category link
        var $categoryLink = $('.category-link[data-category="' + category + '"]');

        if ($categoryLink.length) {
            // Scroll to the category link
            $('html, body').animate({
                scrollLeft: $categoryLink.position().left + $categoryLink.parent().scrollLeft()
            }, 500); // Adjust duration as needed
        }
    }
    
    /*    
    *  SEARCH INPUTS
    */
    // Find all search inputs that start with "search-"
    const searchInputs = $("div[id^='search-'] input#search").toArray();

    
    // Pre-fill the search input if the topic exists
    if (topic) {
        if (searchInputs[0]) {
            // Wrap the first element in jQuery
            const firstSearchInput = $(searchInputs[0]); 
            firstSearchInput.val(topic); // Set the value
            updateSearchInput(firstSearchInput); // Trigger manually
            firstSearchInput.focus(); // Focus on the input
        }
    }

    // Hide all Search results on loading
    // $(".search-mode.all-posts .item").addClass("is--hidden");
        
    //
    // UPDATE SEARCH INPUT
    //
    function updateSearchInput(inputElement) {
        const query = inputElement.val().trim().toLowerCase(); // Get the current input value
        console.log("Initial Query: ", query); // Log the query right after fetching it        
        
        // Extract suffix from the parent div's ID
        const parentId = $(inputElement).closest('div[id^="search-"]').attr('id'); // Get the ID of the parent div
        const suffix = parentId.replace("search-", ""); // Extract suffix, should return "a" for id "search-a"

        console.log("Input ID: ", parentId); // Log the parent ID
        console.log("Suffix: ", suffix); // Log the suffix
                
        // Construct searchItems selector
        //const searchItems = $(".search-mode.all-posts .item"); // Select all items using jQuery            
        const searchItems = $(`#search-items-${suffix}.search-items.all-posts .item`); // Select relevant items
        
        // Check if searchItems exists
        if (searchItems.length === 0) {
            console.warn(`No search items found for selector: #search-items-${suffix}.search-mode.all-posts .item`);
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
        toggleSearchMode(query, suffix);
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
    

    
    // Listen to input events    
    // Trigger manually for each search input
    searchInputs.forEach(function(element) {        
        const searchInputElement = $(element); // Wrap the element in jQuery
        searchInputElement.on("input", function() { 
            console.log("Input detected:", searchInputElement.val()); // Log on input
            updateSearchInput(searchInputElement); 
        });
    });
    
    //
    // TOGGLE SEARCH MODE
    //
    function toggleSearchMode(query, suffix) {
        
        // Get the body element 
        const bodyElement = $("body");
                
        if (query.length > 0) {
            /* Search Mode ON */
            bodyElement.addClass("search-mode");
            bodyElement.addClass(`search-mode-${suffix}`);
            console.log("search mode ON");
            
        } else {           
            /* Search Mode OFF */
            bodyElement.removeClass("search-mode");   
            bodyElement.removeClass(`search-mode-${suffix}`);            
            console.log("search mode OFF");            
        }
    }
     
    //
    // ADD TEXT HIGHLIGHT
    //    
    function addTextHighlight(html, query) {

        if (!query) return html; // Return original text if query is empty
        
        // Escape special characters in query for regex
        const escapedQuery = query.replace(/[-[${}()*+?.,\\^$|#\s]/g, '\\$&');
    
        // Create a regex for the escaped query
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
    
        // Wrap matches in <span> and ensure correct application
        return html.replace(regex, '<span class="search-highlight">$1</span>');
    }
    
    //
    // REMOVE TEXT HIGHLIGHT
    //    
    function removeTextHighlight(html) {
        // Remove existing highlights
        return html.replace(/<span class="search-highlight">(.*?)<\/span>/gi, '$1');
    }
    
    //
    // TOGGLE DARK THEME
    //
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

