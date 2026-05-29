export const register = ()=>{
    const botonLoging = document.getElementById("boton-loguear")
    const formToogle = document.getElementById("form-register")//form hidden
    const inputName = document.getElementById("input-name")
    const inputLastName = document.getElementById("input-last-name")
    const inputEmail = document.getElementById("input-email")
    const inputPass = document.getElementById("input-password")
    const inputSumbit = document.getElementById("input-sumbit")
    
    botonLoging.addEventListener("click",()=>{
        formToogle.classList.toggle("hidden")  
    })


}