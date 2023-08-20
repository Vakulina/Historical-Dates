import style from './LineSlider.module.scss'

export const swiperParams = {
    slidesPerView: 3,
    breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
        1921: {
            slidesPerView: 3.5,
            spaceBetween: 80,
        },
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    injectStyles: [
        `
        .swiper {
          max-width: 1400px;
          padding: 0 80px 0 80px;
          margin: 0 auto 0 0;
          box-sizing:border-box;
        }
        `,
    ],
};

