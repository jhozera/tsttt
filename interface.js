document.getElementById('menu-toggle').addEventListener('click', function() {
  const barra = document.getElementById('barra');
  barra.classList.toggle('show-menu');
});


let currentSlide = 0;
const slides = document.querySelectorAll('.car');
const totalSlides = slides.length;

function changeSlide(direction) {
  if (direction === 1 && currentSlide < totalSlides - 1) {
    currentSlide++;
  } else if (direction === -1 && currentSlide > 0) {
    currentSlide--;
  }
  const offset = -currentSlide *859 / totalSlides;
  document.querySelector('.slide-container').style.transform = `translateX(${offset}%)`;
}
