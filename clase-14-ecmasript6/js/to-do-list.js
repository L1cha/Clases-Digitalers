let tareas = [
    { id: 1, nombre: "Practicar JS", autor: "Laura", done: false },
    { id: 2, nombre: "Hacer el TP 2", autor: "Matias", done: false },
    { id: 3, nombre: "Ir al GYM", autor: "Franco", done: false },
    { id: 4, nombre: "Leer", autor: "Deborah", done: false }
];

//Forma 1
/*function cargarPagina{
    //..
}
window.onload = cargarPagina;*/

//Forma 2
/*const cargarPagina = () =>{
    //..
}
window.onload = cargarPagina;*/

//Forma 3
//alert(document.getElementById("listaTareas")); //<<NULL  todavia no existe la listaTareas
/*window.onload = function(){
    alert("se cargo la pagina");
    alert(document.getElementById("listaTareas")); //Ahora existe el elemento
}*/

//Forma 4
/*window.onload = () =>{
    alert("se cargo la pagina");
    alert(document.getElementById("listaTareas")); //Ahora existe el elemento      
}*/

//Forma 5
/*window.addEventListener("load", function(){
    alert("se cargo la pagina");
    alert(document.getElementById("listaTareas")); //Ahora existe el elemento
})*/

function agregarTarea(nombre) {
    const dataList = document.getElementById("listaTareas");
    let li = document.createElement("li");
    li.innerText = nombre;
    li.className = "list-group-item";

    let btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "&#128465;&#65039;";
    btnEliminar.className = "btn btn-danger float-end";
    btnEliminar.addEventListener("click", (evt)=>{
        if (confirm("Desea eliminar el elemento")){
            let sender = evt.target;
            let liContenedor = sender.parentElement;
            dataList.removeChild(liContenedor);
        }
    })
    li.appendChild(btnEliminar);

    dataList.appendChild(li);
}

//Forma 6
window.addEventListener("load", () => {


    let btnAgregarTarea = document.getElementById("btnAgregarTarea");
    //btnAgregarTarea.onclick= ..
    btnAgregarTarea.addEventListener("click", () => {
        let txtTareaNueva = document.querySelector("#txtTareaNueva");
        /*if (txtTareaNueva.value) {
            agregarTarea(txtTareaNueva.value);
        }*/
        txtTareaNueva.value && agregarTarea(txtTareaNueva.value);
        txtTareaNueva.value = "";
    })


    //Cargar la lista a patir del jso
    for (tarea of tareas) {
        agregarTarea(tarea.nombre)
    }
});