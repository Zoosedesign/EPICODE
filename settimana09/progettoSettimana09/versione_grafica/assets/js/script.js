"use strict";
class Utente {
    constructor(user, numero, credito, chiamate, traffico, eliminate) {
        this.user = user;
        this.numero = numero;
        this.credito = credito;
        this.chiamate = chiamate;
        this.traffico = traffico;
        this.eliminate = eliminate;
        this.tariffa = .2;
    }
    chiamata(chiamata, durata) {
        this.chiamate.push(chiamata);
        this.traffico += durata;
        this.credito -= this.tariffa * (Math.floor(durataChiamata / 60)); //trasformo la durata da secondi a minuti
    }
    ricarica(money) {
        this.credito += money;
    }
    creditoResiduo() {
        return `Credito residuo: ${this.credito.toFixed(2)}€`;
    }
    numeroChiamate() {
        return `Numero chiamate: ${this.chiamate.length}\nChiamate azzerate: ${this.eliminate.length}`;
    }
    azzeraChiamate() {
        this.eliminate = this.eliminate.concat(this.chiamate); // Memorizza il numero di chiamate da cancellare
        this.chiamate = []; // Resetta il numero di chiamate a zero
    }
}
const Giovanni = new Utente('Giovanni Rossi', 3334567001, 5, [], 0, []); //primo Utente
const Luigi = new Utente('Luigi Verdi', 3334567002, 5, [], 0, []); //secondo Utente
const Andrea = new Utente('Andrea Bianchi', 3334567003, 5, [], 0, []); //terzo Utente
//------- SELEZIONE UTENTE --------
const sceltaUtente = document.getElementById("sceltaUtente");
sceltaUtente.addEventListener('change', () => {
    const utenteScelto = sceltaUtente.value;
    setUtenteCorrente(utenteScelto);
});
let utenteCorrente = null;
const setUtenteCorrente = (nomeUtente) => {
    console.log("Utente selezionato:", nomeUtente);
    switch (nomeUtente) {
        case 'Giovanni':
            utenteCorrente = Giovanni;
            break;
        case 'Luigi':
            utenteCorrente = Luigi;
            break;
        case 'Andrea':
            utenteCorrente = Andrea;
            break;
        default:
            utenteCorrente = null;
            break;
    }
};
//------- GESTIONE COMPOSIZIONE NUMERO TELEFONICO --------
//variabili globali
let numeroComposto = '';
let inizioChiamata = null;
let durataChiamata = 0;
//elementi DOM
const tastierino = document.querySelectorAll('#tastiera button[value]');
const pulsanteChiamata = document.querySelector('#tastiera button.btn-success');
const areaNumero = document.getElementById('numero');
// Funzione per gestire il clic su un bottone numerico
const composizioneNumero = (value) => {
    numeroComposto += value;
    updateNumber();
};
// Funzione per gestire il clic sul pulsante di chiamata
const handleCallButtonClick = () => {
    //avvio la chiamata solo se l'utente selezionato e abbiamo digitato un numero di almeno 5 numeri
    if (areaNumero.textContent !== null && areaNumero.textContent.length >= 5 && utenteCorrente !== null) {
        if (inizioChiamata === null) {
            inizioChiamata = new Date();
            pulsanteChiamata.classList.add("btn-danger");
        }
        else {
            // Termina la chiamata
            pulsanteChiamata.classList.remove("btn-danger");
            const fineChiamata = new Date();
            durataChiamata = Math.floor((fineChiamata.getTime() - inizioChiamata.getTime()) / 1000);
            inizioChiamata = null;
            //se è stato selezionato l'utente salva la durata chiamata in traffico
            if (utenteCorrente) {
                console.log(utenteCorrente);
                // Effettua la chiamata sull'utente corrente
                utenteCorrente.chiamata(Number(numeroComposto), durataChiamata);
            }
            numeroComposto = '';
            updateNumber();
        }
    }
    else {
        alert('si prega di selezionare un utente e digitare un numero telefonico di almeno 10 cifre');
    }
};
// Funzione per aggiornare il display con il numero e il tempo trascorso
const updateNumber = () => {
    areaNumero.textContent = numeroComposto;
};
// Aggiungi gli event listener ai bottoni numerici
tastierino.forEach((button) => {
    button.addEventListener('click', () => composizioneNumero(button.value));
});
// Aggiungi l'event listener al pulsante di chiamata
pulsanteChiamata.addEventListener('click', handleCallButtonClick);
