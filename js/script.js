const tabs = document.querySelectorAll('.tabs__link');

// Array.from(tabs).forEach(item => {
//    item.addEventListener('click', function () {
//       item.classList.remove('active__tab');
//    })
//    item.addEventListener('click', function (e) {
//       e.target.classList.add('active__tab');
//    })
// }
// )
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


