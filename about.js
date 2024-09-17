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
  event.preventDefault();
  var toastEl = document.getElementById('toastSuccess');
  var toast = new bootstrap.Toast(toastEl, {
      delay: 3000 
  });
  toast.show(); 
  this.reset();
});
