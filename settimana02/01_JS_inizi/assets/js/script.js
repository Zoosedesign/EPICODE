document.write('<h3>document.write agisce e scrive solo alla fine di tutto il resto, cioè del body = document in javascript</h3>') //eseguito come 8' 

// document.write agisce e scrive solo alla fine di tutto il resto, cioè alla fine della pagina caricata, cioè del body il cui sinonimo in JAVASCRIPT è document

document.getElementById('saluto').innerHTML = 'CIAO!'; //eseguito come 3' 
document.getElementById('saluto2').innerHTML = 'Altro saluto'; //eseguito come 4' 

// getElementByID -> è il metodo, in questo caso ricercan l'id Saluto nell'html
// innerHTML -> inserisce nell'html

// window.alert('questo è un alert'); vecchia scrittura

alert('questo è un alert'); //eseguito come 1' // scrittura attuale, si cerca di scrivere sempre di meno
alert(8 + 9); //eseguito come 2' //l'alert (window.alert) blocca il documento

console.log('verifica in console');

var valore = 15; //eseguito come 5' 
console.log(valore); //eseguito come 6' 
console.log(valore + 3); //eseguito come 7' 

// commento riga singola

/* commento riga multipla */

var numero = 5;
document.getElementById('numero').innerHTML = numero;
document.getElementById('somma').innerHTML = numero + 6;

var altroTesto = 'numero 5'
document.getElementById('altroTesto').innerHTML = altroTesto;

function riassegna() { // dopo il nome mettere sempre () anche se vuoto
    altroTesto = 'Ho cambiato il valore della variabile';
    document.getElementById('altroTesto').innerHTML = altroTesto;
}

//le istruzioni vanno sempre tra parentesi graffe

setTimeout(riassegna, 2000); //2000 uguale 2 secondi, 3600000 è un'ora

//creare un esempio condizionale

var nome = 'Andrea';

if (nome === undefined) {
    document.getElementById('errore').innerHTML = 'La variabile è undefined';
} else {
    document.getElementById('errore').innerHTML = 'Il valore della variabile è ' + nome;
}

//primo evento

//ctrl+cmd+space per selezionare emoticons

function clicca() {
    document.write('🤪🤪🤪🤪🤪🤪🤪🤪');
}

//document write riscrive il contenuto di body dopo il clic, sostituendolo