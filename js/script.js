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
   /*window.removeEventListener('scroll', scroll, true);*/

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

links.forEach(link => {
   link.addEventListener('click', function () {
      headerBurger.classList.remove('active');
      body.classList.remove('lock');
      divBlock.classList.remove('close__lock');
      navLinks.classList.remove('open');
      links.forEach(link => {
         link.classList.remove('fade');
      });
      header.classList.remove('out');
   });
}
)

/*Slider*/
//Item of slider
let sliderItem = document.querySelectorAll('.main__anime');
//Number of current slider
let current = 0;
//Time for delay
let time = 4000;
//Function which set interval
let timeId;
//Buttons of slider
let sliderBtn = document.querySelectorAll('.main__btn-item');

//New slider
//Change slider by clicking on the dots
sliderBtn.forEach(function (dot, indexOfdot) {
   //Listen event for dots
   dot.addEventListener('click', function () {
      //Stop autochange slider
      clearInterval(timeId);
      //Remove all backgrounds od buttons
      removeBtnBg();
      //Add to current dot class "current-color"
      dot.classList.add('current-color');
      //Index of the current item of slider equal to index of current dot
      current = indexOfdot;
      //Change slider
      changeSliderBtn(current);
      //Set interval for autoslide
      timeId = setInterval(autoChangeSlide, time);
   })
});

//Change slider function
let changeSliderBtn = function (current) {
   //Call the function to clear all styles of the item of slider
   removeSliderItemStyle();
   //Set current item the style which make this slide visible
   sliderItem[current].classList.add('current');
}

//Remove all button`s background 
let removeBtnBg = function () {
   sliderBtn.forEach(dot => {
      dot.classList.remove('current-color');
   })
}

//Remove current class from all slider's item
let removeSliderItemStyle = function () {
   sliderItem.forEach(item => {
      item.classList.remove('current');
   })
}

let autoChangeSlide = function () {
   //Remove all the styles of button of the slider
   removeBtnBg();
   //Remove all the styles of item of the slider
   removeSliderItemStyle();
   //Define the next current slider
   current++;
   //Check if current slider is not out of the range of the sliders
   if (current > sliderItem.length - 1) {
      //If so - set current number of slider from the start
      current = 0;
   }
   //Make current slider visible
   sliderItem[current].classList.add('current');
   //Make current button visible
   sliderBtn[current].classList.add('current-color');
}

//Stop autosliding then mouse on the slider or start agan 
sliderItem.forEach(item => {
   item.addEventListener('mouseenter', function () {
      //Clear interval
      clearInterval(timeId);
   })

   item.addEventListener('mouseleave', function () {
      //Set the interval for automatic start slides
      timeId = setInterval(autoChangeSlide, time);
   })

   //For mobile
   item.addEventListener('touchstart', function () {
      clearInterval(timeId);
   });
   item.addEventListener('touchend', function () {
      clearInterval(timeId);
      removeSliderItemStyle();
      removeBtnBg();
      current++;
      if (current > sliderItem.length - 1) {
         //If so - set current number of slider from the star
         current = 0;
      }
      sliderItem[current].classList.add('current');
      //Make current button visible
      sliderBtn[current].classList.add('current-color');
      timeId = setInterval(autoChangeSlide, time);

   })
})


//Start autochanging slider
timeId = setInterval(autoChangeSlide, time);
//Init slider
window.onload = timeId;

// //Start autoslider
// let autoChangeSlide = function () {
//    //Remove all bg color of slider's buttons
//    sliderBtn.forEach(elem => {
//       elem.classList.remove('current-color');
//    })
//    //Remove style of the first slide
//    sliderItem[current].classList.remove('current');
//    //Defind the number of the current slide after slip
//    current++;
//    //To see if curretn slide not out of the lenght of array of the slides
//    if (current > sliderItem.length - 1) {
//       //If so - set current number of slider from the star
//       current = 0;
//    }
//    //Show current slide
//    sliderItem[current].classList.add('current');
//    //Add bg collor for current button of slide
//    sliderBtn[current].classList.add('current-color');
// }

// //Set repetition for autoChangeSlide function
// timeId = setInterval(autoChangeSlide, time);

// //Stop slider when mouse on the slider
// sliderItem.forEach(item => {
//    //Add event of mouse on current slide to read it
//    item.addEventListener('mouseenter', function () {
//       //Clear interval
//       clearInterval(timeId);
//    })
//    //Add event when you leave the mouse frome the current slider
//    item.addEventListener('mouseleave', function () {
//       //Set the interval for automatic start slides
//       timeId = setInterval(autoChangeSlide, time);
//    })
// });

// sliderItem.forEach(function (item, index) {
//    item.addEventListener('touchstart', function () {
//       clearInterval(timeId);
//    });
//    item.addEventListener('touchend', function () {
//       clearInterval(timeId);
//       // sliderItem[index].classList.remove('current');
//       sliderItem.forEach(elem => {
//          elem.classList.remove('current');
//       })
//       index++;
//       if (index > sliderItem.length - 1) {
//          //If so - set current number of slider from the star
//          index = 0;
//       }
//       sliderItem[index].classList.add('current');
//    })
// })

// //Function which show next slider when you click on the one of the buttons
// sliderBtn.forEach(function (btn, index) {
//    //Add event for each button
//    btn.addEventListener('click', function () {
//       //Stop automatic slise
//       clearInterval(timeId);
//       //Remove all bg color of the buttons
//       sliderBtn.forEach(elem => {
//          elem.classList.remove('current-color');
//       })
//       //Add bg color for current button
//       btn.classList.add('current-color');
//       //Find the slide which has the same number as a button
//       current = index;
//       //Remove all bg color of the buttons
//       sliderItem.forEach(slider => {
//          slider.classList.remove('current');
//       })
//       //Show the slide which equal the number of button
//       sliderItem[current].classList.add('current');
//       //Add time interval for automatic slise
//       timeId = setInterval(autoChangeSlide, time);
//    })
// })
// //Run automatic slider
// window.onload = timeId;


//New Slider




let startPosition = 0;
let header = document.querySelector('.header');
let scrolled;
window.addEventListener('scroll', scroll);
function scroll() {
   scrolled = this.pageYOffset;
   if (scrolled > 80 && scrolled > startPosition) {
      header.classList.add('out');
   } else {
      header.classList.remove('out');
   }
   startPosition = scrolled;
}

// let scrollSl = 0;
// window.addEventListener('scroll', scrollSlider);
// function scrollSlider() {
//    scrollSl = this.pageYOffset;
//    if (scrollSl > 300) {
//       clearInterval(timeId);
//    }
//    if (scrollSl == 0) {
//       clearInterval(timeId);
//       timeId = setInterval(autoChangeSlide, time);
//    }
// }
