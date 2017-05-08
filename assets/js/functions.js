$( document ).ready(function() {
  workBelt();
  workLoad();
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

function workLoad() {
  $.ajaxSetup ({ cache: true });
  $('.thumb-unit').click(function() {
    var $this = $(this),
    newTitle = $this.find('strong').text(),
    newFolder = $this.data('folder'),
    spinner = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>',
    newHTML = '/work/' + newFolder + '.html';
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
}
