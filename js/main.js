var slideIndex = 0; 

function carousel() {
  showSlides(slideIndex);
  slideIndex++;
  setTimeout(carousel, 5000); 
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var captionContainer = document.getElementById("caption-container");
  var numberText = document.querySelectorAll(".numbertext-fixed");

  if (slides.length === 0) return;

  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  if (numberText[slideIndex]) {
    numberText[slideIndex].textContent = (slideIndex + 1) + " / " + slides.length;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  carousel(); 
});
