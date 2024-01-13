// const header= document.querySelector("header")
// Window.addEventListener("scroll",function(){
//     header.classList.toggle("sticky",this.Window.scrolly > 0);
// })


window.onscroll = function() {myFunction()};

var navbar = document.getElementsByTagName('header')[0];
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// // swiper js
// const swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });




// res nav js

let menu =document.querySelector('#menu-icon');
let navmenu =document.querySelector('.navmenu');

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navmenu.classList.toggle('open')
}



let count =0;
const counter = document.getElementById(counter);
document.getElementById('add anim').addEventListener('click', event =>{
  const cl = counter.classList;
  const c ='anime';
  count++;
  counter.innerText = count;
  cl.remove(c, cl.contains(c));
  setTimeout(() =>
    counter.classList.add('anime')
    ,1)


})