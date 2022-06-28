(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Fixed Navbar
  $(window).scroll(function () {
    if ($(window).width() < 1992) {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top").addClass("bg-white shadow");
        $(".nav-text").addClass("text-dark");
        document.querySelector('.logo-header').src = './img/logo.png';
      } else {
        $(".fixed-top").removeClass("bg-white shadow");
        $(".nav-text").removeClass("text-dark");
        document.querySelector('.logo-header').src = './img/logo-new.png';
      }
    } else {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top").addClass("bg-white shadow").css("top", -45);
        document.querySelector('.logo-header').src = './img/logo.png';
      } else {
        $(".fixed-top").removeClass("bg-white shadow").css("top", 0);
        document.querySelector('.logo-header').src = './img/logo-new.png';
      }
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);
