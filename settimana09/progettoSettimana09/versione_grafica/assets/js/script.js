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
    ricarica(money) {
        this.credito += money;
    }
    chiamata(chiamata, durata) {
        this.chiamate.push(chiamata);
        this.traffico += durata;
        this.credito -= this.tariffa * durata;
        console.log("Traffico aggiornato:", this.traffico);
        console.log("Chiamate aggiornate:", this.chiamate);
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
const Giovanni = new Utente('Giovanni Rossi', 3334567001, 0, [], 0, []); //primo Utente
const Luigi = new Utente('Luigi Verdi', 3334567002, 0, [], 0, []); //secondo Utente
const Andrea = new Utente('Andrea Bianchi', 3334567003, 0, [], 0, []); //terzo Utente
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
// Funzione per gestire il clic su un bottone numerico
const composizioneNumero = (value) => {
    numeroComposto += value;
    updateNumber();
    if (utenteCorrente) {
        //inserisco nell'utente selezionato il numero chiamato nell'array "chiamate"
        utenteCorrente.chiamate.push(Number(value));
        console.log(utenteCorrente);
    }
};
// Funzione per gestire il clic sul pulsante di chiamata
const handleCallButtonClick = () => {
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
            // Effettua la chiamata sull'utente corrente
            utenteCorrente.chiamata(Number(numeroComposto), durataChiamata);
            console.log(utenteCorrente);
        }
        numeroComposto = '';
        updateNumber();
    }
};
// Funzione per aggiornare il display con il numero e il tempo trascorso
const updateNumber = () => {
    const areaNumero = document.getElementById('numero');
    areaNumero.textContent = numeroComposto;
};
// Aggiungi gli event listener ai bottoni numerici
tastierino.forEach((button) => {
    button.addEventListener('click', () => composizioneNumero(button.value));
});
// Aggiungi l'event listener al pulsante di chiamata
pulsanteChiamata.addEventListener('click', handleCallButtonClick);
