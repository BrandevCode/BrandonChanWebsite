
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
//,"/images/posts/habits/Pixel Me Yawn.gif"
,"/images/posts/habits/Pixel Me Jogging.gif"
,"/images/posts/habits/Pixel Me Reading.gif"
,"/images/posts/habits/Pixel Me Yes.gif"
,"/images/posts/habits/Pixel Me Knife.gif"
);

var myText = new Array(
"No zero days!"
,"Exercise!"
,"This is fine."
,"Live and learn!"
,"That kind of thing."
,"3 is a magic number."
,"You know what I mean?"
,"Ordinary is extordinary"
,"Wake-up. Code. Sleep."
);

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("landing-page-pixel-art").src = myPix[randomNum];

     //randomized text
     var randomNum = Math.floor(Math.random() * myText.length);
     document.getElementById("landing-page-text").innerHTML = myText[randomNum];
}