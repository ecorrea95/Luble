// Jugador oculto al azar
var random;
var intento = 1;
var jugadorOculto;

// Jugador random del día
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
  let resultado = '<div class="grid-item"><img src="'+jugador.logoEquipo+'" class="logoEquipo" alt="'+jugador.equipoActual+'">'+jugador.equipoActualAb+'</div>';
  // Si es el mismo equipo
  if (jugador.equipoActual == jugadorOculto.equipoActual) {
    resultado = '<div class="grid-item" style="background-color:var(--verde)"><img src="'+jugador.logoEquipo+'" class="logoEquipo" alt="'+jugador.equipoActual+'">'+jugador.equipoActualAb+'</div>';
  }
  // Si jugó en el equipo en el pasado
  for (let i=0; i<jugadorOculto.equiposPasado.length; i++) {
    // console.log(jugadorOculto.equiposPasado[i]);
    if (jugador.equipoActual == jugadorOculto.equiposPasado[i]) {
      resultado = '<div class="grid-item" style="background-color:var(--amarillo)"><img src="'+jugador.logoEquipo+'" class="logoEquipo" alt="'+jugador.equipoActual+'">'+jugador.equipoActualAb+'</div>';
    }
  }
  i += resultado;
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
    resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.posicion+'<br>&darr;</div>';
  }
  // Si la posicion es más alta
  if ( (jugador.posicionNumero + 1) == jugadorOculto.posicionNumero ) {
   resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.posicion+'<br>&uarr;</div>';
  }
  i += resultado;
}

// Comparo altura
function comparoAltura(jugador, jugadorOculto) {
  let resultado = '<div class="grid-item">'+jugador.altura+'cm</div>'
  // Si la altura es mas baja o mas alta
  if (jugador.altura < jugadorOculto.altura) {
    resultado = '<div class="grid-item">'+jugador.altura+'cm<br>&uarr;</div>';
  } else {
    resultado = '<div class="grid-item">'+jugador.altura+'cm<br>&darr;</div>';
  }
  // Si es la misma altura
  if (jugador.altura == jugadorOculto.altura) {
    resultado = '<div class="grid-item" style="background-color:var(--verde)">'+jugador.altura+'cm</div>';
  }
  // Si la altura es 10cm más baja
  if (jugador.altura < jugadorOculto.altura && (jugadorOculto.altura-jugador.altura) <= 10) {
    resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.altura+'cm<br>&uarr;</div>';
  }
  // Si la altura es 10cm más alta
  if (jugador.altura > jugadorOculto.altura && (jugador.altura-jugadorOculto.altura) <= 10) {
    resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.altura+'cm<br>&darr;</div>';
  }
  i += resultado;
}

// Comparo edad
function comparoEdad(jugador, jugadorOculto) {
  let resultado = '<div class="grid-item">'+jugador.edad+'</div>';
  // Si la edad es más baja o alta
  if (jugador.edad < jugadorOculto.edad) {
    resultado = '<div class="grid-item">'+jugador.edad+'<br>&uarr;</div>';
  } else {
    resultado = '<div class="grid-item">'+jugador.edad+'<br>&darr;</div>';
  }
  // Si es la misma edad
  if (jugador.edad == jugadorOculto.edad) {
    resultado = '<div class="grid-item" style="background-color:var(--verde)">'+jugador.edad+'</div>';
  }
  // Si la edad es 2 años más baja
  if ( (jugador.edad - jugadorOculto.edad) <= 2 && (jugador.edad - jugadorOculto.edad) > 0 ) {
    resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.edad+'<br>&uarr;</div>';
  }
  // Si la edad es 2 años más alta
  if ( (jugador.edad - jugadorOculto.edad) >= -2 && (jugador.edad - jugadorOculto.edad) < 0 ) {
   resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.edad+'<br>&darr;</div>';
  }
  i += resultado;
}

// Comparo numero
function comparoNumero(jugador, jugadorOculto) {
  let resultado = '<div class="grid-item">'+jugador.numero+'</div>';
  // Si el número es más bajo o alto
  if (jugador.numero < jugadorOculto.numero) {
    resultado = '<div class="grid-item">'+jugador.numero+'<br>&uarr;</div>';
  } else {
    resultado = '<div class="grid-item">'+jugador.numero+'<br>&darr;</div>';
  }
  // Si es la misma numero
  if (jugador.numero == jugadorOculto.numero) {
    resultado = '<div class="grid-item" style="background-color:var(--verde)">'+jugador.numero+'</div>';
  }
  // Si la numero es mas baja
  if ( (jugador.numero - jugadorOculto.numero) <= 2 && (jugador.numero - jugadorOculto.numero) > 0 ) {
    resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.numero+'&darr;</div>';
  }
  // Si la numero es más alta
  if ( (jugador.numero - jugadorOculto.numero) >= -2 && (jugador.numero - jugadorOculto.numero) < 0 ) {
   resultado = '<div class="grid-item" style="background-color:var(--amarillo)">'+jugador.numero+'&uarr;</div>';
  }
  i += resultado;
}

