function accion(){
    var ancla = document.getElementsByClassName("nav_item");
    for(var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle("invisible");
    }
}