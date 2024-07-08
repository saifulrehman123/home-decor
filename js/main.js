const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav_menu");

//event listener
navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});
//swiper

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
  //breakpointes
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints:{
    320:{
        slidesPerView: 1,
    },
    960:{
        slidesPerView: 2,
    },
    1200: {
        slidesPerView: 3,
    },
  },


  


});

//scrollreveal Animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 600,
 // reset:true,
});

//hero
sr.reveal('.hero--text', { origin: 'top' });
//steps
sr.reveal('.steps--step', { distance: '100px', interval: 100 });
//about
sr.reveal('.about--text', { origin: 'left' });
sr.reveal('.about--img', { origin: 'right', delay: 800 });
//testiomonial
sr.reveal('.testimonial--bg', { delay: 800 });
sr.reveal('.testimonial--title',);
sr.reveal('.testimonial--slider', { delay: 1000 });
//brands
sr.reveal('.brands--img', { delay: 600, distance: '100px', interval: 100 });
//work
sr.reveal('.work--title',);
sr.reveal('.work--subtitile',{ delay: 800});
sr.reveal('.work--grid',{ delay: 1000});
//stats
sr.reveal('.stats',);
sr.reveal('.stats--item',{ distance: '100px', interval: 100,});
//news
sr.reveal('.news--title',);
sr.reveal('.news--subtitle',{ delay: 800});
sr.reveal('.news--item',{ distance: '100px', interval: 100, delay: 1000, });
//contact
sr.reveal('.contact--container',);
sr.reveal('.contact--text',{ delay: 800 });
//footer
sr.reveal('.footer--item',{ distance: '100px', interval: 100, });
//footer copyright
sr.reveal('.footer--Copyright');










