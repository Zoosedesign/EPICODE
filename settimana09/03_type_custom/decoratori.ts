function Logger (costruttore: Function) { // 5 - funzione avviata dal decoratore
    console.log('Logging...'); // 6 - Primo console.log
    console.log(costruttore); // 7 - Secondo console.log, che riceve come parametro il constructor della classe, lo stampa, poi esegue l'istanza della classe
}

@Logger // 4 - Decoratore collegato alla funzione col suo nome
class Persona { // 3 - classe istanziata e decorata
    name: string;
    constructor (_name: string) {
        this.name = _name;
        console.log('Creazione persona'); // 8 - L'istanza di classe esegue il metodo del costruttore, ed è il terzo concole.log
    }
}

const persone = new Persona('Mario'); // 2 - Istanza di classe
console.log(persone); // 1 - Chiamata all'istanza di classe / 9 - stampa della proprietà di classe