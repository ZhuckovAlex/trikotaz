$(document).ready(function() {
   $('.header__burger').click(function(event) {
   $('.header__burger,.header__menu').toggleClass('active');
   $('body').toggleClass('lock');
});
});

$(document).ready(function(){
	$('.slider').slick({
		  /*--вкл стрелки--*/
    arrows:true,
    /*--вкл точек--*/
    dots:true,
    /*--адаптивная высота слайдера--*/
    adaptiveHeight:true,
    /*--кол-во слайдов на экране--*/
    slidesToShow:3,
    /*--кол-во слайдов пролистываемых--*/
    slidesToScroll:1,
    /*--скорость пролистывания слайдов--*/
    speed:1000,
    /*--тип анимации при пролистывании--*/
    easing:'lenear',
    /*--будет ли слайдер бесконечен--*/
    infinite:true,
    /*--стартовый слайд--*/
    initialSlide:0,
    /*--автоматическое пролистывание слайдов--*/
    autoplay:false,
    /*--период авт.пролистывания--*/
    autoplaySpeed:1000,
    /*--на ПК передвижение слайдов мышью--*/
    draggable:true,
    /*--на моб.тел. передвигать слайды пальцем--*/
    swipe:true,
    /*--момент срабатывания слайдера--*/
    touchThreshold:10,
    /*--возможность передвижения слайдов пальцем--*/
    touchMove:true,
    /*--при вкл. скорость движ.слайдов не зависит от скорости нажатия--*/
    waitForAnimate:true,
    /*--главный слайд выстраивается по центру(дописать css)--*/
    centerMode:false,
    /*--при true расстояние м-ду слайдами исчезает--*/
    variableWidth:false,
    /*--кол-во рядов--*/
    rows:1,
    /*--кол-во слайдов в ряду--*/
    slidesPerRow:1,
    /*--вертикальный слайдер--*/
       vertical:false,
    /*--в верт.слайдере будет показан только один слайд--*/
    fade:false,
     /*--связаться с другим слайдером--*/  
    asNavFor:false,
    /*--адаптивность слайдера(setting-изменяемые св-ва)--*/
    responsive:[
    {
      breakpoint: 768,
      settings: {
         slidesToShow:2
      }},
       {
      breakpoint: 480,
      settings: {
         slidesToShow:1
      }
    }],
  });
	});
