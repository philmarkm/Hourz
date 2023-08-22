let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("event-image");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  // Change slide every 5 seconds (5000 milliseconds)
  setTimeout(showSlides, 5000);
}

// Call the function to show the first slide
showSlides();

const introVideo = document.getElementById("intro-video");
const content = document.getElementById("content");



