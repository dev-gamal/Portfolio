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

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                const icon = burgerMenu.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars')
            }
        });
    });

    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scroll > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please fill in your name.'
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '' ) {
            emailError.textContent = 'Please enter your email adress.';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a validate email adress.';
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please write a message.';
            isValid = false;
        }

        if (isValid) {
            alert('Your message is sent with success !');
            contactForm.reset();
        }
    });
});