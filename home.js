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