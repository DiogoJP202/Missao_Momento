import menuHamburger from "./modules/menuHamburger.js";

let contador = true;
const menu = document.querySelector("#menuH");

menu.addEventListener("click", e => contador = menuHamburger(contador, document.querySelectorAll(".linha"), document.querySelector("nav")));


