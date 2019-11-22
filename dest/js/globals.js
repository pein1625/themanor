// navbar mobile toggle
$(function () {
  var $body = $('html, body');
  var $navbar = $('.js-navbar');
  var $navbarOpen = $('.js-navbar-open');
  var $navbarClose = $('.js-navbar-close');

  $navbarOpen.on('click', function () {
    $navbar.addClass('is-show');
    $body.addClass('overflow-hidden');
  });

  $navbarClose.on('click', function () {
    $navbar.removeClass('is-show');
    $body.removeClass('overflow-hidden');
  });
});

// menu toggle
$(function () {
  $('.menu-toggle').on('click', function () {
    var $toggle = $(this);

    $toggle.toggleClass('active').siblings('.menu-sub').slideToggle();

    $toggle.parent().siblings('.menu-item-group').children('.menu-sub').slideUp();

    $toggle.parent().siblings('.menu-item-group').children('.menu-toggle').removeClass('active');
  });
});

$(function () {
  $(".js-contact").on("click", function (e) {
    var $contact = $("#contact");

    if ($contact.length) {
      e.preventDefault();

      $("html, body").animate({
        scrollTop: $contact.offset().top
      }, 1000);
    }
  });
});

$(function () {
  if (window.location.href.indexOf("#contact") != -1 && $("#contact").length) {
    $("html, body").animate({
      scrollTop: $("#contact").offset().top - $(".header__wrapper").outerHeight()
    }, 300);
  }
});