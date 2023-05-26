"use strict";
class Utente {
    constructor(user, credito, chiamate, eliminate) {
        this.user = user;
        this.credito = credito;
        this.chiamate = chiamate;
        this.eliminate = eliminate;
        this.tariffa = .2;
    }
    ricarica(money) {
        this.credito += money;
    }
    chiamata(durata) {
        this.chiamate += 1;
        this.credito -= (this.tariffa * durata);
    }
    creditoResiduo() {
        return `Credito residuo: ${this.credito.toFixed(2)}€`;
    }
    numeroChiamate() {
        return `Numero chiamate: ${this.chiamate}\nChiamate azzerate: ${this.eliminate}`;
    }
    azzeraChiamate() {
        this.eliminate = this.chiamate; // Memorizza il numero di chiamate da cancellare
        this.chiamate = 0; // Resetta il numero di chiamate a zero
    }
}
const Giovanni = new Utente('Giovanni Rossi', 0, 0, 0); //primo Utente
const Luigi = new Utente('Luigi Verdi', 0, 0, 0); //secondo Utente
const Andrea = new Utente('Andrea Bianchi', 0, 0, 0); //terzo Utente
Giovanni.ricarica(10); // Aggiorna il credito di Giovanni aggiungendo 10 euro
Luigi.ricarica(5); // Aggiorna il credito di Luigi aggiungendo 5 euro
Andrea.ricarica(15); // Aggiorna il credito di Andrea aggiungendo 15 euro
//effettuo le chiamate
Giovanni.chiamata(20);
Luigi.chiamata(12);
Andrea.chiamata(3);
Luigi.azzeraChiamate();
[Giovanni, Luigi, Andrea].map(utente => {
    console.log(`${utente.user}:\n----------------\nCredito residuo: ${utente.creditoResiduo()}\n${utente.numeroChiamate()}\n\n`);
}); //mostro le info per ogni utente
