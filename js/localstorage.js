// localstorage
var diaActual = new Date().getDate();
var mesActual = new Date().getMonth();
var gameStatus = '';
var intentos = [];

var diaGuardado = localStorage.getItem('dia');
var mesGuardado = localStorage.getItem('mes');

var status = localStorage.getItem('status');
if (status == "ganado" || status == "perdido") {
  $("#nomJugOculto").removeClass("hide");
}

// Check si es la primera vez que el usuario entra
var u = localStorage.getItem('cantIntentos');
if (u == null) {
  abrirModalComoJugar();
}

if (diaActual != diaGuardado || mesActual != mesGuardado) {

  // Guardo el dia y el mes
  localStorage.setItem('dia', diaActual);
  localStorage.setItem('mes', mesActual);

  // Reseteo la cantidad de intentos y jugadores adivinados
  localStorage.setItem('cantIntentos', 1);
  localStorage.setItem('intentos', '');
  localStorage.setItem('status', '');
  $("#nomJugOculto").addClass("hide");

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
    if (int != '') {
      imprimirJugadorCargado(j);
      $("#intentos").removeClass("hide");
      $("#columnasTitulos").removeClass("hide");
      let status = localStorage.getItem('status');
      if (status == "ganado") {
        $("#buscador").prop("placeholder", "Adivinado en el intento "+(intento-1)+"!");
      } else {
        $("#buscador").prop("placeholder", "Intento "+(intento-1)+"/6...")
      }
    }

    if (i == 5) {
      verificarIntentoCargado();
    }
  }

}

$(document).ready(function() {
  $("#nombreJugOculto").text(jugadorOculto.nombre);

  updateStats();

});

// Update stats
function updateStats() {
  // Traigo todos los stats
  var statCantPart = localStorage.getItem('cantidadPartidas');
  if (statCantPart == null) {
    $("#valCantJug").text("0");
  } else {
    $("#valCantJug").text(statCantPart);
  }

  var statCantPartG = localStorage.getItem('cantPartGanadas');
  if (statCantPartG == null) {
    $("#valCantGan").text("-");
  } else {
    $("#valCantGan").text((statCantPartG/statCantPart*100).toFixed(0)+"%");
  }

  var statCantPartP = localStorage.getItem('cantPartPerdidas');
  if (statCantPartP == null) {
    $("#valCantPerd").text("-");
  } else {
    $("#valCantPerd").text((statCantPartP/statCantPart*100).toFixed(0)+"%");
  }

  var gan1 = localStorage.getItem('ganada1');
  if (gan1 == null) {
    $("#prog1").val(0);
    $("#prog1Val").text("0%");
  } else {
    $("#prog1").val(gan1/statCantPartG*100);
    $("#prog1Val").text((gan1/statCantPartG*100).toFixed(2)+"%");
  }

  var gan2 = localStorage.getItem('ganada2');
  if (gan2 == null) {
    $("#prog2").val(0);
    $("#prog2Val").text("0%");
  } else {
    $("#prog2").val(gan2/statCantPartG*100);
    $("#prog2Val").text((gan2/statCantPartG*100).toFixed(2)+"%");
  }

  var gan3 = localStorage.getItem('ganada3');
  if (gan3 == null) {
    $("#prog3").val(0);
    $("#prog3Val").text("0%");
  } else {
    $("#prog3").val(gan3/statCantPartG*100);
    $("#prog3Val").text((gan3/statCantPartG*100).toFixed(2)+"%");
  }

  var gan4 = localStorage.getItem('ganada4');
  if (gan4 == null) {
    $("#prog4").val(0);
    $("#prog4Val").text("0%");
  } else {
    $("#prog4").val(gan4/statCantPartG*100);
    $("#prog4Val").text((gan4/statCantPartG*100).toFixed(2)+"%");
  }

  var gan5 = localStorage.getItem('ganada5');
  if (gan5 == null) {
    $("#prog5").val(0);
    $("#prog5Val").text("0%");
  } else {
    $("#prog5").val(gan5/statCantPartG*100);
    $("#prog5Val").text((gan5/statCantPartG*100).toFixed(2)+"%");
  }

  var gan6 = localStorage.getItem('ganada6');
  if (gan6 == null) {
    $("#prog6").val(0);
    $("#prog6Val").text("0%");
  } else {
    $("#prog6").val(gan6/statCantPartG*100);
    $("#prog6Val").text((gan6/statCantPartG*100).toFixed(2)+"%");
  }
}
