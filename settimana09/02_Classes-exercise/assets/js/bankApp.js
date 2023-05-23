"use strict";
// Classe per gestire il conto bancario
class BankAccount {
    // Dati intestatario conto corrente
    customerName;
    customerSurname;
    balanceInit = 0;
    constructor(name, surname) {
        this.customerName = name;
        this.customerSurname = surname;
    }
    // Metodo per mostrare il saldo attuale del cliente
    displayBalance() {
        return this.balanceInit;
    }
    // Metodo per aggiungere un deposito sul saldo
    bankDeposit(deposit) {
        return (this.balanceInit += deposit);
    }
    // Metodo per ritirare soldi dal saldo
    bankWithdraw(withdraw) {
        return (this.balanceInit -= withdraw);
    }
}
// Classe per gestire il conto bancario dei genitori con interessi aggiuntivi
class ParentsAccount extends BankAccount {
    constructor(name, surname) {
        super(name, surname);
    }
    // Modifica il metodo di deposito per applicare interessi aggiuntivi
    bankDeposit(deposit) {
        return (this.balanceInit += deposit + deposit * 0.1);
    }
}
// Funzione per gestire il deposito o il prelievo
function handleTransaction(account, amount, action) {
    if (action === "deposit") {
        account.bankDeposit(amount);
    }
    else if (action === "withdraw") {
        account.bankWithdraw(amount);
    }
    // Aggiorna la visualizzazione del saldo
    const balanceElement = document.getElementById(`view${account.constructor.name}Balance`);
    if (balanceElement) {
        balanceElement.textContent = account.displayBalance().toString();
    }
}
// Funzione per gestire l'invio del modulo
function handleSubmit(formId, account, action) {
    const form = document.getElementById(formId);
    const amountInput = form.querySelector("input[type='number']");
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
        handleTransaction(account, amount, action);
        form.reset();
    }
}
// Creazione degli oggetti di conto bancario
const son = new BankAccount("Andrea", "Zucchetti");
const mother = new ParentsAccount("Silvana", "Casiraghi");
// Gestione dell'invio del modulo per il figlio
function handleSonFormSubmit() {
    handleSubmit("sonDeposit", son, "deposit");
}
function handleSonWithdrawFormSubmit() {
    handleSubmit("sonWithDraw", son, "withdraw");
}
// Gestione dell'invio del modulo per la madre
function handleMotherFormSubmit() {
    handleSubmit("motherDeposit", mother, "deposit");
}
function handleMotherWithdrawFormSubmit() {
    handleSubmit("motherWithDraw", mother, "withdraw");
}
