function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash  = hash + input.charCodeAt(i);
        // if (input.charCodeAt(i) > 110)
        // {
        //     hash = hash + 0.12
        // }
        // else if (input.charCodeAt(i) > 40 && input.charCodeAt(i) < 110)
        // {
        //     hash = hash + 1            
        // }
        // else
        // {
        //     has = hash + 0
        // }
      //hash |= 0; // to 32bit integer
    }
    return hash;
  }

M.toast({
    html: "Click Anywhere On Screen To Place Your Unique Ornament!",
    classes: 'success'
})

var uid;
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC77qa3Nm0-HiD6bMtkQD3B20FT61QmXOA",
    authDomain: "brandonchandotca.firebaseapp.com",
    databaseURL: "https://brandonchandotca-default-rtdb.firebaseio.com",
    projectId: "brandonchandotca",
    storageBucket: "brandonchandotca.appspot.com",
    messagingSenderId: "571852207085",
    appId: "1:571852207085:web:10b5fba802ff11b0f86de4",
    measurementId: "G-6DP1WCR7S3"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().signInAnonymously()
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  })

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

var uid, loc_x, loc_y;

loc_x = 0;
loc_y = 0;

window.addEventListener("click", () => {
    loc_x = event.pageX;
    loc_y = event.pageY;

        if(event.target.parentElement.parentElement.href == null && event.target.parentElement.href == null && event.target.href == null)
        {
        // Add a dot to follow the cursor
        dot = document.createElement('div');
        dot.className = "dot swing-" + Math.floor((Math.random() * 4) + 1);
        dot.style.left = event.pageX + "px";
        dot.style.top = event.pageY + "px";

        //document.body.appendChild(dot);
        document.getElementById("page").appendChild(dot);

        // Add snowflake
        snowflake = document.createElement('canvas');
        snowflake.id = "snowflake";
        dot.appendChild(snowflake);

        firebase.database().ref('ornament/'+uid).set({
            USER_ID: uid,
            LOCATION_X: loc_x,
            LOCATION_Y: loc_y
        // }, error => {
        //     M.toast({
        //         html: error,
        //         classes: 'danger'
        //     })
        });      

        $(".dot").remove();

        loadFirebase();  
        }
    });

//todo: remove
// (function() {
//     "use strict";
//     document.onmousemove = handleMouseMove;
//     function handleMouseMove(event) {
//         var dot, eventDoc, doc, body, pageX, pageY;
        
//         event = event || window.event; // IE-ism
   
//         // If pageX/Y aren't available and clientX/Y
//         // are, calculate pageX/Y - logic taken from jQuery
//         // Calculate pageX/Y if missing and clientX/Y available
//         if (event.pageX == null && event.clientX != null) {
//             eventDoc = (event.target && event.target.ownerDocument) || document;
//             doc = eventDoc.documentElement;
//             body = eventDoc.body;
    
//             event.pageX = event.clientX +
//                 (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
//                 (doc && doc.clientLeft || body && body.clientLeft || 0);
//             event.pageY = event.clientY +
//                 (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
//                 (doc && doc.clientTop  || body && body.clientTop  || 0 );
//             }
                   
//     }
//     })();

//data

    //insert
    // $("#insert").click(() => {
    //     try
    //     {
    //         Ready();
    //         firebase.database().ref('ornament/'+uid).set({
    //             USER_ID: uid,
    //             LOCATION_X: loc_x,
    //             LOCATION_Y: loc_y
    //         // }, error => {
    //         //     M.toast({
    //         //         html: error,
    //         //         classes: 'danger'
    //         //     })
    //         });
    //     }
    //     catch(err)
    //     {
    //         M.toast({
    //             html: err,
    //             classes: 'danger'
    //         });
    //     }
    // }); 

   function loadFirebase()
   { 
        var ref = firebase.database().ref("ornament");

        ref.once("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            // var id=childData.USER_ID;

            dot = document.createElement('div');
            dot.className = "dot swing-" + Math.floor((Math.random() * 4) + 1);
            dot.style.left = childData.LOCATION_X + "px";
            dot.style.top = childData.LOCATION_Y + "px";
            dot.style.filter = `hue-rotate(${getHash(childData.USER_ID)}deg)`;

            //document.body.appendChild(dot);
            document.getElementById("page").appendChild(dot);

            // Add snowflake
            snowflake = document.createElement('canvas');
            snowflake.id = "snowflake";
            dot.appendChild(snowflake);
            });
            // var changedPost = snapshot.val();
            // for (var key in changedPost) {
            //     console.log(key);
            //     dot = document.createElement('div');
            //     dot.className = "dot";
            //     dot.style.left = key.LOCATION_X + "px";
            //     dot.style.top = key.LOCATION_Y + "px";
            //     document.body.appendChild(dot);
               
            // }
        });
    }

