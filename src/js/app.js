const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
   let scrollPos = window.scrollY;
   
   if (scrollPos > 0) {
      header.classList.add("gray");
   } else {
      header.classList.remove("gray");
   };  
});

$(document).ready(function(){
   
   $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.intro__inner').slick({
      dots: true,
      autoplay: true,
      speed: 1200,
      responsive: [
         {
           breakpoint: 769,
           settings: {
             arrows: false,
           }
         },
      ]
   });

   $('.posts__inner').slick({
      autoplay: false,
      slidesToShow: 3,
      infinite: false,
      responsive: [
         {
           breakpoint: 1025,
           settings: {
             slidesToShow: 2,
           }
         },
         {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
            }
         },
      ]
   });

});

const worksItem = document.querySelectorAll('.projects__item');

document.querySelector('.projects__menu').addEventListener('click',  event => {
   if (event.target.className !== 'projects__menu-item') return false;

   let filterClass = event.target.dataset['filter'];
   
   worksItem.forEach( elem => {
      elem.classList.remove('projects__hide')
      if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
         elem.classList.add('projects__hide');
      }
   });
});