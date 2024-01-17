// alert klik Sejarah Betawi
function clickSejarah() {
  if (confirm('tekan tombol OK untuk masuk Sejarah Betawi')) {
    setTimeout(function () {
      window.location.href = 'betawi.html';
      // window.location.replace('betawi.html');
    }, 1000);
    // console.log('berhasil');
    // window.location.href = 'betawi.html';
  } else {
    // window.location.reload();
    // console.log('tidak berhasil');
  }
}
// console.log(clickSejarah);
// setTimeout(function () {
//   window.location.href = 'betawi.html';
//   window.location.replace();
// }, 5000);

// alert klik informasi wisata
function clickInformasi() {
  if (confirm('tekan tombol OK untuk masuk Sejarah Betawi')) {
    window.location.href = 'information.html';
  } else {
  }
}

// for scroll up
// function topFunction() {
//   const scroll = document.getElementById('myBtn');
//   window.scroll({ top: 0, behavior: 'smooth' });
// }

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
