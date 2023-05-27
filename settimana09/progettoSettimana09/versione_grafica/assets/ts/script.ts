interface Telefonino {
    user: string; //possessore telefonino
    numero: number; //numero utente
    credito: number; //euro disponibili per la chiamata
    chiamate: number[]; //è un array contenente i numeri delle chiamate fatte
    traffico: number; // durata totale telefonate
    tariffa: number; //una telefonata costa .20€ al minuto
    eliminate: number[]; //chiamate cancellate
    //metodi richiesti
    chiamata(chiamata: number, durata: number): void; //aggiorna il credito in base alla tariffa/min della telefonata, ed implementa n° chiamate 
    ricarica(valore: number): void; //per ricaricare il credito
    creditoResiduo(): string; //per mostrare il credito rimasto
    numeroChiamate(): string; //per mostrare il n° di telefonate effettuate
    azzeraChiamate(): void; //per cancellare il registro chiamate
}

class Utente implements Telefonino {
    readonly tariffa: number = .2;
    constructor(public user: string, public numero: number, public credito: number, public chiamate: number[], public traffico: number, public eliminate: number[]) { }

    chiamata(chiamata: number, durata: number): void {
        this.chiamate.push(chiamata);
        this.traffico += Number((durata / 60).toFixed(2)); //trasformo la durata da secondi a minuti
        this.credito -= Number((this.tariffa * (durata / 60)).toFixed(2));
    }
    ricarica(valore: number): void {
        this.credito += valore;
    }
    creditoResiduo(): string {
        return `Credito residuo: ${this.credito.toFixed(2)}€`;
    }
    numeroChiamate(): string {
        return `Numero chiamate: ${this.chiamate.length}\nChiamate azzerate: ${this.eliminate.length}`;
    }
    azzeraChiamate(): void {
        this.eliminate = this.eliminate.concat(this.chiamate); // Memorizza il numero di chiamate da cancellare
        this.chiamate = []; // Resetta il numero di chiamate a zero
    }
}

const Giovanni = new Utente('Giovanni Rossi', 3334567001, 5, [], 0, []); //primo Utente
const Luigi = new Utente('Luigi Verdi', 3334567002, 5, [], 0, []); //secondo Utente
const Andrea = new Utente('Andrea Bianchi', 3334567003, 5, [], 0, []); //terzo Utente

//------- VARIABILI GLOBALI -------------
let numeroComposto: string = '';
let inizioChiamata: Date | null = null;
let durataChiamata: number = 0;
let paginaCorrente: string = 'appTastiera'

//area pagine dinamiche
const areaPagine = document.getElementById('page') as HTMLDivElement;
const footerMenu = document.querySelector('footer') as HTMLElement;
const iconePagine = footerMenu.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
//pagina caricata di default
window.onload = () => appTastiera()

//------- AGGIORNO PAGINE IN BASE ALL'UTENTE -------------
const aggiornaContenutiPagine = (): void => {
    if (utenteCorrente !== null) {
        //verifico il contenuto pagine e riapro la pagina corrente
        switch (paginaCorrente) {
            case 'appRicarica':
                appRicarica();
                break;
            case 'appRecenti':
                appRecenti();
                break;
            case 'appContatti':
                appContatti();
                break;
            case 'appTastiera':
                appTastiera();
                break;
            default:
                alert('Pagina non valida');
                break;
        }
    } else {
        alert('SELEZIONARE UTENTE!');
    }
};

//------- SELEZIONE UTENTE --------
const sceltaUtente = document.getElementById('sceltaUtente') as HTMLSelectElement;
sceltaUtente.addEventListener('change', () => {
    const utenteScelto = sceltaUtente.value;
    setUtenteCorrente(utenteScelto);
});

let utenteCorrente: Utente | null = null;

const setUtenteCorrente = (nomeUtente: string): void => {
    console.log('Utente selezionato:', nomeUtente);
    switch (nomeUtente) {
        case 'Giovanni':
            utenteCorrente = Giovanni;
            break;
        case 'Luigi':
            utenteCorrente = Luigi;
            break;
        case 'Andrea':
            utenteCorrente = Andrea;
            break;
        default:
            utenteCorrente = null;
            break;
    }
    // Aggiorno i contenuti delle pagine
    aggiornaContenutiPagine();
}

