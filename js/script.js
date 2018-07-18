$(document).ready(function(){
  $('#menu-toggle').click(function(){
    $('#menu-toggle').toggleClass('open');
    $('#sidebar-wrapper').toggleClass('open');
  });
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('trans');
        $('.navbar-nav').addClass('trans');
        $('.navbar-brand').addClass('trans');
        $('.navbar-brand img').addClass('trans');
    } 
    else {
        $('nav').removeClass('trans');
        $('.navbar-nav').removeClass('trans');
        $('.navbar-brand').removeClass('trans');
        $('.navbar-brand img').removeClass('trans');
    }
});