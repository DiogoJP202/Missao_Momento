import menuHamburger from "./modules/menuHamburger.js";
import AltoContraste from "./modules/AltoContraste.js";

let contador = true;
const menu = document.querySelector("#menuH");

menu.addEventListener("click", e => contador = menuHamburger(contador, document.querySelectorAll(".linha"), document.querySelector("nav")));

let contador2 = true
const input =  document.querySelector(".switch input");

input.addEventListener("click", e => contador2 = AltoContraste(contador2));