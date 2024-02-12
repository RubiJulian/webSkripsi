// alert klik Sejarah Betawi
function clickSejarah() {
  if (confirm('tekan tombol OK untuk masuk Sejarah Betawi')) {
    setTimeout(function () {
      window.location.href = 'betawi.html';
    }, 1000);
  } else {
  }
}

function clickInformasi() {
  if (confirm('tekan tombol OK untuk masuk Sejarah Betawi')) {
    window.location.href = 'information.html';
  } else {
  }
}

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