//initalize
loadFirebase();    

    // //select
    // $("#select").click(() => {
    //     try
    //     {
    //         Ready();
    //         firebase.database().ref('ornament/'+uid).on('value',function(snapshot){
    //             uid = snapshot.val().USER_ID;
    //             document.getElementById('secbox').value= snapshot.val().LOCATION_X;
    //             document.getElementById('genbox').value= snapshot.val().LOCATION_Y;
    //         });
    //     }
    //     catch(err)
    //     {
    //         M.toast({
    //             html: err,
    //             classes: 'danger'
    //         });
    //     }
    // });

    // //update
    // $("#update").click(() => {
    //     try
    //     {
    //         Ready();
    //         firebase.database().ref('ornament/'+uid).update({
    //             USER_ID: userId,
    //             LOCATION_X: loc_x,
    //             LOCATION_Y: loc_y
    //         });
    //     }
    //     catch(err)
    //     {
    //         M.toast({
    //             html: err,
    //             classes: 'danger'
    //         });
    //     }
    // }); 

    // //delete
    // $("#delete").click(() => {
    //     try
    //     {
    //         Ready();
    //         firebase.database().ref('ornament/'+uid).remove();
    //     }
    //     catch(err)
    //     {
    //         M.toast({
    //             html: err,
    //             classes: 'danger'
    //         });
    //     }
    // }); 



firebase.database().ref('ornament').on("child_changed", function(snapshot) {
    $(".dot").remove();
    loadFirebase();    
});




//snow

var particleCount = 300;
var particleMax   = 1000;
//var sky           = document.querySelector('.sky');
var sky           = document.getElementsByTagName('main')[0];
var canvas        = document.createElement('canvas');

var ctx           = canvas.getContext('2d');
var width         = sky.clientWidth;
var height        = sky.clientHeight + 50; //offset navbar
var i             = 0;
var active        = false;
var snowflakes    = [];
var snowflake;

canvas.style.position = 'absolute';
canvas.style.left = canvas.style.top = '0';

var Snowflake = function () {
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
  this.r = 0;

  this.reset();
};

Snowflake.prototype.reset = function() {
  this.x = Math.random() * width;
  this.y = Math.random() * -height;
  this.vy = 1 + Math.random() * 3;
  this.vx = 0.5 - Math.random();
  this.r = 1 + Math.random() * 2;
  this.o = 0.5 + Math.random() * 0.5;
};

function generateSnowFlakes() {
  snowflakes = [];
  for (i = 0; i < particleMax; i++) {
    snowflake = new Snowflake();
    snowflake.reset();
    snowflakes.push(snowflake);
  }
}

generateSnowFlakes();

function update() {
  ctx.clearRect(0, 0, width, height);

  if (!active) {      
    return;
  }

  for (i = 0; i < particleCount; i++) {
    snowflake = snowflakes[i];
    snowflake.y += snowflake.vy;
    snowflake.x += snowflake.vx;

    ctx.globalAlpha = snowflake.o;
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    if (snowflake.y > height) {
      snowflake.reset();
    }
  }

  requestAnimFrame(update);
}

function onResize() {
  width = sky.clientWidth;
  height = sky.clientHeight + 50; //offset navbar
  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = '#FFF';

  var wasActive = active;
  active = width > 600;

  if (!wasActive && active) {
    requestAnimFrame(update);
  }
}

// shim layer with setTimeout fallback
window.requestAnimFrame = (function() {
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

onResize();
window.addEventListener('resize', onResize, false);

sky.appendChild(canvas);

var gui = new dat.GUI();
gui.add(window, 'particleCount').min(1).max(particleMax).step(1).name('Particles count').onFinishChange(function() {
  requestAnimFrame(update);
});
gui.close();




//snowflake
// window.onload =  init;

// function init(){
// var canvas = document.getElementById('snowflake'),
//     ctx = canvas.getContext('2d'),
//     maxLevel = 4,
//     branches = 2;

// canvas.width = 500;
// canvas.height = 500;

// ctx.translate(canvas.width / 2, canvas.height / 2);

// var angle = Math.PI * 2 * Math.random();

// for (var i = 0; i < 6; i++) {
//    drawLine(0);
//    ctx.rotate(Math.PI * 2 / 6);
// }

// function drawLine(level) {
//    if(level > maxLevel) return;
   
//    ctx.strokeStyle = '#fff';
//    ctx.lineWidth = 3;
//    ctx.beginPath();
//    ctx.moveTo(0, 0);
//    ctx.lineTo(200, 0);
//    ctx.stroke();
   
//    for (var i = 1; i < branches + 1; i++) {
//       ctx.save();
      
//       ctx.translate(200 * i / (branches + 1), 0);
//       ctx.scale(0.5, 0.5);
      
//       ctx.save();
      
//       ctx.rotate(angle);
//       drawLine(level + 1);
      
//       ctx.restore();
      
//       ctx.save();
      
//       ctx.rotate(-angle);
//       drawLine(level + 1);
      
//       ctx.restore();
      
//       ctx.restore();
//    }
// }

// drawLine(0);
// }
