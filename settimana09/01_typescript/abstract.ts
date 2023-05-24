abstract class Negozio {
    maglie: string;
    pantaloni: string;
    scarpe: string;
    constructor(_maglie: string, _pantaloni: string, _scarpe: string) {
        this.maglie = _maglie;
        this.pantaloni = _pantaloni;
        this.scarpe = _scarpe;
    }

    abstract abbigliamento(): any;
}

// La classe Negozio è una classe astratta che rappresenta un negozio di abbigliamento. Ha tre proprietà di tipo stringa: maglie, pantaloni e scarpe. Il costruttore della classe viene utilizzato per inizializzare queste proprietà. Inoltre, la classe ha un metodo astratto chiamato abbigliamento, che deve essere implementato dalle classi figlie.

class Abbigliamento extends Negozio {
    cintura: string;
    constructor (_maglie: string, _pantaloni: string, _scarpe: string, _cintura: string) {
        super(_maglie, _pantaloni, _scarpe);
        this.cintura = _cintura;
    }

    abbigliamento(): string {
        return `Vestito: maglia ${this.maglie}, pantaloni ${this.pantaloni}, scarpe ${this.scarpe}, cintura ${this.cintura}`;
    }
}

let nuovoVestito = new Abbigliamento('rossa', 'neri', 'rosse', 'nera');

console.log(nuovoVestito.abbigliamento());

// La classe Abbigliamento estende la classe Negozio e aggiunge una nuova proprietà chiamata cintura. Viene definito un costruttore che accetta i valori per maglie, pantaloni, scarpe e cintura e li passa al costruttore della classe madre utilizzando super(). La classe implementa il metodo abbigliamento, che restituisce una stringa che rappresenta un vestito completo con tutti gli attributi.

// Viene creato un nuovo oggetto nuovoVestito istanziando la classe Abbigliamento e vengono passati i valori 'rossa', 'neri', 'rosse' e 'nera' per le rispettive proprietà. Infine, viene stampato il risultato di nuovoVestito.abbigliamento() che visualizzerà la stringa corrispondente al vestito completo.

abstract class Accessori extends Negozio {
    abstract abbigliamento(): void;
    abstract getAccessori(): number;
}

class Completo extends Accessori {
    abbigliamento(): string {
        return `Vestito: maglia ${this.maglie}, pantaloni ${this.pantaloni}, scarpe ${this.scarpe} con ${this.getAccessori()} accessori`;
    }

    getAccessori(): number {
        return 4;
    }
}

let newCompleto = new Completo('verde', 'bianchi', 'nere');
console.log(newCompleto.abbigliamento());

// La classe Accessori estende la classe Negozio e definisce due metodi astratti: abbigliamento() e getAccessori(). Questi met