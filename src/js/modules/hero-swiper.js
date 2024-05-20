import Swiper from 'swiper/bundle';

export const heroSwiper = () => {
    const swiper = new Swiper('.hero__swiper', {
        loop: true,
        speed: 900,
        parallax: true,
        effect: 'fade',

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        keyboard: {
            enabled: true,
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',

            formatFractionCurrent: (number) => { return '0' + number },
            formatFractionTotal: (number) => { return '0' + number },
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}