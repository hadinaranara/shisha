let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-images img');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  
  const carouselImages = document.querySelector('.carousel-images');
  carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

// Initialize the first slide
showSlide(currentSlide);

// whatsapp
// JavaScript to handle WhatsApp link click and prevent scroll behavior.
document.getElementById('whatsapp-btn').addEventListener('click', function(event) {
  // Prevent default behavior, which might cause issues with layout shift.
  event.preventDefault();

  // Open WhatsApp in a new window or tab.
  window.open(this.href, '_blank');
});

// gallery
document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightbox = document.getElementById('closeLightbox');

  galleryItems.forEach(item => {
      item.addEventListener('click', () => {
          const img = item.querySelector('img');
          const title = item.querySelector('h3')?.textContent || "Untitled";
          const description = item.querySelector('p')?.textContent || "No description available.";

          lightboxImage.src = img.src;
          lightboxImage.alt = img.alt;
          lightboxCaption.textContent = `${title} - ${description}`;

          lightbox.classList.add('active');
      });
  });

  closeLightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
      lightboxImage.src = '';
      lightboxCaption.textContent = '';
  });

  lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === closeLightbox) {
          lightbox.classList.remove('active');
          lightboxImage.src = '';
          lightboxCaption.textContent = '';
      }
  });
});
