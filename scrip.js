const campo_texto=document.querySelector(".text-area");
const campo_mensaje=document.querySelector(".mensaje");

function btnEncriptar(){
const texto=encriptar(campo_texto.value)
campo_mensaje.value=texto;
campo_texto.value=" ";
campo_mensaje.style.backgroundImage="none"
}
function encriptar(stringEnciptada){
let matrizFuncion=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
stringEnciptada=stringEnciptada.toLowerCase();

for (let i = 0; i < matrizFuncion.length; i++) {
    if(stringEnciptada.includes(matrizFuncion[i][0])){
        stringEnciptada=stringEnciptada.replaceAll(matrizFuncion[i][0],matrizFuncion[i][1])
    }
}
return stringEnciptada;
}
function btnDesencriptar(){
    const texto=desencriptar(campo_texto.value)
    campo_mensaje.value=texto;
    campo_texto.value=" ";
    
    }

function desencriptar(stringDesencriptada){
    let matrizFuncion=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();
    
    for (let i = 0; i < matrizFuncion.length; i++) {
        if(stringDesencriptada.includes(matrizFuncion[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizFuncion[i][1],matrizFuncion[i][0])
        }
    }
    return stringDesencriptada;
    }
    