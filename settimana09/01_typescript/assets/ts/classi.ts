class Studente {
    nome: string;
    cognome: string;
    constructor(_nome: string, _cognome: string) {
        this.nome = _nome;
        this.cognome = _cognome;
    }

    getStudente(): string {
        return `${this.nome} ${this.cognome}`;
    }
}

let newStudente = new Studente('Mario', 'Rossi');

console.log(newStudente);