//------- GESTIONE COMPOSIZIONE NUMERO TELEFONICO --------
const gestioneTastiera = (): void => {
    const tastierino = document.querySelectorAll('#tastiera button[value]') as NodeListOf<HTMLButtonElement>;
    const pulsanteChiamata = document.querySelector('#tastiera button.btn-success') as HTMLButtonElement;
    const areaNumero = document.getElementById('numero') as HTMLHeadingElement;

    // Funzione per gestire il clic su un bottone numerico
    const composizioneNumero = (value: string): void => {
        if(value !== 'canc') {
            numeroComposto += value;
        } else {
            //tolgo l'ultimo numero digitato
            numeroComposto = numeroComposto.slice(0, -1);
        }
        updateNumber();
    };

    // Funzione per gestire il clic sul pulsante di chiamata
    const handleCallButtonClick = (): void => {
        //avvio la chiamata solo se l'utente selezionato e abbiamo digitato un numero di almeno 5 numeri
        if (areaNumero.textContent !== null && areaNumero.textContent.length >= 5 && utenteCorrente !== null) {
            if (inizioChiamata === null) {
                inizioChiamata = new Date();
                pulsanteChiamata.classList.add("btn-danger");
                areaNumero.innerHTML = '<small class="fs-6">chiamata in corso...</small>'
                //disabilito tasterino numerico
                tastierino.forEach((button) => {
                    button.disabled = true;
                });
            } else {
                // Termina la chiamata
                pulsanteChiamata.classList.remove("btn-danger");
                const fineChiamata = new Date();
                //calcolo la durata chiamata
                durataChiamata = Math.floor((fineChiamata.getTime() - inizioChiamata.getTime()) / 1000);
                console.log(durataChiamata);
                inizioChiamata = null;
                //riabilito il tasterino numerico
                tastierino.forEach((button) => {
                    button.disabled = false;
                });
                console.log(utenteCorrente)
                // usa il metodo chiamata sull'utente corrente
                utenteCorrente.chiamata(Number(numeroComposto), durataChiamata);
                numeroComposto = '';
                updateNumber();
            }
        } else {
            alert('si prega di selezionare un utente e digitare un numero telefonico di almeno 10 cifre')
        }
    };

    // Funzione per aggiornare il display con il numero e il tempo trascorso
    const updateNumber = (): void => {
        areaNumero.textContent = numeroComposto;
    }

    // Aggiungi gli event listener ai bottoni numerici
    tastierino.forEach((button) => {
        button.addEventListener('click', () => composizioneNumero(button.value));
    });

    // Aggiungi l'event listener al pulsante di chiamata
    pulsanteChiamata.addEventListener('click', handleCallButtonClick);
}

//------- CREO LE DIVERSE PAGINE ------------------------------------
const appRicarica = (): void => {
    if (utenteCorrente !== null) {
        paginaCorrente = 'appRicarica'
        //coloro di blu l'icona corretta
        iconePagine.forEach((icona, i) => {
            if (i === 0) {
              icona.classList.add('text-primary');
              icona.classList.remove('text-secondary');
            } else {
              icona.classList.remove('text-primary');
              icona.classList.add('text-secondary');
            }
          });

        areaPagine.innerHTML = `
        <div class="d-flex justify-content-between pt-2">
          <input type="number" name="ricarica" id="ricarica" placeholder="importo ricarica \u20AC" class="w-75" required>
          <button type="submit" id="inviaRicarica" class="btn bg-gray fw-semibold text-secondary">OK</button>
        </div>
        <h5 class="mt-5 pt-5 text-dark">Benvenuto ${utenteCorrente.user.split(' ')[0]}!<br>Hai un credito residuo di:</h5>
        <p id="creditoResiduo" class="fs-1 fw-light text-dark">${utenteCorrente!.credito}\u20AC</p>`;

        const inviaRicaricaBtn = document.getElementById('inviaRicarica') as HTMLButtonElement;
        const inputRicarica = document.getElementById('ricarica') as HTMLInputElement;
        const creditoResiduo = document.getElementById('creditoResiduo') as HTMLElement;

        inviaRicaricaBtn.addEventListener('click', () => {
            const valoreRicarica: number = Number(inputRicarica.value);
            utenteCorrente!.ricarica(valoreRicarica);
            // Aggiorno il credito residuo
            creditoResiduo.textContent = `${utenteCorrente!.credito}\u20AC`;
            // Svuoto il campo input
            inputRicarica.value = '';
        });
    } else {
        alert('SELEZIONARE UTENTE!');
    }
};

