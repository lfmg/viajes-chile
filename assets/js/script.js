/*
$(document).ready(function()
     {
          $("a").on('click', 
          function(event) 
               {
                    if (this.hash !== "") {
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                    scrollTop: $(hash).offset().top
                    }, 800, 
                         function()
                         {
                         window.location.hash = hash;
                         });
                    }
               });
     }
);

 /*
    $("#ingredientes").onclick(function(){ $(this).css({ "color": "red" }); });
     $("#ingredientes").hover(function(){ $(this).css("<a href='#'>Me convertí</a>"); });     
     $("#ingredientes").dblclick(function(){ $(this).hide('slow'); });
 */ 

$(document).ready(function(){
     $(".card-title").click(function(){ 
          $(".card-text").toggle('slow');
     });
     $(".title").click(function(){ 
          $(this).css({ "color": "red" });
     });
     $("#enviar").click(function(){ 
          alert( "El correo ha sido enviado exitosamente!");
     });
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')



/* CAROUSEL*/ 
const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})