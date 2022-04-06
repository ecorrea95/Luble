// Jugador oculto al azar
var random;
var intento = 1;
var jugadorOculto;

function jugadorRandom() {
  random = Math.floor(Math.random() * jugadores.length);
  // console.log(random, jugadores[random]);
  jugadorOculto = jugadores[random];
}

// Agrego todos los datalist al input de search
var j = '';
for (let i=0; i<jugadores.length; i++) {
  j += '<option value="'+jugadores[i].nombre+'" onclick="buscarJugador('+jugadores[i].nombre+')"></option>';
}
$(j).appendTo('#opcionesJ');


// COMPARACIONES
// Comparo equipo
function comparoEquipos(jugador, jugadorOculto) {
  if (jugador.equipoActual == jugadorOculto[0].equipoActual) {
    i += '<div class="grid-item" style="background-color:var(--verde)">'+jugador.equipoActual+'</div>';
  } else {
    // Comparo equipo actual con equipos pasados
    i += '<div class="grid-item">'+jugador.equipoActual+'</div>';

  }
}

// Compario posiciones
function comparoPosicion(jugador, jugadorOculto) {
  let resultado = '<div class="grid-item">'+jugador.posicion+'</div>';
  // Si es la misma posicion
  if (jugador.posicionNumero == jugadorOculto[0].posicionNumero) {
    resultado = '<div class="grid-item" style="background-color:var(--verde)">'+jugador.posicion+'</div>';
  }
  // Si la posicion es mas baja
  if ( (jugador.posicionNumero - 1) == jugadorOculto[0].posicionNumero ) {
    resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.posicion+'</div>';
  }
  // Si la posicion es más alta
  if ( (jugador.posicionNumero + 1) == jugadorOculto[0].posicionNumero ) {
   resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.posicion+'</div>';
  }
  i += resultado;
}

// Comparo altura
function comparoAltura(jugador, jugadorOculto) {
  let resultado = '<div class="grid-item">'+jugador.altura+'cm</div>'
  // Si es la misma altura
  if (jugador.altura == jugadorOculto[0].altura) {
    resultado = '<div class="grid-item" style="background-color:var(--verde)">'+jugador.altura+'cm</div>';
  }
  // Si la altura es mas baja
  if ( (jugador.altura - jugadorOculto[0].altura) <= 10 && (jugador.altura - jugadorOculto[0].altura) > 0 ) {
    resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.altura+'cm</div>';
  }
  // Si la altura es más alta
  if ( (jugador.altura - jugadorOculto[0].altura) >= 10 && (jugador.altura - jugadorOculto[0].altura) < 0 ) {
   resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.altura+'cm</div>';
  }
  i += resultado;
}

// Comparo edad
function comparoEdad(jugador, jugadorOculto) {
  let resultado = '<div class="grid-item">'+jugador.edad+'</div>';
  // Si es la misma edad
  if (jugador.edad == jugadorOculto[0].edad) {
    resultado = '<div class="grid-item" style="background-color:var(--verde)">'+jugador.edad+'</div>';
  }
  // Si la edad es mas baja
  if ( (jugador.edad - jugadorOculto[0].edad) <= 2 && (jugador.edad - jugadorOculto[0].edad) > 0 ) {
    resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.edad+'</div>';
  }
  // Si la edad es más alta
  if ( (jugador.edad - jugadorOculto[0].edad) >= -2 && (jugador.edad - jugadorOculto[0].edad) < 0 ) {
   resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.edad+'</div>';
  }
  i += resultado;
}

// Comparo numero
function comparoNumero(jugador, jugadorOculto) {
  let resultado = '<div class="grid-item">'+jugador.numero+'</div>';
  // Si es la misma numero
  if (jugador.numero == jugadorOculto[0].numero) {
    resultado = '<div class="grid-item" style="background-color:var(--verde)">'+jugador.numero+'</div>';
  }
  // Si la numero es mas baja
  if ( (jugador.numero - jugadorOculto[0].numero) <= 2 && (jugador.numero - jugadorOculto[0].numero) > 0 ) {
    resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.numero+'</div>';
  }
  // Si la numero es más alta
  if ( (jugador.numero - jugadorOculto[0].numero) >= -2 && (jugador.numero - jugadorOculto[0].numero) < 0 ) {
   resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.numero+'</div>';
  }
  i += resultado;
}

