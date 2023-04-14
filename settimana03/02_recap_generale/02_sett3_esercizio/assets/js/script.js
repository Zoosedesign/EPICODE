/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log('****ESERCIZIO 1****');

function somma(par1, par2) {
  let primiDue = par1.slice(0, 2);
  let ultimiTre = par2.slice(5, 8);
  let unisco = (primiDue + ultimiTre).toUpperCase();
  return unisco;
}

console.log(somma('pippo', 'paperino'));

//oppure
console.log('****ESERCIZIO 1mod****');

function sommaConcat(par1, par2) {
  let nuovaStringa = par1.slice(0, 2).concat(par2.slice(5, 8));
  return nuovaStringa.toUpperCase();
}

const conConcat = sommaConcat('pippo', 'paperino')
console.log(`${conConcat} fatto con concat`);

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log('****ESERCIZIO 2****');

function randomArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    let randomNum = Math.floor(Math.random() * 101);
    arr.push(randomNum);
  }
  return arr;
}

console.log(randomArray(10));

console.log('****ESERCIZIO 2mod****');
// Soluzione alternativa per essere sicuri che non si ripetano i numeri
const dieciElementi = [];
let j = 0;
while (j < 10) {
  let casuale = Math.floor(Math.random() * (100 + 1));
  if (dieciElementi.includes(casuale) === false) {
    dieciElementi.push(casuale);
    j++;
  }
}

console.log(dieciElementi);

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/
console.log('****ESERCIZIO 3****');

//const newArray = randomArray(10);
const newArray = [13, 45, 62, 23, 4];

function filterArray(array) {
  const arr = [];
  array.forEach(element => {
    if (element % 2 === 0) {
      arr.push(element);
      return;
    }
  })
  return arr;
}

console.log(filterArray(newArray));

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log('****ESERCIZIO 4****');

function sommaNumeri(array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    somma += array[i];
  }
  return somma;
}

const somma1 = sommaNumeri(newArray);
console.log(`${somma1} con metodo classico`);

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
console.log('****ESERCIZIO 5****');

function sommaNumeri2(array) {
  return array.reduce((totale, n) =>
    totale + n, //In ogni iterazione, sommiamo l'elemento corrente all'accumulatore "0" e restituiamo il risultato.
    0);//impostiamo l'accumolatore iniziale a 0
}

const somma2 = sommaNumeri2(newArray);
console.log(`${somma2} con metodo reduce`);

//stesso metodo con esempio funzione freccia
const sommaNumeri3 = array => array.reduce((totale, n) => totale + n, 0);

const somma3 = sommaNumeri3(newArray);
console.log(`${somma3} con metodo reduce in una funzione freccia`);

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log('****ESERCIZIO 6****');

//passiamo i due parametri, l'array e il n per l'incrementazione
function incremento(arr, n) {
  const array = [];
  arr.forEach(element => {
    array.push(element + n);
  });
  return array;
}

console.log(incremento([1, 44, 5, 67], 10));

//se dovessimo farlo con il ciclo for
/*
function incremento2(arr, n) {
  const arr = [];
  for (let i = 0; i < arr.length; i++) {
    arr.push(arr[i] + n);
  }
  return arr;
}

console.log(incremento2([1, 44, 5, 67], 10));
*/

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log('****ESERCIZIO 8****');

function lunghezzeStringhe(array) {
  const lunghezze = []; // Array vuoto che conterrà le lunghezze delle stringhe
  for (let i = 0; i < array.length; i++) { // Ciclo for che scorre l'array di stringhe
    lunghezze.push(array[i].length); // array[i].lenght aggiunge la lunghezza totale della stringa
  }
  return lunghezze; // Ritorna l'array delle lunghezze
}

const fraseArray = ["EPICODE", "is", "great"];
console.log(lunghezzeStringhe(fraseArray));

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log('****ESERCIZIO 9****');

function valoriDispari() {
  const arr = []; // array vuoto in cui inserire i numeri dispari

  for (let i = 1; i <= 99; i++) { // ciclo for che va da 1 a 99
    if (i % 2 === 1) { // se il numero è dispari
      arr.push(i);
    }
  }
  return arr;
}

console.log(valoriDispari());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

console.log('****ESERCIZIO 10****');

const oldestMovie = (array) => {
	let result = { Year: 2100 };
	for (let i = 0; i < array.length; i++) {
		let currentYear = Number(array[i].Year);
		if (currentYear < result.Year) {
			result = array[i];
		}
	}

	return result;
};

console.log(oldestMovie(movies));

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

console.log('****ESERCIZIO 11****');

const countMovies = (array) => {
	return array.length;
};

console.log(countMovies(movies));

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

console.log('****ESERCIZIO 12****');

const onlyTitles = (array) => {
	return array.map((elem) => elem.Title);
};

console.log(onlyTitles(movies));

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

console.log('****ESERCIZIO 13****');

const onlyInThisMillennium = (array) => {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		if (Number(array[i].Year) > 2000) {
			result.push(array[i]);
		}
	}
	return result;
};

console.log(onlyInThisMillennium(movies));

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

console.log('****ESERCIZIO 14****');

const getMovieById = function (array, id) {
	let foundMovie = null;
	for (let i = 0; i < array.length; i++) {
		if (array[i].imdbID === id) {
			foundMovie = array[i];
		}
	}
	return foundMovie;
};

console.log(getMovieById(movies, 'tt0355702'));

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

console.log('****ESERCIZIO 15****');

const sumAllTheYears = (array) => {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		result += Number(array[i].Year);
	}
	return result;
};

console.log(sumAllTheYears(movies));

/* ESERCIZIO 16 EXTRA
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

var selezione = document.getElementById('selezione');

// Popolamento della combo
for (let i = 0; i < movies.length; i++) {
	selezione.innerHTML += `<option value="${movies[i].imdbID}">${movies[i].Title}</option>`;
}

// Ricerca film selezionato
var btnScegli = document.getElementById('scegli');
btnScegli.addEventListener('click', function () {
	var selezionato = selezione.value;
	for (let i = 0; i < movies.length; i++) {
		if (movies[i].imdbID == selezionato) {
			document.getElementById(
				'scheda'
			).innerHTML = `<h1>${movies[i].Title}</h1><h3>Anno: ${movies[i].Year}</h3><img src=${movies[i].Poster}>`;
		}
	}
});

