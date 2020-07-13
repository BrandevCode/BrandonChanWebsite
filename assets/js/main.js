//sidenav
(function($){
  $(function(){
    $(".button-collapse").sideNav();
  });
})(jQuery);

//parallax

$(document).ready(function(){
  $('.parallax').parallax();
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Programmer", "Web Developer", "QA Engineer", "BI Developer", "Video Editor", "Guitarist", "Snowboarder"];
const typingDelay = 135;
const erasingDelay = 120;
const newTextDelay = 2250; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (cursorSpan != null)
  {
    if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//Rotate icon

$(".collapsible-header").click(function () {

  //var rotateClass = this.querySelector('.i las la-caret-down right rotate');

  //$(rotateClass).toggleClass("down");

  $(this).find(".rotate").toggleClass("down");

  console.log("rotate");
})

//Fade in on scroll
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".fadein");
  
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } 
  }
});