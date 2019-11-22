// navbar mobile toggle
$(function () {
  var $body = $("html, body");
  var $navbar = $(".js-navbar");
  var $navbarOpen = $(".js-navbar-open");
  var $navbarClose = $(".js-navbar-close");

  $navbarOpen.on("click", function () {
    $navbar.addClass("is-show");
  });

  $navbarClose.on("click", function () {
    $navbar.removeClass("is-show");
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
  addSwiper(".banner-slider", {
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true
  });
});

// swiper template
function addSwiper(selector, options = {}) {
  return Array.from(document.querySelectorAll(selector), function (item) {
    var $sliderContainer = $(item),
        $sliderEl = $sliderContainer.find(selector + "__container");

    if (options.navigation) {
      $sliderContainer.addClass("has-nav");
      options.navigation = {
        prevEl: $sliderContainer.find(selector + "__prev"),
        nextEl: $sliderContainer.find(selector + "__next")
      };
    }

    if (options.pagination) {
      $sliderContainer.addClass("has-pagination");
      options.pagination = {
        el: $sliderContainer.find(selector + "__pagination"),
        clickable: true
      };
    }

    return new Swiper($sliderEl, options);
  });
}

$(function () {
  $(".js-max-text").on("keydown", function (e) {
    if ($(this).val().length >= 200) {
      e.preventDefault();
    }
  });
});

$(function () {
  $(".utilities__link").on("mouseenter click", function (e) {
    e.preventDefault();
    $(".utilities__link.active, .utilities__frame.active").removeClass("active");

    $(this).addClass("active");
    $($(this).attr("href")).addClass("active");
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