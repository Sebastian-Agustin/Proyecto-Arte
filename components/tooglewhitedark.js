export const toogleDayWhite = ()=>{
    let eventClick = document.getElementById("boton-dia-noche")
    let bodyColor = document.getElementById("body")
    
    eventClick.addEventListener("click", ()=>{
    bodyColor.classList.toggle("dark")//adds a class if the class does not exist
        //Saca la clase si existe
    })
}