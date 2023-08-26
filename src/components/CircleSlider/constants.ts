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
        .swiper-pagination{
            position: fixed;
            bottom: 30px !important;
            display:none;
            left:10px;
        }
        @media (max-width: 450px) {
            .swiper-pagination{
                display:block;
            }
        }

        `,
    ],
};

