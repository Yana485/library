var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  // Hide all slides
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}  // Loop back to the first slide
  x[slideIndex-1].style.display = "block";  // Display current slide
  x[slideIndex-1].style.transform = "translateY(0)";  // Reset position
  setTimeout(carousel, 4000);  // Change slide every 2 seconds
}
