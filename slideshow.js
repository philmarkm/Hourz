const isiPhone = /iPhone/i.test(navigator.userAgent);
const introVideo = document.getElementById("intro-video");
const introVideoWrapper = document.getElementById("intro-video-wrapper");
const content = document.getElementById("content");

if (isiPhone) {
  introVideoWrapper.style.display = "none"; // Hide the video for iPhone users
  content.style.display = "block"; // Show the content
} else {
  // When the video loads and starts playing
  introVideo.addEventListener("canplaythrough", () => {
    introVideo.play();
  });

  // When the video ends, hide the video and show the rest of the content
  introVideo.addEventListener("ended", () => {
    introVideo.pause();
    introVideo.currentTime = 0;
    introVideoWrapper.style.display = "none";
    content.style.display = "block";
    document.body.style.overflow = "visible"; // Allow scrolling
  });

  // Slideshow functionality
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
}

