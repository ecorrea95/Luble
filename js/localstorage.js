// localstorage
var diaActual = new Date().getDate();
var mesActual = new Date().getMonth();
var gameStatus = '';
var intentos = [];

var diaGuardado = localStorage.getItem('dia');
var mesGuardado = localStorage.getItem('mes');

if (diaActual != diaGuardado || mesActual != mesGuardado) {
  console.log("Es otro dia! Hay un nuevo jugador oculto!");
  localStorage.setItem('intentos', intentos);
  console.log(localStorage.getItem("intentos"));
  jugadorRandom();
  console.log(jugadorOculto);

  // for (let i=0; i<intentos.length; i++) {
  //   buscarJugador(intentos[i]);
  // }
}
