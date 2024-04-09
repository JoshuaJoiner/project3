let slideIndex = 0;
const slides = document.querySelectorAll('#slider .slides img');
const totalSlides = slides.length;

function showSlide() {
  // Hide all slides
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = 'none';
  }

  // Display the current slide
  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  // Increment slide index
  slideIndex++;

  // If we reach the end, wrap around to the first slide
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  // Display the updated slide
  showSlide();
}

function prevSlide() {
  // Decrement slide index
  slideIndex--;

  // If we go before the first slide, wrap around to the last slide
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  // Display the updated slide
  showSlide();
}

// Initial display
showSlide();

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
