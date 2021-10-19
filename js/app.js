$('.btn-menu').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('btn-menu-active');
  $('#nav').toggleClass('.active');
});
