function init(){
    var descuentos, cumpleañero, vip, min, max, op,Ftotal;
    var name = prompt("¿Cual es su nombre?")
    var pago = parseFloat(prompt("¿Cuanto es el monto a cancelar por sus productos?"));
    if (pago<20 && pago>=0){
       document.write("<h2>80% a 100% de descuento</h2>");
       min = 80;
        max = 99;
        descuentos = Math.random()*(max-min)+min;
        document.write("<table><tr><th>Nombre</th><th>Total</th><th>Descuento</th><th>N Total</th></tr>");
        op=descuentos/100;
        Ftotal = op*pago;
        document.write("<tr><td>"+name+"</td><td>"+pago+"</td><td>"+descuentos.toFixed(0)+"<td>"+pago.toFixed(0)+"</td></td></tr></table>");
      
    }else if (pago<=100 && pago>=20){
        document.write("<h2> 60% a 80% de descuento</h2>");
        min = 60;
        max = 79;
        descuentos = Math.random()*(max-min)+min;
        document.write("<table><tr><th>Nombre</th><th>Total</th><th>Descuento</th><th>N Total</th></tr>");
        op=descuentos/100;
        Ftotal = op*pago;
        document.write("<tr><td>"+name+"</td><td>"+pago+"</td><td>"+descuentos.toFixed(0)+"<td>"+pago.toFixed(0)+"</td></td></tr></table>");
    
    }else if (pago>100){        
        document.write("<h3> -60% de descuento</h3>");
        min = 0;
        max = 60;
        descuentos = Math.random()*(max-min)+min;
        document.write("<table><tr><th>Nombre</th><th>Total</th><th>Descuento</th><th>N Total</th></tr>");
        op=descuentos/100;
        Ftotal = op*pago;
        document.write("<tr><td>"+name+"</td><td>"+pago+"</td><td>"+descuentos.toFixed(0)+"<td>"+pago.toFixed(0)+"</td></td></tr></table>");
    }else {
        alert("Digite una cantidad valida");
    }

    }



window.onload = init();