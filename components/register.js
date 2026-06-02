export const register = ()=>{
    const botonLoging = document.getElementById("boton-loguear")
    const formToogle = document.getElementById("form-register")//form hidden
    const inputName = document.getElementById("input-name")
    const inputLastName = document.getElementById("input-last-name")
    const inputEmail = document.getElementById("input-email")
    const inputPass = document.getElementById("input-password")
    const inputSumbit = document.getElementById("input-sumbit")
    
formToogle.addEventListener("submit", (event)=>{
    event.preventDefault()
    //I bring out the default event of the submit
    
    //validacion de inputs vacios
    if(!inputName.value || !inputLastName.value || !inputEmail.value || !inputPass.value){
        console.error("Todos los input deben estar escritos")
        return
    }
    
    //capturo los valores y los paso a obj
    const user = {
        name: inputName.value,
        LastName: inputLastName.value,
        email:inputEmail.value,
        password: inputPass.value
    }
    
    console.log(user)
    
    const userString = JSON.stringify(user)//convierto el obj en string
    
    localStorage.setItem("usuario", userString)
    
    formToogle.reset()  
})
}