(function ($) {
  $(document).ready(function () {
    // jQuery код
    $('.toc ul a').on('click', function () {
      console.log($(this));
      $('.toc ul a').removeClass('active');
      $(this).addClass('active');
    });
  });
})(jQuery);
