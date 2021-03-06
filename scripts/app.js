// Preloader
const preloader = document.getElementById('loading-page');

window.addEventListener('load', function () {
  preloader.style.display = 'none';

  // Navigation ScrollReveal
  sr.reveal('nav .navbar-list', {
    distance: '30px',
    easing: 'ease-out',
    delay: '300',
    origin: 'top'
  });
});

// =================================== //
//Navigation 
let previousScrollTop;
const navigation = document.querySelector('nav');

window.addEventListener('scroll', (e) => {
  const scrollTop = window.scrollY;

  if (scrollTop > previousScrollTop) {
    navigation.style.top = '-5rem';
  } else {
    navigation.style.top = '0';
  }

  previousScrollTop = scrollTop;
});

//     *~* Hamburger menu *~*

//Disable menu after click on <a>
$('.toggle-menu a').on('click', function (e) {
  $('.toggle').toggleClass('toggle-active');
  $('.navicon').toggleClass('navicon-active');

});

//Active/disable hamburger menu
$('.navicon').on('click', function (e) {
  e.preventDefault();

  $(this).toggleClass('navicon-active');
  $('.toggle').toggleClass('toggle-active');
});

// =================================== //
//   *~* ScrollReveal *~*
window.sr = ScrollReveal();

// Titles and linear-border
sr.reveal('.title, .linear-border', {
  distance: '60px',
  easing: 'ease-out',
  viewFactor: 1,
});

// Section header
sr.reveal('header .jumbotron-title, header .jumbotron-subtitle', {
  easing: 'ease-out',
  delay: '300'
}, 50);

sr.reveal('header .jumbotron-title', {
  distance: '5rem',
});

sr.reveal('header .jumbotron-subtitle', {
  distance: '10rem',
});

// Section about
sr.reveal('.about img', {
  easing: 'ease-out',
  distance: '20px',
  wait: 6000
});

sr.reveal('.about p', {
  distance: '20px',
  easing: 'ease-out',
  viewFactor: 1,
}, 75);

// Section projects
sr.reveal('.project-box', {
  distance: '20px',
  easing: 'ease-out',
  viewFactor: '0.3',
}, 150);

sr.reveal('.information-title, .information p, .information .buttons', {
  duration: 500,
  distance: '20px',
  easing: 'ease-out',
  viewFactor: 1,
}, 75);

// Section reference
sr.reveal('.reference .iconbase', {
  duration: 700,
  distance: '20px',
  easing: 'ease-out',
  viewFactor: 1,
});

sr.reveal('.reference .icon-title', {
  duration: 500,
  distance: '20px',
  easing: 'ease-out',
  viewFactor: 1,
});

// Section contact
sr.reveal('.contact-container', {
  distance: '8rem',
  easing: 'ease-out'
});