ocultar();
const textArea = document.querySelector(".texto-entrada");
const mensaje = document.querySelector(".texto-salida");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    if(mensaje.value == ""){
        ocultar();
    }
    else{
        mostrar();
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
    
}

function btDesencriptar(){
    const textoEncriptado = Desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    if(mensaje.value == ""){
        ocultar();
    }
    else{
        mostrar();
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}


function ocultar(){
    document.getElementById('boton-copiar').style.display = 'none';
    document.getElementById('mensaje1').style.display = 'block';
    document.getElementById('mensaje2').style.display = 'block';
    document.getElementById('muñeco').style.display = 'block';
}

function mostrar(){
    document.getElementById('boton-copiar').style.display = 'block';
    document.getElementById('mensaje1').style.display = 'none';
    document.getElementById('mensaje2').style.display = 'none';
    document.getElementById('muñeco').style.display = 'none';
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function Desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function copiarAlPortapapeles(){
    var contenido = document.querySelector("#texto-s");
    contenido.select();
    document.execCommand("copy");
}

