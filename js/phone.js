function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.classList.contains("show")) {
    x.classList.remove("show");
    x.style.display = "none";
  } else {
    x.classList.add("show");
    x.style.display = "block";
  }
}


function toggleSubmenu(id) {
  var submenu = document.getElementById(id);
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}



     
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;



document.querySelectorAll(".news-new-link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    
    var newsName = event.target
      .closest(".news-box")
      .querySelector(".news-name").innerText;

    
    localStorage.setItem("selectedNewsName", newsName);
  });
});


var selectedNewsName = localStorage.getItem("selectedNewsName");

if (selectedNewsName) {
  document.getElementById("news-title").innerText = selectedNewsName;
} else {
  document.getElementById("news-title").innerText = "Default News Title"; 
}

