export const swiperParams = {
    slidesPerView: 1,

    navigation: {
        prevEl: '.circle-swiper-button-prev',
        nextEl: '.circle-swiper-button-next',
    },
    speed: 0,
    injectStyles: [
    `
        .swiper-slide {
          box-sizing: border-box;
          overflow:hidden;
          border: 1px solid red;
          display:flex;
          justify-content: center;
          align-items: center;
        }

        `,
    ],
};

