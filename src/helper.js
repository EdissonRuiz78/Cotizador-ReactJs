//Obtenemos la diferencia de años
export function obtenerDiferencia(year) {
  const actual = new Date().getFullYear();
  return actual - year;
}

//Calcula el valor a pagar segun marca
export function precioMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
}

//Calcula el aumento segun el tipo de plan
export function precioPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

export function primerMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
