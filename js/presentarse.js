function saludar(){
    var mensaje = document.getElementById("lblMensaje");
    var nombre = document.getElementById("txtNombre");

    if(validar()){
        mensaje.style.color = "black";
        mensaje.style.fontWeight = "100";
        if(esPar(nombre.value)){
            mensaje.style.color = "blue";
        } else {
            mensaje.style.color = "green";
        }

        mensaje.innerText = "Hola, me llamo " + nombre.value + " [" + nombre.value.length + " caracteres]";
    }
}

function validar(){

    var nombre = document.getElementById("txtNombre");
    var mensaje = document.getElementById("lblMensaje");
    
    if(nombre.value == "" || nombre.value.trim().length == 0){
        mensaje.innerText = "[!] Debes ingresar tu nombre antes de saludar";
        mensaje.style.color = "red";
        mensaje.style.fontWeight = "900";
        return false;
    }

    return true;
}

function esPar(nombre){
    if(nombre.length % 2 == 0){
        return true;
    } else {
        return false;
    }
}
