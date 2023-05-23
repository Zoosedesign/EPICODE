"use strict";
// Creo la classe con i dati utili dei clienti della banca
class bankAccount {
    // dati intestatario conto corrente
    customerName;
    customerSurname;
    balanceInit = 0;
    // inizializzo i parametri che dovranno passare i valori per ogni cliente
    constructor(name, surname) {
        this.customerName = name;
        this.customerSurname = surname;
    }
    // che il metodo per mostrare il saldo attuale del cliente
    displayBalance() {
        return this.balanceInit;
    }
    // creo il metodo per aggiungere un deposito sul saldo
    bankDeposit(deposit) {
        return this.balanceInit += deposit;
    }
    // creo il metodo per ritirare soldi dal saldo
    bankWithdraw(withdraw) {
        return this.balanceInit -= withdraw;
    }
}
// estendo la classe clienti della banca con una versione per genitori con il 10% di interesse sul deposito
class parentsAccount extends bankAccount {
    constructor(name, surname) {
        super(name, surname);
    }
    // modifico il metodo con gli interessi extra dati ai genitori
    bankDeposit(deposit) {
        return this.balanceInit += (deposit + (deposit * 0.1));
    }
}
//genero i due clienti banca richiesti
const son = new bankAccount('Andrea', 'Zucchetti');
const mother = new parentsAccount('Silvana', 'Casiraghi');
//------------ VALORI IMMESSI NEL DOM ----------------
//recupero gli importi di deposito e ritiro
const updateBalance = (inputId, // passo l'id dell'input
user, // passo il cliente che farà l'operazione
displayId, // id area che mostrerà il saldo nel DOM
action // metto se è un'operazione di ritiro o accredito
) => {
    const inputElement = document.getElementById(inputId);
    const amount = Number(inputElement.value);
    if (action === 'deposit') {
        user.bankDeposit(amount);
    }
    else if (action === 'withdraw') {
        user.bankWithdraw(amount);
    }
    const balanceElement = document.getElementById(displayId);
    balanceElement.textContent = String(user.displayBalance());
    inputElement.value = "";
};
// gestisco il deposito ed il ritiro per il figlio
const sonDepositButton = document.getElementById('sonDepositButton');
sonDepositButton.addEventListener('click', () => {
    //passo gli argomenti a update balance
    updateBalance('sd', son, 'viewSonBalance', 'deposit');
});
const sonWithdrawButton = document.getElementById('sonWithdrawButton');
sonWithdrawButton.addEventListener('click', () => {
    updateBalance('sw', son, 'viewSonBalance', 'withdraw');
});
// gestisco il deposito ed il ritiro per la madre
const motherDepositButton = document.getElementById('motherDepositButton');
motherDepositButton.addEventListener('click', () => {
    updateBalance('md', mother, 'viewMotherBalance', 'deposit');
});
const motherWithdrawButton = document.getElementById('motherWithdrawButton');
motherWithdrawButton.addEventListener('click', () => {
    updateBalance('mw', mother, 'viewMotherBalance', 'withdraw');
});
