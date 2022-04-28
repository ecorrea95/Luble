var j = [];

// Data jugadores LUB
const jugadores = [
  // Aguada
  {
    nombre: "Marcos Mata",
    imagen: "images/marcosmata.jpg",
    equipoActual: "Aguada",
    equipoActualAb: "AGU",
    logoEquipo: "images/aguada.png",
    equiposPasado: [""],
    posicion: "AL",
    posicionNumero: 3,
    altura: 202,
    numero: 6,
    edad: 35,
    extranjero: "Si"
  },
  {
    nombre: "Sebastian Izaguirre",
    imagen: "images/sebastianizaguirre.jpg",
    equipoActual: "Aguada",
    equipoActualAb: "AGU",
    logoEquipo: "images/aguada.png",
    equiposPasado: ["Paysandú", "Trouville", "Hebraica y Macabi", "Bohemios", "Capitol", "Defensor Sporting", "Unión Atlética"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 207,
    numero: 10,
    edad: 36,
    extranjero: "No"
  },
  {
    nombre: "Leandro Garcia Morales",
    imagen: "images/leandrogarciamorales.jpg",
    equipoActual: "Aguada",
    equipoActualAb: "AGU",
    logoEquipo: "images/aguada.png",
    equiposPasado: ["Biguá", "Hebraica y Macabi"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 188,
    numero: 100,
    edad: 41,
    extranjero: "No"
  },
  {
    nombre: "Mathias Calfani",
    imagen: "images/mathiascalfani.jpg",
    equipoActual: "Aguada",
    equipoActualAb: "AGU",
    logoEquipo: "images/aguada.png",
    equiposPasado: ["Biguá", "Malvín"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 202,
    numero: 21,
    edad: 30,
    extranjero: "No"
  },
  {
    nombre: "Federico Bavosi",
    imagen: "images/federicobavosi.jpg",
    equipoActual: "Aguada",
    equipoActualAb: "AGU",
    logoEquipo: "images/aguada.png",
    equiposPasado: ["Unión Atlética", "Malvín"],
    posicion: "B",
    posicionNumero: 1,
    altura: 190,
    numero: 22,
    edad: 41,
    extranjero: "No"
  },
  {
    nombre: "Tyreek Duren",
    imagen: "images/tyreekduren.jpg",
    equipoActual: "Aguada",
    equipoActualAb: "AGU",
    logoEquipo: "images/aguada.png",
    equiposPasado: [""],
    posicion: "B",
    posicionNumero: 1,
    altura: 183,
    numero: 23,
    edad: 30,
    extranjero: "Si"
  },
  {
    nombre: "Federico Pereiras",
    imagen: "images/federicopereiras.jpg",
    equipoActual: "Aguada",
    equipoActualAb: "AGU",
    logoEquipo: "images/aguada.png",
    equiposPasado: ["Biguá", "Capitol", ""],
    posicion: "ES",
    posicionNumero: 2,
    altura: 190,
    numero: 24,
    edad: 27,
    extranjero: "No"
  },
  {
    nombre: "Lucas Silva",
    imagen: "images/lucassilva.jpg",
    equipoActual: "Aguada",
    equipoActualAb: "AGU",
    logoEquipo: "images/aguada.png",
    equiposPasado: [""],
    posicion: "AP",
    posicionNumero: 4,
    altura: 197,
    numero: 77,
    edad: 19,
    extranjero: "No"
  },
  {
    nombre: "Martin Krampelj",
    imagen: "images/",
    equipoActual: "Aguada",
    equipoActualAb: "AGU",
    logoEquipo: "images/aguada.png",
    equiposPasado: [""],
    posicion: "P",
    posicionNumero: 5,
    altura: 206,
    numero: 27,
    edad: 27,
    extranjero: "Si"
  },
  // Biguá
  {
    nombre: "Victor Rudd",
    imagen: "images/victorrudd.jpg",
    equipoActual: "Biguá",
    equipoActualAb: "BIG",
    logoEquipo: "images/bigua.png",
    equiposPasado: [""],
    posicion: "AP",
    posicionNumero: 4,
    altura: 206,
    numero: 1,
    edad: 31,
    extranjero: "Si"
  },
  {
    nombre: "Santiago Vidal",
    imagen: "images/santiagovidal.jpg",
    equipoActual: "Biguá",
    equipoActualAb: "BIG",
    logoEquipo: "images/bigua.png",
    equiposPasado: ["Larrañaga", "Nacional", "Larre Borges", "Tabaré", "Trouville"],
    posicion: "B",
    posicionNumero: 1,
    altura: 180,
    numero: 4,
    edad: 32,
    extranjero: "No"
  },
  {
    nombre: "Ivan Loriente",
    imagen: "images/ivanloriente.jpg",
    equipoActual: "Biguá",
    equipoActualAb: "BIG",
    logoEquipo: "images/bigua.png",
    equiposPasado: ["Tabaré", "Goes", "Welcome", "Atenas", "Olimpia"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 190,
    numero: 7,
    edad: 29,
    extranjero: "No"
  },
  {
    nombre: "Donald Sims",
    imagen: "images/donaldsims.jpg",
    equipoActual: "Biguá",
    equipoActualAb: "BIG",
    logoEquipo: "images/bigua.png",
    equiposPasado: [""],
    posicion: "ES",
    posicionNumero: 2,
    altura: 190,
    numero: 8,
    edad: 34,
    extranjero: "Si"
  },
  {
    nombre: "Hernan Alvarez",
    imagen: "images/hernanalvarez.jpg",
    equipoActual: "Biguá",
    equipoActualAb: "BIG",
    logoEquipo: "images/bigua.png",
    equiposPasado: [""],
    posicion: "BA",
    posicionNumero: 1,
    altura: 182,
    numero: 13,
    edad: 23,
    extranjero: "No"
  },
  {
    nombre: "Nicolas Andreoli",
    imagen: "images/nicolasandreoli.jpg",
    equipoActual: "Biguá",
    equipoActualAb: "BIG",
    logoEquipo: "images/bigua.png",
    equiposPasado: [""],
    posicion: "AP",
    posicionNumero: 4,
    altura: 197,
    numero: 15,
    edad: 22,
    extranjero: "No"
  },
  {
    nombre: "Luis Santos",
    imagen: "images/luisssantos.jpg",
    equipoActual: "Biguá",
    equipoActualAb: "BIG",
    logoEquipo: "images/bigua.png",
    equiposPasado: [""],
    posicion: "P",
    posicionNumero: 5,
    altura: 203,
    numero: 23,
    edad: 27,
    extranjero: "Si"
  },
  {
    nombre: "Diego Pena Garcia",
    imagen: "images/diegopenagarcia.jpg",
    equipoActual: "Biguá",
    equipoActualAb: "BIG",
    logoEquipo: "images/bigua.png",
    equiposPasado: [""],
    posicion: "AL",
    posicionNumero: 3,
    altura: 195,
    numero: 25,
    edad: 25,
    extranjero: "No"
  },
  {
    nombre: "Alex Lopez",
    imagen: "images/alexlopez.jpg",
    equipoActual: "Biguá",
    equipoActualAb: "BIG",
    logoEquipo: "images/bigua.png",
    equiposPasado: ["Trouville", "Stockolmo", "Sayago", "Marne", "Larre Borges", "Atenas"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 186,
    numero: 31,
    edad: 28,
    extranjero: "No"
  },
  {
    nombre: "Martin Rojas",
    imagen: "images/martinrojas.jpg",
    equipoActual: "Biguá",
    equipoActualAb: "BIG",
    logoEquipo: "images/bigua.png",
    equiposPasado: [""],
    posicion: "AP",
    posicionNumero: 4,
    altura: 194,
    numero: 42,
    edad: 23,
    extranjero: "No"
  },
  // Capitol
  {
    nombre: "Emiliano Bonet",
    imagen: "images/emilianobonet.png",
    equipoActual: "Capitol",
    equipoActualAb: "CAP",
    logoEquipo: "images/capitol.png",
    equiposPasado: ["Sayago"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 186,
    numero: 2,
    edad: 20,
    extranjero: "No"
  },
  {
    nombre: "Juan Wenzel",
    imagen: "images/juanwenzel.png",
    equipoActual: "Capitol",
    equipoActualAb: "CAP",
    logoEquipo: "images/capitol.png",
    equiposPasado: ["Trouville", "Peñarol"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 191,
    numero: 6,
    edad: 33,
    extranjero: "No"
  },
  {
    nombre: "Claudio Bascou",
    imagen: "images/claudiobascou.jpg",
    equipoActual: "Capitol",
    equipoActualAb: "CAP",
    logoEquipo: "images/capitol.png",
    equiposPasado: ["Trouville", "Larre Borges"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 185,
    numero: 8,
    edad: 32,
    extranjero: "No"
  },
  {
    nombre: "Nahuel Amichetti",
    imagen: "images/nahuelamichetti.png",
    equipoActual: "Capitol",
    equipoActualAb: "CAP",
    logoEquipo: "images/capitol.png",
    equiposPasado: ["Verdirrojo", "Peñarol"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 202,
    numero: 15,
    edad: 33,
    extranjero: "No"
  },
  {
    nombre: "Marcos Marotta",
    imagen: "images/marcosmarotta.jpg",
    equipoActual: "Capitol",
    equipoActualAb: "CAP",
    logoEquipo: "images/capitol.png",
    equiposPasado: ["Welcome", "Montevideo", "Goes", "Bohemios", "Larre Borges", "Trouville", "Cordón"],
    posicion: "B",
    posicionNumero: 1,
    altura: 180,
    numero: 24,
    edad: 33,
    extranjero: "No"
  },
  {
    nombre: "Demian Alvarez",
    imagen: "images/demianalvares.jpg",
    equipoActual: "Capitol",
    equipoActualAb: "CAP",
    logoEquipo: "images/capitol.png",
    equiposPasado: ["Sayago", "Defensor Sporting", "Goes", "Larre Borges", "Aguada", "Biguá", "Stockolmo"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 193,
    numero: 41,
    edad: 37,
    extranjero: "No"
  },
  {
    nombre: "Paul Harrison",
    imagen: "images/paulharrison.png",
    equipoActual: "Capitol",
    equipoActualAb: "CAP",
    logoEquipo: "images/capitol.png",
    equiposPasado: ["Goes", "Montevideo", "Olimpia", "Sayago", "Trouville", "Larre Borges", "Cordón", "25 de Agosto"],
    posicion: "P",
    posicionNumero: 5,
    altura: 204,
    numero: 50,
    edad: 32,
    extranjero: "Si"
  },
  {
    nombre: "Eduardo Gamboa",
    imagen: "",
    equipoActual: "Capitol",
    equipoActualAb: "CAP",
    logoEquipo: "images/capitol.png",
    equiposPasado: [""],
    posicion: "ES",
    posicionNumero: 2,
    altura: 188,
    numero: 0,
    edad: 37,
    extranjero: "Si"
  },
  // Defensor Sporting
  {
    nombre: "Gonzalo Alvarez",
    imagen: "images/gonzaloalvarez.png",
    equipoActual: "Defensor Sporting",
    equipoActualAb: "DSC",
    logoEquipo: "images/defensorsporting.png",
    equiposPasado: ["Atenas", "Lagomar", "Urunday Universitario"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 197,
    numero: 0,
    edad: 30,
    extranjero: "No"
  },
  {
    nombre: "Gustavo Barrera",
    imagen: "images/gustavobarrera.png",
    equipoActual: "Defensor Sporting",
    equipoActualAb: "DSC",
    logoEquipo: "images/defensorsporting.png",
    equiposPasado: ["Welcome", "Hebraica y Macabi", "Atenas", "Unión Atlética", "Aguada", "Peñarol"],
    posicion: "B",
    posicionNumero: 1,
    altura: 194,
    numero: 5,
    edad: 37,
    extranjero: "No"
  },
  {
    nombre: "Fernando Verrone",
    imagen: "images/fernandoverrone.png",
    equipoActual: "Defensor Sporting",
    equipoActualAb: "DSC",
    logoEquipo: "images/defensorsporting.png",
    equiposPasado: ["Goes", "Stockolmo", "Capitol", "25 de Agosto", "Welcome", "Sayago", "Colon"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 201,
    numero: 6,
    edad: 33,
    extranjero: "No"
  },
  {
    nombre: "Marcos Cabot",
    imagen: "images/marcoscabot",
    equipoActual: "Defensor Sporting",
    equipoActualAb: "DSC",
    logoEquipo: "images/defensorsporting.png",
    equiposPasado: ["Larre Borges", "Atenas", "Malvín"],
    posicion: "B",
    posicionNumero: 1,
    altura: 180,
    numero: 8,
    edad: 32,
    extranjero: "No"
  },
  {
    nombre: "Alejandro Acosta",
    imagen: "images/alejandroacosta.png",
    equipoActual: "Defensor Sporting",
    equipoActualAb: "DSC",
    logoEquipo: "images/defensorsporting.png",
    equiposPasado: ["Welcome", "Nacional", "Trouville", "Goes"],
    posicion: "B",
    posicionNumero: 2,
    altura: 189,
    numero: 10,
    edad: 33,
    extranjero: "No"
  },
  {
    nombre: "Hatila Passos",
    imagen: "images/hatilapassos.jpg",
    equipoActual: "Defensor Sporting",
    equipoActualAb: "DSC",
    logoEquipo: "images/defensorsporting.png",
    equiposPasado: ["Atenas", "Hebraica y Macabi", "Malvín", "Nacional", "Biguá"],
    posicion: "P",
    posicionNumero: 5,
    altura: 211,
    numero: 15,
    edad: 37,
    extranjero: "Si"
  },
  {
    nombre: "Nicolas Pereyra",
    imagen: "images/nicolaspereyra.png",
    equipoActual: "Defensor Sporting",
    equipoActualAb: "DSC",
    logoEquipo: "images/defensorsporting.png",
    equiposPasado: ["Stockolmo"],
    posicion: "B",
    posicionNumero: 1,
    altura: 180,
    numero: 30,
    edad: 22,
    extranjero: "No"
  },
  {
    nombre: "Willie Atwood",
    imagen: "",
    equipoActual: "Defensor Sporting",
    equipoActualAb: "DSC",
    logoEquipo: "images/defensorsporting.png",
    equiposPasado: [""],
    posicion: "AP",
    posicionNumero: 4,
    altura: 201,
    numero: 21,
    edad: 28,
    extranjero: "Si"
  },
  {
    nombre: "Rodney Green",
    imagen: "",
    equipoActual: "Defensor Sporting",
    equipoActualAb: "DSC",
    logoEquipo: "images/defensorsporting.png",
    equiposPasado: [""],
    posicion: "B",
    posicionNumero: 1,
    altura: 196,
    numero: 16,
    edad: 33,
    extranjero: "Si"
  },
  // Goes
  {
    nombre: "Joaquin Osimani",
    imagen: "images/joaquinosimani.jpg",
    equipoActual: "Goes",
    equipoActualAb: "GOE",
    logoEquipo: "images/goes.png",
    equiposPasado: ["Biguá", "25 de Agosto", "Montevideo", "Verdirrojo", "Malvín", "Atenas", "Larre Borges"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 193,
    numero: 3,
    edad: 34,
    extranjero: "No"
  },
  {
    nombre: "Ignacio Xavier",
    imagen: "images/ignacioxavier.jpg",
    equipoActual: "Goes",
    equipoActualAb: "GOE",
    logoEquipo: "images/goes.png",
    equiposPasado: ["Bohemios"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 196,
    numero: 6,
    edad: 22,
    extranjero: "No"
  },
  {
    nombre: "Martin Osimani",
    imagen: "images/martinosimani.jpg",
    equipoActual: "Goes",
    equipoActualAb: "GOE",
    logoEquipo: "images/goes.png",
    equiposPasado: ["Biguá", "Aguada", "Defensor Sporting"],
    posicion: "B",
    posicionNumero: 1,
    altura: 194,
    numero: 11,
    edad: 40,
    extranjero: "No"
  },
  {
    nombre: "Nahuel Lemos",
    imagen: "images/nahuellemos.jpg",
    equipoActual: "Goes",
    equipoActualAb: "GOE",
    logoEquipo: "images/goes.png",
    equiposPasado: ["Sayago", "Aguada"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 205,
    numero: 12,
    edad: 23,
    extranjero: "No"
  },
  {
    nombre: "Mauricio Arregui",
    imagen: "images/mauricioarregui.jpg",
    equipoActual: "Goes",
    equipoActualAb: "GOE",
    logoEquipo: "images/goes.png",
    equiposPasado: ["Biguá", "Stockolmo"],
    posicion: "P",
    posicionNumero: 5,
    altura: 200,
    numero: 13,
    edad: 23,
    extranjero: "No"
  },
  {
    nombre: "Sebastian Sosa",
    imagen: "images/sebastiansosa.jpg",
    equipoActual: "Goes",
    equipoActualAb: "GOE",
    logoEquipo: "images/goes.png",
    equiposPasado: ["Capitol"],
    posicion: "B",
    posicionNumero: 1,
    altura: 175,
    numero: 20,
    edad: 20,
    extranjero: "No"
  },
  {
    nombre: "Johwen Villegas",
    imagen: "images/johwenvillegas.jpg",
    equipoActual: "Goes",
    equipoActualAb: "GOE",
    logoEquipo: "images/goes.png",
    equiposPasado: ["Olimpia", "Atenas", "Trouville"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 194,
    numero: 22,
    edad: 36,
    extranjero: "Si"
  },
  {
    nombre: "Nestor Colmenares",
    imagen: "images/nestorcolmenares.jpg",
    equipoActual: "Goes",
    equipoActualAb: "GOE",
    logoEquipo: "images/goes.png",
    equiposPasado: ["Trouville"],
    posicion: "P",
    posicionNumero: 5,
    altura: 200,
    numero: 43,
    edad: 34,
    extranjero: "Si"
  },
  {
    nombre: "Fernando Martinez",
    imagen: "images/fernandomartinez.jpg",
    equipoActual: "Goes",
    equipoActualAb: "GOE",
    logoEquipo: "images/goes.png",
    equiposPasado: ["Olivol Mundial", "Aguada", "Larrañaga", "Malvín"],
    posicion: "B",
    posicionNumero: 1,
    altura: 173,
    numero: 44,
    edad: 42,
    extranjero: "No"
  },
  {
    nombre: "Franco Giorgetti",
    imagen: "images/francogiorgetti.jpg",
    equipoActual: "Goes",
    equipoActualAb: "GOE",
    logoEquipo: "images/goes.png",
    equiposPasado: [""],
    posicion: "AP",
    posicionNumero: 4,
    altura: 203,
    numero: 99,
    edad: 29,
    extranjero: "Si"
  },
  // Hebraica y Macabi
  {
    nombre: "Juan Galetto",
    imagen: "images/juangaletto.jpg",
    equipoActual: "Hebraica y Macabi",
    equipoActualAb: "HEB",
    logoEquipo: "images/hebraicaymacabi.png",
    equiposPasado: ["Biguá", "Larrañaga", "Trouville", "Capitol", "Danubio", "Stockolmo"],
    posicion: "B",
    posicionNumero: 1,
    altura: 185,
    numero: 0,
    edad: 25,
    extranjero: "No"
  },
  {
    nombre: "Federico Ambrosoni",
    imagen: "images/federicoambrosoni.jpg",
    equipoActual: "Hebraica y Macabi",
    equipoActualAb: "HEB",
    logoEquipo: "images/hebraicaymacabi.png",
    equiposPasado: ["Unión Atlética", "Reducto"],
    posicion: "B",
    posicionNumero: 1,
    altura: 183,
    numero: 4,
    edad: 23,
    extranjero: "No"
  },
  {
    nombre: "Manuel Oyenard",
    imagen: "images/manueloyenard.jpg",
    equipoActual: "Hebraica y Macabi",
    equipoActualAb: "HEB",
    logoEquipo: "images/hebraicaymacabi.png",
    equiposPasado: ["Tabaré"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 194,
    numero: 10,
    edad: 22,
    extranjero: "No"
  },
  {
    nombre: "Miguel Barriola",
    imagen: "images/miguelbarriola.jpg",
    equipoActual: "Hebraica y Macabi",
    equipoActualAb: "HEB",
    logoEquipo: "images/hebraicaymacabi.png",
    equiposPasado: ["Welcome", "Waston", "Atenas", "Aguada", "Trouville", "Capitol", "Cordón", "Larre Borges"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 193,
    numero: 13,
    edad: 32,
    extranjero: "No"
  },
  {
    nombre: "Esteban Batista",
    imagen: "images/estebanbatista.jpg",
    equipoActual: "Hebraica y Macabi",
    equipoActualAb: "HEB",
    logoEquipo: "images/hebraicaymacabi.png",
    equiposPasado: ["Welcome", "Nacional", "Trouville"],
    posicion: "P",
    posicionNumero: 5,
    altura: 206,
    numero: 15,
    edad: 38,
    extranjero: "No"
  },
  {
    nombre: "Gaston Semiglia",
    imagen: "images/gastonsemiglia.jpg",
    equipoActual: "Hebraica y Macabi",
    equipoActualAb: "HEB",
    logoEquipo: "images/hebraicaymacabi.png",
    equiposPasado: ["Marne", "Montevideo", "Larrañaga", "Bohemios", "Unión Atlética"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 186,
    numero: 18,
    edad: 30,
    extranjero: "No"
  },
  {
    nombre: "Facundo Terra",
    imagen: "images/facundoterra.jpg",
    equipoActual: "Hebraica y Macabi",
    equipoActualAb: "HEB",
    logoEquipo: "images/hebraicaymacabi.png",
    equiposPasado: ["Bohemios", "25 de Agosto"],
    posicion: "B",
    posicionNumero: 1,
    altura: 187,
    numero: 27,
    edad: 23,
    extranjero: "No"
  },
  {
    nombre: "Gerard Devaughn",
    imagen: "images/gerarddevaughn.jpg",
    equipoActual: "Hebraica y Macabi",
    equipoActualAb: "HEB",
    logoEquipo: "images/hebraicaymacabi.png",
    equiposPasado: [""],
    posicion: "P",
    posicionNumero: 5,
    altura: 205,
    numero: 41,
    edad: 33,
    extranjero: "Si"
  },
  {
    nombre: "Jarred Shaw",
    imagen: "images/jarredshaw.jpg",
    equipoActual: "Hebraica y Macabi",
    equipoActualAb: "HEB",
    logoEquipo: "images/hebraicaymacabi.png",
    equiposPasado: ["Goes", "Trouville"],
    posicion: "P",
    posicionNumero: 5,
    altura: 208,
    numero: 23,
    edad: 31,
    extranjero: "Si"
  },
  {
    nombre: "Gerardo Suero",
    imagen: "images/gerardosuero.jpg",
    equipoActual: "Hebraica y Macabi",
    equipoActualAb: "HEB",
    logoEquipo: "images/hebraicaymacabi.png",
    equiposPasado: [""],
    posicion: "ES",
    posicionNumero: 2,
    altura: 196,
    numero: 6,
    edad: 32,
    extranjero: "Si"
  },
  // Malvín
  {
    nombre: "Emmitt Holt",
    imagen: "",
    equipoActual: "Malvín",
    equipoActualAb: "MAL",
    logoEquipo: "images/malvin.png",
    equiposPasado: [""],
    posicion: "AP",
    posicionNumero: 4,
    altura: 201,
    numero: 1,
    edad: 25,
    extranjero: "Si"
  },
  {
    nombre: "Daniel Bejarano",
    imagen: "",
    equipoActual: "Malvín",
    equipoActualAb: "MAL",
    logoEquipo: "images/malvin.png",
    equiposPasado: [""],
    posicion: "ES",
    posicionNumero: 2,
    altura: 192,
    numero: 2,
    edad: 30,
    extranjero: "Si"
  },
  {
    nombre: "Fausto Pomoli",
    imagen: "images/faustopomoli.jpg",
    equipoActual: "Malvín",
    equipoActualAb: "MAL",
    logoEquipo: "images/malvin.png",
    equiposPasado: ["Montevideo", "Larrañaga", "Atenas", "Urunday Universitario", "Trouville", "Colón"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 200,
    numero: 5,
    edad: 27,
    extranjero: "No"
  },
  {
    nombre: "Federico Haller",
    imagen: "images/federicohaller.jpg",
    equipoActual: "Malvín",
    equipoActualAb: "MAL",
    logoEquipo: "images/malvin.png",
    equiposPasado: ["Cordón", "Goes", "Trouville", "Hebraica y Macabi", "Welcome", "Montevideo", "Lagomar", "Nacional", "Defensor Sporting"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 200,
    numero: 9,
    edad: 33,
    extranjero: "No"
  },
  {
    nombre: "Nicola Pomoli",
    imagen: "images/nicolapomoli.jpg",
    equipoActual: "Malvín",
    equipoActualAb: "MAL",
    logoEquipo: "images/malvin.png",
    equiposPasado: ["Colon", "Urupan"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 195,
    numero: 10,
    edad: 23,
    extranjero: "No"
  },
  {
    nombre: "Lucas Capalbo",
    imagen: "images/lucascapalbo.jpg",
    equipoActual: "Malvín",
    equipoActualAb: "MAL",
    logoEquipo: "images/malvin.png",
    equiposPasado: ["25 de Agosto"],
    posicion: "B",
    posicionNumero: 1,
    altura: 175,
    numero: 11,
    edad: 22,
    extranjero: "No"
  },
  {
    nombre: "Juan Santiso",
    imagen: "images/juansantiso.jpg",
    equipoActual: "Malvín",
    equipoActualAb: "MAL",
    logoEquipo: "images/malvin.png",
    equiposPasado: ["Capitol", "Nacional", "Atenas"],
    posicion: "B",
    posicionNumero: 1,
    altura: 185,
    numero: 13,
    edad: 27,
    extranjero: "No"
  },
  {
    nombre: "Kiril Wachsman",
    imagen: "images/kirilwachsman.jpg",
    equipoActual: "Malvín",
    equipoActualAb: "MAL",
    logoEquipo: "images/malvin.png",
    equiposPasado: ["Hebraica y Macabi", "Defensor Sporting", "Olimpia"],
    posicion: "P",
    posicionNumero: 5,
    altura: 203,
    numero: 33,
    edad: 37,
    extranjero: "No"
  },
  // Nacional
  {
    nombre: "Johndre Jefferson",
    imagen: "images/johndrejefferson.png",
    equipoActual: "Nacional",
    equipoActualAb: "NAC",
    logoEquipo: "images/nacional.png",
    equiposPasado: [""],
    posicion: "P",
    posicionNumero: 5,
    altura: 206,
    numero: 2,
    edad: 33,
    extranjero: "Si"
  },
  {
    nombre: "Emiliano Baston",
    imagen: "images/emilianobaston.png",
    equipoActual: "Nacional",
    equipoActualAb: "NAC",
    logoEquipo: "images/nacional.png",
    equiposPasado: ["Aguada", "Hebraica y Macabi", "Welcome", "Waston", "Verdirrojo", "Atenas", "Biguá", "Defensor Sporting"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 202,
    numero: 5,
    edad: 34,
    extranjero: "No"
  },
  {
    nombre: "Santiago Moglia",
    imagen: "images/santiagomoglia.png",
    equipoActual: "Nacional",
    equipoActualAb: "NAC",
    logoEquipo: "images/nacional.png",
    equiposPasado: ["Welcome", "Larre Borges", "Anastasia", "Larrañaga", "Unión Atlética", "Capitol", "Goes", "Biguá"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 196,
    numero: 10,
    edad: 32,
    extranjero: "No"
  },
  {
    nombre: "Manuel Romero",
    imagen: "images/manuelromero.png",
    equipoActual: "Nacional",
    equipoActualAb: "NAC",
    logoEquipo: "images/nacional.png",
    equiposPasado: ["Trouville", "Urunday Universitario"],
    posicion: "B",
    posicionNumero: 1,
    altura: 183,
    numero: 13,
    edad: 30,
    extranjero: "No"
  },
  {
    nombre: "Jonathan Sacco",
    imagen: "images/jonathansacco.png",
    equipoActual: "Nacional",
    equipoActualAb: "NAC",
    logoEquipo: "images/nacional.png",
    equiposPasado: ["Unión Atlética"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 200,
    numero: 14,
    edad: 27,
    extranjero: "No"
  },
  {
    nombre: "Patricio Prieto",
    imagen: "images/patricioprieto.png",
    equipoActual: "Nacional",
    equipoActualAb: "NAC",
    logoEquipo: "images/nacional.png",
    equiposPasado: [""],
    posicion: "B",
    posicionNumero: 4,
    altura: 185,
    numero: 21,
    edad: 19,
    extranjero: "No"
  },
  {
    nombre: "Quincy Miller",
    imagen: "images/quincymiller.png",
    equipoActual: "Nacional",
    equipoActualAb: "NAC",
    logoEquipo: "images/nacional.png",
    equiposPasado: [""],
    posicion: "AP",
    posicionNumero: 4,
    altura: 206,
    numero: 30,
    edad: 29,
    extranjero: "Si"
  },
  {
    nombre: "Mauro Zubiaurre",
    imagen: "images/maurozubiaurre.png",
    equipoActual: "Nacional",
    equipoActualAb: "NAC",
    logoEquipo: "images/nacional.png",
    equiposPasado: ["Atenas", "Marne", "Cordon", "Urunday Universitario", "Larre Borges"],
    posicion: "B",
    posicionNumero: 1,
    altura: 190,
    numero: 31,
    edad: 27,
    extranjero: "No"
  },
  {
    nombre: "Dominique Morrison",
    imagen: "images/dominiquemorrison.png",
    equipoActual: "Nacional",
    equipoActualAb: "NAC",
    logoEquipo: "images/nacional.png",
    equiposPasado: [""],
    posicion: "AL",
    posicionNumero: 3,
    altura: 198,
    numero: 45,
    edad: 32,
    extranjero: "Si"
  },
  {
    nombre: "Pierino Rush",
    imagen: "images/pierinorush.png",
    equipoActual: "Nacional",
    equipoActualAb: "NAC",
    logoEquipo: "images/nacional.png",
    equiposPasado: ["Hebraica y Macabi", "25 de Agosto"],
    posicion: "B",
    posicionNumero: 1,
    altura: 183,
    numero: 99,
    edad: 23,
    extranjero: "No"
  },
  // Olimpia
  {
    nombre: "Juan Viana",
    imagen: "images/juanviana.jpg",
    equipoActual: "Olimpia",
    equipoActualAb: "OLI",
    logoEquipo: "images/olimpia.png",
    equiposPasado: ["Stockolmo", "Larrañaga", "Cordon", "Tabaré"],
    posicion: "B",
    posicionNumero: 1,
    altura: 180,
    numero: 5,
    edad: 25,
    extranjero: "No"
  },
  {
    nombre: "Mateo Dogliotti",
    imagen: "images/mateodogliotti.jpg",
    equipoActual: "Olimpia",
    equipoActualAb: "OLI",
    logoEquipo: "images/olimpia.png",
    equiposPasado: ["Sayago"],
    posicion: "B",
    posicionNumero: 1,
    altura: 183,
    numero: 7,
    edad: 22,
    extranjero: "No"
  },
  {
    nombre: "Agustin Cabillon",
    imagen: "images/agustincabillon.jpg",
    equipoActual: "Olimpia",
    equipoActualAb: "OLI",
    logoEquipo: "images/olimpia.png",
    equiposPasado: ["Capitol", "Tabaré", "Larrañaga"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 198,
    numero: 8,
    edad: 26,
    extranjero: "No"
  },
  {
    nombre: "Nicolas Catala",
    imagen: "images/nicolascatala.jpg",
    equipoActual: "Olimpia",
    equipoActualAb: "OLI",
    logoEquipo: "images/olimpia.png",
    equiposPasado: ["Bohemios", "Olivol Mundial", "Yale", "Marne", "Atenas", "Trouville", "Larre Borges"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 196,
    numero: 9,
    edad: 30,
    extranjero: "No"
  },
  {
    nombre: "Brian Garcia",
    imagen: "images/briangarcia.jpg",
    equipoActual: "Olimpia",
    equipoActualAb: "OLI",
    logoEquipo: "images/olimpia.png",
    equiposPasado: ["Cordón", "Goes", "25 de Agosto"],
    posicion: "B",
    posicionNumero: 1,
    altura: 182,
    numero: 21,
    edad: 31,
    extranjero: "No"
  },
  {
    nombre: "Pablo Macanskas",
    imagen: "images/pablomacanskas.jpg",
    equipoActual: "Olimpia",
    equipoActualAb: "OLI",
    logoEquipo: "images/olimpia.png",
    equiposPasado: ["Larre Borges", "Verdirrojo", "Nacional", "Atenas", "Olivol Mundial", "Lagomar"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 196,
    numero: 24,
    edad: 31,
    extranjero: "No"
  },
  {
    nombre: "Abel Agarbado",
    imagen: "images/abelagarbado.jpg",
    equipoActual: "Olimpia",
    equipoActualAb: "OLI",
    logoEquipo: "images/olimpia.png",
    equiposPasado: ["Nacional"],
    posicion: "B",
    posicionNumero: 1,
    altura: 179,
    numero: 25,
    edad: 29,
    extranjero: "No"
  },
  {
    nombre: "Brandon Nazione",
    imagen: "images/brandonnazione.jpg",
    equipoActual: "Olimpia",
    equipoActualAb: "OLI",
    logoEquipo: "images/olimpia.png",
    equiposPasado: [""],
    posicion: "P",
    posicionNumero: 5,
    altura: 203,
    numero: 8,
    edad: 27,
    extranjero: "Si"
  },
  {
    nombre: "Brian Fitzpatrick",
    imagen: "",
    equipoActual: "Olimpia",
    equipoActualAb: "OLI",
    logoEquipo: "images/olimpia.png",
    equiposPasado: [""],
    posicion: "AP",
    posicionNumero: 4,
    altura: 203,
    numero: 45,
    edad: 32,
    extranjero: "Si"
  },
  {
    nombre: "Isaac Hamilton",
    imagen: "",
    equipoActual: "Olimpia",
    equipoActualAb: "OLI",
    logoEquipo: "images/olimpia.png",
    equiposPasado: [""],
    posicion: "ES",
    posicionNumero: 2,
    altura: 196,
    numero: 6,
    edad: 27,
    extranjero: "Si"
  },
  // Olivol Mundial
  {
    nombre: "Anthony Danridge",
    imagen: "images/anthonydanridge.jpg",
    equipoActual: "Olivol Mundial",
    equipoActualAb: "OMU",
    logoEquipo: "images/olivolmundial.png",
    equiposPasado: ["Montevideo", "Sayago", "Larrañaga", "Nacional", "Trouville", "Capitol", "Stockolmo"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 196,
    numero: 1,
    edad: 36,
    extranjero: "Si"
  },
  {
    nombre: "Angel Varela",
    imagen: "images/angelvarela.jpg",
    equipoActual: "Olivol Mundial",
    equipoActualAb: "OMU",
    logoEquipo: "images/olivolmundial.png",
    equiposPasado: ["Urunday Universitario", "Olimpia", "Yale", "Larre Borges", "Unión Atlética", "Defensor Sporting", "Welcome", "Danubio"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 188,
    numero: 2,
    edad: 34,
    extranjero: "No"
  },
  {
    nombre: "Pedro Ianguas",
    imagen: "images/pedroianguas.jpg",
    equipoActual: "Olivol Mundial",
    equipoActualAb: "OMU",
    logoEquipo: "images/olivolmundial.png",
    equiposPasado: [""],
    posicion: "P",
    posicionNumero: 5,
    altura: 210,
    numero: 4,
    edad: 24,
    extranjero: "Si"
  },
  {
    nombre: "Christian Pereira",
    imagen: "images/christianpereira.jpg",
    equipoActual: "Olivol Mundial",
    equipoActualAb: "OMU",
    logoEquipo: "images/olivolmundial.png",
    equiposPasado: ["Goes", "Marne", "Colon", "Larre Borges"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 194,
    numero: 8,
    edad: 28,
    extranjero: "No"
  },
  {
    nombre: "Santiago Wohlwend",
    imagen: "images/santiagowohlwend.jpg",
    equipoActual: "Olivol Mundial",
    equipoActualAb: "OMU",
    logoEquipo: "images/olivolmundial.png",
    equiposPasado: ["Goes", "Miramar", "Urupan", "Lagomar"],
    posicion: "B",
    posicionNumero: 1,
    altura: 172,
    numero: 10,
    edad: 25,
    extranjero: "No"
  },
  {
    nombre: "Rodrigo Cardozo",
    imagen: "images/rodrigocardozo.jpg",
    equipoActual: "Olivol Mundial",
    equipoActualAb: "OMU",
    logoEquipo: "images/olivolmundial.png",
    equiposPasado: ["Lagomar", "Olimpia", "Larre Borges", "Miramar", "25 de Agosto", "Montevideo", "Capurro"],
    posicion: "AL",
    posicionNumero: 2,
    altura: 191,
    numero: 15,
    edad: 29,
    extranjero: "No"
  },
  {
    nombre: "Diego Alvarez",
    imagen: "images/diegoalvarez.jpg",
    equipoActual: "Olivol Mundial",
    equipoActualAb: "OMU",
    logoEquipo: "images/olivolmundial.png",
    equiposPasado: ["25 de Agosto", "Larre Borges", "Biguá", "Olimpia", "Peñarol", "Cordón"],
    posicion: "B",
    posicionNumero: 1,
    altura: 180,
    numero: 22,
    edad: 32,
    extranjero: "No"
  },
  {
    nombre: "Juan Manuel Rivero",
    imagen: "",
    equipoActual: "Olivol Mundial",
    equipoActualAb: "OMU",
    logoEquipo: "images/olivolmundial.png",
    equiposPasado: [""],
    posicion: "ES",
    posicionNumero: 2,
    altura: 191,
    numero: 4,
    edad: 37,
    extranjero: "Si"
  },
  // Peñarol
  {
    nombre: "Salvador Zanotta",
    imagen: "images/salvadorzanotta.jpg",
    equipoActual: "Peñarol",
    equipoActualAb: "PEÑ",
    logoEquipo: "images/peñarol.png",
    equiposPasado: ["Hebraica y Macabi", "Cordón", "Nacional", "Unión Atlética", "Biguá", "Capitol", "Tabaré"],
    posicion: "B",
    posicionNumero: 1,
    altura: 185,
    numero: 3,
    edad: 27,
    extranjero: "No"
  },
  {
    nombre: "Diego Garcia",
    imagen: "images/diegogarcia.jpg",
    equipoActual: "Peñarol",
    equipoActualAb: "PEÑ",
    logoEquipo: "images/peñarol.png",
    equiposPasado: ["Defensor Sporting", "Atenas", "Aguada"],
    posicion: "B",
    posicionNumero: 1,
    altura: 186,
    numero: 4,
    edad: 29,
    extranjero: "No"
  },
  {
    nombre: "Leandro Garcia Morandi",
    imagen: "images/leandrogarciamorandi.jpg",
    equipoActual: "Peñarol",
    equipoActualAb: "PEÑ",
    logoEquipo: "images/peñarol.png",
    equiposPasado: ["Marne", "Miramar"],
    posicion: "B",
    posicionNumero: 1,
    altura: 191,
    numero: 6,
    edad: 23,
    extranjero: "No"
  },
  {
    nombre: "Diego Soarez",
    imagen: "images/diegosoarez.jpg",
    equipoActual: "Peñarol",
    equipoActualAb: "PEÑ",
    logoEquipo: "images/peñarol.png",
    equiposPasado: ["Defensor Sporting", "Atenas", "Welcome", "Trouville", "Urunday Universitario", "Hebraica y Macabi", "Aguada"],
    posicion: "P",
    posicionNumero: 5,
    altura: 205,
    numero: 8,
    edad: 34,
    extranjero: "No"
  },
  {
    nombre: "Mateo Giano",
    imagen: "images/mateogiano.jpg",
    equipoActual: "Peñarol",
    equipoActualAb: "PEÑ",
    logoEquipo: "images/peñarol.png",
    equiposPasado: ["San Telmo Rapido Sport", "Stockolmo"],
    posicion: "B",
    posicionNumero: 1,
    altura: 186,
    numero: 9,
    edad: 21,
    extranjero: "No"
  },
  {
    nombre: "Martin Aguilera",
    imagen: "images/martinaguilera.jpg",
    equipoActual: "Peñarol",
    equipoActualAb: "PEÑ",
    logoEquipo: "images/peñarol.png",
    equiposPasado: ["Trouville", "Capurro", "Aguada", "25 de Agosto", "Olimpia", "Hebraica y Macabi", "Goes", "Urunday Universitario", "Verdirrojo"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 195,
    numero: 12,
    edad: 34,
    extranjero: "No"
  },
  {
    nombre: "Lee Roberts",
    imagen: "images/leeroberts.jpg",
    equipoActual: "Peñarol",
    equipoActualAb: "PEÑ",
    logoEquipo: "images/peñarol.png",
    equiposPasado: ["Aguada"],
    posicion: "P",
    posicionNumero: 5,
    altura: 201,
    numero: 24,
    edad: 35,
    extranjero: "Si"
  },
  {
    nombre: "Nicolas Borsellino",
    imagen: "images/nicolasborsellino.jpg",
    equipoActual: "Peñarol",
    equipoActualAb: "PEÑ",
    logoEquipo: "images/peñarol.png",
    equiposPasado: ["Malvín", "Capurro", "Urunday Universitario", "Hebraica y Macabi", "Aguada", "Trouville", "Biguá", "Goes", "Cordón"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 202,
    numero: 41,
    edad: 35,
    extranjero: "No"
  },
  {
    nombre: "Gianfranco Espindola",
    imagen: "images/gianfrancoespindola.jpg",
    equipoActual: "Peñarol",
    equipoActualAb: "PEÑ",
    logoEquipo: "images/peñarol.png",
    equiposPasado: ["Bohemios", "Lagomar", "Nacional", "Stockolmo", "Colón"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 196,
    numero: 51,
    edad: 22,
    extranjero: "No"
  },
  {
    nombre: "John Flowers",
    imagen: "images/johnflowers.jpg",
    equipoActual: "Peñarol",
    equipoActualAb: "PEÑ",
    logoEquipo: "images/peñarol.png",
    equiposPasado: [""],
    posicion: "AP",
    posicionNumero: 4,
    altura: 201,
    numero: 69,
    edad: 32,
    extranjero: "Si"
  },
  {
    nombre: "Orlando Mendez",
    imagen: "images/orlandomendez.png",
    equipoActual: "Peñarol",
    equipoActualAb: "PEÑ",
    logoEquipo: "images/peñarol.png",
    equiposPasado: [""],
    posicion: "B",
    posicionNumero: 1,
    altura: 183,
    numero: 33,
    edad: 35,
    extranjero: "Si"
  },
  // Trouville
  {
    nombre: "Manuel Mayora",
    imagen: "images/manuelmayora.jpg",
    equipoActual: "Trouville",
    equipoActualAb: "TRO",
    logoEquipo: "images/trouville.png",
    equiposPasado: ["Montevideo", "25 de Agosto", "Unión Atlética"],
    posicion: "B",
    posicionNumero: 1,
    altura: 180,
    numero: 100,
    edad: 24,
    extranjero: "No"
  },
  {
    nombre: "Santiago Massa",
    imagen: "images/santiagomassa.jpg",
    equipoActual: "Trouville",
    equipoActualAb: "TRO",
    logoEquipo: "images/trouville.png",
    equiposPasado: ["Verdirrojo", "Unión Atlética", "25 de Agosto"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 190,
    numero: 7,
    edad: 25,
    extranjero: "No"
  },
  {
    nombre: "Gonzalo Iglesias",
    imagen: "images/gonzaloiglesias.jpg",
    equipoActual: "Trouville",
    equipoActualAb: "TRO",
    logoEquipo: "images/trouville.png",
    equiposPasado: ["Aguada", "Capitol", "Defensor Sporting"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 201,
    numero: 10,
    edad: 28,
    extranjero: "No"
  },
  {
    nombre: "Dwayne Davis",
    imagen: "images/dwaynedavis.jpg",
    equipoActual: "Trouville",
    equipoActualAb: "TRO",
    logoEquipo: "images/trouville.png",
    equiposPasado: ["Aguada"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 196,
    numero: 27,
    edad: 32,
    extranjero: "Si"
  },
  {
    nombre: "Federico Soto",
    imagen: "images/federicosoto.jpg",
    equipoActual: "Trouville",
    equipoActualAb: "TRO",
    logoEquipo: "images/trouville.png",
    equiposPasado: ["Capitol", "Miramar", "Urupan"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 195,
    numero: 77,
    edad: 24,
    extranjero: "No"
  },
  {
    nombre: "Miles Bowman JR",
    imagen: "",
    equipoActual: "Trouville",
    equipoActualAb: "TRO",
    logoEquipo: "images/trouville.png",
    equiposPasado: [""],
    posicion: "AL",
    posicionNumero: 3,
    altura: 198,
    numero: 99,
    edad: 28,
    extranjero: "Si"
  },
  {
    nombre: "Tyler Harris",
    imagen: "images/",
    equipoActual: "Trouville",
    equipoActualAb: "TRO",
    logoEquipo: "images/trouville.png",
    equiposPasado: [""],
    posicion: "P",
    posicionNumero: 5,
    altura: 208,
    numero: 1,
    edad: 28,
    extranjero: "Si"
  },
  // Urunday Universitario
  {
    nombre: "JC Fuller",
    imagen: "",
    equipoActual: "Urunday Universitario",
    equipoActualAb: "UU",
    logoEquipo: "images/urundayuniversitario.png",
    equiposPasado: [""],
    posicion: "ES",
    posicionNumero: 2,
    altura: 194,
    numero: 6,
    edad: 27,
    extranjero: "Si"
  },
  {
    nombre: "Tanksley Efianayi",
    imagen: "images/tanksleyefianayi.png",
    equipoActual: "Urunday Universitario",
    equipoActualAb: "UU",
    logoEquipo: "images/urundayuniversitario.png",
    equiposPasado: [""],
    posicion: "AL",
    posicionNumero: 3,
    altura: 198,
    numero: 7,
    edad: 27,
    extranjero: "Si"
  },
  {
    nombre: "German Silvarrey",
    imagen: "images/germansilvarrey.png",
    equipoActual: "Urunday Universitario",
    equipoActualAb: "UU",
    logoEquipo: "images/urundayuniversitario.png",
    equiposPasado: ["Sayago", "Welcome", "Malvín", "Olimpia", "Nacional"],
    posicion: "B",
    posicionNumero: 1,
    altura: 176,
    numero: 9,
    edad: 34,
    extranjero: "No"
  },
  {
    nombre: "Andres Dotti",
    imagen: "images/andresdotti.png",
    equipoActual: "Urunday Universitario",
    equipoActualAb: "UU",
    logoEquipo: "images/urundayuniversitario.png",
    equiposPasado: ["Aguada", "Larrañaga", "Larre Borges", "Defensor Sporting", "Peñarol"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 180,
    numero: 10,
    edad: 28,
    extranjero: "No"
  },
  {
    nombre: "Nicolas Delgado",
    imagen: "images/nicolasdelgado.png",
    equipoActual: "Urunday Universitario",
    equipoActualAb: "UU",
    logoEquipo: "images/urundayuniversitario.png",
    equiposPasado: ["Cordón", "Welcome", "Olimpia", "Verdirrojo", "Nacional", "Verdirrojo", "Unión Atlética"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 198,
    numero: 13,
    edad: 35,
    extranjero: "No"
  },
  {
    nombre: "Ignacio Morena",
    imagen: "images/ignaciomorena.png",
    equipoActual: "Urunday Universitario",
    equipoActualAb: "UU",
    logoEquipo: "images/urundayuniversitario.png",
    equiposPasado: ["Tabaré", "Miramar"],
    posicion: "B",
    posicionNumero: 1,
    altura: 183,
    numero: 20,
    edad: 22,
    extranjero: "No"
  },
  {
    nombre: "Agustin Da Costa",
    imagen: "images/agustindacosta.png",
    equipoActual: "Urunday Universitario",
    equipoActualAb: "UU",
    logoEquipo: "images/urundayuniversitario.png",
    equiposPasado: ["Bohemios", "Defensor Sporting", "Larre Borges", "Colón", "Lagomar"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 191,
    numero: 23,
    edad: 23,
    extranjero: "No"
  },
  {
    nombre: "Facundo Medina",
    imagen: "images/facundomedina.png",
    equipoActual: "Urunday Universitario",
    equipoActualAb: "UU",
    logoEquipo: "images/urundayuniversitario.png",
    equiposPasado: ["Hebraica y Macabi", "Stockolmo", "Tabaré", "Cordón"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 190,
    numero: 31,
    edad: 27,
    extranjero: "No"
  },
  {
    nombre: "Chaz Crawford",
    imagen: "images/chazcrawford.png",
    equipoActual: "Urunday Universitario",
    equipoActualAb: "UU",
    logoEquipo: "images/urundayuniversitario.png",
    equiposPasado: ["Goes"],
    posicion: "P",
    posicionNumero: 5,
    altura: 208,
    numero: 24,
    edad: 37,
    extranjero: "Si"
  },
  // Urupan
  {
    nombre: "Donald Robinson",
    imagen: "",
    equipoActual: "Urupan",
    equipoActualAb: "URU",
    logoEquipo: "images/urupan.png",
    equiposPasado: ["Trouville", "Biguá"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 193,
    numero: 0,
    edad: 32,
    extranjero: "Si"
  },
  {
    nombre: "Mateo Suarez",
    imagen: "images/mateosuarez.jpg",
    equipoActual: "Urupan",
    equipoActualAb: "URU",
    logoEquipo: "images/urupan.png",
    equiposPasado: ["Urunday Universitario", "Montevideo", "Verdirrojo", "Olivol Mundial"],
    posicion: "ES",
    posicionNumero: 2,
    altura: 192,
    numero: 4,
    edad: 26,
    extranjero: "No"
  },
  {
    nombre: "Mateo Sarni",
    imagen: "images/mateosarni.jpg",
    equipoActual: "Urupan",
    equipoActualAb: "URU",
    logoEquipo: "images/urupan.png",
    equiposPasado: ["Larrañaga", "Urunday Universitario", "Larre Borges", "Nacional", "Aguada"],
    posicion: "B",
    posicionNumero: 1,
    altura: 185,
    numero: 6,
    edad: 24,
    extranjero: "No"
  },
  {
    nombre: "Hernando Caceres",
    imagen: "images/hernandocaceres.jpg",
    equipoActual: "Urupan",
    equipoActualAb: "URU",
    logoEquipo: "images/urupan.png",
    equiposPasado: ["Trouville", "Goes", "Capitol", "Hebraica y Macabi"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 202,
    numero: 11,
    edad: 27,
    extranjero: "No"
  },
  {
    nombre: "Antonio Bivins",
    imagen: "images/antoniobivins.jpg",
    equipoActual: "Urupan",
    equipoActualAb: "URU",
    logoEquipo: "images/urupan.png",
    equiposPasado: ["Unión Atlética"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 196,
    numero: 13,
    edad: 29,
    extranjero: "Si"
  },
  {
    nombre: "Martin Trelles",
    imagen: "images/martintrelles.jpg",
    equipoActual: "Urupan",
    equipoActualAb: "URU",
    logoEquipo: "images/urupan.png",
    equiposPasado: ["Bohemios", "Sayago", "Miramar", "Welcome", "Capitol", "Hebraica y Macabi", "Unión Atlética", "Colón"],
    posicion: "AL",
    posicionNumero: 3,
    altura: 187,
    numero: 14,
    edad: 26,
    extranjero: "No"
  },
  {
    nombre: "Sebastian Ottonello",
    imagen: "images/sebastianottonello.jpg",
    equipoActual: "Urupan",
    equipoActualAb: "URU",
    logoEquipo: "images/urupan.png",
    equiposPasado: ["25 de Agosto", "Welcome", "Defensor Sporting", "Unión Atlética", "Miramar"],
    posicion: "AP",
    posicionNumero: 4,
    altura: 200,
    numero: 18,
    edad: 24,
    extranjero: "No"
  },
  {
    nombre: "Zygimantas Riauka",
    imagen: "images/zygimantasriauka.jpg",
    equipoActual: "Urupan",
    equipoActualAb: "URU",
    logoEquipo: "images/urupan.png",
    equiposPasado: ["Olimpia", "Miramar", "Sayago"],
    posicion: "P",
    posicionNumero: 5,
    altura: 206,
    numero: 33,
    edad: 29,
    extranjero: "Si"
  }
]

// Ingreso las opcines en el input
$( function() {

  // var j = '';
  // for (let i=0; i<jugadores.length; i++) {
  //   j += "<option>"+jugadores[i].nombre+"</option>";
  // }
  // $(j).appendTo('#opcionesJ');

  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }


  for (let i=0; i<jugadores.length; i++) {
    j.push(jugadores[i].nombre);
  }

  autocomplete(document.getElementById("buscador"), j);

});
