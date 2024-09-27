// loader js start
setTimeout(function () {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('#page').style.display = 'block';
}, 1000)

// colour changer
document.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.display = 'none';
        document.querySelector('.road').style.display = 'block';
        document.querySelector('footer').style.marginTop = '0px';
    }
    else {
        header.style.display = 'flex';
        document.querySelector('footer').style.marginTop = '200px';
    }
});

// roadd scroll animation
document.addEventListener("scroll", function() {
    const image = document.querySelector('.image-container img');
    const scrollPosition = window.scrollY;
    const maxScroll = 800;
    const translateY = Math.min(scrollPosition / 1.6, maxScroll);
    image.style.transform = `translateY(${translateY}px)`;
    if (scrollPosition < maxScroll) {
        image.style.transform = `translateY(${scrollPosition / 1.9}px)`;
    }
});


// SHOW MENU 
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ADD BLUR HEADER */
const blurHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', blurHeader)
