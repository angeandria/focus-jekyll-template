document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const postDisplay = document.querySelector(".all-posts");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.trim(); // Get the current input value
        
        
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