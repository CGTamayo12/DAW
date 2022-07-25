    function precios(){

        let objetos = [
            []
        ]
        let nom = prompt("Ingrese el nombre del producto");
        objetos[0][0] = nom;

        let precio = prompt("Ingrese el precio del producto");
        objetos[0][1] = precio;

        with (document) {
            write("<table><tr><td>Nombre</td><td>Precio</td></tr></table>");
        }
    }
    window.onload = precios;