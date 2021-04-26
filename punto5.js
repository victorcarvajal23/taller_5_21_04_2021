// Desarrolle un algoritmo para la empresa Constructora 
// Tecnovivir Casas C.A., que le permita calcular 
// e" imprimir la nómina para su cancelación a un 
// total de 50 obreros calificados a quienes debe
//  cancelar por horas trabajadas. La hora trabajada 
//  se pautó en 30.000 Bolívares
const hora=30000;
let Trabajador=new Array(5).fill("")
let pago=[]
let NominaTotal=0
for (let i = 0; i < Trabajador.length; i++) {
    Trabajador[i]=parseInt(prompt(`ingrese horas trabajadas por el trabajador ${i+1}`))
    let valida=Number.isInteger(Trabajador[i])
    if (valida==true) {
        pago[i]=Trabajador[i]*hora
        console.log(`el trabajador ${i+1} trabajo ${Trabajador[i]} horas y se gano ${pago[i]} Bolivares`)
        NominaTotal+=pago[i];

    }
    else{
        alert("ingrese un valor valido")
        i--
    }
}
console.log("nomina total = "+NominaTotal+" Bolivares");
