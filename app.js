//to navigate to different sections in the page from the navbar
  $(function () {
      var scroll = new SmoothScroll('a[href*="#section-"]'); 
  }); 




  //back to top button

  $(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop()> 200){4
      $('.go-top').fadeIn(200);
    }else{
      $('.go-top').fadeOut(200);
    }
   });
   $('.go-top').click(function(event){
     event.preventDefault();

     //scroll back to top slowly with animattion

     $('html, body').animate({scrollTop: 0}, 300);
   })
  });

