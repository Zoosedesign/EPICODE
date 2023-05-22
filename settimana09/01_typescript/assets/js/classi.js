"use strict";
class Studente {
    constructor(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    getStudente() {
        return `${this.nome} ${this.cognome}`;
    }
}
let newStudente = new Studente('Mario', 'Rossi');
console.log(newStudente);
