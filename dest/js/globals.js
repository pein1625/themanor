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
  addSwiper(".news-slider", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerGroup: 3,
    spaceBetween: 20,
    speed: 1000,
    pagination: true,
    navigation: true,
    breakpoints: {
      991: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      575: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    }
  });
});

$(function () {
  addSwiper(".info-slider", {
    direction: "vertical",
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 2,
    loop: true,
    navigation: true,
    breakpoints: {
      575: {
        direction: "horizontal"
      }
    }
  });
});

$(function () {
  var imageSlider = addSwiper(".image-slider", {
    freeMode: true,
    slidesPerView: "auto",
    spaceBetween: 4,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });

  var imageSlider2 = addSwiper(".image-slider-2", {
    navigation: true,
    slidesPerView: 2,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });

  $(".js-apartment-tab").on("shown.bs.tab", function () {
    imageSlider.map(function (item) {
      item.update();
    });
    imageSlider2.map(function (item) {
      item.update();
    });
  });

  $(".js-gallery").on("mouseenter click", function (e) {
    e.preventDefault();
    var href = $(this).attr("href");
    var target = $(this).data("target");
    $(target).attr("src", href);
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