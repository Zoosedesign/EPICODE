// gli oggetti in JS sono semplici da realizzare --> {} , fintanto che ne creiamo pochi.
// il problema arriva quando abbiamo la necessità di creare molti oggetti in serie, tutti anonimi e indipendenti, con le stesse copie chiave/valore

let person = {
  name: "Mario",
  surname: "Rossi",
  address: "via impossibile 3",
  email: "mario.rossi1@gmail.com",
  showName: function () {
    return this.name + " " + this.surname;
  }
};

let person2 = {
  name: "Mario",
  surname: "Verdi",
  address: "via dell'altro 3",
  email: "mario.verdi1@gmail.com",
  showName: function () {
    return this.name + " " + this.surname;
  }
};

// per aiutarci a scrivere oggetti in serie fatti con la stessa struttura
// qui entrano in gioco le funzioni costruttrici (constructor functions)

// camelCase -> prima lettera minuscola e le altre maiuscole (gobba di cammello)
// PascalCase -> tutte le lettere maiuscole inclusa la prima!

// per creare funzioni costruttore dovete necessariamente usare una funzione classica (non arrow!)
const Person = function () {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.showName = function () {};
};

const giuseppeVerdi = new Person();
console.log(giuseppeVerdi);

giuseppeVerdi.name = "Giuseppe";
giuseppeVerdi.surname = "Verdi";

console.log(giuseppeVerdi);

const marioRossi = new Person();

marioRossi.name = "Mario";
marioRossi.surname = "Rossi";
console.log(marioRossi);

const DynamicPerson = function (name, surname, email, address = "nothing yet") {
  this.name = name;
  this.surname = surname;
  this.address = address;
  this.email = email;
  this.showName = function () {};
};

const marioSuper = new DynamicPerson("Mario", "Super", "super.mario@gmail.com");
console.log(marioSuper);

marioSuper.address = "super nintendo cartrige";

const warioSuper = new DynamicPerson("Wario", "Wario", "Wario.Wario@gmail.com", "super nintendo cartrige 2");
console.log(warioSuper);

DynamicPerson.prototype.sayHello = function () {
  console.log("hello boys and girls, I'm " + this.name + " " + this.surname);
};

marioSuper.sayHello();
warioSuper.sayHello();
