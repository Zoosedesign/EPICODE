export class Utente {
    nome;
    cognome;
    eta;
    constructor (_nome, _cognome, _eta) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.eta = _eta;
    }
    scrivi() {
        return `${this.nome} ${this.cognome} di anni ${this.eta}`;
    }
}