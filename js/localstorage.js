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

  // Reseteo el localstorage
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
    imprimirJugador(j);
    $("#intentos").removeClass("hide");
  }

}
