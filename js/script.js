document.addEventListener('DOMContentLoaded', () => {
    tabs();
    document.querySelector('.header__burger').addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.header__menu').classList.toggle('active');
            document.querySelector('body').classList.toggle('lock');
        })


/*-------Swiper------*/
new Swiper('.image-slider',{
   //Стрелки:
   navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   //Навигация(буллеты, текущее положение, прогрессбар)
   pagination:{
      el: '.swiper-pagination',

      //буллеты:
      clickable: true,

      //Динамические буллеты(точки будут изменять свой размер):
      dynamicBullets: true,

      //Кастомные буллеты (вывод номера слайда):
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
      },
      //Курсор перетаскивания:
      grabCursor: true,

      // Количество слайдов для показа(можно указывать как целые числа, так и дроби например 2.5:
      slidesPerView: 3,

      //Отключение функционала, если слайдов в слайдере меньше, чем кол-во для одновременного показа (чтобы не отключалось ставим auto):
      watchOverflow: true, 
      
      //Отступ между слайдами:
      spaceBetween: 30,

      //Кол-во пролистываемых слайдов:
      slidesPerGroup: 1,

      /*-----------Скорость переключения слайдов:-----*/
      speed: 300,

      /*----Бесконечный слайдер(отключить скролл и убрать мультирядность):---*/
      loop: true,

      /*----Эффект потока---------*/
        effect: 'coverflow',
    //Дополнительно к coverflow:
    coverflowEffect: {
   //Угол:
   rotate: 20,
   //Наложение:
   stretch: 50,
   //Тень:
   slideShadows: true,
    },
      breakpoints: {
   300: {
      slidesPerView: 1,
   },
   600: {
      slidesPerView: 2,
   },
   992: {
      slidesPerView: 3,
   }
},
 })


/*-----------HEADER Swiper--------*/
new Swiper('.main-block-img',{
 slidesPerView: 1, 
 slidesPerGroup: 1,
  speed: 600,
  loop: true,

   autoplay: {
      //Пауза между прокруткой:
      delay: 1000,
      //Закончить на последнем слайде:
      stopOnLastSlide: true,
      //Отключить после ручного переключения:
      disableOnInteraction: false
   },

  effect: 'cube',
    //Дополнительно к cube настройки тени:
    cubeEffect: {
   slideShadows: true,
   shadow: true,
   shadowOffset: 20,
   shadowScale: 0.94
    },  
  

})

/*----------*/
});
