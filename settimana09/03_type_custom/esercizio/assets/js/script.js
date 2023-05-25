"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Prodotto {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo, img) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
        this.img = img;
    }
    ;
    getSaldo() {
        return Number((this.prezzoivainclusa * (this.saldo / 100)).toFixed(2));
    }
    ;
    getAcquisto() {
        return Number((this.prezzoivainclusa - this.getSaldo()).toFixed(2));
    }
    ;
}
//-------- FETCH JSON ---------
const fetchProdotti = () => __awaiter(void 0, void 0, void 0, function* () {
    try { // Effettuo la richiesta a un endpoint utilizzando fetch()
        const response = yield fetch('./assets/database/abbigliamento.json');
        if (!response.ok) {
            throw new Error('Errore nella richiesta: ' + response.status);
        }
        // Estraggo i dati ricevuti dal JSON
        const products = yield response.json();
        //creo l'array che conterrà tutti i products nel json
        let productArray = products.map((prodotto) => {
            const product = new Prodotto(prodotto.id, prodotto.codprod, prodotto.collezione, prodotto.capo, prodotto.modello, prodotto.quantita, prodotto.colore, prodotto.prezzoivaesclusa, prodotto.prezzoivainclusa, prodotto.disponibile, prodotto.saldo, prodotto.img);
            return product;
        });
        // POPOLO IL DOM CON GLI ARTICOLI
        productArray.forEach((prodotto) => {
            const productBox = document.getElementById('productBox');
            productBox.innerHTML += `
          <div class="col-12 col-mb-6 col-lg-4 px-3">
            <article class="card">
              <img src="${prodotto.img}" style="aspect-ratio: 1/1.2; object-fit: fit;" class="card-img-top" alt="immagine prodotto">
              <div class="card-img-overlay">
                <small class="badge bg-danger"><del>${prodotto.prezzoivainclusa} €</del><ins class="bg-danger"> -${prodotto.saldo}%</ins></small>
              </div>
  
              <div class="card-body">
                <h4 class="card-title">${prodotto.capo}</h4>
                <div class="d-flex">
                  <p class="card-text">Colore: ${prodotto.colore}</p>
                  <p class="card-text mb-2 ms-auto">Disponibilità: ${prodotto.quantita} ${prodotto.disponibile}</p>
                </div>
                <p class="fs-2">${prodotto.getAcquisto()} €</p>
              </div>
            </article>
          </div>
        `;
        });
    }
    catch (error) {
        console.log('Si è verificato un errore:', error);
    }
});
window.onload = () => fetchProdotti();
