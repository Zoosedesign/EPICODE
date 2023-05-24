import { Utente } from "./utente.js";

export class Docente extends Utente {
    materie = [];

    constructor(_nome, _cognome, _eta, _materie) {
        super(_nome, _cognome, _eta);
        this.materie = _materie;
    }

    scrivi() {
        return `${this.nome} ${this.cognome} di anni ${this.eta}, frequenta: ${this.materie}`;
    }
}