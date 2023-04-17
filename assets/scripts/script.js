(function ($) {
  $(document).ready(function () {
    // jQuery код
    $('.toc ul a').on('click', function () {
      $('.toc ul a').removeClass('active');
      $(this).addClass('active');
    });
  });
})(jQuery);
