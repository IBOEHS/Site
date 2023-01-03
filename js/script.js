$(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 150) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 150) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });


  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

