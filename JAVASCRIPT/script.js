const swiper = new Swiper('.swiper-1', {
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,

    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});

const swiper1 = new Swiper('.swiper-2', {
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,

    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});

const swiper2 = new Swiper('.swiper-3', {
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,

    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        document.getElementById('menu').checked = false;
    });
});



