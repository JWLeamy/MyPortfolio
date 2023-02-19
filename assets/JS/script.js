
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

//----------- Scroll Effects  --------------//

$(window).scroll(function () {
  $(".hidden").each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() * 0.3;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
      $(this).addClass("show");
    }
    if (bottom_of_window < bottom_of_object) {
      $(this).addClass(".hidden")
    }
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

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