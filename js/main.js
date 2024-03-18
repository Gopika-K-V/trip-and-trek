// Testimonial Slider
var swiper = new Swiper(".testimonial_slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: false,
    breakpoints: {
        320: {
          slidesPerView: 1.25,
          spaceBetween: 10
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 10
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Slider Images
var imageSwiper = new Swiper(".image_slider", {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10
        }
    },
});

// Attractions Slider

var swiper = new Swiper(".attractions_slider", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".thumb_slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});