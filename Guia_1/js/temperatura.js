function grados(){
    var celsius = prompt('Introduzca la cantidad de grados en celsius:','');
    var body = document.getElementById('body');
    body.innerHTML = "<p class=\"letterpress\">" + celsius + " " +
    " = " + ((celsius*1.8)+32) + " " +"fahrenheit" + "</p>\n";
}
window.onload = grados;