document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const postDisplay = document.querySelector(".all-posts");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.trim(); // Get the current input value
        const items = document.querySelectorAll(".item");
        
        items.forEach(item => {
            // Get the text content from title, subtitle, and description
            const title = item.querySelector(".item-title").textContent.toLowerCase();
            const subtitle = item.querySelector(".item-subtitle").textContent.toLowerCase();
            const description = item.querySelector(".item-description").textContent.toLowerCase();
            const taxonomies = item.querySelector(".page__taxonomy").textContent.toLowerCase();            

            // Check if any of the content matches the query
            if (title.includes(query) || subtitle.includes(query) || taxonomies.includes(query)) || subtitle.includes(query){
                item.classList.add("is--visible");
                item.classList.remove("is--hidden");
            } else {
                item.classList.add("is--hidden");
                item.classList.remove("is--visible");
            }
        });
        
        // Optionally, you can also call another function to act on other divs
        updateOtherDivs(query);
    });
    
    function updateOtherDivs(query) {
        // Implement logic to act on other divs based on the query
        // For example, updating .post-display with relevant content
        const otherDivs = document.querySelectorAll('.all-posts');
        
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