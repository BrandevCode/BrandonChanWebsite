//Loading Screen
// function onReady(callback) {
//   var intervalId = window.setInterval(function() {
//     if (document.getElementsByTagName('body')[0] !== undefined) {
//       window.clearInterval(intervalId);
//       callback.call(this);
//     }
//   }, 1000);
// }

$(window).load(function() {
  setVisible('.top-nav', true);
  setVisible('.page-footer', true);
  setVisible('#page', true);
  $('.parallax').parallax();

  var element = document.getElementById("loading");
  //comment out below to always see loading screen
  element.classList.add("fade-out");

  // setVisible('#loading', false);
});

function setVisible(selector, visible) {
  if (document.querySelector(selector))
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

// onReady(function() {
//   setVisible('#page', true);
//   //setVisible('#loading', false);
// });





//sidenav
(function($){
  $(function(){
    $(".button-collapse").sideNav();
  });
})(jQuery);

//parallax

// $(document).ready(function(){
//   $('.parallax').parallax();
// });

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Programmer", "Software Developer", "Artist", "Video Editor", "Guitarist", "Snowboarder", "Web Developer"];
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

  //console.log("rotate");
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


//play gif on home screen
for (let i = 1; i < document.querySelectorAll('.card-image').length+1; i++) {

  $('#gif-hover' + i).hide();

  $('#hover'  + i).on("mouseover", function() {
    $('#gif-hover'  + i).show();
    $('#pic-hover'  + i).hide();
  });

  $('#hover' + i).on("mouseout", function() {
    $('#gif-hover' + i).hide();
    $('#pic-hover'+ i).show();
  });
}


//on header notification load
var checkBox = document.getElementById("checkbox-container");

if(checkBox !== null)
{
  checkBox.style.display = 'inline';
  var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
      $checkboxes = $("#checkbox-container :checkbox");

  $checkboxes.on("change", function(){
      $checkboxes.each(function(){
          //console.log(this.id);
          //console.log(this.checked);
        checkboxValues[this.id] = this.checked;
      });
      
      //console.log(checkboxValues);

      localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));

      //console.log(checkboxValues);
  });

  // On page load
  $.each(checkboxValues, function(key, value) {
      //console.log(key);
      //console.log(value);

    //document.getElementById('toggle').checked = true;
    $("#" + key).prop('checked', value);
  });


  $('#toggle').click(function (e) {
      e.stopPropagation();
  });
}