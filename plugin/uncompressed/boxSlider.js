// by Haidar Hammoud haidar.hmd1@gmail.com

// left slider
jQuery.fn.leftSlide = function(backcolor){

    var element = $(this);

    var boxHeight = $(element).height();
    var boxWidth = $(element).width();

    $(this).append("<div class='box-container-left' style='height:"+ boxHeight +"px; width: "+ boxWidth +"px; background:"+ backcolor +"'><div>");

    $(this).css({"position": "relative", "overflow": "hidden"});

    $(this).mouseenter(function(e){
        e.preventDefault();
            $(".box-container-left").css({"right": 0});
    });

    $(this).mouseleave(function(e){
        e.preventDefault();
            $(".box-container-left").css({"right": 100 + "%"});
    });
};

// down slider
jQuery.fn.downSlide = function(backcolor){

    var element = $(this);

    var boxHeight = $(element).height();
    var boxWidth = $(element).width();

    $(this).append("<div class='box-container-down' style='height:"+ boxHeight +"px; width: "+ boxWidth +"px; background:"+ backcolor +"'><div>");

    $(this).css({"position": "relative", "overflow": "hidden"});

    $(this).mouseenter(function(e){
        e.preventDefault();
            $(".box-container-down").css({"bottom": 0});
    });

    $(this).mouseleave(function(e){
        e.preventDefault();
            $(".box-container-down").css({"bottom": 100 + "%"});
    });
};

// right slider
jQuery.fn.rightSlide = function(backcolor){

    var element = $(this);

    var boxHeight = $(element).height();
    var boxWidth = $(element).width();

    $(this).css({"position": "relative", "overflow": "hidden"});

    $(this).append("<div class='box-container-right' style='height:"+ boxHeight +"px; width: "+ boxWidth +"px; background:"+ backcolor +"'><div>");

    $(this).mouseenter(function(e){
        e.preventDefault();
            $(".box-container-right").css({"left": 0});
    });

    $(this).mouseleave(function(e){
        e.preventDefault();
            $(".box-container-right").css({"left": 100+"%"});
    });
};

// bottom slider
jQuery.fn.upSlide = function(backcolor){

    var element = $(this);

    var boxHeight = $(element).height();
    var boxWidth = $(element).width();

    $(this).css({"position": "relative", "overflow": "hidden"});

    $(this).append("<div class='box-container-up' style='height:"+ boxHeight +"px; width: "+ boxWidth +"px; background:"+ backcolor +"'><div>");

    $(this).mouseenter(function(e){
        e.preventDefault();
            $(".box-container-up").css({"top": 0});
    });

    $(this).mouseleave(function(e){
        e.preventDefault();
            $(".box-container-up").css({"top": 100+"%"});
    });
};