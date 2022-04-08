// localstorage
var diaActual = new Date().getDate();
var mesActual = new Date().getMonth();
var gameStatus = '';
var intentos = [];

var diaGuardado = localStorage.getItem('dia');
var mesGuardado = localStorage.getItem('mes');

if (diaActual != diaGuardado || mesActual != mesGuardado) {

  // Guardo el dia y el mes
  localStorage.setItem('dia', diaActual);
  localStorage.setItem('mes', mesActual);

  // Reseteo la cantidad de intentos y jugadores adivinados
  localStorage.setItem('cantIntentos', 1);
  localStorage.setItem('intentos', '');


  console.log("Es otro dia! Hay un nuevo jugador oculto!");
  localStorage.setItem('intentos', intentos);
  jugadorRandom();
  console.log("Jugador Oculto: ", jugadorOculto.nombre);
  localStorage.setItem('jugadorOculto', jugadorOculto.nombre);

} else {

  let int = localStorage.getItem('intentos');
  let jO = localStorage.getItem('jugadorOculto');
  intento = localStorage.getItem('cantIntentos');
  console.log("J oculto: ",jO)

  jugadorOculto = jugadores.filter(function(jugador) {
    return jugador.nombre === jO;
  });

  jugadorOculto = jugadorOculto[0];


  int = int.split(',');

  for (let i=0; i<int.length; i++) {
    let j = jugadores.filter(function(jugador) {
      return jugador.nombre === int[i];
    });
    imprimirJugadorCargado(j);
    $("#intentos").removeClass("hide");
    $("#columnasTitulos").removeClass("hide");

    $("#buscador").prop("placeholder", "Adivinado en el intento "+(intento-1)+"!");

    if (i == 5) {
      verificarIntentoCargado();
    }
  }

}

// Traigo todos los stats
var statCantPart = localStorage.getItem('cantidadPartidas');
var statCantPartG = localStorage.getItem('cantPartGanadas');
var statCantPartP = localStorage.getItem('cantPartPerdidas');
var gan1 = localStorage.getItem('ganada1');
var gan2 = localStorage.getItem('ganada2');
var gan3 = localStorage.getItem('ganada3');
var gan4 = localStorage.getItem('ganada4');
var gan5 = localStorage.getItem('ganada5');
var gan6 = localStorage.getItem('ganada6');

console.log("Cantidad partidas: ", statCantPart);
console.log("Cantidad partidas ganadas: ", statCantPartG);
console.log("Cantidad partidas perdidas: ", statCantPartP);
console.log("Ganadas en 1: ", gan1);
console.log("Ganadas en 2: ", gan2);
console.log("Ganadas en 3: ", gan3);
console.log("Ganadas en 4: ", gan4);
console.log("Ganadas en 5: ", gan5);
console.log("Ganadas en 6: ", gan6);
