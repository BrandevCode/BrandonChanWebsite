$(document).ready(function(){

    $('body').on("mouseup",function(){
        $('#mousemark').removeClass("click");
    });

    $('body').on('click', function(e){
        $('#mousemark').css({
           left:  e.pageX-320,
           top:   e.pageY-50
        });
        $('#mousemark').addClass("click");
        console.log(e.pageX + " " + e.pageY);
    });

})