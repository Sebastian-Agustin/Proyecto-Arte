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
    
    //to store something in memory in the localstorage, set item is used, which is key and value.
    //That's why user, the problem here is if every user who logs in registers, local can't make a difference = PEPE de Juan
    // because you're always going to use the same key which is "users". Therefore, it would be best to save an array of objects with user names
    const usuariosGuardados = localStorage.getItem("usuarios")
    
    // Si hay un key usuarios me devuelve un string y se parsea. Sino existe se crea un array nuevo y se pushea el nuevo valor
    console.log(usuariosGuardados)
    const arrayUsuarios=  usuariosGuardados? JSON.parse(usuariosGuardados): []
    
    arrayUsuarios.push(user)
    //here I am pusheando the object with the user data
    localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios))
    formToogle.reset()  
})
}