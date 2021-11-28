
/*
$('html').click(function (e) {
    if (!$('.toggle').is($(e.target))) {
        $('#toggle').prop("checked", false);
    }
});
*/

/*
var jsonStr=localStorage.getItem('checkboxValues');
var json=JSON.stringify(jsonStr);
json=JSON.parse(json);

var allCheckboxes = [];
// setter
localStorage.setItem("checkboxValues",  JSON.stringify(allCheckboxes));

console.log(JSON.parse(localStorage.getItem('checkboxValues')));
*/

window.onload = choosePic;

var myPix = new Array("/images/posts/habits/Pixel Me Writing.gif"
,"/images/posts/habits/Pixel Me Meditation.gif"
,"/images/posts/habits/Pixel Me Sleeping.gif"
,"/images/posts/habits/Pixel Me Squatting.gif"
,"/images/posts/habits/Pixel Me Yawn.gif"
,"/images/posts/habits/Pixel Me Jogging.gif"
,"/images/posts/habits/Pixel Me Reading.gif"
,"/images/posts/habits/Pixel Me Yes.gif"
,"/images/posts/habits/Pixel Me Knife.gif");

var myText = new Array("Welcome To My Website!"
,"Hello World!"
,"TODO: add landing-page text here."
,"Landing Page Displayed Successfully."
,"No Zero Days!"
,"This is fine."
,"The best defense is more offense."
,"Curry is pretty dope."
,"Don't believe in yourself! Believe in the Brandon that believes in you!"
,"Less testing. More developing."
,"Don’t assume it, prove it."
,"Live and learn."
,"I'm not shy. I'm just a slow thinker"
,"Introducing Light Mode!"
,"Go beyond the impossible and kick reason to the curb!");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("landing-page-pixel-art").src = myPix[randomNum];

     //randomized text
     var randomNum = Math.floor(Math.random() * myText.length);
     document.getElementById("landing-page-text").innerHTML = myText[randomNum];
}