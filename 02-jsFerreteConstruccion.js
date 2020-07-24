/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno = parseFloat(document.getElementById("txtIdLargo").value); 
    let anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
    let rectangulo = (largoTerreno * anchoTerreno) * 3;

    alert(`La cantidad de alamabre a comprar es ${rectangulo} metros.`);

}
function Circulo () 
{    
  let radioTerreno = parseFloat(document.getElementById("txtIdRadio").value);  
  let pi = Math.PI;
  let areaCirculo = pi * (radioTerreno * radioTerreno)*3;

    alert(`La cantidad de alambre a comprar es ${areaCirculo.toFixed(3)} metros.`);
    
    

    
}
function Materiales () 
{
   let largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
   let anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
   let bolsasCemento = (largoTerreno * anchoTerreno) * 2;
   let bolsasCal = (largoTerreno * anchoTerreno) * 3;

   alert (`Para hacer el contrapiso se necesitan ${bolsasCemento} bolsas de cemento y ${bolsasCal} bolsas de cal.`);
}