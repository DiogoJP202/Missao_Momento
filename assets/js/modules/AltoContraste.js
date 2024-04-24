export default function(estado){
    const letrasVerdes = document.querySelectorAll(".letraVerde");
    const fundoVerde = document.querySelectorAll(".fundoVerde");
    const bordaVerde = document.querySelectorAll(".bordaVerde");
    const fundoPreto = document.querySelectorAll(".fundoPreto");
    const filtroCinza = document.querySelectorAll(".filtroCinza");
    const fundoCTA = document.querySelector("#CTA");

    if(estado === true){
        letrasVerdes.forEach(element => element.classList.add("lv"));
        fundoVerde.forEach(element => element.classList.add("fv"));
        bordaVerde.forEach(element => element.classList.add("bv"));
        fundoPreto.forEach(element => element.classList.add("fp"));
        filtroCinza.forEach(element => element.classList.add("fc"));
        fundoCTA.style.backgroundImage = "none";

        return false;
    } 

    letrasVerdes.forEach(element => element.classList.remove("lv"));
    fundoVerde.forEach(element => element.classList.remove("fv"));
    bordaVerde.forEach(element => element.classList.remove("bv"));
    fundoPreto.forEach(element => element.classList.remove("fp"));
    filtroCinza.forEach(element => element.classList.remove("fc"));
    fundoCTA.style.backgroundImage = "url(assets/images/FundoSegundarioFallout.jpg)";

    return true;
}