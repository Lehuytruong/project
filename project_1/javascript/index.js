// phần js của slide chạy
$(document).ready(function(){
  var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
 },
        navigation: {
           nextEl: '.button-next',
           prevEl: '.button-prev',
       },
  });
        // Phần header scroll
        window.onscroll = function() {myFunction()};

   function myFunction() {
 if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("nav").className = "fixed";
    $(".menu").css("display","none")
} else {
    document.getElementById("nav").className = "";
    $(".menu").css("display","block")
};
};
        $("#mega-menu").click(function(){
          $(".menu").toggle();
        });
});
