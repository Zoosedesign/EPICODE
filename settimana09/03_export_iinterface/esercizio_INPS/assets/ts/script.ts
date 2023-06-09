//--------- CREO LO SCHELETRO DELLA PARTITA IVA ----------
interface masterIVA {
    redditoTASSATO: number; // è variabile, quindi la metterò solo come parametro nel constructor
    redditoLordoAnnuo: number; // è variabile, quindi la metterò solo come parametro nel constructor
    tasseINPS: number;
    tasseIRPEF: number;
    //metodi
    getUtileTasse(): number;
    getTasseInps(): number;
    getTasseIrpef(): number;
    getRedditoNettoAnnuo(): number;
}

//mi servirà come tipo dell'array
interface masterIVAplus extends masterIVA {
    codiceATECO: number;
    nomeCliente: string;
}

//"public" è necessario per dichiarare i valori variabili negli argomenti del costruttore
class partitaIVA implements masterIVA {
    //qua metto solo quelle fisse che non devo dichiarare neanche nel costruttore grazie a readonly
    readonly tasseINPS: number = 0.2623; 
    readonly tasseIRPEF: number = 0.15
    //qua passerò i valori variabili dati dall'utente o da noi in secondo momento, i nomi parametri non saranno anticipati da "_"
    constructor(public redditoTASSATO: number, public redditoLordoAnnuo: number) {}

    getUtileTasse() {
        return Number(this.redditoLordoAnnuo * this.redditoTASSATO);
    };
    getTasseInps() {
        return Number(this.getUtileTasse() * this.tasseINPS);
    };
    getTasseIrpef() {
        return Number(this.getUtileTasse() * this.tasseIRPEF);
    };
    getRedditoNettoAnnuo() {
        return Number(this.redditoLordoAnnuo - (this.getTasseInps() + this.getTasseIrpef()));
    };
}

//--------- MODULO SETTORE ALIMENTARE ----------
class settoreAlimentare extends partitaIVA {
    readonly codiceATECO: number = 10
    constructor(redditoLordoAnnuo: number, public nomeCliente: string, redditoTASSATO: number = 0.4) {
        super(redditoTASSATO, redditoLordoAnnuo);
    }
}

//--------- MODULO SETTORE AMBULANTI ----------
class settoreAmbulanti extends partitaIVA {
    readonly codiceATECO: number = 47.82
    constructor(redditoLordoAnnuo: number, public nomeCliente: string, redditoTASSATO: number = 0.54) {
        super(redditoTASSATO, redditoLordoAnnuo);
    }
}

//--------- MODULO SETTORE COSTRUZIONI ----------
class settoreCostruzioni extends partitaIVA {
    readonly codiceATECO: number = 68
    constructor(redditoLordoAnnuo: number, public nomeCliente: string, redditoTASSATO: number = 0.86) {
        super(redditoTASSATO, redditoLordoAnnuo);
    }
}

//--------- MODULO SETTORE INTERMEDIARI ----------
class settoreIntermediari extends partitaIVA {
    readonly codiceATECO: number = 46.1
    constructor(redditoLordoAnnuo: number, public nomeCliente: string, redditoTASSATO: number = 0.62) {
        super(redditoTASSATO, redditoLordoAnnuo);
    }
}

//--------- OPERAZIONI SUL DOM (STAMPA e RECUPERO INFORMAZIONI) ----------
const svuotaCampiInput = () => {
    // Svuota i campi del form
    (document.getElementById('sceltaSettore') as HTMLInputElement).value = '';
    (document.getElementById('fatturato') as HTMLInputElement).value = '';
    (document.getElementById('nomeUser') as HTMLInputElement).value = '';
}

const aggiungiCliente = () => {
    // recupero i valori dati agli input del form
    let sceltaSettore = (document.getElementById('sceltaSettore') as HTMLInputElement).value;
    let fatturato = Number((document.getElementById('fatturato') as HTMLInputElement).value);
    let nomeUser = (document.getElementById('nomeUser') as HTMLInputElement).value;

    const arrayClienti: masterIVAplus[] = [];
    // assegno ad una variabile i valori, dopo aver verificato la classe di appartenenza in base al settore
    let cliente;

    switch (sceltaSettore) {
        case 'settoreAlimentare':
            cliente = new settoreAlimentare(fatturato, nomeUser);
            break;
        case 'settoreCommercio':
            cliente = new settoreAmbulanti(fatturato, nomeUser);
            break;
        case 'settoreCostruzioni':
            cliente = new settoreCostruzioni(fatturato, nomeUser);
            break;
        case 'settoreAmbulanti':
            cliente = new settoreIntermediari(fatturato, nomeUser);
            break;
        default:
            // Gestione nel caso in cui cliente sia undefined
            console.error('Settore non valido');
            return;
    }

    arrayClienti.push(cliente);

    arrayClienti.forEach((el) => {
        const clientiList = document.querySelector('ol') as HTMLUListElement;
        clientiList.innerHTML +=
            `<li><h3><b>${el.nomeCliente}</b> dato un fatturato di <b>${el.redditoLordoAnnuo}</b>, avrà:</h3>
        <ul>
        <li><b>${el.getTasseInps().toFixed(2)}</b> da pagare all'INPS</li>
        <li><b>${el.getTasseIrpef().toFixed(2)}</b> da pagare all'IRPEF</li>
        <li><b>${el.getRedditoNettoAnnuo().toFixed(2)}</b> di reddito annuale tolte le tasse applicate</li>
        `
    })
    svuotaCampiInput();
}