// Comparo extranjero
function comparoExtranjero(jugador, jugadorOculto) {
  let resultado = '<div class="grid-item">'+jugador.extranjero+'</div>';
  if (jugador.extranjero == jugadorOculto[0].extranjero) {
    resultado = '<div class="grid-item" style="background-color:var(--verde)">'+jugador.extranjero+'</div>'
  }
  i += resultado;
}

// Comparo jugador oculto contra jugador input
function comparoJugadores(jugador, jugadorOculto) {

  // Imprimo el nombre
  i = '<div class="grid-item">'+jugador.nombre+'</div>';

  // Comparo equipos
  comparoEquipos(jugador, jugadorOculto);

  // Comparo posicion
  comparoPosicion(jugador, jugadorOculto);

  // Comparo altura
  comparoAltura(jugador, jugadorOculto);

  // Comparo edad
  comparoEdad(jugador, jugadorOculto);

  // Comparo numero
  comparoNumero(jugador, jugadorOculto);

  // Comparo extranjero
  comparoExtranjero(jugador, jugadorOculto);

  $(i).appendTo("#intentos");

}

// Impresiones
// Imprimo el jugador oculto
function imprimirJugadorOculto(jugadorOculto) {
  i = '<div class="grid-item" style="background-color:var(--verde)">'+jugadorOculto.nombre+'</div>';
  i += '<div class="grid-item" style="background-color:var(--verde)">'+jugadorOculto.equipoActual+'</div>';
  i += '<div class="grid-item" style="background-color:var(--verde)">'+jugadorOculto.posicion+'</div>';
  i += '<div class="grid-item" style="background-color:var(--verde)">'+jugadorOculto.altura+'cm</div>';
  i += '<div class="grid-item" style="background-color:var(--verde)">'+jugadorOculto.edad+'</div>';
  i += '<div class="grid-item" style="background-color:var(--verde)">'+jugadorOculto.numero+'</div>';
  i += '<div class="grid-item" style="background-color:var(--verde)">'+jugadorOculto.extranjero+'</div>';
  $(i).appendTo("#intentos");
  return;
}

// Funcion para imprimir el jugador en la variable y comparo con el jugador a adivinar
function imprimirJugador(jugador) {
  if (jugador[0].nombre == jugadorOculto.nombre) {
    imprimirJugadorOculto(jugadorOculto);
    alert("Ganaste! El jugador oculto es "+jugadorOculto.nombre);
  } else {
    comparoJugadores(jugador[0], jugadorOculto);
    // Verificar si es el jugador oculto
    verificarIntento();
  }
}

// GAME systems
// Funcion para buscar jugador en el array de jugadores
function buscarJugador(nombre) {
  var intent = localStorage.getItem("intentos");
  intent = intent.split(',');
  if (intent[0] == '') {
    intent[0] = nombre;
  } else {
    intent.push(nombre);
  }
  localStorage.setItem('intentos', intent);

  i = '';
  intento++;
  localStorage.setItem('cantIntentos', intento);
  match = '';
  match = jugadores.filter(function(jugador) {
    return jugador.nombre === nombre;
  });
  $("#intentos").removeClass("hide");
  imprimirJugador(match);
}

// Verificar intento
function verificarIntento() {
  if (intento > 6) {
    perdiste();
  } else {
    $("#buscador").prop("placeholder", "Intento "+intento+"/6...")
  }
}

// Ganaste
function ganaste() {
  alert("Ganaste!");
  imprimirJugadorOculto(jugadorOculto);
}

// Perdiste
function perdiste() {
  $("#buscador").prop("placeholder", "Perdiste!");
  $("#buscador").prop("disabled", true);
  alert("Perdiste!");
  imprimirJugadorOculto(jugadorOculto);
}

// Busqueda de jugador por el dropdown
$("#buscador").change(function() {
  let jug = $("#buscador").val();
  buscarJugador(jug);
  $("#buscador").val("");
});
