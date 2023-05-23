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