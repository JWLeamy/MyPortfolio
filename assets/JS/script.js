
//----------- NavBar Effects --------------//

function setNav() {
    
    if (($(".navbar").width()) === (0)){
        console.log("nav is opening")
        openNav()
    } else {
        console.log("nav is closing")
        closeNav()
        } 
    }


function openNav() {
  $(".navbar").css("width", "15%");
  $(".navbar").css("margin-Left", "15%");
  $("main").css("padding-left", "15%")
  $(".navbut").css("visibility", "visible");
}

function closeNav() {
  $(".navbar").css("width", "0");
  $("main").css("padding-left", "0")
  $(".navbar").css("margin-Left", "0");
  $(".navbut").css("visibility", "collapse");
}

//----------- Scroll Effects With JavaScript functions --------------//

$(window).scroll(function () {
  $(".hidden").each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() * 0.3;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
      $(this).addClass("show");
    }
  });
});

//----------- Jumping Letters animation --------------//
/*
$(document).ready(function() {
    $(".nameletter").hover(
        function() {
            $(this).removeClass("nameletter")
            $(this).addClass("bounce");
        }
    )
})
*/