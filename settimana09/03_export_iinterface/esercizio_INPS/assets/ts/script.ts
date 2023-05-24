//redditività vari ATECO: 40% / 54% / 86% / 62% https://flextax.it/glossario/coefficiente-di-redditivita/
//aliquota INPS: 26.23%
//aliquota irpef: 15%

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

//"public" è necessario per dichiarare i valori variabili negli argomenti del costruttore
class partitaIVA implements masterIVA {  
    //qua metto solo quelle fisse a cui darò un valore nel costruttore
    tasseINPS: number;
    tasseIRPEF: number;
    //qua passerò i valori variabili dati dall'utente o da noi in secondo momento, i nomi parametri non saranno anticipati da "_"
    constructor(public redditoTASSATO: number,public redditoLordoAnnuo: number) { 
            this.tasseINPS = 0.2623,
            this.tasseIRPEF = 0.15
    }
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
    codiceATECO: number;
    constructor(redditoLordoAnnuo: number, public nomeCliente: string, redditoTASSATO: number = 0.4) {
        super(redditoTASSATO, redditoLordoAnnuo);
        this.codiceATECO = 10;
    }
}

//--------- MODULO SETTORE AMBULANTI ----------
class settoreAmbulanti extends partitaIVA {
    codiceATECO: number;
    constructor(redditoLordoAnnuo: number, public nomeCliente: string, redditoTASSATO: number = 0.54) {
        super(redditoTASSATO, redditoLordoAnnuo);
        this.codiceATECO = 47.82;
    }
}

//--------- MODULO SETTORE COSTRUZIONI ----------
class settoreCostruzioni extends partitaIVA {
    codiceATECO: number;
    constructor(redditoLordoAnnuo: number, public nomeCliente: string, redditoTASSATO: number = 0.86) {
        super(redditoTASSATO, redditoLordoAnnuo);
        this.codiceATECO = 68;
    }
}

//--------- MODULO SETTORE INTERMEDIARI ----------
class settoreIntermediari extends partitaIVA {
    codiceATECO: number;
    constructor(redditoLordoAnnuo: number, public nomeCliente: string, redditoTASSATO: number = 0.62) {
        super(redditoTASSATO, redditoLordoAnnuo);
        this.codiceATECO = 46.1;
    }
}

//--------- OPERAZIONI SUL DOM (STAMPA e RECUPERO INFORMAZIONI) ----------


const arrayClienti: (settoreAlimentare | settoreAmbulanti | settoreCostruzioni | settoreIntermediari)[] = [];

arrayClienti.forEach((el) => {
    const ulAlimentari = document.querySelector('ol') as HTMLUListElement;
    ulAlimentari.innerHTML += 
    `<li><h3><b>${el.nomeCliente}</b> dato un fatturato di <b>${el.redditoLordoAnnuo}</b>, avrà:</h3>
    <ul>
    <li><b>${el.getTasseInps().toFixed(2)}</b> da pagare all'INPS</li>
    <li><b>${el.getTasseIrpef().toFixed(2)}</b> da pagare all'IRPEF</li>
    <li><b>${el.getRedditoNettoAnnuo().toFixed(2)}</b> di reddito annuale tolte le tasse applicate</li>
    `
})
