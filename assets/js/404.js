// Get coordinates with...
// 1. JQuery



var coord_x = 0;
var coord_y = 0;

$(document).mousemove(function(e) {
    coord_x = e.pageX;
    coord_y = e.pageY;

    $('#mousedownmark').css({
        left:  coord_x,
        top:   coord_y
     });

    $("#jQueryPos").text(coord_x + "," + coord_y).show()
})

$(document).ready(function(){

//holding animation

    $("div").mousedown(function(){

        $('#mousedownmark').addClass("hold");
        console.log("clicked!!");

      });

    $("div").mouseup(function(){
        $('#mousedownmark').removeClass("hold");
    });      
    
//after click animation

    $('body').on("mouseup",function(){
        $('#mousemark').removeClass("click");
    });

    $('body').on('click', function(e){
        $('#mousemark').css({
           left:  coord_x,
           top:   coord_y
        });
        $('#mousemark').addClass("click");
        console.log(coord_x + " " + coord_y);
    });

})

