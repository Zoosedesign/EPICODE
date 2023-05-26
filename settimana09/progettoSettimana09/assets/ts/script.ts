interface Telefonino {
    user: string; //possessore telefonino
    credito: number; //euro disponibili per la chiamata
    chiamate: number; //conterrà il numero chiamate fatte
    tariffa: number; //una telefonata costa .20€ al minuto
    eliminate: number; //chiamte cancellate
    //metodi richiesti
    ricarica(money: number): void; //per ricaricare il credito
    chiamata(durata: number): void; //aggiorna il credito in base alla tariffa/min della telefonata, ed implementa n° chiamate
    creditoResiduo(): string; //per mostrare il credito rimasto
    numeroChiamate(): string; //per mostrare il n° di telefonate effettuate
    azzeraChiamate(): void; //per cancellare il registro chiamate
}

class Utente implements Telefonino {
    readonly tariffa: number = .2;
    constructor(public user: string, public credito: number, public chiamate: number, public eliminate: number) { }

    ricarica(money: number): void {
        this.credito += money;
    }
    chiamata(durata: number): void {
        this.chiamate += 1;
        this.credito -= (this.tariffa * durata);
    }
    creditoResiduo(): string {
        return `Credito residuo: ${this.credito.toFixed(2)}€`;
    }
    numeroChiamate(): string {
        return `Numero chiamate: ${this.chiamate}\nChiamate azzerate: ${this.eliminate}`;
    }
    azzeraChiamate(): void {
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
    console.log(`${utente.user}:\n----------------\nCredito residuo: ${utente.creditoResiduo()}\n${utente.numeroChiamate()}\n\n`);}); //mostro le info per ogni utente