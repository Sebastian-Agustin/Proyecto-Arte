export const inputSearch = ()=>{
    const input = document.getElementById("input-search")
    const array = [{name:'pepe'}]
    
    input.addEventListener("input", ()=>{
        let answer = array.filter( element => element.name.toLowerCase().includes(input.value.toLowerCase()))
        .map(element => element.name)
        .join(". ")
        console.log(answer)
    })
    
    
}