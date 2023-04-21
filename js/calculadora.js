function calcular(){
    if(validarFormulario()){
        var operacion = document.getElementById("ddlOperacion").value;
        var resultado = calcularSegunOperacion(operacion);
        
        document.getElementById("txtResultado").value = resultado;
    }
}

function validarFormulario(){
    var valido = true;
    var valorUno = document.getElementById("txtValorUno");
    var valorDos = document.getElementById("txtValorDos");

    if(valorUno.value == ""){
        alert("Favor ingresar un número al texto Valor 1");
        valorUno.focus();
        valido = false;
        return valido;
    }
    
    if(valorDos.value == ""){
        alert("Favor ingresar un número al texto Valor 2");
        valorDos.focus();
        valido = false;
        return valido;
    }

    return valido;
}

function calcularSegunOperacion(operacionAritmetica){
    var numeroUno = parseInt(document.getElementById("txtValorUno").value);
    var numeroDos = parseInt(document.getElementById("txtValorDos").value);
    var resultado = 0;

    switch(operacionAritmetica){
        case '+':
            resultado = numeroUno + numeroDos;
            break;
        case '-':
            resultado = numeroUno - numeroDos;
            break;
        case '/':
            resultado = numeroUno / numeroDos;
            break;
        case '*':
            resultado = numeroUno * numeroDos;
            break;
    }
    return Math.round(resultado * 100)/100;
}