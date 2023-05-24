import { Utente } from "../moduli/utente.js";

let utente1 = new Utente('Mario','Rossi',35);
let utente2 = new Utente('Aldo','Bianchi',26);
let utente3 = new Utente('Anna','Verdi',30);

let arrayUtenti = [utente1,utente2,utente3];

arrayUtenti.forEach((el,index) => {
    document.querySelector('#elenco').innerHTML += `<li>${el.scrivi()}</li>`;
});