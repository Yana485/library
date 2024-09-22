// // Function to change tabs (hide/show elements)
// function changeTab(ids) {
//     // Hide all main sections except for header, banner, and footer
//     let sections = document.querySelectorAll('main > section'); 
//     sections.forEach(function(section) {
//         section.style.display = 'none';
//     });

//     // Show the banner
//     document.getElementById('banner').style.display = 'block';

//     // Show the footer
//     document.getElementById('footer').style.display = 'block';

//     // Show elements with specific IDs (selected tab)
//     ids.forEach(function(id) {
//         let element = document.getElementById(id);
//         if (element) {
//             element.style.display = 'block';  // Show the selected section
//         } else {
//             console.log(`No element found with id '${id}'`);
//         }
//     });
// }

// // Attach event listeners to all <a> tags with data-show attributes
// document.querySelectorAll('a[data-show]').forEach(function(link) {
//     link.addEventListener('click', function(event) {
//         event.preventDefault();  // Prevent the default link behavior

//         // Get the ID from the data-show attribute
//         const elementId = this.getAttribute('data-show');

//         // Call the function with the array containing the selected ID
//         changeTab([elementId]);
//     });
// });



// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}