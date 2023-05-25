//-------- CLASSI KEY JSON ---------
interface masterProdotto {
    id: number,
    codprod: number,
    collezione: string,
    capo: string,
    modello: number,
    quantita: number,
    colore: string,
    prezzoivaesclusa: number,
    prezzoivainclusa: number,
    disponibile: string,
    saldo: number,
    img: string
    //metodi
    getSaldo(): number;
    getAcquisto(): number;
}

class Prodotto implements masterProdotto {
    constructor(
        public id: number,
        public codprod: number,
        public collezione: string,
        public capo: string,
        public modello: number,
        public quantita: number,
        public colore: string,
        public prezzoivaesclusa: number,
        public prezzoivainclusa: number,
        public disponibile: string,
        public saldo: number,
        public img: string
    ) { };

    getSaldo() {
        return Number((this.prezzoivainclusa * (this.saldo / 100)).toFixed(2))
    };

    getAcquisto() {
        return Number((this.prezzoivainclusa - this.getSaldo()).toFixed(2))
    };

}

//-------- FETCH JSON ---------
const fetchProdotti = async () => {
    try { // Effettuo la richiesta a un endpoint utilizzando fetch()
        const response = await fetch('./assets/database/abbigliamento.json');
        if (!response.ok) {
            throw new Error('Errore nella richiesta: ' + response.status);
        }
        // Estraggo i dati ricevuti dal JSON
        const products = await response.json();
        //creo l'array che conterrà tutti i products nel json
        let productArray = products.map((prodotto: masterProdotto) => {
            const product = new Prodotto(prodotto.id, prodotto.codprod, prodotto.collezione, prodotto.capo, prodotto.modello, prodotto.quantita, prodotto.colore, prodotto.prezzoivaesclusa, prodotto.prezzoivainclusa, prodotto.disponibile, prodotto.saldo, prodotto.img); return product;
        });

        // POPOLO IL DOM CON GLI ARTICOLI
        productArray.forEach((prodotto: masterProdotto) => {
            const productBox = document.getElementById('productBox') as HTMLDivElement;
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
    } catch (error) {
        console.log('Si è verificato un errore:', error);
    }
}

window.onload = () => fetchProdotti()