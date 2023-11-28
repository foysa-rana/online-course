// navbar 
let navigation = () => {
    let navbarToggler = document.querySelector('.navbar-toggler');
    let collapse = document.querySelector('.collapse')
    
    navbarToggler.addEventListener('click', () => {
        collapse.classList.toggle('show');
    })
}
// navigation();

// topbar sticky
let stickyTopBar = () => {
    let topBar = document.querySelector('.topbar');
    window.addEventListener('scroll', () => {
        let banner = document.querySelector('.banner').offsetHeight;
        let scrollHeigt = this.scrollY;
    })
}
stickyTopBar();

// searchbar 
let searchBar = () => {
    let searchBtnDesktop = document.querySelector('.search-btn-desktop');
    let searchClose = document.querySelector('.search-close');
    let searchDesktop = document.querySelector('.search-desktop');

    searchBtnDesktop.addEventListener('click', () => {
        searchBtnDesktop.classList.add('hide');
        searchClose.classList.remove('hide');
        searchDesktop.classList.add('search-show');
    })

    searchClose.addEventListener('click', () => {
        searchBtnDesktop.classList.remove('hide');
        searchClose.classList.add('hide');
        searchDesktop.classList.remove('search-show');
    })
}
searchBar();



// swiper
let swiper = new Swiper('.swiper-horizontal', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 50
    },
    // when window width is >= 1400px
    1400: {
      slidesPerView: 5,
      spaceBetween: 30
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets : true,
  },
  autoplay: {
    delay: 5000,
  },
})

// seminar swiper
let  seminarSwiper = new Swiper(".swiper-seminar", {
  direction: "vertical",
  spaceBetween: 20,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets : true,
  },
  autoplay: {
    delay: 5500,
  },
});

//swiper seminar height
let swiperSeminarHeight = () => {
  addEventListener('resize', () => {
    let cardHeight = document.querySelector('.swiper-seminar .card').clientHeight;
    let slideHeight = document.querySelector('.swiper-seminar')
    slideHeight.style.height = cardHeight + "px";
  })
  addEventListener('load', () => {
    let cardHeight = document.querySelector('.swiper-seminar .card').clientHeight;
    let slideHeight = document.querySelector('.swiper-seminar')
    slideHeight.style.height = cardHeight + "px";
  })
}
swiperSeminarHeight();