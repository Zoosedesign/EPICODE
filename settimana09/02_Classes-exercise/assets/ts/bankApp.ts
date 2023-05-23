// Creo la classe con i dati utili dei clienti della banca
class bankAccount {
    // dati intestatario conto corrente
    customerName: string;
    customerSurname: string;
    balanceInit: number = 0;
    // inizializzo i parametri che dovranno passare i valori per ogni cliente
    constructor(name: string, surname: string) {
        this.customerName = name;
        this.customerSurname = surname;
    }

    // che il metodo per mostrare il saldo attuale del cliente
    displayBalance(): number {
        return this.balanceInit;
    }

    // creo il metodo per aggiungere un deposito sul saldo
    bankDeposit(deposit: number): number {
        return this.balanceInit += deposit;
    }

    // creo il metodo per ritirare soldi dal saldo
    bankWithdraw(withdraw: number): number {
        return this.balanceInit -= withdraw;
    }
}

// estendo la classe clienti della banca con una versione per genitori con il 10% di interesse sul deposito
class parentsAccount extends bankAccount {
    constructor(name: string, surname: string) {
        super(name, surname)
    }
    // modifico il metodo con gli interessi extra dati ai genitori
    bankDeposit(deposit: number): number {
        return this.balanceInit += (deposit + (deposit * 0.1));
    }
}

//genero i due clienti banca richiesti
const son = new bankAccount('Andrea', 'Zucchetti');
const mother = new parentsAccount('Silvana', 'Casiraghi');

//------------ VALORI IMMESSI NEL DOM ----------------
//recupero gli importi di deposito e ritiro
const updateBalance = (
    inputId: string, // passo l'id dell'input
    user: any, // passo il cliente che farà l'operazione
    displayId: string, // id area che mostrerà il saldo nel DOM
    action: 'deposit' | 'withdraw' // metto se è un'operazione di ritiro o accredito
): void => {
    const inputElement = document.getElementById(inputId) as HTMLInputElement;
    const amount = Number(inputElement.value);

    if (action === 'deposit') {
        user.bankDeposit(amount);
    } else if (action === 'withdraw') {
        user.bankWithdraw(amount);
    }

    const balance = document.getElementById(displayId) as HTMLSpanElement;
    balance.textContent = String(user.displayBalance());

    inputElement.value = "";
};

// gestisco il deposito ed il ritiro per il figlio
const sonDepositButton = document.getElementById('sonDepositButton') as HTMLButtonElement;
sonDepositButton.addEventListener('click', () => {
    //passo gli argomenti a update balance
    updateBalance('sd', son, 'viewSonBalance', 'deposit');
});

const sonWithdrawButton = document.getElementById('sonWithdrawButton') as HTMLButtonElement;
sonWithdrawButton.addEventListener('click', () => {
    updateBalance('sw', son, 'viewSonBalance', 'withdraw');
});
// gestisco il deposito ed il ritiro per la madre
const motherDepositButton = document.getElementById('motherDepositButton') as HTMLButtonElement;
motherDepositButton.addEventListener('click', () => {
    updateBalance('md', mother, 'viewMotherBalance', 'deposit');
});

const motherWithdrawButton = document.getElementById('motherWithdrawButton') as HTMLButtonElement;
motherWithdrawButton.addEventListener('click', () => {
    updateBalance('mw', mother, 'viewMotherBalance', 'withdraw');
});