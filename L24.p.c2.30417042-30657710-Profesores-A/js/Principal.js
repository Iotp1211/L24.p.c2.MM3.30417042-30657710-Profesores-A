import Cl_Fijo from "./Cl_Fijo.js";


let fijo1 = new Cl_Fijo("Carlos", 25, 100, 125);
let fijo2 = new Cl_Fijo("Carolina", 40, 90, 130);


let salida = document.getElementById("salida");


salida.innerHTML = `
<br> Nombre del profesor Fijo : ${fijo1.nombre}
<br> Monto del bono : ${fijo1.bono}$
<br> Monto del sueldo: ${fijo1.sueldo}$
<br> Ingreso total del profesor : ${fijo1.nombre} : ${fijo1.calcularIngresoTotal()}$
<br>
<br> Nombre del profesor Fijo : ${fijo2.nombre}
<br> Monto del bono : ${fijo2.bono}$
<br> Monto del sueldo: ${fijo2.sueldo}$
<br> Ingreso total del profesor : ${fijo2.nombre} : ${fijo2.calcularIngresoTotal()}$
`;