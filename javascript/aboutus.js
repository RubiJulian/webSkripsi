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

// scroll up
function topFunction() {
  const scroll = document.getElementById('myBtn');
  window.scroll({ top: 0, behavior: 'smooth' });
}
