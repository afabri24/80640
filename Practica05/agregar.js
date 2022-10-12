// var todo=document.getElementById("todo").value
function leer() {
    return document.getElementById("todo").value;
}
function agregar() {
    nodo= document.createElement("li");
    // texto=document.createTextNode("Hola");
    texto=document.createTextNode(leer());
    console.log(texto);
    nodo.appendChild(texto);
    nodo.setAttribute("id",leer());
    document.getElementById("lista").appendChild(nodo)
}
function buscareach() {
    listaTodo=document.getElementsByTagName("li");
    var quebusca=leer();
    console.log(quebusca);
    var arr=[].slice.call(listaTodo);
    arr.forEach(listaTodo => {
        if(quebusca==listaTodo.textContent){
            listaTodo.style.color="green";
            console.log("ya")
        }
        else{
            listaTodo.style.color="red";
            console.log("no")
        }
    });
    
}
function buscarfor() {
    listaTodo=document.getElementsByTagName("li");
    for (let i = 0; i < listaTodo.length; i++) {
        const tarea = listaTodo[i];
        if(leer()==tarea.textContent){
            console.log("existe")
        }
    }
}
function buscarForOf() {
    listaTodo=document.getElementsByTagName("li");
    for (const tarea of listaTodo) {
        if (leer()==tarea.textContent){
            console.log("ya existe");
        }
    }
}
function buscarForIn() {
    listaTodo=document.getElementsByTagName("li");
    for (const tarea in listaTodo) {
        if (Object.hasOwnProperty.call(listaTodo, tarea)) {
            // if (leer()==tarea.childNodes[0]){
                console.log(listaTodo[tarea]);
            // }  
        }
    }
}