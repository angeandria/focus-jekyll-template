document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const postDisplay = document.querySelector(".all-posts");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.trim(); // Get the current input value
        const items = document.querySelectorAll(".item");
        
        items.forEach(item => {            
            // Safely get the text content from title, subtitle, and description
            const titleElement = item.querySelector(".post-display .item-title");
            const subtitleElement = item.querySelector(".post-display .item-subtitle");
            const descriptionElement = item.querySelector(".post-display .item-description");
            const tagsElement = item.querySelector(".post-display .tags .page__taxonomy");
            const categoriesElement = item.querySelector(".post-display .categories .page__taxonomy");
            const tagsInfo1Element = item.querySelector(".post-display .tags-info-1");    
            const tagsInfo2Element = item.querySelector(".post-display .tags-info-2");       
       
            const title = titleElement ? titleElement.textContent.toLowerCase() : '';
            const subtitle = subtitleElement ? subtitleElement.textContent.toLowerCase() : '';
            const description = descriptionElement ? descriptionElement.textContent.toLowerCase() : '';     
            const tags = tagsElement ? tagsElement.textContent.toLowerCase() : ''; // Fixed typo
            const categories = categoriesElement ? categoriesElement.textContent.toLowerCase() : '';     
            const tagsInfo1 = tagsInfo1Element ? tagsInfo1Element.textContent.toLowerCase() : '';
            const tagsInfo2 = tagsInfo2Element ? tagsInfo2Element.textContent.toLowerCase() : '';   

            
                    // Check if none of the content matches the query
                const isHidden = !(title.includes(query) &&
                  subtitle.includes(query) &&
                  description.includes(query) &&
                  tags.includes(query) &&
                  categories.includes(query) &&
                  tagsInfo1.includes(query) &&
                  tagsInfo2.includes(query));
            
  
            // Check if any of the content matches the query 
            if (isHidden) {         
                    item.classList.add("is--hidden");
                    item.classList.remove("is--visible");

            } else {
                    item.classList.add("is--visible");
                    item.classList.remove("is--hidden");              
            }
            /*
            if (!item.classList.contains("is--hidden")) {
                item.classList.add("is--hidden");
            }
            */
        });
        
        // Optionally, you can also call another function to act on other divs
        updateOtherDivs(query);
    });
    
    function updateOtherDivs(query) {
        // Implement logic to act on other divs based on the query
        // For example, updating .post-display with relevant content
        const otherDivs = document.querySelectorAll('.all-posts .item');
        
        // $(".initial-content").removeClass("is--hidden");
        
        if (query.length > 0) {
            $("#page__header").addClass("is--hidden");
            $("#main").addClass("is--hidden");
        }else {
            $("#page__header").removeClass("is--hidden");
            $("#main").removeClass("is--hidden");
        }
      
        otherDivs.forEach(div => {
            // Example: Change background color based on query length
            if (query.length > 0) {
                div.style.backgroundColor = "lightyellow"; // Highlight when searching
            } else {
                div.style.backgroundColor = "blue"; // Reset when empty
            }
        });
    }
        
});