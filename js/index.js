// class Applications {
//   constructor() {
//     this.createConections();
//     // this.setPopularSwiper();
//   }

//   createConections() {
//     console.log(`

//             **********************
//              *******************
//               ****************
//                ************
//                 **********
//                  *******
//                   *****
//                    ****
//                    ***
//                     **
//                     *
//                 index.js Loded

//         `);
//   }

//   setPopularSwiper() {
//     var swiper = new Swiper(".swiper-categories", {
//       slidesPerView: "auto",
//       spaceBetween: 0,
//       slideToClickedSlide: true,
//       direction: "horizontal",
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });
//   }
// }

// const app = new Applications();

const hamburgerMenu = document.querySelector(".hamburger-menu");
const noGutters = document.querySelector(".no-gutters");
const sidebar = document.querySelector(".sidebar");
const homePart = document.querySelector(".home-part");
const footerTabs = document.querySelector(".footer-tabs");
const searchBarLayat = document.querySelector(".search-bar-layat");
const bottomLayat = document.querySelector(".bottom-layat");

noGutters.addEventListener("click", (e) => {
  sidebar.classList.remove("sidemenu-open");
  homePart.classList.remove("active-home-part");
  footerTabs.classList.remove("footer-tabs-hiddein");
});

hamburgerMenu.addEventListener("click", (e) => {
  sidebar.classList.add("sidemenu-open");
  homePart.classList.add("active-home-part");
  footerTabs.classList.add("footer-tabs-hiddein");
});
homePart.addEventListener("click", (e) => {
  if (e.target.classList.contains("hamburger-menu")) return;
  sidebar?.classList?.remove("sidemenu-open");
  homePart?.classList?.remove("active-home-part");
  footerTabs?.classList?.remove("footer-tabs-hiddein");
});

function set_order(event) {
  const parent = event.parentNode.parentNode.parentNode.parentNode;
  parent.classList.add("active-cart");
}

function setSearchBarLayat() {
  searchBarLayat.classList.add("search-bar-layat-active");
  bottomLayat.classList.add("bottom-layat-actives");
}

function removeSearchBar() {
  searchBarLayat.classList.remove("search-bar-layat-active");
  bottomLayat.classList.remove("bottom-layat-actives");
}

// bottomLayat.addEventListener("")
