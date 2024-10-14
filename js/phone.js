/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


     
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

document.querySelectorAll(".news-new-link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Find the corresponding news name (h3)
    var newsName = event.target
      .closest(".news-box")
      .querySelector(".news-name").innerText;

    // Store the news name in localStorage
    localStorage.setItem("selectedNewsName", newsName);
  });
});

// this is for template pages

      // Get the stored news title from localStorage
      var selectedNewsName = localStorage.getItem("selectedNewsName");

      // If there is a selected news title, display it
      if (selectedNewsName) {
        document.getElementById("news-title").innerText = selectedNewsName;
      } else {
        document.getElementById("news-title").innerText = "Default News Title"; // Fallback if no title is found
      }