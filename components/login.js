export const login = ()=> {
    
const formLogin = document.getElementById("form-login")
const inputEmail = document.getElementById("login-email")
const inputPass = document.getElementById("login-password")
const loginSubmit = document.getElementById("login-submit")
const loginError = document.getElementById("login-error")

formLogin.addEventListener("submit", (event)=>{
event.preventDefault()

if(!inputEmail.value || !inputPass.value){
    console.error("Remember to enter the correct data")
    return
}

const objUser = {
email: inputEmail.value,
password:inputPass.value,
}


const userSave = localStorage.getItem("usuarios")

if(!userSave){
    loginError.innerText = 'There is no user with that email'
    return
}

const arrayDeUser = JSON.parse(userSave)

const usuarioEncontrado = arrayDeUser.find(element => element.email === objUser.email && element.password === objUser.password)

console.log(usuarioEncontrado)
console.log(arrayDeUser)
console.log(objUser)


if(usuarioEncontrado){
    window.location.href = "./index.html"
	} else {
    loginError.innerText = "la pass o el email estan mal"
}
})
formToogle.reset()  
}

