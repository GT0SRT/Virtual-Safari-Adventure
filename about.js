// loader js start
    setTimeout(function(){
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('#page').style.display = 'flex';
    },1000)


    // colour changer
    document.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      if (window.scrollY > 100) {
          header.style.display = 'none';
      }
      else{
        header.style.display = 'flex';
      }
  });

// team
// let elem = document.querySelectorAll('.circle-spin');
// elem.forEach(function(dets){
//     window.addEventListener('scroll', function() {
//         var value = window.scrollY * 1.2;
//         dets.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
//     });
// })


// contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  const formData = new FormData(this);
  fetch(this.action, {
      method: 'POST',
      body: formData,
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          // Show success toast
          var toast = new bootstrap.Toast(document.getElementById('toastSuccess'),  {
            delay: 3000 
          });
          toast.show(); 
          this.reset();
      } else {
          alert('There was an error sending your message.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('There was a problem with the submission.');
  });
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
