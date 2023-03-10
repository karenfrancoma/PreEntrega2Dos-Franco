//Objeto

class Ticket {
  constructor(locacion, precio) {
    this.locacion = locacion;
    this.precio = parseInt(precio);
  }
}

//Arrays

const tickets = [
  new Ticket("Norte", 100),
  new Ticket("Oriental", 200),
  new Ticket("Occidental", 400),
  new Ticket("VIP", 900),
];

console.log(tickets);


let comprar = true;

while (comprar) {

    let cantidadTickets = parseInt(prompt('Ingresa la cantidad de tickets que deseas: \n1 ticket \n2 tickets \nSi no quieres comprar, ingresa x para finalizar'));

    if (cantidadTickets.toUpperCase() == 'X') {
        comprar = false;
        break;
    }

    let cantidadMax = 2;
    let cantidadMin = 1;

    switch (cantidadTickets) {
        case '1':
            let multiplicacion = (a,b) => a * b;
            let total = multiplicacion(cantidadMax, tickets[0]);           
            break;
    
        default:
            break;
    }

}

/* //Conditional

let cantidadTickets = parseInt(
  prompt("Ingresa la cantidad de tickets que deseas. Cantidad máxima: 2")
);

let cantidadMax = 2;
let cantidadMin = 1;

if (cantidadTickets == cantidadMax) {
  alert("Elige tu locación");
} else if (cantidadTickets == cantidadMin) {
  alert("Elige tu locación");
} else {
  alert("Opción invalida");
}

//Functio */ns


