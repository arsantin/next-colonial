
/* jQuery.noConflict() for using the plugin along with other libraries. 
   You can remove it if you won't use other libraries (e.g. prototype, scriptaculous etc.) or 
   if you include jQuery before other libraries in yourdocument's head tag. 
   [more info: http://docs.jquery.com/Using_jQuery_with_Other_Libraries] */
   jQuery.noConflict(); 

   (function ($) {   
     $(document).ready(function(){

      //header

      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
          $("header").addClass('trans');
        } else {
          $("header").removeClass('trans');
        }
      }

      

      //scroll

$('a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
  console.log(id);  
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
  }, 1000);
});
});


})(jQuery);