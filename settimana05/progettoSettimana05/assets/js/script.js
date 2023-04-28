//effetto scroll navbar
var header = document.querySelector('header');
header.style.backgroundColor = '#ffc017';
var btnStarted = document.querySelector('button');
btnStarted.style.backgroundColor = '#191919';

window.addEventListener('scroll', function() {
    if (window.scrollY > 567) {
      header.style.backgroundColor = '#fff';
      btnStarted.style.backgroundColor = '#1a8917';
    } else {
      header.style.backgroundColor = '#ffc017';
      btnStarted.style.backgroundColor = '#191919';
    }
});

//effetto m
setInterval(() => {
  const emme = document.querySelectorAll('g[stroke-linecap="butt"]');
  const random = Math.round(Math.random() * (emme.length - 1))
  emme[random].classList.toggle('opacity');
}, 10);