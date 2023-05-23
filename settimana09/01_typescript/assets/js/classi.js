"use strict";
class Studente {
    constructor(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    getStudente() {
        return `${this.nome} ${this.cognome}`;
    }
    static getStato() {
        return 'Italia';
    }
}
class Docente extends Studente {
    constructor(_eta, _nome, _cognome) {
        super(_nome, _cognome); // con la keyword super indichiamo i parametri che popoleranno le proprietà ereditate
        this.eta = _eta; // con la keyword this indichiamo i parametri che popoleranno le nuove proprietà
    }
    getStato() {
        return 'Francia';
    }
}
let newStudente = new Studente('Mario', 'Rossi');
console.log(`${newStudente.getStudente()} residente in ${Studente.getStato()}`); // Chiamata alla classe madre Studente per accedere al membro static
let newDocente = new Docente(35, 'Aldo', 'Bianchi');
console.log(`${newDocente.getStudente()}, di anni ${newDocente.eta}, residente in ${newDocente.getStato()}`); // Chiamata alla classe madre Docente per accedere al membro static
class Modificatori {
    constructor(_cognome, _anno, _email, _frequenta) {
        this.cognome = _cognome;
        this.eta = this.calcolaEta(_anno);
        this.email = _email;
        this.frequenta = _frequenta;
    }
    scrivi() {
        return `${Modificatori.nome} ${this.cognome}, di anni ${this.eta}, email ${this.email}`;
    }
    calcolaEta(valore) {
        let anno = new Date();
        let attuale = anno.getFullYear();
        let newEta = attuale - valore;
        return newEta;
    }
}
Modificatori.nome = 'Dario'; // Il membro static è accessibile e modificabile soltanto chiamando direttamente la classe madre, per cui riceve un valore nella dichiarazione di classe e non va chiamato nel costruttore
let nuovaClasse = new Modificatori('Del Giudice', 1967, 'dadegi@gmail.com', false);
Modificatori.nome = 'Mario'; // Si può modificare il valore di una proprietà static accedendo direttamente alla classe, MA tutte le istanze della classe avranno il nuovo valore
console.log(nuovaClasse.scrivi());
// nuovaClasse.cognome = 'Rossi'; darà errore perché una proprietà readonly non è modificabile
class newMod extends Modificatori {
    constructor(_cognome, _email, _anno, _frequenta, _corso) {
        super(_cognome, _anno, _email, _frequenta);
        this.corso = _corso;
    }
}
let altraClasse = new newMod('Bianchi', 'pippo@pippo.com', 1985, true, 'FS0223');
console.log(altraClasse);
