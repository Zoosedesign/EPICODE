//OGGETTO
const docente = {
    nome: 'Andra',
    cognome: 'Zucchetti',
    anno: 1991,
    occupato: true,

    //impostare data comparativa per ricavare la data
    eta: function () {
        //return restituisce ciò che deve restituire la variabile eta
        return 2023 - this.anno;
        //dopo "return" è come ci fosse scritto "2023 - 1991" = 32 nella funzione stampa dove è richiamato con "this.eta()"
    },

    //"stampa:" è solo il nome della funzione, si può chiamare anche "pippo:
    stampa: function () {
        return this.nome + ' ' + this.cognome + ', eta: ' + this.eta() + ', attualmente occupato: ' + this.occupato;
        //"this" rappresenta l'oggetto che sta lavorando, in questo caso l'oggeto "const docente", perchè l'oggetto non si può richiamare si usa this
    }
}

document.getElementById('oggetto').innerHTML = docente;

document.getElementById('destr').innerHTML = docente.nome + ' ' + docente.cognome;

document.getElementById('stampa').innerHTML = docente.stampa();

//COSTRUTTORE (chiamrlo sempre prima lettera maiuscola)
function Docente2(_nome, _cognome, _anno, _occupato) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.anno = _anno;
    this.occupato = _occupato;

    this.etaDocente = function () {
        return 2023 - this.anno;
    }

    this.stampaDocente = function () {
        return this.nome + ' ' + this.cognome + ', eta: ' + this.etaDocente() + ', attualmente occupato: ' + this.occupato;
    }
}

const FS0223 = new Docente2('Dario', 'Del Giudice', 1967, true);

document.getElementById('modello').innerHTML = FS0223.stampaDocente();

const FS0223b = new Docente2('Andrea', 'Zucchetti', 1991, true);

document.getElementById('modello2').innerHTML = FS0223b.stampaDocente();

//ElSE e IF
let a = 20;

/* "if" è l'unico elemento obbligatorio, successivamente si potrà chiudere sia con "else" o "elseif" */
if (a < 20) {
    console.log('a è minore di 20')
    // "if" e "else if" è true
} else if (a > 20) {
    console.log('a è maggiore di 20')
    // "else" è false
} else {
    console.log('a è uguale a 20')
}