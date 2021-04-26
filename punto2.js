/* 2.	Determinar la hipotenusa de un triángulo rectángulo conocidas 
las longitudes de sus dos catetos. Desarrolle el algoritmo 
correspondiente. Formula: (HIP = √CATa + CATb) */
let CatetoAdyacente,CatetoOpuesto;
while(true){
CatetoOpuesto=parseInt(prompt("ingrese cateto opuesto"));
let valida=Number.isInteger(CatetoOpuesto);
    if (valida==true) {
    break 
    }
    else{
        alert("ingrese un valor valido")
    }
}
while(true){
CatetoAdyacente=parseInt(prompt("ingrese cateto adyacente"));
let valida=Number.isInteger(CatetoAdyacente);
    if (valida==true) {
     break   
    }
    else{
        alert("ingrese un valor valido")
    }
}
function hipotenusa(p1,p2){
    let resultado=Math.sqrt(p1,2)+Math.sqrt(p2,2)
    return resultado;
}
console.log(hipotenusa(CatetoOpuesto,CatetoAdyacente))
