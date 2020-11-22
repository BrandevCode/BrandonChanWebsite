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
  setVisible('#page', true);
  $('.parallax').parallax();
  setVisible('#loading', false);
});

function setVisible(selector, visible) {
  if (document.querySelector(selector))
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

// onReady(function() {
//   setVisible('#page', true);
//   //setVisible('#loading', false);
// });


//https://codepen.io/zessx/pen/ZGBMXZ
//SVG triangulation
var refreshDuration = 5000;
var refreshTimeout;
var numPointsX;
var numPointsY;
var unitWidth;
var unitHeight;
var points;

function onLoad()
{
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    var winWidth = window.innerWidth
    var winHeight = window.innerHeight +1200

    svg.setAttribute('width',winWidth);
    svg.setAttribute('height',winHeight);
    //svg.setAttribute('height',document.documentElement.scrollHeight);

    var selection = document.querySelector('#bg') !== null;
    if (selection) {

      document.querySelector('#bg').appendChild(svg);
      //document.querySelector('html').style.backgroundImage = svg;

      var unitSize = (winWidth+winHeight)/10;
      numPointsX = Math.ceil(winWidth/unitSize)+1;
      numPointsY = Math.ceil(winHeight/unitSize)+1;
      unitWidth = Math.ceil(winWidth/(numPointsX-1));
      unitHeight = Math.ceil(winHeight/(numPointsY-1));

      points = [];

      for(var y = 0; y < numPointsY; y++) {
          for(var x = 0; x < numPointsX; x++) {
              points.push({x:unitWidth*x, y:unitHeight*y, originX:unitWidth*x, originY:unitHeight*y});
          }
      }

      randomize();

      for(var i = 0; i < points.length; i++) {
          if(points[i].originX != unitWidth*(numPointsX-1) && points[i].originY != unitHeight*(numPointsY-1)) {
              var topLeftX = points[i].x;
              var topLeftY = points[i].y;
              var topRightX = points[i+1].x;
              var topRightY = points[i+1].y;
              var bottomLeftX = points[i+numPointsX].x;
              var bottomLeftY = points[i+numPointsX].y;
              var bottomRightX = points[i+numPointsX+1].x;
              var bottomRightY = points[i+numPointsX+1].y;

              var rando = Math.floor(Math.random()*2);

              for(var n = 0; n < 2; n++) {
                  var polygon = document.createElementNS(svg.namespaceURI, 'polygon');

                  if(rando==0) {
                      if(n==0) {
                          polygon.point1 = i;
                          polygon.point2 = i+numPointsX;
                          polygon.point3 = i+numPointsX+1;
                          polygon.setAttribute('points',topLeftX+','+topLeftY+' '+bottomLeftX+','+bottomLeftY+' '+bottomRightX+','+bottomRightY);
                      } else if(n==1) {
                          polygon.point1 = i;
                          polygon.point2 = i+1;
                          polygon.point3 = i+numPointsX+1;
                          polygon.setAttribute('points',topLeftX+','+topLeftY+' '+topRightX+','+topRightY+' '+bottomRightX+','+bottomRightY);
                      }
                  } else if(rando==1) {
                      if(n==0) {
                          polygon.point1 = i;
                          polygon.point2 = i+numPointsX;
                          polygon.point3 = i+1;
                          polygon.setAttribute('points',topLeftX+','+topLeftY+' '+bottomLeftX+','+bottomLeftY+' '+topRightX+','+topRightY);
                      } else if(n==1) {
                          polygon.point1 = i+numPointsX;
                          polygon.point2 = i+1;
                          polygon.point3 = i+numPointsX+1;
                          polygon.setAttribute('points',bottomLeftX+','+bottomLeftY+' '+topRightX+','+topRightY+' '+bottomRightX+','+bottomRightY);
                      }
                  }
                  polygon.setAttribute('fill','rgba(0,0,0,'+(Math.random()/3)+')');
                  var animate = document.createElementNS('http://www.w3.org/2000/svg','animate');
                  animate.setAttribute('fill','freeze');
                  animate.setAttribute('attributeName','points');
                  animate.setAttribute('dur',refreshDuration+'ms');
                  animate.setAttribute('calcMode','linear');
                  polygon.appendChild(animate);
                  svg.appendChild(polygon);
              }
          }
      }

      refresh();
    }
}

function randomize() {
    for(var i = 0; i < points.length; i++) {
        if(points[i].originX != 0 && points[i].originX != unitWidth*(numPointsX-1)) {
            points[i].x = points[i].originX + Math.random()*unitWidth-unitWidth/2;
        }
        if(points[i].originY != 0 && points[i].originY != unitHeight*(numPointsY-1)) {
            points[i].y = points[i].originY + Math.random()*unitHeight-unitHeight/2;
        }
    }
}

function refresh() {
    randomize();
    for(var i = 0; i < document.querySelector('#bg svg').childNodes.length; i++) {
        var polygon = document.querySelector('#bg svg').childNodes[i];
        var animate = polygon.childNodes[0];
        if(animate.getAttribute('to')) {
            animate.setAttribute('from',animate.getAttribute('to'));
        }
        animate.setAttribute('to',points[polygon.point1].x+','+points[polygon.point1].y+' '+points[polygon.point2].x+','+points[polygon.point2].y+' '+points[polygon.point3].x+','+points[polygon.point3].y);
        animate.beginElement();
    }
    refreshTimeout = setTimeout(function() {refresh();}, refreshDuration);
}

function onResize() {
  var selection = document.querySelector('#bg svg') !== null;
  if (selection) {
      document.querySelector('#bg svg').remove();
      clearTimeout(refreshTimeout);
      onLoad();
  }
}

window.onload = onLoad;
window.onresize = onResize;



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
document.getElementById('checkbox-container').style.display = 'inline';

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