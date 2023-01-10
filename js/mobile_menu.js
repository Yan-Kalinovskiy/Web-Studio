
(() => {
  const refs = {
    openMenuBtn: document.querySelector(".js-open-menu"),
    closeMenuBtn: document.querySelector(".js-close-menu"),
    menu: document.querySelector(".js-menu-container"),
    body: document.querySelector("body"),
    menuList: document.querySelector(".navigation__items")
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.menuList.addEventListener("click", removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }

  function removeMenu() {
    refs.menu.classList.add("is-hidden");
    refs.body.classList.remove("no-scroll");
  }
})();