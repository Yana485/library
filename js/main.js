var slideIndex = 0; 

// Function for automatic slideshow
function carousel() {
  showSlides(slideIndex);
  slideIndex++;
  setTimeout(carousel, 5000); // Change image every 10 seconds
}

// Function to manually change slides (next/previous)
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Core function to display the slides and update number and captions
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var captionContainer = document.getElementById("caption-container");
  var numberText = document.querySelectorAll(".numbertext-fixed");

  if (slides.length === 0) return; // If no slides found, exit

  // Loop back to the first slide if index exceeds the length
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  // Hide all slides initially
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[slideIndex].style.display = "block";

  // Update the slide counter (e.g., "1 / 3")
  if (numberText[slideIndex]) {
    numberText[slideIndex].textContent = (slideIndex + 1) + " / " + slides.length;
  }
}

// Initialize the carousel
document.addEventListener("DOMContentLoaded", function() {
  carousel(); // Start automatic slideshow on page load
});
