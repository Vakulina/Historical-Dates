export const swiperParams = {
    slidesPerView: 1.4,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1.4,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 1.5,
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
          margin: 0 auto 0 0;
          box-sizing:border-box;
        }
        @media (max-width: 450px) {
            .swiper {
                padding: 0 20px;
            }    
        }
        `,
    ],
};

