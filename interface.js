// barra mobile

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const barra = document.getElementById('barra');

  menuToggle.addEventListener('click', function() {
      barra.classList.toggle('show-menu');
  });
});



window.addEventListener('scroll', () => {
  const navbar = document.getElementById('desktop');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});




function showContent(contentID) {
  const sections = document.querySelectorAll('.container-car');
  const carteirasDiv = document.getElementById('carteiras');
  

  sections.forEach(section => {
      section.style.display = 'none'; 
  });

  const selectedSection = document.getElementById(contentID);
  if (selectedSection) {
      selectedSection.style.display = 'flex'; 
      const contentHeight = selectedSection.scrollHeight; 
      carteirasDiv.style.height = contentHeight + 'px'; 
  }
}


function showContente(contentID) {
  const sections = document.querySelectorAll('button-pt');
  const carteirasDiv = document.getElementById('button-ft');
  

  sections.forEach(section => {
      section.style.display = 'none'; 
  });

  const selectedSection = document.getElementById(contentID);
  if (selectedSection) {
      selectedSection.style.display = 'flex'; 
      const contentHeight = selectedSection.scrollHeight; 
      carteirasDiv.style.height = contentHeight + 'px'; 
  }
}






