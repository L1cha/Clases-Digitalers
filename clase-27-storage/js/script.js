
//Con sessionStorage
/*.addEventListener("load",()=> {
    let inputs = document.querySelectorAll("input");
    //Recorrer los inputs
    inputs.forEach((input) => {
        input.value = sessionStorage.getItem(input.id)
        //Nos vamos a suscribir al evento keyup de cada input
        input.addEventListener("keyup", ()=> {
            sessionStorage.setItem(input.id, input.value)
        })
    })
}) */

//Con localStorage
window.addEventListener("load",()=> {
    let inputs = document.querySelectorAll("input");
    //Recorrer los inputs
    inputs.forEach((input) => {
        input.value = localStorage.getItem(input.id)
        //Nos vamos a suscribir al evento keyup de cada input
        input.addEventListener("keyup", ()=> {
            localStorage.setItem(input.id, input.value)
        })
    })
}) 