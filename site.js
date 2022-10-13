/* Javascript */
$(document).on('click', '.nav-link', function(e) {
  if ($('body').width() < 992)
    $('.navbar-toggler').click();
});