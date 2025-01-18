document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('#home .slides img');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent event bubbling
            this.classList.toggle('open'); // Toggle the "open" class
        });
    });

    document.addEventListener('click', function () {
        dropdowns.forEach(dropdown => dropdown.classList.remove('open')); // Close all dropdowns
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-lang-en]');

    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLang = this.getAttribute('data-lang');

            translatableElements.forEach(element => {
                element.innerHTML = element.getAttribute(`data-lang-${selectedLang}`);
            });

            // Add RTL support for Arabic
            if (selectedLang === 'ar') {
                document.body.style.direction = 'rtl';
                document.body.style.textAlign = 'right';
            } else {
                document.body.style.direction = 'ltr';
                document.body.style.textAlign = 'left';
            }
        });
    });
});

// gallery start

const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();
// gallery end

// klik image 
// Mengambil semua gambar di dalam container
const images = document.querySelectorAll('.image-container span img');

// Menambahkan event listener untuk setiap gambar
images.forEach(img => {
  img.addEventListener('click', () => {
    // Cek apakah gambar sudah di-zoom
    if (img.classList.contains('zoomed')) {
      // Jika sudah, hapus kelas zoomed untuk kembali ke ukuran normal
      img.classList.remove('zoomed');
    } else {
      // Jika belum, tambahkan kelas zoomed untuk zoom in gambar
      img.classList.add('zoomed');
    }
  });
});

