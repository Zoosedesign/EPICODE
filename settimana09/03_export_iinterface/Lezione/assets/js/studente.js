import { Studente } from "../moduli/studente.js";

let studente1 = new Studente('Mario','Rossi',35,['HTML','CSS','JS']);
let Studente2 = new Studente('Aldo','Bianchi',26,['PHP','Java','DB']);

let arrayStudenti = [studente1,Studente2];

arrayStudenti.forEach((el,index) => {
    document.querySelector('#elenco').innerHTML += `<li>${el.scrivi()}</li>`;
});