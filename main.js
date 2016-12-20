var horas, pago, sueldo_neto;

horas = prompt("Por favor, ingresar las horas trabajadas");
pago = prompt("Por favor, ingresar el pago");

sueldo_neto = parseFloat(horas) * parseFloat(pago);

alert(sueldo_neto);