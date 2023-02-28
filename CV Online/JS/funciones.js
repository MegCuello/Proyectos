function mostrar_ocultar(control){
    let listadeclase = document.getElementById(control).classList; 
    if (listadeclase.length ==1 ) {
        listadeclase.remove("ocultar"); 
    }
    else {
        listadeclase.add("ocultar");
    }
}

document.getElementById('email').onclick =function() {
    mostrar_ocultar("email-texto");
}

document.getElementById('direccion').onclick =function() {
    mostrar_ocultar("direccion-texto");
}

document.getElementById('telefono').onclick =function() {
    mostrar_ocultar("telefono-texto");
}

document.getElementById('nacimiento').onclick =function() {
    mostrar_ocultar("nacimiento-texto");
}