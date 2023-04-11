/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

console.log('****ESERCIZIO 1****');

const area = function (l1, l2) {
	return l1 * l2;
}

const areaResult = area(3, 4);
console.log(areaResult);

/* ESERCIZIO 2 OBB
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log('****ESERCIZIO 2****');

//con operatore ternario
const crazySum = (par1, par2) => par1 === par2 ? (par1 + par2) * 3 : par1 + par2;

console.log(crazySum(3, 3));

//oppure con if else
const crazySum2 = function (par1, par2) {
	if (par1 === par2) {
		return (par1 + par2) * 3;
	} else {
		return par1 + par2;
	}
};

console.log(crazySum2(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log('****ESERCIZIO 3****');

const crazyDiff = function (valore) {
	if (valore > 19) {
		return Math.abs(valore - 19) * 3;
	} else {
		return Math.abs(valore - 19);
	}
};

console.log(crazyDiff(3));

/* ESERCIZIO 4 OBB
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure false se n è uguale a 400.
*/

console.log('****ESERCIZIO 4****');

const boundary = function (n) {
	if ((n > 20 && n <= 100) || n === 400) {
		return true;
	} else {
		return false;
	}
};

console.log(boundary(3));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log('****ESERCIZIO 5****');

const epify = function (str) {
	if (str.startsWith('EPICODE')) {
		return str;
	} else {
		return 'EPICODE ' + str;
	}
};

console.log(epify(`è un'azienda formatrice in ambito web`));

/* ESERCIZIO 6 OBB
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log('****ESERCIZIO 6****');

const check3and7 = function (n) {
	if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
		return true;
	} else {
		return false;
	}
};

console.log(check3and7(9));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log('****ESERCIZIO 7****');

const reverseString = function (str) { // Definiamo la funzione "reverseString" con un parametro "str" per la stringa di input

  let splitString = str.split(''); // Dividiamo la stringa di input in un array di caratteri

  let reverseString = splitString.reverse(); // Invertiamo l'ordine degli elementi nell'array

  let finalString = reverseString.join(''); // Uniamo gli elementi dell'array in una nuova stringa

  return finalString; // Restituiamo la nuova stringa invertita
};

console.log(reverseString('EPICODE'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log('****ESERCIZIO 8****');

const upperFirstPhrase = function (str) {
	let words = str.split(' ');
	let finalString = [];
	for (let i = 0; i < words.length; i++) {
		let firstChar = words[i].charAt(0);
		let uppercaseChar = firstChar.toUpperCase();
		let cutString = words[i].slice(1);
		let finalWord = uppercaseChar + cutString;
		finalString.push(finalWord);
	}
	console.log(finalString.join(' '));
};

upperFirstPhrase('hello world');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log('****ESERCIZIO 9****');

const cutString = function (str) {
	return str.slice(1, str.length - 1);
};
console.log(cutString('EPICODE'));

/* ESERCIZIO 10 OBB
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log('****ESERCIZIO 10****');

const giveMeRandom = function (n) {
	const arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(Math.floor(Math.random() * 10));
	}
	return arr;
};
console.log(giveMeRandom(5));

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

console.log('****EXTRA 1****');

var newArr = [2,6,3,6,8,4,7,4,2];

checkArray(newArr);

function checkArray(myArray) {
    let somma = 0;
    myArray.forEach(element => {
        if (element > 5) {
            console.log(`${element} è maggiore di 5`);
            somma += element;
        } else {
            console.log(`${element} è minore di 5`);
        }
    });
    console.log(`La somma dei numeri maggiori di 5 è ${somma}`);
}

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('****EXTRA 2****');
//creiamo array shoppingCart
const shoppingCart = [
  //inseriamo gli oggetti con le quattro proprietà
  { id: 1, name: 'T-Shirt', price: 20, quantity: 2 },
  { id: 2, name: 'Jeans', price: 50, quantity: 1 },
  { id: 3, name: 'Sneakers', price: 80, quantity: 3 }
];

function shoppingCartTotal() {
  let totale = 0; //dichiariamo variabile locale del totale
  for (let i = 0; i < shoppingCart.length; i++) {
    totale += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return totale;
}

console.log(shoppingCartTotal(shoppingCart)); // Output: 330

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('****EXTRA 3****');

function addToShoppingCart() {
  shoppingCart.push({ id: 4, name: 'Skirt', price: 15, quantity: 2 }); //aggiunge il nuovo oggetto a shoppingCart
  return shoppingCart.length; //ritorna la nuova lunghezza di shoppingCart
}

addToShoppingCart();

console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('****EXTRA 4****');

function maxShoppingCart() {
  let maxPriceItem = shoppingCart[0]; // impostiamo il primo oggetto come il più costoso inizialmente
  for (let i = 1; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > maxPriceItem.price) { // confrontiamo il prezzo dell'oggetto corrente con il massimo prezzo
      maxPriceItem = shoppingCart[i]; // se il prezzo corrente è maggiore, impostiamo l'oggetto corrente come il più costoso
    }
  }
  return maxPriceItem; // ritorniamo l'oggetto più costoso trovato
}

console.log(maxShoppingCart(shoppingCart).price);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('****EXTRA 5****');

function latestShoppingCart() {
  return shoppingCart[shoppingCart.length - 1]; //"- 1" prende l'ultimo oggetto contenuto nell'array shopping cart partendo dalla fine, per il terzo avremmo dovuto fare - 2
}

console.log(latestShoppingCart(shoppingCart));