let a = 'Mario';

console.log(typeof a);

let b = new String(' Antonio');

console.log(typeof b);

//questo è un array, che è un oggetto
var mioArrayProva = ['Nicola','Giovanna','Maria'];
/* Nicola(indice "0"), Giovanna(indice "1") e Maria(indice "2"), sono gli indici dell'array, che sono sempre progressivi */

//così si vede solo l'array completo
console.log(typeof mioArrayProva);

//aggiungendo nelle quadre il numero dell'indice si visualizzerà solo quello
console.log(typeof mioArrayProva[0]);

document.getElementById('arrayProva').innerHTML = mioArrayProva;

//mettendo .sort() si ordinano in ordine alfabetico i nomi nell'indice dell'array
mioArrayProva.sort();

//da qui in poi Flavio, diventando il primo nell'ordine, sarà indice 1 dopo sort e non più 5 come in precedenza
document.getElementById('arrayProvaOrdinato').innerHTML = mioArrayProva;

//indexOf serve a verificare l'indice di un elemnto array
console.log(mioArrayProva.indexOf('Dario'));


//ESERCIZI TIPOLOGIE DI MODIFICATORI ARRAY

var mioArray = ['Gabriel','AndreaZ','LucaI','Dario','Artem','Rosita'];

document.getElementById('array').innerHTML += mioArray;

document.getElementById('arrayOrdinato').innerHTML += mioArray.sort();

mioArray.pop();
document.getElementById('arrayPop').innerHTML += mioArray;

mioArray.push('Alessio');
document.getElementById('arrayPush').innerHTML += mioArray;

mioArray.shift();
document.getElementById('arrayShift').innerHTML += mioArray;

mioArray.unshift('AndreaZ');
document.getElementById('arrayUnshift').innerHTML += mioArray;

delete mioArray[2];
document.getElementById('arrayDelete').innerHTML += mioArray;

/*nelle parentesi "2" è l'indice da cui inizia a cancellare e "1" significa quanti indici compresi da 2 in poi dovrà eliminare, in questo caso solo 2*/
mioArray.splice(2, 1);
document.getElementById('arraySplice1').innerHTML += mioArray;

mioArray.splice(1, 2);
document.getElementById('arraySplice2').innerHTML += mioArray;

mioArray.splice(1, 1, 'Manuel');
document.getElementById('arraySplice3').innerHTML += mioArray;

mioArray.splice(0, 1, 'Pasqua','Thush','Nunzio');
document.getElementById('arraySplice4').innerHTML += mioArray;

mioArray.splice(2, 0, 'Flavio');
document.getElementById('arraySplice5').innerHTML += mioArray;

/*nelle parentesi "1" è l'elemento da cui inizia a copiare l'array, mentre "4" e l'indice a cui si ferma la copiatura escluso 4 stesso (in questo caso copierebbe solo gli indici 1,2,3)*/
var nuovoArray = mioArray.slice(1,4)
document.getElementById('arraySlice').innerHTML += nuovoArray;
document.getElementById('arrayPadreSlice').innerHTML += mioArray;

//nuovoArray è l'array nuovo così creato