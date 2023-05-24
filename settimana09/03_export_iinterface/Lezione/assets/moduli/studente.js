import { Utente } from "./utente.js";

export class Studente extends Utente {
    corsi = [];

    constructor(_nome, _cognome, _eta, _corsi) {
        super(_nome, _cognome, _eta);
        this.corsi = _corsi;
    }

    scrivi() {
        return `${this.nome} ${this.cognome} di anni ${this.eta}, frequenta: ${this.corsi}`;
    }
}