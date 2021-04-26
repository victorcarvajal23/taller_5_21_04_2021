/* 3.	Desarrolle un algoritmo que permita determinar el 
área y volumen de un cilindro dado su radio {R) y
     altura (H). Formula: (VOL = π * R^2 + H), (AREA = 2 * π + R + H) */

let Radio,Altura;
const pi=3.1416;
while(true){
Radio=parseInt(prompt("ingrese radio"));
let valida=Number.isInteger(Radio);
     if (valida==true) {
     break 
     }
     else{
          alert("ingrese un valor valido")
     }
}
while(true){
Altura=parseInt(prompt("ingrese altura"));
let valida=Number.isInteger(Altura);
     if (valida==true) {
     break   
     }
     else{
          alert("ingrese un valor valido")
     }
}
function Volumen(p1,p2){
     let vol=pi*Math.pow(p1,2)*p2;
     return vol;
}
function Area(p1,p2){
     let ar=2*pi*p1*p2;
     return ar;
}
function AreaT(p1,p2){
     let art=(2*pi*p1*p2)+(2*pi*(Math.pow(p1,2)));
     return art;
}
console.log("Area lateral");
console.log(Area(Radio,Altura));
console.log("Area total");
console.log(AreaT(Radio,Altura));
console.log("Volumen");
console.log(Volumen(Radio,Altura));