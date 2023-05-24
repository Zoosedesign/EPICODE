import { Docente } from "../moduli/docente.js";

let docente1 = new Docente('Mario','Rossi',35,['OOP','Docker']);
let docente2 = new Docente('Aldo','Bianchi',26,['Web security','Container','Git']);

let arrayDocenti = [docente1,docente2];

arrayDocenti.forEach((el,index) => {
    document.querySelector('#elenco').innerHTML += `<li>${el.scrivi()}</li>`;
});