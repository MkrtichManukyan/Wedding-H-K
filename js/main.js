document.addEventListener("DOMContentLoaded", function() {
  // Display loading animation
  var loader = document.querySelector(".loader-wrapper");
  loader.style.display = "flex";

  // Load content dynamically
  var contentContainer = document.getElementById("content");
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          // Hide loader when content is loaded
          loader.style.display = "none";

          // Show the content
          contentContainer.innerHTML = xhr.responseText;
          contentContainer.style.display = "block";
      }
  };

  // Replace 'your-content.html' with the path to your HTML file
  xhr.open("GET", "your-content.html", true);
  xhr.send();
});
