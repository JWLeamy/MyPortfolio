function openNav() {
    $("#mynavbar").css('width', '250px')
  }
  
function closeNav() {
    $("#mynavbar").css('width', '100px')
  }

var myarray = 'hippo'


//----------- Scroll Effects With JavaScript functions --------------//
$(window).scroll(function () {
        $('.hidden').each(function (i) {
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * 0.3);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('show')
            }
        })});

$('.block').smoove({offset: '40%'});