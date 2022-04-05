$(document).ready(function() {

  console.log(jugadores);

});


// Agrego todos los datalist al input de search
var j = '';
for (let i=0; i<jugadores.length; i++) {
  j += '<option value="'+jugadores[i].nombre+'">';
}

$(j).appendTo('#opcionesJ');
