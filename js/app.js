// Jugador oculto al azar
const random = Math.floor(Math.random() * jugadores.length);
console.log(random, jugadores[random]);
let i = '';
var intento = 1;

// Agrego todos los datalist al input de search
var j = '';
for (let i=0; i<jugadores.length; i++) {
  j += '<option value="'+jugadores[i].nombre+'" onclick="buscarJugador('+jugadores[i].nombre+')"></option>';
}
$(j).appendTo('#opcionesJ');

// Funcion para buscar jugador en el array de jugadores
function buscarJugador(nombre) {
  intento++;
  verificarIntento();
  var match = jugadores.filter(function(jugador) {
    return jugador.nombre === nombre;
  });
  console.log(match);
  $("#intentos").removeClass("hide");
  imprimirJugador(match);
}

// Funcion para imprimir el jugador en la variable y comparo con el jugador a adivinar
function imprimirJugador(jugador) {
  // Verificar si es el jugador oculto
  if (jugador[0].nombre == jugadores[random].nombre) {
    imprimirJugadorOculto("verde", jugador);
    alert("Ganaste! El jugador oculto es "+jugadores[random].nombre);
  } else {
    comparoJugadores(jugador[0], jugadores[random]);
  }
  $(i).appendTo("#intentos");
}

function verificarIntento() {
  if (intento > 6) {
    $("#buscador").prop("placeholder", "Perdiste!");
    $("#buscador").prop("disabled", true);
    alert("Perdiste!");
    imprimirJugadorOculto();
  } else {
    $("#buscador").prop("placeholder", "Intento "+intento+"/6...")
  }
}

// Comparo jugador oculto contra jugador input
function comparoJugadores(jugador, jugadorOculto) {
  console.log("jugador input", jugador.nombre);
  console.log("jugador random", jugadorOculto.nombre);

  // Imprimo el nombre
  i += '<div class="grid-item">'+jugador.nombre+'</div>';

  // Comparo equipo actual
  if (jugador.equipoActual == jugadorOculto.equipoActual) {
    i += '<div class="grid-item" style="background-color:var(--verde)">'+jugador.equipoActual+'</div>';
  } else {
    // Comparo equipo actual con equipos pasados

  }
  // Comparo posicion
  comparoPosicion(jugador, jugadorOculto);

  // Comparo altura
  comparoAltura(jugador, jugadorOculto);

  // i += '<div class="grid-item">'+jugador.altura+'cm</div>';
  // i += '<div class="grid-item">'+jugador.edad+'</div>';
  // i += '<div class="grid-item">'+jugador.numero+'</div>';
  // i += '<div class="grid-item">'+jugador.extranjero+'</div>';

}

// Compario posiciones
function comparoPosicion(jugador, jugadorOculto) {
  let resultado = '<div class="grid-item">'+jugador.posicion+'</div>';
  // Si es la misma posicion
  if (jugador.posicionNumero == jugadorOculto.posicionNumero) {
    resultado = '<div class="grid-item" style="background-color:var(--verde)">'+jugador.posicion+'</div>';
  }
  // Si la posicion es mas baja
  if ( (jugador.posicionNumero - 1) == jugadorOculto.posicionNumero ) {
    resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.posicion+'</div>';
  }
  // Si la posicion es más alta
  if ( (jugador.posicionNumero + 1) == jugadorOculto.posicionNumero ) {
   resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.posicion+'</div>';
  }
  i += resultado;
}

function comparoAltura(jugador, jugadorOculto) {
  let resultado = '<div class="grid-item">'+jugador.altura+'cm</div>'
  console.log(jugador.altura - jugadorOculto.altura)
  // Si es la misma altura
  if (jugador.altura == jugadorOculto.altura) {
    resultado = '<div class="grid-item" style="background-color:var(--verde)">'+jugador.altura+'</div>';
  }
  // Si la altura es mas baja
  if ( (jugador.altura - jugadorOculto.altura) <= 10 && (jugador.altura - jugadorOculto.altura) > 0 ) {
    resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.altura+'</div>';
  }
  // Si la altura es más alta
  if ( (jugador.altura - jugadorOculto.altura) >= 10 && (jugador.altura - jugadorOculto.altura) < 0 ) {
   resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.altura+'</div>';
  }
  i += resultado;
}

// Imprimo el jugador oculto
function imprimirJugadorOculto(color, jugador) {
  i += '<div class="grid-item" style="background-color:var(--'+color+')">'+jugador[0].nombre+'</div>';
  i += '<div class="grid-item" style="background-color:var(--'+color+')">'+jugador[0].equipoActual+'</div>';
  i += '<div class="grid-item" style="background-color:var(--'+color+')">'+jugador[0].posicion+'</div>';
  i += '<div class="grid-item" style="background-color:var(--'+color+')">'+jugador[0].altura+'cm</div>';
  i += '<div class="grid-item" style="background-color:var(--'+color+')">'+jugador[0].edad+'</div>';
  i += '<div class="grid-item" style="background-color:var(--'+color+')">'+jugador[0].numero+'</div>';
  i += '<div class="grid-item" style="background-color:var(--'+color+')">'+jugador[0].extranjero+'</div>';
  return;

}
