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

const eventDate = new Date(2023, 9, 1, 0, 0, 0); // October 01, 2023, 12:00 AM

function updateCountdown() {
  const now = new Date();
  const timeDifference = eventDate - now;

  if (timeDifference <= 0) {
    document.getElementById('countdown').innerHTML = 'Event has started!';
  } else {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
      ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
  }
}

// Call the updateCountdown function to start the countdown and update it every second
setInterval(updateCountdown, 1000);

