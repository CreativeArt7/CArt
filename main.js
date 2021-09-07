/*console.log('Hello world')*/
document.querySelector('.menu-btn').addEventListener('click', ()=> {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { Delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { Delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { Delay: 500 });
ScrollReveal().reveal('.social', { Delay: 500 });