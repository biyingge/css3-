 $(function(){
  if  (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
         new  WOW().init();
    };
    var  wow =  new  WOW({
         boxClass:  'wow' ,
         animateClass:  'animated' ,
         offset: 50,
         mobile:  true ,
         live:  true
    });
    wow.init();
   // totop
  $(window).scroll(function() {
    var h2 = $(document).scrollTop()
    var h3 = $(window).height()
    if (h2 > h3) {
      $('.totop').fadeIn(400)
    } else {
      $('.totop').fadeOut(400)
    }
  })
  $('.totop').click(function() {
    $('html,body').animate({ scrollTop: 0 })
  })
  var navflag=true;
  $('.menubtn').click(function(){
    if(navflag){
      $(this).addClass('menubtn_close');
      $(this).siblings('.headright').slideDown();
      $('body').css('overflow','hidden');
      navflag=false;
    }else{
      $(this).removeClass('menubtn_close');
      $(this).siblings('.headright').slideUp();
      $('body').css('overflow','auto');
      navflag=true;
    }
  })


})