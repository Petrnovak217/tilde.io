(function($){
   $(".yellow-button-animate").on('mouseenter', function() {

    if($(this).is(':animated')){
        return
    }

    $(this).animate({paddingLeft:"14"},150)
    $(this).animate({paddingLeft:"-1"},150)
   })

   $(".blue-skylight-button-animate").on('mouseenter', function() {

    if($(this).is(':animated')){
        return
    }
    $(this).animate({paddingLeft:"12"},200)
    $(this).animate({paddingLeft:"-1"},200)
    $(this).animate({paddingLeft:"12"},200)
    $(this).animate({paddingLeft:"-1"},200)
   })

   $(".blue-button-animate").on('mouseenter', function() {
    $('.arrow').stop().animate({left:"20",opacity:"0"},450)
    
   })
   $(".blue-button-animate").on('mouseleave', function() {
    $('.arrow').stop().animate({left:"11",opacity:"1"},1)
    
   })
  
})(jQuery)

let mobileMenu = document.querySelector(".mobile-menu")
let mobileButton = document.querySelector(".mobile-menu__btn")
let menuNav = document.querySelectorAll(".menu-nav")

let mobileNavOpen = false

mobileMenu.addEventListener('click',() =>{
    if(!mobileNavOpen){
        menuNav.forEach((item) =>{item.classList.toggle("open")})
    }
})


