function operacion(tipo){
    var lblContador = document.getElementById("lblContador");
    var currentSize = parseInt(lblContador.style.fontSize);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    if(tipo == '+'){
        currentSize = currentSize + 1;
        lblContador.style.color = "#"+randomColor;
    } else {
        currentSize = currentSize - 1;
        lblContador.style.color = "#"+randomGreyHex();
    }
    lblContador.innerText = currentSize;
    lblContador.style.fontSize = currentSize + "px";
}

function randomGreyHex() {
    var v = (Math.random()*(256)|0).toString(16);
    return v + v + v;
  }
