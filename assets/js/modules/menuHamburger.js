export default function menuHamburger(estado, menu, nav) {
    if (estado === true) {
        menu[0].style.rotate = "45deg";
        menu[0].style.top = "15px";
        menu[1].style.opacity = "0";
        menu[2].style.rotate = "135deg";
        menu[2].style.top = "-15px";
        nav.style.display = "flex";
        return estado = false;
    }

    menu[0].style.rotate = "0deg";
    menu[0].style.top = "0px";
    menu[1].style.opacity = "1";
    menu[2].style.rotate = "0deg";
    menu[2].style.top = "0px";
    nav.style.display = "none";
    return estado = true;
}
