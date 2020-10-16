const tabs = document.querySelectorAll('.tabs__link');
let currentTab;
const tabsBody = document.querySelectorAll('.tabs__section');

Array.from(tabs).forEach(element => {
   element.addEventListener('click', function (e) {

      Array.from(tabs).forEach(tab => {
         tab.classList.remove('active__tab');
      })

      e.target.classList.add('active__tab');
      currentTab = e.target;
      console.log(currentTab);
      let nameAtr = currentTab.getAttribute('id');
      // console.log(nameAtr);

      Array.from(tabsBody).forEach(body => {
         body.classList.add('hide');
      })

      if (nameAtr === 'tab-A') {
         let cur = document.getElementById('A');
         console.log(cur);
         cur.classList.remove('hide');
         cur.classList.add('show');
      }
      if (nameAtr === 'tab-B') {
         let cur = document.getElementById('B');
         console.log(cur);
         cur.classList.remove('hide');
         cur.classList.add('show');
      }
      if (nameAtr === 'tab-C') {
         let cur = document.getElementById('C');
         console.log(cur);
         cur.classList.remove('hide');
         cur.classList.add('show');
      }

   })
})

const divBlock = document.querySelector('.div__lock');
const navLinks = document.querySelector('.main-nav');
const links = document.querySelectorAll('.main-nav__item');
const body = document.querySelector('body');
const headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', function () {
   headerBurger.classList.toggle('active');
   navLinks.classList.toggle('open');
   links.forEach(link => {
      link.classList.toggle('fade');
   })
   body.classList.toggle('lock');
   divBlock.classList.toggle('close__lock');
})

let startPosition = 0;
let header = document.querySelector('.header');
let scrolled;
window.addEventListener('scroll', function () {
   scrolled = this.pageYOffset;
   if (scrolled > 80 && scrolled > startPosition) {
      header.classList.add('out');
   } else {
      header.classList.remove('out');
   }
   startPosition = scrolled;
})


divBlock.addEventListener('click', function () {
   headerBurger.classList.remove('active');
   body.classList.remove('lock');
   divBlock.classList.remove('close__lock');
   navLinks.classList.remove('open');
   links.forEach(link => {
      link.classList.remove('fade');
   })


})

/*Slider*/
let btnSlider = document.querySelectorAll('.main__slider-button');
console.log(btnSlider);
let currentBtn = 0;
let sliderComponemt = document.querySelectorAll('.main__block');
console.log(sliderComponemt);

function initSlider(current) {
   sliderComponemt.forEach((element) => {
      element.classList.remove('current');
   })
   sliderComponemt[current].classList.add('current');

}

// btnSlider.forEach(element => {
//    element.addEventListener('click', function (e) {
//       current = e.target;
//       console.log(current);
//    })
// })

let newBtn = Array.from(btnSlider);
for (let index = 0; index < newBtn.length; index++) {
   const element = newBtn[index];

   element.addEventListener('click', function () {
      current = index;
      console.log(current);
      initSlider(current);
   })
}

/*Background Slider 1st variant*/
let i = 0;
let time = 5000;
let current = 0;

function changeSlide() {
   sliderComponemt.forEach((element) => {
      element.classList.remove('current');
   })
   /*initSlider(current);*/
   sliderComponemt[i].classList.add('current');
   if (i < newBtn.length - 1) {
      i++;
   } else {
      i = 0;
   }
   setTimeout('changeSlide()', time);
}
window.onload = changeSlide;


