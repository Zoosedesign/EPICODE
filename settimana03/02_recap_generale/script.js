let mioArray = ['Giovanna', 'Paola', 'Laura'];

console.log(mioArray);

const ultimoIndice = mioArray.length - 1; //memorizzo ultimo indice array

//con splice aggiungo prima "ultimoIndice", cancellandone 0 e aggiungendo i tre nomi scritti
mioArray.splice(ultimoIndice, 0, 'Dario', 'Stephanie', 'Giovanna');

console.log(mioArray);

/////////////////////////////////////////////////////////
//somma indipendentemente dai numeri che arrivano
function somma(...numeri) { //...numeri, indica che i valori che arriveranno verranno trattati come array
    //si può fare "num1, num2, ...numeri"
    //NON SI PUO FARE "...numeri, num1, num2"
    let risultato = 0;
    for (let numero of numeri) {
        risultato += numero;
    }
    return risultato;
}

//...numeri prende in automatico tutto ciò che passo all'interno della chiamata funzione
console.log(somma(2, 3, 4, 5));
console.log(somma(10, 20, 30));
console.log(somma(23, 4, 56, 7, 89, 0, 12, 3));

/////////////////////////////////////////////////////////
//esempio per recuperare gli ultimi due indici di un rest parameter
function somma2(...numeri) {
    let risultato = 0;
    numeri.forEach((element, i) => {
        if (i === numeri.length - 1 || i === numeri.length - 2) {
            risultato += element;
        }
        // document.getElementById("indexSomma1").innerHTML += i + ", ";
    });
    return risultato;
}

console.log(somma2(2, 3, 4, 5));
console.log(somma2(10, 20, 30));

//////////////////////////////////////////////////////
//SISTEMA SPREAD
let primoArray = {
    nome: 'Andrea',
    cognome: 'Zucchetti'
};
console.log(`${primoArray.nome} ${primoArray.cognome}`);

//metodo spread, dato il primo array aggiunge solo una cosa nel secondo
let secondoArray = {
    ...primoArray,
    anni: 32
};
console.log(`${secondoArray.nome} ${secondoArray.cognome} ${secondoArray.anni}`);