interface Telefonino {
    user: string; //possessore telefonino
    numero: number; //numero utente
    credito: number; //euro disponibili per la chiamata
    chiamate: number[]; //è un array contenente i numeri delle chiamate fatte
    traffico: number; // durata totale telefonate
    tariffa: number; //una telefonata costa .20€ al minuto
    eliminate: number[]; //chiamte cancellate
    //metodi richiesti
    ricarica(money: number): void; //per ricaricare il credito
    chiamata(chiamata: number, durata: number): void; //aggiorna il credito in base alla tariffa/min della telefonata, ed implementa n° chiamate
    creditoResiduo(): string; //per mostrare il credito rimasto
    numeroChiamate(): string; //per mostrare il n° di telefonate effettuate
    azzeraChiamate(): void; //per cancellare il registro chiamate
}

class Utente implements Telefonino {
    readonly tariffa: number = .2;
    constructor(public user: string, public numero: number, public credito: number, public chiamate: number[], public traffico: number, public eliminate: number[]) { }

    ricarica(money: number): void {
        this.credito += money;
    }
    chiamata(chiamata: number, durata: number): void {
        this.chiamate.push(chiamata);
        this.traffico += durata;
        this.credito -= this.tariffa * durata;

        console.log("Traffico aggiornato:", this.traffico);
        console.log("Chiamate aggiornate:", this.chiamate);
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

const Giovanni = new Utente('Giovanni Rossi', 3334567001, 0, [], 0, []); //primo Utente
const Luigi = new Utente('Luigi Verdi', 3334567002, 0, [], 0, []); //secondo Utente
const Andrea = new Utente('Andrea Bianchi', 3334567003, 0, [], 0, []); //terzo Utente

//------- SELEZIONE UTENTE --------
const sceltaUtente = document.getElementById("sceltaUtente") as HTMLSelectElement;
sceltaUtente.addEventListener('change', () => {
    const utenteScelto = sceltaUtente.value;
    setUtenteCorrente(utenteScelto);
});

let utenteCorrente: Utente | null = null;

const setUtenteCorrente = (nomeUtente: string):void => {
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

// Funzione per gestire il clic su un bottone numerico
const composizioneNumero = (value: string): void => {
    numeroComposto += value;
    updateNumber();
    if (utenteCorrente) {
        //inserisco nell'utente selezionato il numero chiamato nell'array "chiamate"
        utenteCorrente.chiamate.push(Number(value));
        console.log(utenteCorrente);
    }
};

// Funzione per gestire il clic sul pulsante di chiamata
const handleCallButtonClick = (): void => {
    if (inizioChiamata === null) {
        inizioChiamata = new Date();
        pulsanteChiamata.classList.add("btn-danger");
    } else {
        // Termina la chiamata
        pulsanteChiamata.classList.remove("btn-danger");
        const fineChiamata = new Date();
        durataChiamata = Math.floor((fineChiamata.getTime() - inizioChiamata.getTime()) / 1000);
        inizioChiamata = null;
        //se è stato selezionato l'utente salva la durata chiamata in traffico
        if (utenteCorrente) {
            // Effettua la chiamata sull'utente corrente
            utenteCorrente.chiamata(Number(numeroComposto), durataChiamata);
            console.log(utenteCorrente);
        }
        numeroComposto = '';
        updateNumber();
    }
};


// Funzione per aggiornare il display con il numero e il tempo trascorso
const updateNumber = ():void => {
    const areaNumero = document.getElementById('numero') as HTMLHeadingElement;
    areaNumero.textContent = numeroComposto;
}

// Aggiungi gli event listener ai bottoni numerici
tastierino.forEach((button) => {
    button.addEventListener('click', () => composizioneNumero(button.value));
});

// Aggiungi l'event listener al pulsante di chiamata
pulsanteChiamata.addEventListener('click', handleCallButtonClick);
