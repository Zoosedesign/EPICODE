/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 10;
let y = 12;

if (x > y) {
  console.log(x + ' è maggiore di ' + y);
} else {
  console.log(y + ' è maggiore di ' + x);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 5;

if (x == a) {
  console.log('equal');
} else {
  console.log('not equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let z = 11;

if (Number.isInteger(z / a)) {
  console.log('è divisibile');
} else {
  console.log('non è divisibile');
}

//oppure

if (z % 5 === 0) {
  console.log('è divisibile per 5');
} else {
  console.log('non è divisibile per 5');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let b = 3;

if (a == 8 || b == 8) {
  console.log('è uguale a 8');
} else if (a + b == 8 || a - b == 8) {
  console.log('la loro somma o addizione è uguale a 8');
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60;
let speseSpedizione = 10;

if (totalShoppingCart > 50) {
  console.log('tot: ' + totalShoppingCart);
} else {
  console.log('tot: ' + (totalShoppingCart + speseSpedizione));
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let blackFriday = totalShoppingCart * 0.8;

if (blackFriday > 50) {
  console.log('tot: ' + blackFriday);
} else {
  console.log('tot: ' + (blackFriday + speseSpedizione));
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c = 3;
let d = 12;
let e = 5;

if (c < d && d < e) {
  console.log('ordine: ' + c + ' ,' + d + ' ,' + e);
} else if (c < e && e < d) {
  console.log('ordine: ' + c + ' ,' + e + ' ,' + d);
} else if (e < c && c < d) {
  console.log('ordine: ' + e + ' ,' + c + ' ,' + d);
} else if (e < d && d < c) {
  console.log('ordine: ' + e + ' ,' + d + ' ,' + c);
} else if (d < c && c < e) {
  console.log('ordine: ' + d + ' ,' + c + ' ,' + e);
} else if (d < e && e < c) {
  console.log('ordine: ' + d + ' ,' + e + ' ,' + c);
}

//oppure + leggero del prof
if (c <= d) {
  if (e <= c) {
    console.log(e, c, d);
  } else {
    if (e <= d) {
      console.log(c, e, d);
    } else {
      console.log(c, d, e);
    }
  }
} else {
  if (e <= d) {
    console.log(e, d, c);
  } else {
    if (e <= c) {
      console.log(d, e, c);
    } else {
      console.log(d, c, e);
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore = 'valore';

if (typeof valore === 'string') {
  console.log('è una stringa');
} else {
  console.log('non è una stringa');
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let f = 43;

if (f % 2 === 0) {
  console.log('è pari');
} else {
  console.log('è dispari');
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 10
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if (val >= 10) {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.lastName = '';
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myArray = []

myArray.push(1,2,3,4,5,6,7,8,9,10);
console.log(myArray);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myArray[9] = 100;
console.log(myArray);
