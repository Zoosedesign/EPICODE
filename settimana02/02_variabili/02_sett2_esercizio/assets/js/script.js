/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
document.getElementById('esercizio1').innerHTML = '<h2>Datatype base in Javascript</h2><hr><h3 class="mt">Numeri</h3> <p>In JS si possono utilizzare tutti i numeri, anche i decimali (attenzione si dovrà mettere il punto <ins>10.50</ins> e non la virgola <del>10,50</del>)<br>Con i conseguenti numeri si potranno fare tutte le operazioni matematiche classiche, esempio: </p><ul> <li>sottrazione <code>-</code></li><li>addizione <code>+</code></li><li>divisione <code>/</code></li><li>moltiplicazione <code>*</code></li></ul><h3>Stringa</h3> <p>Cioè tutto ciò che sarà racchiuso tra apici <code>\'</code> o virgolette <code>"</code>, praticamente è solo testo che non si porta dietro nessuna specifica particolare.<br><b>ATTENZIONE!</b> Anche i numeri all\'interno di apici e virgolette avranno il valore di stringa es: <code>\'1\'</code></p><h3>Boleano (logico)</h3> <p>Il tipo boleano è indicato solo dai caratteri: <code>true</code> o <code>false</code>. <br>In pratica permette di capire se una determinata correlazione è vera o falsa.</p><h3>Null</h3> <p>Per valori sconosciuti. Un valore a parte che contiene solo il valore <code>null</code>, cioè non sappiamo che valore sia un determinato risultato che vogliamo ottenere.</p><h3>Undefined</h3> <p>Per valori non assegnati. Un valore a parte che contiene solo il valore <code>undefined</code>, cioè non definito. </p><h3>Object</h3> <p>Per strutture dati più complesse</p><h3>Symbol</h3> <p>Rappresentano tutti quegli indicatori unici o istruzioni che eseguono determinati compiti in javascript</p><hr>';

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name = 'Andrea';

document.getElementById('esercizio2').innerHTML += name;

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero1 = 12;
const numero2 = 20;

document.getElementById('esercizio3').innerHTML += numero1 + numero2;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = numero1;
document.getElementById('esercizio4').innerHTML += x;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//name = 'zucchetti';
//document.getElementById('esercizio5').innerHTML = name;

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero3 = 4;

document.getElementById('esercizio6').innerHTML += numero3 - x; 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name1 = 'john';
const name2 = 'John';

if(name1 == name2) {
    document.getElementById('esercizio7').innerHTML += '<b>Sono uguali</b>';
} else {
    document.getElementById('esercizio7').innerHTML += '<b>Non sono assolutamente uguali</b>'; 
};

if(name1 == name2.toLowerCase()) {
    document.getElementById('esercizio8').innerHTML += '<b>Sono uguali</b>'; 
} else {
    document.getElementById('esercizio8').innerHTML += '<b>Non sono assolutamente uguali</b>'; 
};
