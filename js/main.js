var slideIndex = 0;  // Start with the first slide
var captions = ["Caption Text", "Caption Two", "Caption Three"];  // Array for captions

// Function for automatic slideshow
function carousel() {
  showSlides(slideIndex += 1);  // Increment slide index
  setTimeout(carousel, 4000);  // Change image every 2 seconds
}

// Function to manually change slides (next/previous)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to set the current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Core function to display the slides and update number and captions
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionContainer = document.getElementById("caption-container");
  var numberText = document.querySelector(".numbertext-fixed"); // Get the fixed counter

  // If the slide index exceeds the total number of slides, reset to the first
  if (n >= slides.length) {slideIndex = 0}    

  // If the slide index is less than 1, set it to the last slide
  if (n < 0) {slideIndex = slides.length - 1}  

  // Hide all slides initially
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[slideIndex].style.display = "block";  

  // Update the caption for the current slide
  captionContainer.innerHTML = captions[slideIndex];  

  // Update the slide counter (e.g., "1 / 3")
  numberText.textContent = (slideIndex + 1) + " / " + slides.length;
}

// Start the automatic carousel
carousel();



