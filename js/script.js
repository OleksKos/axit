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
