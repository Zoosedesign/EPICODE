// Esempio di relazione di aggregazione

interface Contatti {
    tel: string;
    email: string;
    // constructor (_tel: string, _email: string) {
    //     this.tel = _tel;
    //     this.email = _email;
    // }
}

interface RigheFat {
    codArt: string;
    descrArt: string;
    qty: number;
    unitPrice: number;
    // constructor (_codArt: string, _descrArt: string, _qty: number, _unitPrice: number) {
    //     this.codArt = _codArt;
    //     this.descrArt = _descrArt;
    //     this.qty = _qty;
    //     this.unitPrice = _unitPrice;
    // }
}

class TestFat {
    ragSoc: string;
    indirizzo: string;
    pIva: string;
    contatti: Contatti[]; // Interfaccia Contatti utilizzata come tipo per creare un array di oggetti
    righeFat: RigheFat[]; // Interfaccia RigheFatt utilizzata come tipo per creare un array di oggetti
    totPrice: number;
    constructor (_ragSoc: string, _indirizzo: string, _pIva: string, _contatti: Contatti[], _righeFat: RigheFat[], _totPrice: number) {
        this.ragSoc = _ragSoc;
        this.indirizzo = _indirizzo;
        this.pIva = _pIva;
        this.contatti = _contatti;
        this.righeFat = _righeFat;
        this.totPrice = _totPrice;
    }
}

let fattura1 = new TestFat(
    'Azienda XYZ',
    'via Tal Dei Tali 15 - 00100 Roma',
    '0122136585458',
    [
        {
            tel: '06235645',
            email: 'info@xyz.com'
        },
        {
            tel: '325458578',
            email: 'direzione@xyz.com'
        }
    ],
    [
        {
            codArt: 'A123',
            descrArt: 'primo articolo',
            qty: 3,
            unitPrice: 20
        },
        {
            codArt: 'B123',
            descrArt: 'secondo articolo',
            qty: 1,
            unitPrice: 50
        }
    ],
    110
);

console.log(fattura1);