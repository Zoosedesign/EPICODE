/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('----- Esercizio A -----');

const sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('----- Esercizio B -----');

let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('----- Esercizio C -----');

const me = {
  name: 'Andrea',
  surname: 'Zucchetti',
  age: '32'
}

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('----- Esercizio D -----');

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('----- Esercizio E -----');

me.skills = ['html', 'css', 'javascript'];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('----- Esercizio F -----');

me.skills.push('angular');
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('----- Esercizio G -----');

me.skills.pop();
console.log(me);

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('----- Esercizio 1 -----');

let dice = (n) => Math.floor(Math.random() * n) + 1;
console.log(dice(6));

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log('----- Esercizio 2 -----');

let whoIsBigger = (a, b) => a > b ? a : b;
console.log(whoIsBigger(50, 145));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('----- Esercizio 3 -----');

let string = 'I love coding';
let splitMe = (str) => str.split(' ');

console.log(splitMe(string));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('----- Esercizio 4 -----');

let deleteOne = (str, bool) => bool === true ? str.slice(1) : str.slice(0, str.length - 1);
console.log(deleteOne('stringa', true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log('----- Esercizio 5 -----');

//"/\d+/g" espressione di ricerca tutti i numeri nella stringa
//"/\s+/g" espressione di ricerca di tutti gli eventuali spazi doppi nella stringa
let onlyLetters = (str) => str.replace(/\d+/g, '').replace(/\s+/g, ' ');
console.log(onlyLetters("I have 4 dogs and 456 cats"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('----- Esercizio 6 -----');

let isThisAnEmail = (str) => str.includes('@', '.') && str.length >= 7 ? true : false;
// ho impostato "str.length > 7" perchè la @ + . + it (non credo che ci siano domini territoriali inferiori a 2) + dominio aziendali (stesso pensiero di it) + nome (che potrebbe essere anche di un solo carattere)

console.log(isThisAnEmail('andre@gmail.it'));
console.log(isThisAnEmail('a@m.it'));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('----- Esercizio 7 -----');
console.log('----- risultato commentato per far funzionare esercizio 9 -----');

/*
function whatDayIsIt() {
  let today = new Date();
  switch (today.getDay()) {
    case 0:
      return 'è Domenica';
    case 1:
      return 'è Lunedì';
    case 2:
      return 'è Martedì';
    case 3:
      return 'è Mercoledì';
    case 4:
      return 'è Giovedì';
    case 5:
      return 'è Venerdì';
    case 6:
      return 'è Sabato';
  }
}

console.log(whatDayIsIt());
*/

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('----- Esercizio 8 -----');

let rollTheDices = (n) => {
  let total = 0;
  let arrayValues = [];
  for (let i = 0; i < n; i++) {
    let roll = dice(n);
    total += roll;
    arrayValues.push(roll);
  }
  return {
    sum: total,
    values: arrayValues
  };
};

console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log('----- Esercizio 9 -----');

let firstDate = new Date('2017-01-26');

function whatDayIsIt(d) {
  const today = new Date();
  const days = today - d;
  return Math.floor(days / 1000 / 60 / 60 / 24);
}

console.log(whatDayIsIt(firstDate));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log('----- Esercizio 10 -----');

let birthDay = new Date('2017-04-03');

function isTodayMyBirthday(d) {
  const today = new Date();
  if (d.getDate() === today.getDate() && d.getMonth() === today.getMonth()) {
    return 'è il mio compleanno';
  } else {
    return 'non è il mio compleanno';
  }
}

console.log(isTodayMyBirthday(birthDay));

//////////////////////////////////////////////////////////////
// Arrays & Oggetti
//////////////////////////////////////////////////////////////
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('----- Esercizio 11 -----');

function deleteProp(obj, str) {
  for (let i = 0; i < obj.length; i++) {
    delete obj[i][str];
  }
}

deleteProp(movies, "imdbID");
console.log(movies);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log('----- Esercizio 12 -----');

function newestMovie(arr) {
  let result = { Year: 0 };
  for (let i = 0; i < arr.length; i++) {
    let currentYear = Number(arr[i].Year);
    if (currentYear > result.Year) {
      result = arr[i];
    }
  }
  return result;
}

console.log(newestMovie(movies))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log('----- Esercizio 13 -----');

const countMovies = (arr) => arr.length;

console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log('----- Esercizio 14 -----');

function onlyTheYears(arr) {
  return arr.map(arr => Number(arr.Year));
}

var yearsMovies = (onlyTheYears(movies));
console.log(yearsMovies);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log('----- Esercizio 15 -----');

function onlyInLastMillennium(arr) {
  return arr.filter(arr => Number(arr.Year <= 2000));
}

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log('----- Esercizio 16 -----');

function sumAllTheYears() {
  return yearsMovies.reduce((tot, movieYear) => tot + movieYear);
}

console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log('----- Esercizio 17 -----');

function searchByTitle(arr, str) {
  return arr.filter(arr => arr.Title.includes(str));
}

var avengersMovie = searchByTitle(movies, 'Avengers');
console.log(avengersMovie);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log('----- Esercizio 18 -----');

function searchAndDivide(arr, str) {
  const match = avengersMovie;
  const unmatch = arr.filter(arr => !arr.Title.includes(str));
  return unmatch;
}

console.log(searchAndDivide(movies, 'Avengers'));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('----- Esercizio 19 -----');

function removeIndex(obj, n) {
  for (let i = 0; i < obj.length; i++) {
    delete obj[n];
  }
  return obj;
}

console.log(removeIndex(movies, 3));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log('----- Esercizio 20 -----');

console.log(document.getElementById('container'));

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log('----- Esercizio 21 -----');

const allTd = document.querySelectorAll('td');
console.log(allTd);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log('----- Esercizio 22 -----');

function printTableCellText(tag) {
  for (let i = 0; i < tag.length; i++) {
    console.log(tag[i].innerText);
  }
}

printTableCellText(allTd);

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log('----- Esercizio 23 -----');

function backgroundRed() {
  const aList = document.querySelectorAll('a');
  aList.forEach(a => {
    a.style.backgroundColor = 'red';
  });
  return aList;
}

console.log(backgroundRed());

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log('----- Esercizio 24 -----');

function addLi() {
  const ulList = document.querySelectorAll('ul');
  const li = document.createElement('li');
  ulList.forEach(ul => {
    ul.appendChild(li);
    li.textContent = 'Chihuahua';
  });
  return ulList;
}

console.log(addLi());

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log('----- Esercizio 25 -----');

let clearList = () => document.getElementById('myList').innerHTML = '';

console.log(clearList());

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log('----- Esercizio 26 -----');

function addClassToRows() {
  const trList = document.querySelectorAll('tr');
  trList.forEach(tr =>{
    tr.classList.add('test');
  })
  return trList;
}

console.log(addClassToRows());

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log('----- Esercizio 27 -----');

function halfTree(h) {
  let tree = '';
  for (let i = 0; i <= h; i++) {
    //repeat(i) ripeterà "*" per il numero di cicli/iterazioni fatte
    tree += '*'.repeat(i) + '\n';
  }
  return tree;
}

console.log(halfTree(3));

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log('----- Esercizio 28 -----');

function christmasTree(h) {
  let tree = '';
  for (let i = 0; i <= h; i++) {
    tree += (' '.repeat(h - i)) + '*'.repeat(i * 2 - i/i) + '\n';
  }
  return tree;
}

console.log(christmasTree(6));

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/