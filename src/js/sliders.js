import 'swiper/css/bundle';
import '../css/sliders.css';
import Swiper from 'swiper';
import {
    Navigation,
    Pagination,
    Autoplay,
    Scrollbar,

} from 'swiper/modules';

const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    speed: 800,
    modules: [Pagination, Autoplay],
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

const contentSlider = new Swiper('.content-slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    modules: [Pagination, Navigation, Scrollbar],

    navigation: {
        nextEl: ".content-slider-next",
        prevEl: ".content-slider-prev",
        enabled: false
    },
    pagination: {
        el: ".content-slider-pagination",
        clickable: true,
        enabled: false
    },
    scrollbar: {
        el: ".content-slider-scrollbar",
        hide: false,
        enabled: true
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
            spaceBetween: 36,
            pagination: {
                enabled: false
            },
            navigation: {
                enabled: false
            },
            scrollbar: {
                enabled: true
            },
        },
        768: {
            pagination: {
                enabled: true
            },
            navigation: {
                enabled: true
            },
            scrollbar: {
                enabled: false
            },
            slidesPerView: 2,
            spaceBetween: 36,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 48,
            pagination: {
                enabled: true
            },
            navigation: {
                enabled: true
            },
            scrollbar: {
                enabled: false
            },
        }
    },
});