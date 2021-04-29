/* Desarrolle un algoritmo que realice la 
sumatoria de los números enteros comprendidos 
entre el 1 y el 1O, es decir, 1 + 2 + 3 + .... + 1O." */

// let vector= new Array(10).fill("")
// let suma=0
// for (let i = 0; i < vector.length; i++) {
//     vector[i]=(i+1) 
//     suma+=vector[i]      
// }
// console.log(vector)
// console.log("suma "+suma)
let vector= new Array(10).fill("");
function suma(p1){
    let suma=0;
for (let i = 0; i < p1.length; i++) {
    p1[i]=(i+1) 
    suma+=p1[i]      
}
return suma;
}
console.log(vector)
console.log(suma(vector))

