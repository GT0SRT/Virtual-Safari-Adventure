// loader js start
    setTimeout(function(){
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('#page').style.display = 'flex';
    },800)


    // colour changer
    document.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      if (window.scrollY >100) {
          header.style.backgroundColor = '#824026bd';
      }
      else{
        header.style.backgroundColor = 'transparent'; 
      }
  });



// about page crsr
document.querySelector('.cover').addEventListener('mousemove',function(dets){
    document.querySelector('.crsr').style.left = dets.x+"px";
    document.querySelector('.crsr').style.top = dets.y+"px";
})

// team
let elem = document.querySelectorAll('.circle-spin');
elem.forEach(function(dets){
    window.addEventListener('scroll', function() {
        var value = window.scrollY * 1.2;
        dets.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
    });
})

// on scroll animation
let lane = document.querySelectorAll('.brdr');
lane.forEach(function(dets){
    window.addEventListener('scroll', function() {
        var value = window.scrollY * 0.7;
        dets.style.width = `${value}px`;
        dets.style.marginleft = `${value}px`;
    });
})


// Faq's
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}