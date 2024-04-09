let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('#slider .slides img');
  const totalSlides = slides.length;

  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = 'none';
  }

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

// Automatically advance slides
setInterval(nextSlide, 5000);

// Initial display
showSlides();
