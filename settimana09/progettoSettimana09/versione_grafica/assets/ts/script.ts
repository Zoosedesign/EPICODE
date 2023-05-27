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
    ricarica(money: number): void; //per ricaricare il credito
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
    ricarica(money: number): void {
        this.credito += money;
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

//------- SELEZIONE UTENTE --------
const sceltaUtente = document.getElementById("sceltaUtente") as HTMLSelectElement;
sceltaUtente.addEventListener('change', () => {
    const utenteScelto = sceltaUtente.value;
    setUtenteCorrente(utenteScelto);
});

let utenteCorrente: Utente | null = null;

const setUtenteCorrente = (nomeUtente: string): void => {
    console.log("Utente selezionato:", nomeUtente);
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
}

//------- GESTIONE COMPOSIZIONE NUMERO TELEFONICO --------

//variabili globali
let numeroComposto: string = '';
let inizioChiamata: Date | null = null;
let durataChiamata: number = 0;

//elementi DOM
const tastierino = document.querySelectorAll('#tastiera button[value]') as NodeListOf<HTMLButtonElement>;
const pulsanteChiamata = document.querySelector('#tastiera button.btn-success') as HTMLButtonElement;
const areaNumero = document.getElementById('numero') as HTMLHeadingElement;

// Funzione per gestire il clic su un bottone numerico
const composizioneNumero = (value: string): void => {
    numeroComposto += value;
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
            durataChiamata = Math.floor((fineChiamata.getTime() - inizioChiamata.getTime()) / 1000);
            console.log(durataChiamata);
            inizioChiamata = null;
            //riabilito il tasterino numerico
            tastierino.forEach((button) => {
                button.disabled = false;
              });
            //se è stato selezionato l'utente salva la durata chiamata in traffico
            if (utenteCorrente) {
                console.log(utenteCorrente)
                // Effettua la chiamata sull'utente corrente
                utenteCorrente.chiamata(Number(numeroComposto), durataChiamata);
            }
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