//dichiarando una variabile con var è sempre un blocco globale, le variabili globali, vaglono solo per il documento JS in cui è scritta, non può essere richiamato in un altro

// il carattere "\" detto escape, viene usato per creare o una nuova riga o far scrivere ad una stringa l'apice in un'istruzione delimitata da apici, esempio:

alert('l\'aiuto numero:\n1,\n2,\n3');

var conferma = confirm('sei sicuro di volore accettare:\n1,\n2,\n3');

if (conferma) {
    document.getElementById('scrivi5').innerHTML = 'condizioni accettate';
} else {
    document.getElementById('scrivi5').innerHTML = 'condizioni non accettate';
}

var approvazione = (conferma) ? 'policy approvata' : 'policy non approvata';

document.getElementById('ternario').innerHTML = approvazione;


//importante, var occupano memoria per tutta la durata della pagina, sono appunto globali

const prima = 15; //essendo una costante, il valore non potrà essere riassegnato
var seconda = 30;
var terza = 'pippo';

//somma con parole è possibile
document.getElementById('scrivi').innerHTML = prima + terza + seconda;

// cambia il valore della variabile seconda, questo si puo fare con "var" e "let" ma non con "const"
seconda = 20;

//con le altre operazioni non è possibile fare operazioni, darà NaN (operazione non possibile)
document.getElementById('scrivi2').innerHTML = prima - terza - seconda;

{
    //importante, let occupa memoria solo per il tempo di utilizzo del suo blocco all'interno delle due graffe {...}
    let quarta = 5;
    // let sostituisce var nei blocchi, cioè tra parentesi graffe, e quindi anche i sui rimandi funzionano solo all'interno della stessa
    document.getElementById('scrivi3').innerHTML = prima + quarta + seconda;
    //la riga 18 non leggrebbe "quarta" se tirata fuori dalle graffe, che appunto delimitano il blocco
}

document.getElementById('scrivi4').innerHTML = prima + quarta + quarta;
//come vedete in questo esempio "quarta" non viene letta e quindi non scrive niente nel blocco

const quinta = 15; //"const" può essere sia globale, cioè funzionare sempre

{
    const sesta = 30; //in questo caso "const" non è più globale, ma vale solo all'interno delle due {...}
}

var numero1 = 5;
var numero2 = 15;

numero1 = numero2; // "=" significa che adesso numero1 vale anche lui 15, l'uguale insomma assegna alla variabile a (numero1) il valore della variabile b (numero2)

x += y; //è uguale a x = x + y

var a = 15;

document.getElementById('scrividopo').innerHTML += a;

