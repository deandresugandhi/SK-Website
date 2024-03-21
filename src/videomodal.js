// Get all buttons with class "modalBtn"
var modalBtns = document.querySelectorAll(".modalBtn");

// Loop through each button to attach click event listener
modalBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
         // Find the parent article element containing both the button and its associated modal
         var parentArticle = btn.closest("article");

         // Find the modal within the parent article
         var targetModal = parentArticle.querySelector(".modal");
        // Open the target modal
        if (targetModal) {
            targetModal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });
});

// Get all elements with class "close"
var closeBtns = document.querySelectorAll(".close");

// Loop through each close button to attach click event listener
closeBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Find the parent article element containing both the button and its associated modal
        var parentArticle = btn.closest("article");

        // Find the modal within the parent article
        var targetModal = parentArticle.querySelector(".modal");

        // Close the modal
        if (targetModal) {
            targetModal.style.display = "none";
            document.body.style.overflow = "";
        }
    });
});