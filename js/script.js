$(document).ready(function(){ //시작

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  $(window).scroll(function(){
    var location = $(window).scrollTop();
    if(location >= $(".sect04").offset().top){
      $(".sect04").addClass("on");
    }
  });


  
  // $(".nav_span a").click(function(){
  //   $(".rightWrap").animate({right:0},500,"swing")	
  //   })
    
  //   $(".close1").click(function(){
  //     $(".rightWrap").animate({right:-300},500,"swing")	
  //   })




});//끝




