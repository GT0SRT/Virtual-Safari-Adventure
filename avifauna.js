// loader js start
setTimeout(function(){
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('#page').style.display = 'block';
},800)

// on scroll animation
let lane = document.querySelectorAll('.brdr');
lane.forEach(function(dets){
    window.addEventListener('scroll', function() {
        var value = window.scrollY * 0.7;
        dets.style.width = `${value}px`;
        dets.style.marginleft = `${value}px`;
    });
})

// main animation
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})