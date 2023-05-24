"use strict";
//redditività vari ATECO: 40% / 54% / 86% / 62% https://flextax.it/glossario/coefficiente-di-redditivita/
//aliquota INPS: 26.23%
//aliquota irpef: 15%
//"public" è necessario per dichiarare i valori variabili negli argomenti del costruttore
class partitaIVA {
    redditoTASSATO;
    redditoLordoAnnuo;
    //qua metto solo quelle fisse a cui darò un valore nel costruttore
    tasseINPS;
    tasseIRPEF;
    //qua passerò i valori variabili dati dall'utente o da noi in secondo momento, i nomi parametri non saranno anticipati da "_"
    constructor(redditoTASSATO, redditoLordoAnnuo) {
        this.redditoTASSATO = redditoTASSATO;
        this.redditoLordoAnnuo = redditoLordoAnnuo;
        this.tasseINPS = 0.2623,
            this.tasseIRPEF = 0.15;
    }
    getUtileTasse() {
        return Number(this.redditoLordoAnnuo * this.redditoTASSATO);
    }
    ;
    getTasseInps() {
        return Number(this.getUtileTasse() * this.tasseINPS);
    }
    ;
    getTasseIrpef() {
        return Number(this.getUtileTasse() * this.tasseIRPEF);
    }
    ;
    getRedditoNettoAnnuo() {
        return Number(this.redditoLordoAnnuo - (this.getTasseInps() + this.getTasseIrpef()));
    }
    ;
}
//--------- MODULO SETTORE ALIMENTARE ----------
class settoreAlimentare extends partitaIVA {
    nomeCliente;
    codiceATECO;
    constructor(redditoLordoAnnuo, nomeCliente, redditoTASSATO = 0.4) {
        super(redditoTASSATO, redditoLordoAnnuo);
        this.nomeCliente = nomeCliente;
        this.codiceATECO = 10;
    }
}
//--------- MODULO SETTORE AMBULANTI ----------
class settoreAmbulanti extends partitaIVA {
    nomeCliente;
    codiceATECO;
    constructor(redditoLordoAnnuo, nomeCliente, redditoTASSATO = 0.54) {
        super(redditoTASSATO, redditoLordoAnnuo);
        this.nomeCliente = nomeCliente;
        this.codiceATECO = 47.82;
    }
}
//--------- MODULO SETTORE COSTRUZIONI ----------
class settoreCostruzioni extends partitaIVA {
    nomeCliente;
    codiceATECO;
    constructor(redditoLordoAnnuo, nomeCliente, redditoTASSATO = 0.86) {
        super(redditoTASSATO, redditoLordoAnnuo);
        this.nomeCliente = nomeCliente;
        this.codiceATECO = 68;
    }
}
//--------- MODULO SETTORE INTERMEDIARI ----------
class settoreIntermediari extends partitaIVA {
    nomeCliente;
    codiceATECO;
    constructor(redditoLordoAnnuo, nomeCliente, redditoTASSATO = 0.62) {
        super(redditoTASSATO, redditoLordoAnnuo);
        this.nomeCliente = nomeCliente;
        this.codiceATECO = 46.1;
    }
}
//--------- OPERAZIONI SUL DOM (STAMPA e RECUPERO INFORMAZIONI) ----------
const alimentari1 = new settoreAlimentare(20000, 'Gianni');
const alimentari2 = new settoreAlimentare(218000, 'Giorgio');
console.log(alimentari1);
const arrayAlimentari = [];
arrayAlimentari.push(alimentari1);
arrayAlimentari.push(alimentari2);
console.log(arrayAlimentari);
arrayAlimentari.forEach((el) => {
    const ulAlimentari = document.querySelector('ol');
    ulAlimentari.innerHTML +=
        `<li><h3><b>${el.nomeCliente}</b> dato un fatturato di <b>${el.redditoLordoAnnuo}</b>, avrà:</h3>
    <ul>
    <li><b>${el.getTasseInps().toFixed(2)}</b> da pagare all'INPS</li>
    <li><b>${el.getTasseIrpef().toFixed(2)}</b> da pagare all'IRPEF</li>
    <li><b>${el.getRedditoNettoAnnuo().toFixed(2)}</b> di reddito annuale tolte le tasse applicate</li>
    `;
});
