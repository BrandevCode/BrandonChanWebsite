$(document).ready(function(){
  $('figure.highlight').each(function(x, r){
    if ($(r).find('table').length < 1){
      $(r).find('pre').css('padding', '5px');
    }
  });
});

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

$(document).ready(function(){

  $('.slider').slider({ 
      full_width: true,
      height : 800, // default - height : 400
      interval: 8000 // default - interval: 6000
  });

});

$(document).ready(function(){
  $('.carousel').carousel();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});
      