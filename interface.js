// barra mobile

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const barra = document.getElementById('barra');

  menuToggle.addEventListener('click', function() {
      barra.classList.toggle('show-menu');
  });
});


// slide

// let currentSlide = 0;
// const slides = document.querySelectorAll('.car');
// const totalSlides = slides.length;

// function changeSlide(direction) {
//   if (direction === 1 && currentSlide < totalSlides - 1) {
//     currentSlide++;
//   } else if (direction === -1 && currentSlide > 0) {
//     currentSlide--;
//   }
//   const offset = -currentSlide *790 / totalSlides;
//   document.querySelector('.slide-container').style.transform = `translateX(${offset}%)`;
// }

// barra pc

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('desktop');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});







