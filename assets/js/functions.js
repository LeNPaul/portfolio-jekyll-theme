$( document ).ready(function() {
  workBelt();
});

function workBelt() {
  $('.thumb-unit').click(function() {
    $('.work-belt').css('left','-100%');
    $('.work-container').show();
    $('.thumb-unit').hide(800);
  });
  $('.work-return').click(function() {
    $('.work-belt').css('left','0%');
    $('.work-container').hide(800);
    $('.thumb-unit').show();
  });
}
