// abbiamo visto che JS è un linguaggio di programmazione orientato agli oggetti
// la differenza principale, tuttavia, con altri linguaggi di programmazione più classici
// come Java, C#, C++ è che JS si basa sul concetto di PROTOTIPO, mentre gli altri si
// basano sul concetto di CLASSE

// grazie alle classi, gli altri linguaggi permettono di estendere le funzionalità
// di una struttura principale creando delle "sottovarianti", delle "sottoclassi"

// let obj = {}
// in JS è possibile creare un oggetto direttamente con le {} senza avere il costruttore,
// mentre in tutti i classici linguaggi OOP questo non è possibile: è necessario avere
// PRIMA la classe, e poi se ne deriva l'istanza (l'oggetto)

// negli altri linguaggi non è possibile modificare uno "stampino" dopo la sua creazione
// mentre in JS come abbiamo visto ieri è possibile agire sui prototipi

// con il passare del tempo e l'introduzione di ES6 anche JS ha cominciato a permettere
// a suoi sviluppatori di utilizzare il concetto di "classe", uniformando gli approcci
// con altri linguaggi più blasonati e rendendo più facile la transizione a sviluppatori
// provenienti da questi linguaggi.

class Person {
  // qua definisco la classe

  // il costruttore mi permette di generare parametri dinamici partendo da degli argomenti forniti al momento della istanziazione della classe con la keyword "new"
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }
}

//marioRossi sarà una istanza di Person
const marioRossi = new Person("Mario", "Rossi", "mario.rossi@gmail.com");
console.log(marioRossi);

class House {
  constructor(squareMeters, numberOfRooms) {
    this.squareMeters = squareMeters;
    this.numberOfRooms = numberOfRooms;

    // this.generateReport2 = function () {
    //   console.log("report2");
    // };
  }

  // metodo della classe, si dichiara senza let o const
  generateReport() {
    return (
      "Ciao! sono una casa di queste dimensioni: " +
      this.squareMeters +
      "mq" +
      " e ho questo numero di stanze: " +
      this.numberOfRooms
    );
  }
}

const bigHouse = new House(330, 6);
const smallApartment = new House(80, 3);

console.log(bigHouse);
// console.log(House.generateReport()) // <-- questo NON funziona!!
// generateReport non esiste nella CLASSE, esiste solamente nelle ISTANZE della classe
console.log(smallApartment.generateReport());

// SOTTOCLASSI ED EREDITARIETÀ
// grazie a questa struttura a classi scopriamo quanto è facile ESTENDERE una classe
// per crearne una sottovariante

class Developer extends Person {
  constructor(name, surname, email, knownLanguages) {
    // super invoca il costruttore della classe da cui la nostra si estende
    super(name, surname, email);
    // Person è definita la SUPERCLASSE di Developer
    this.knownLanguages = knownLanguages;
  }
}

// un Developer avrà senz'altro anche name, surname, email (perchè esistono in Person)
const stefDev = new Developer("Stefano", "Miceli", "ste.mic@gmail.com", ["HTML", "CSS", "JS"]);

class SeniorDeveloper extends Developer {
  constructor(name, surname, email, knownLanguages, specialty) {
    super(name, surname, email, knownLanguages);

    this.specialty = specialty;
  }

  showOff() {
    return "I'm an experienced developer! My specialty is " + this.specialty + "!!!";
  }
}

const warioDev = new SeniorDeveloper(
  "Wario",
  "Super",
  "wario.wario@gmail.com",
  ["React", "Redux", "NodeJS"],
  "TypeScript"
);

console.log(warioDev);
console.log(warioDev.showOff());

class Computer {
  constructor(brand) {
    this.brand = brand;
  }

  showBrand() {
    return "Il mio computer è un: " + this.brand;
  }
}

const macbook = new Computer("Apple");
const surface = new Computer("Microsoft");
const xps = new Computer("Dell");

// console.log(macbook.showBrand());
// console.log(surface.showBrand());
// console.log(xps.showBrand());

class ComputerModel extends Computer {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  showComplete() {
    return this.showBrand() + ", con modello: " + this.model;
  }
}

const xps17 = new ComputerModel("Dell", "XPS 17");
console.log(xps17.showBrand());
console.log(xps17.showComplete());

console.log(xps17.model);
