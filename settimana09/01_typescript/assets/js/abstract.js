"use strict";
class Negozio {
    constructor(_maglie, _pantaloni, _scarpe) {
        this.maglie = _maglie;
        this.pantaloni = _pantaloni;
        this.scarpe = _scarpe;
    }
}
class Abbigliamento extends Negozio {
    constructor(_maglie, _pantaloni, _scarpe, _cintura) {
        super(_maglie, _pantaloni, _scarpe);
        this.cintura = _cintura;
    }
    abbigliamento() {
        return `Vestito: maglia ${this.maglie}, pantaloni ${this.pantaloni}, scarpe ${this.scarpe}, cintura ${this.cintura}`;
    }
}
let nuovoVestito = new Abbigliamento('rossa', 'neri', 'rosse', 'nera');
console.log(nuovoVestito.abbigliamento());
class Accessori extends Negozio {
}
class Completo extends Accessori {
    abbigliamento() {
        return `Vestito: maglia ${this.maglie}, pantaloni ${this.pantaloni}, scarpe ${this.scarpe} con ${this.getAccessori()} accessori`;
    }
    getAccessori() {
        return 4;
    }
}
let newCompleto = new Completo('verde', 'bianchi', 'nere');
console.log(newCompleto.abbigliamento());
