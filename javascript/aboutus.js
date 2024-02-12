// Fungsi untuk menggerakkan slide ke slide berikutnya secara otomatis
function autoSlide() {
  $('#myCarousel').carousel('next');
}

// Mengaktifkan perpindahan otomatis setiap 2 detik (2000ms)
setInterval(autoSlide, 2500);

// banner card
// slides card images after done swiper js

var swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// scroll up start
const showOnPx = 100;
const backToTopButton = document.querySelector('.back-to-top');

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
});
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: 'smooth',
  });
};
backToTopButton.addEventListener('click', goToTop);

const pageProgressBar = document.querySelector('.progress-bar');
document.addEventListener('scroll', () => {
  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
});
// scroll up end
