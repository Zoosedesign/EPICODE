// Classe per gestire il conto bancario
class BankAccount {
  // Dati intestatario conto corrente
  customerName: string;
  customerSurname: string;
  balanceInit: number = 0;

  constructor(name: string, surname: string) {
    this.customerName = name;
    this.customerSurname = surname;
  }

  // Metodo per mostrare il saldo attuale del cliente
  displayBalance(): number {
    return this.balanceInit;
  }

  // Metodo per aggiungere un deposito sul saldo
  bankDeposit(deposit: number): number {
    return (this.balanceInit += deposit);
  }

  // Metodo per ritirare soldi dal saldo
  bankWithdraw(withdraw: number): number {
    return (this.balanceInit -= withdraw);
  }
}

// Classe per gestire il conto bancario dei genitori con interessi aggiuntivi
class ParentsAccount extends BankAccount {
  constructor(name: string, surname: string) {
    super(name, surname);
  }

  // Modifica il metodo di deposito per applicare interessi aggiuntivi
  bankDeposit(deposit: number): number {
    return (this.balanceInit += deposit + deposit * 0.1);
  }
}

// Funzione per gestire il deposito o il prelievo
function handleTransaction(account: BankAccount, amount: number, action: string): void {
  if (action === "deposit") {
    account.bankDeposit(amount);
  } else if (action === "withdraw") {
    account.bankWithdraw(amount);
  }

  // Aggiorna la visualizzazione del saldo
  const balanceElement = document.getElementById(`view${account.constructor.name}Balance`);
  if (balanceElement) {
    balanceElement.textContent = account.displayBalance().toString();
  }
}

// Funzione per gestire l'invio del modulo
function handleSubmit(formId: string, account: BankAccount, action: string): void {
  const form = document.getElementById(formId) as HTMLFormElement;
  const amountInput = form.querySelector("input[type='number']") as HTMLInputElement;
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
function handleSonFormSubmit(): void {
  handleSubmit("sonDeposit", son, "deposit");
}

function handleSonWithdrawFormSubmit(): void {
  handleSubmit("sonWithDraw", son, "withdraw");
}

// Gestione dell'invio del modulo per la madre
function handleMotherFormSubmit(): void {
  handleSubmit("motherDeposit", mother, "deposit");
}

function handleMotherWithdrawFormSubmit(): void {
  handleSubmit("motherWithDraw", mother, "withdraw");
}
