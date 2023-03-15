
//FUNCIÓN CONSTRUCTORA
class Ticket {
  constructor(locacion, valor) {
    this.locacion = locacion;
    this.valor = parseInt(valor);
  }
}

// Arrays
const tickets = [
  new Ticket("Norte", 100),
  new Ticket("Oriental", 200),
  new Ticket("Occidental", 400),
  new Ticket("VIP", 900),
];

alert('Bienvenido/a. Aquí puedes adquirir tus tickets para Music of the Spheres World Tour');

// FUNCTIONS
let multiplicacion = (a, b) => a * b;

//HIGHER-ORDER FUNCTION
const ticketList = tickets.reduce((acc, ticket) => `${acc}\n${ticket.locacion}: $${ticket.valor}`, '');
alert(`Tickets disponibles:${ticketList}`);


//BUCLE DO-WHILE

let opcion;
do {
  opcion = parseInt(prompt("¿Quieres comprar tickets? \n1 - Sí \n2 - No"));

  if (opcion === 1) {

    let locacion = parseInt(
      prompt(
        "Elige tu locación: \n1 - Norte \n2 - Oriental \n3 - Occidental \n4 - VIP"
      )
    );
    let cantidadTickets = parseInt(
      prompt(
        "Ingresa la cantidad de tickets que deseas: \n1 ticket \n2 tickets"
      )
    );

    function comprar(locacion, cantidadTickets) {
      let precio;

      switch (locacion) {
        case 1:
          precio = tickets[0].valor;
          break;
        case 2:
          precio = tickets[1].valor;
          break;
        case 3:
          precio = tickets[2].valor;
          break;
        case 4:
          precio = tickets[3].valor;
          break;
        default:
          return 0;
      }

      let total = multiplicacion(precio, cantidadTickets);
      return total;
    }

    let totalCompra = comprar(locacion, cantidadTickets);
    alert("El total de tu compra es: $" + totalCompra);

    alert("Gracias por tu compra");
    break;
  }


} while (opcion !== 2);

if (opcion === 2) {
  alert('Fin del proceso')
}

// Array with ticket values
const ticketValues = tickets.map((ticket) => ticket.valor);

// Calculate total value of tickets using reduce()
const totalTicketValue = ticketValues.reduce((acc, curr) => acc + curr, 0);

// Display total value of tickets
console.log(`The total value of all tickets is: $${totalTicketValue}`);

