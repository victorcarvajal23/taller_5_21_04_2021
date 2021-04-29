// Desarrolle un algoritmo que perma leer dos 
// números y ordenarlos de menor a mayor,si es el caso."
let Numero=new Array(5).fill("")
for (let i = 0; i < Numero.length; i++) {
    Numero[i]=parseInt(prompt(`ingrese numero ${i+1}`))
    let valida=Number.isInteger(Numero[i])
    if (valida==false) {
        alert("ingrese un valor valido")
        i--
    }
}
Numero.sort((a,b)=>a-b)
console.log(...Numero)
