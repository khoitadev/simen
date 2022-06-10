const searchBtn = document.querySelector(".header-navbar__search");
const searchHover = document.querySelector(".header-navbar__search-insert");
const navBefore = document.querySelector(".header-navbar__before");
const navAfter = document.querySelector(".header-navbar__after");
const searchInput = document.querySelector(".header-navbar__search-input");
const navMenuBtn = document.querySelector(".header-navbar__menu");
const navMenuOvelay = document.querySelector(".header__menu-ovelay");
const navMenuOvelayList = document.querySelector(".header__menu-ovelay-list");



var searchInputon = function () {
  navBefore.style.display = "none";
  navAfter.style.display = "none";
  searchHover.style.display = "flex";
};
var searchInputoff = function () {
  searchHover.style.display = "none";
  navBefore.style.display = "inline-flex";
  navAfter.style.display = "flex";
};
searchBtn.onmouseover = searchInputon;
searchInput.onmouseout = function () {
  var isSearchInput = false;
  searchInput.onfocus = function () {
    isSearchInput = true;
  };
  if (isSearchInput) {
    searchInput.onblur = searchInputoff;
  } else {
    searchInputoff();
  }
};

navMenuBtn.addEventListener("click",function() {
  navMenuOvelay.classList.add('open');
  
})
navMenuOvelay.addEventListener("click",function() {
  navMenuOvelay.classList.remove('open');
  
})
navMenuOvelayList.addEventListener("click",function(event) {
  event.stopPropagation()
})
