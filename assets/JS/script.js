
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
  $(".icon svg").css("transform", "rotate(135deg)")
}

function closeNav() {
  $(".navbar").css("width", "0");
  $("main").css("padding-left", "0")
  $(".navbar").css("margin-Left", "0");
  $(".navbut").css("visibility", "collapse");
  $(".icon svg").css("transform", "rotate(-45deg)")
}


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