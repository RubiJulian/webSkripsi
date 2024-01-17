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
// function topFunction() {
//   const scroll = document.getElementById('myBtn');
//   window.scroll({ top: 0, behavior: 'smooth' });
// }

// let mybutton = document.getElementById('myBtn');

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     mybutton.style.display = 'block';
//   } else {
//     mybutton.style.display = 'none';
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
// const showOnPx = 100;
// const backToTopButton = document.querySelector('.back-to-top');

// const scrollContainer = () => {
//   return document.documentElement || document.body;
// };

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

// const scrollTop = function () {
//   // create HTML button element
//   const scrollBtn = document.createElement('button');
//   scrollBtn.innerHTML = '&uarr;';
//   scrollBtn.setAttribute('id', 'scroll-btn');
//   document.body.appendChild(scrollBtn);
//   // hide/show button based on scroll distance
//   const scrollBtnDisplay = function () {
//     window.scrollY > window.innerHeight
//       ? scrollBtn.classList.add('show')
//       : scrollBtn.classList.remove('show');
//   };
//   window.addEventListener('scroll', scrollBtnDisplay);
//   // scroll to top when button clicked
//   const scrollWindow = function () {
//     if (window.scrollY != 0) {
//       setTimeout(function () {
//         window.scrollTo(0, window.scrollY - 50);
//         scrollWindow();
//       }, 10);
//     }
//   };
//   scrollBtn.addEventListener('click', scrollWindow);
// };
// scrollTop();
