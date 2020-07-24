/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let gradosFahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    let gradosCelcius = (gradosFahrenheit - 32) * 5/9;

    alert(`${gradosFahrenheit} Fahrenheit son ${gradosCelcius.toFixed(2)} Centrigrados.`);
    
	
}

function CentigradosFahrenheit () 
{
    let gradosCelcius = parseFloat(document.getElementById("txtIdTemperatura").value);
    let gradosFahrenheit =(gradosCelcius * 9/5) + 32;

    alert (`${gradosCelcius} Centrigrados son ${gradosFahrenheit} Fahrenheit.`);
    
}
