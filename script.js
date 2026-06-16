document.addEventListener('DOMContentLoaded', () => {

    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.getElementById('.nav-link');

    burgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('open');

        const icon = burgerMenu.querySelector('i');
        icon.classList.toggle('fa-bars')
        icon.classList.toggle('fa-times')
    });

    navLinks
})