/* ===================== MOBILE MENU ==================== */
const navMenu = document.querySelector('.nav__list');
const navToggle = document.querySelector('.nav__toggle');
const navClose = document.querySelector('.nav__close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navClose.classList.add('nav__close_show');
    });
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
        navClose.classList.remove('nav__close_show');
    });
}



/* ====================FORM VALIDATION==================== */

const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('name');
const contactEmail = document.getElementById('email');
const contactMessage = document.getElementById('message');
const contactSendMessage = document.getElementById('send-message');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (contactName.value.trim() === '') {
        contactSendMessage.textContent = "Please enter your name ❌";
        return;
    }

    if (contactEmail.value.trim() === '') {
        contactSendMessage.textContent = "Please enter your email ❌";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(contactEmail.value.trim())) {
        contactSendMessage.textContent = "Please enter a valid email ❌";
        return;
    }

    if (contactMessage.value.trim() === '') {
        contactSendMessage.textContent = "Please enter your message ❌";
        return;
    }

    contactSendMessage.textContent = "Form validation successful ✅";

    setTimeout(() => {
        contactSendMessage.textContent = "";
    }, 5000);
});




