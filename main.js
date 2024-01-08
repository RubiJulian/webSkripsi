// alert klik informasi
function clickInformasi() {
  if (confirm('tekan tombol OK untuk masuk informasi')) {
    window.location.href = 'information.html';
  } else {
  }
}

// for scroll up
function topFunction() {
  const scroll = document.getElementById('myBtn');
  window.scroll({ top: 0, behavior: 'smooth' });
}
