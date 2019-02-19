// Your code goes here

// mouseover

const mouse = document.querySelector(".btn");
mouse.addEventListener('mouseover', function(event) {
  console.log(`mouse`);
  event.stopPropagation();
})

// keydown

const firstName = document.querySelector('.btn');
firstName.addEventListener('keydown', function(event) {
  console.log(`This is a keydown: ${event.code}`)
})

// wheel

const wheel = document.querySelector(".intro");
wheel.addEventListener('wheel', () => {
wheel.style.backgroundColor = 'red';
});

// drag/drop

const drag = document.querySelector(".nav-link");
drag.addEventListener('dragstart', function (dragStart){
    console.log('start')
});

// load

window.addEventListener('load', function(event){
 console.log('all resources finished loading!')
});

// focus

const focus = document.querySelector(".btn");
focus.addEventListener('mouseover', function(event) {
  console.log(`mouse`);
  event.stopPropagation();
})

// resize

const nav = document.querySelector('.content-pick');
window.addEventListener('resize', () => {
    nav.classList.toggle('large');
    console.log('bigger!')
});


// scroll

const scroll = document.querySelector(".btn");
scroll.addEventListener('mouseover', function(event) {
  console.log(`mouse`);
  event.stopPropagation();
})

// click 

const click = document.querySelector(".btn");
click.addEventListener('click', function(event) {
  console.log(`clicked!`);
  event.stopPropagation();
})


// dbclick

const card = document.querySelector('.content-destination');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});