// Comparo extranjero
function comparoExtranjero(jugador, jugadorOculto) {
  let resultado = '<div class="grid-item">'+jugador.extranjero+'</div>';
  if (jugador.extranjero == jugadorOculto.extranjero) {
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
  i += '<div class="grid-item" style="background-color:var(--verde)"><img src="'+jugadorOculto.logoEquipo+'" class="logoEquipo" alt="'+jugadorOculto.equipoActual+'">'+jugadorOculto.equipoActualAb+'</div>';
  i += '<div class="grid-item" style="background-color:var(--verde)">'+jugadorOculto.posicion+'</div>';
  i += '<div class="grid-item" style="background-color:var(--verde)">'+jugadorOculto.altura+'cm</div>';
  i += '<div class="grid-item" style="background-color:var(--verde)">'+jugadorOculto.edad+'</div>';
  i += '<div class="grid-item" style="background-color:var(--verde)">'+jugadorOculto.numero+'</div>';
  i += '<div class="grid-item" style="background-color:var(--verde)">'+jugadorOculto.extranjero+'</div>';
  $(i).appendTo("#intentos");
  $("#buscador").prop("disabled", true);
  return;
}

// Funcion para imprimir el jugador en la variable y comparo con el jugador a adivinar
function imprimirJugador(jugador) {
  if (jugador[0].nombre == jugadorOculto.nombre) {
    ganaste();
  } else {
    comparoJugadores(jugador[0], jugadorOculto);
    // Verificar si es el jugador oculto
    verificarIntento();
  }
}

// Function para imprimir el jugador de los intentos ya cargados
function imprimirJugadorCargado(jugador) {
  // Verifico si el jugador ingresado es el jugador oculto
  if (jugador[0].nombre == jugadorOculto.nombre) {
    imprimirJugadorOculto(jugadorOculto);
  } else {
    // Comparo el jugador ingresado con el jugador oculto
    comparoJugadores(jugador[0], jugadorOculto);
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

  // Le agrego 1 a la cantidad de intentos
  intento++;

  // Le agrego 1 a la cantidad de partidas si el jugador intenta una vez
  var cantP = localStorage.getItem('cantidadPartidas');
  if (intento == 2) {
    if (cantP != null) {
      cantP++;
      localStorage.setItem('cantidadPartidas', cantP);
    } else {
      localStorage.setItem('cantidadPartidas', 1);
    }
  }

  localStorage.setItem('cantIntentos', intento);
  match = '';
  match = jugadores.filter(function(jugador) {
    return jugador.nombre === nombre;
  });
  $("#intentos").removeClass("hide");
  $("#columnasTitulos").removeClass("hide");
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

// Funcion de verificar intentos cargados
function verificarIntentoCargado() {
  if (intento == 7) {
    // alert("Perdiste");
    console.log("Perdiste");
    $("#buscador").prop("placeholder", "Perdiste!");
    $("#buscador").prop("disabled", true);
    console.log("Imprimo oculto");
    imprimirJugadorOculto(jugadorOculto);
  } else {
    $("#buscador").prop("placeholder", "Intento "+intento+"/6...")
  }
}

// Ganaste
function ganaste() {
  // Abro modal de ganaste
  alert("Ganaste! El jugador oculto es "+jugadorOculto.nombre);

  $("#buscador").prop("placeholder", "Adivinado en el intento "+(intento-1)+"!");


  // Guardo en localStorage el intento en el cual adivino
  var intAd = localStorage.getItem('ganada'+(intento-1)+'');
  if (intAd != null) {
    intAd++;
    localStorage.setItem('ganada'+(intento-1)+'', intAd);
  } else {
    localStorage.setItem('ganada'+(intento-1)+'', 1);
  }

  // Muestro el jugador oculto en el modal de stats
  $("#nomJugOculto").removeClass("hide");

  // Registro en localStorage
  let cpg = localStorage.getItem('cantPartGanadas');
  if (cpg != null) {
    cpg++;
    localStorage.setItem('cantPartGanadas', cpg);
  } else {
    localStorage.setItem('cantPartGanadas', 1);
  }
  localStorage.setItem('status', 'ganado');

  // Actualizo las stats
  updateStats();

  // Imprimo el jugador oculto
  imprimirJugadorOculto(jugadorOculto);
}

// Perdiste
function perdiste() {

  // Establezco el input de busqueda por partida perdida
  $("#buscador").prop("placeholder", "Perdiste!");
  $("#buscador").prop("disabled", true);

  // Abro modal de partida perdida
  alert("Perdiste! El jugador oculto era "+jugadorOculto.nombre);

  // Imprimo el jugador ocutlo
  imprimirJugadorOculto(jugadorOculto);

  // Muestro el jugador oculto en el modal de stats
  $("#nomJugOculto").removeClass("hide");

  // Registro en localStorage
  let cpp = localStorage.getItem('cantPartPerdidas');
  if (cpp != null) {
    cpp++;
    localStorage.setItem('cantPartPerdidas', cpp);
  } else {
    localStorage.setItem('cantPartPerdidas', 1);
  }
  localStorage.setItem('status', 'perdido');

  // Actualizo las stats
  updateStats();

}

// Abrir/cerrar modal stats
function abrirModalStats() {
  $("#modal").removeClass("hide");
  $("#modalStats").removeClass("hide");
}

// Abrir/cerrar modal como jugar
function abrirModalComoJugar() {
  $("#modal").removeClass("hide");
  $("#modalComoJugar").removeClass("hide");
}

function cerrarModal() {
  $("#modal").addClass("hide");
  $("#modalStats").addClass("hide");
  $("#modalComoJugar").addClass("hide");
}

// Busqueda de jugador por el dropdown
$("#buscador").change(function() {
  let jug = $("#buscador").val();
  buscarJugador(jug);
  $("#buscador").val("");
});
