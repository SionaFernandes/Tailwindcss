let hambuger = document.getElementById("hambuger");
let hambugerdrop = document.getElementById("hambuger-drop");
let siteMenu = document.getElementById("site-menu");

hambuger.addEventListener("click", function () {
 hambugerdrop.classList.toggle("block");
 hambugerdrop.classList.toggle("hidden");
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    // adjust this value based on site structure and header image height
    siteMenu.classList.add("nav-sticky");
    // header.classList.add("pt-scroll");
  } else {
    siteMenu.classList.remove("nav-sticky");
    // header.classList.remove("pt-scroll");
  }
});
