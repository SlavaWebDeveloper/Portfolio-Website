import 'swiper/css/bundle';
import '@/scss/index.scss';
import Swiper from 'swiper/bundle';


/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navbarMoon = document.querySelector('.navbar__moon');

menuIcon.addEventListener('click', function () {
    this.classList.toggle('open');
    navbar.classList.toggle('open');
});

/*========== dark light mode ==========*/
navbarMoon.addEventListener('click', function () {
    this.classList.toggle('open');
    document.body.classList.toggle('dark-mode');
});

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar__link');



window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);


    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('navbar__link-active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('navbar__link-active');
            })
        }
    })
    menuIcon.classList.remove('open');
    navbar.classList.remove('open');
};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*========== scroll reveal ==========*/

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});

ScrollReveal().reveal('.home-img img, .services__container, .portfolio__container, .testimonial__container, .contact__form', {
    origin: 'bottom'
});

ScrollReveal().reveal('.home-content__title, .about__img', {
    origin: 'left'
});

ScrollReveal().reveal('.home-content__subtitle, .home-content__description, .about__description', {
    origin: 'right'
});