const appRecenti = (): void => {
    if (utenteCorrente !== null) {
        paginaCorrente = 'appRecenti';
        //coloro di blu l'icona corretta
        iconePagine.forEach((icona, i) => {
            if (i === 1) {
              icona.classList.add('text-primary');
              icona.classList.remove('text-secondary');
            } else {
              icona.classList.remove('text-primary');
              icona.classList.add('text-secondary');
            }
          });

        areaPagine.innerHTML = "Contenuto per l'app Ricarica";
    } else {
        alert('SELEZIONARE UTENTE!')
    }
}

const appContatti = (): void => {
    if (utenteCorrente !== null) {
        paginaCorrente = 'appContatti';
        //coloro di blu l'icona corretta
        iconePagine.forEach((icona, i) => {
            if (i === 2) {
              icona.classList.add('text-primary');
              icona.classList.remove('text-secondary');
            } else {
              icona.classList.remove('text-primary');
              icona.classList.add('text-secondary');
            }
          });

        areaPagine.innerHTML = `area contatti`;
    } else {
        alert('SELEZIONARE UTENTE!')
    }
}

const appTastiera = (): void => {
    paginaCorrente = 'appTastiera';
    numeroComposto = '';
    //coloro di blu l'icona corretta
    iconePagine.forEach((icona, i) => {
        if (i === 3) {
          icona.classList.add('text-primary');
          icona.classList.remove('text-secondary');
        } else {
          icona.classList.remove('text-primary');
          icona.classList.add('text-secondary');
        }
      });
    //cambio il dom
    areaPagine.innerHTML = `<h1 class="text-truncate lh-1 px-3" id="numero" style="height: 36px;"></h1>
    <section id="tastiera" class="text-center mt-5">
    <div>
        <button type="button" class="btn bg-gray rounded-circle fs-3 lh-min" value="1">1<br>
            <span class="fs-8 fw-bolder">&nbsp;</span>
        </button>
        <button type="button" class="btn bg-gray rounded-circle fs-3 lh-min mx-2" value="2">2<br>
            <span class="fs-8 fw-bolder">A B C</span>
        </button>
        <button type="button" class="btn bg-gray rounded-circle fs-3 lh-min" value="3">3<br>
            <span class="fs-8 fw-bolder">D E F</span>
        </button>
    </div>
    <div class="mt-3">
        <button type="button" class="btn bg-gray rounded-circle fs-3 lh-min" value="4">4<br>
            <span class="fs-8 fw-bolder">G H I</span>
        </button>
        <button type="button" class="btn bg-gray rounded-circle fs-3 lh-min mx-2" value="5">5<br>
            <span class="fs-8 fw-bolder">J K L</span>
        </button>
        <button type="button" class="btn bg-gray rounded-circle fs-3 lh-min" value="6">6<br>
            <span class="fs-8 fw-bolder">M N O</span>
        </button>
    </div>
    <div class="mt-3">
        <button type="button" class="btn bg-gray rounded-circle fs-3 lh-min" value="7">7<br>
            <span class="fs-8 fw-bolder">P Q R S</span>
        </button>
        <button type="button" class="btn bg-gray rounded-circle fs-3 lh-min mx-2" value="8">8<br>
            <span class="fs-8 fw-bolder">T U V</span>
        </button>
        <button type="button" class="btn bg-gray rounded-circle fs-3 lh-min" value="9">9<br>
            <span class="fs-8 fw-bolder">W X Y Z</span>
        </button>
    </div>
    <div class="mt-3">
        <button type="button" class="btn bg-gray rounded-circle fs-1 lh-min pt-3" value="canc">*</button>
        <button type="button" class="btn bg-gray rounded-circle fs-3 lh-min mx-2" value="0">0<br>
            <span class="fs-7 fw-bolder">+</span>
        </button>
        <button type="button" class="btn bg-gray rounded-circle fs-5 lh-min fw-semibold pt-1" value="canc">#<br>
        </button>
    </div>
    <!-- pulsante di chiamata -->
    <div class="mt-3">
        <button type="button" class="btn btn-success rounded-circle fs-3 lh-min mx-2">
            <svg width="28" height="28" fill="#fff" viewBox="0 0 16 20">
                <path fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
        </button>
    </div>
</section>`;

    gestioneTastiera();
}