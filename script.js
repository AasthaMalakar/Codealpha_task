let slideIndex = 1;

// Open the modal
function openModal() {
  document.getElementById("lightboxModal").style.display = "block";
}

// Close the modal
function closeModal() {
  document.getElementById("lightboxModal").style.display = "none";
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Show the current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Display the slides
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
