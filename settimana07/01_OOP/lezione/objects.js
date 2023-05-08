// in JS è possibile assegnare ad una variabile un valore tra i vari tipi: stringhe, numeri, boolean, undefined, null, ecc...
// I valori sopracitati fanno parte della famiglia delle PRIMITIVE.

// qualsiasi valore NON PRIMITIVO diventa parte della famiglia degli oggetti.

// cos'è un oggetto? un gruppo di proprietà e di metodi delimitato da parentesi graffe {}
// al suo interno può potenzialmente contenere un numero potenzialmente illimitato di coppie chiave-valore

const obj = {}; // <--- oggetto vuoto dichiarato con la NOTAZIONE LETTERALE

const dog = {
  breed: "Labrador",
  age: 2,
  bark: function () {
    // metodo di dog
    console.log("bau");
  },

  angry: function () {
    console.log("WHOOOOOFFF!!");
  }
};

// dog.bark();
// dog.bark();
// dog.bark();
// dog.bark();

// dog.angry();

const cat = {
  // se la chiave non rispetta la nomenclatura standard di JS
  "fur-type": "long and fluffy",
  "date.of.adoption": "01/01/2023",
  location: { state: "Italy" } // referenza a un sotto oggetto anonimo, il valore salvato sarà l'indirizzo in memoria in cui trovarlo
};
// 1) DOT NOTATION - classica
console.log(dog.breed);
console.log(dog.age);

console.log(cat["fur-type"]);
console.log(cat["date.of.adoption"]);

const propertyName = "loca";

// 2) SQUARE BRACKETS NOTATION - funziona molto bene per computazione di valori dinamici prima di tentare di accedere alla proprietà
console.log(cat[propertyName + "tion"]);
console.log(cat.propertyName); // in js leggere una proprietà inesistente non rompe l'esecuzione del codice, ci torna semplicemente undefined

cat.name = "furball";
// questa caratteristica di aggiungere nuove coppie chiave-valore agli oggetti
// viene definita "CREAZIONE PER DEFINIZIONE"

console.log(cat);

const rabbit = {
  color: "brown",
  eat: function (food) {
    console.log("I'm eating " + food);
  },
  area: {
    location: { region: "FVG", city: "Udine", building: "pet Store" }
  }
};

console.log(rabbit);
console.log(rabbit.area["location"].building);
delete rabbit.color; // <-- elimina una coppia chiave/valore tramite il nome
console.log(rabbit);

// quindi gli oggetti JS sono entità "dinamiche", possono evolversi/modificarsi nel
// corso del tempo, durante l'esecuzione degli script.
// possiamo dire che gli oggetti JS possono beneficiare di una DEFINIZIONE INCREMENTALE:
// si parte da una definizione BASE, e la si può arricchire man mano.

// CLONARE PRIMITIVE
// clonando primitive in JS viene salvato il valore esatto, non stiamo salvando la referenza (o indirizzo di memoria in cui il dato esiste)
let x = 10;
let y = x; // a y viene assegnato IL VALORE di x, che è 10

x = x + 1; // <-- x? x è 11 (era 10 inizialmente)

console.log(y);
console.log(x);

// CLONARE OGGETTI
// clonando NON PRIMITIVE ci stiamo copiando la referenza di quell'entità (o link all'area di memoria)

// const cat2 = cat; // PECCATO CAPITALE! DA NON FARE MAI!!!
// cat2.name = "spitball";
// modificando name dentro cat2 abbiamo modificato anche name dentro cat, perchè
// sono solamente due riferimenti allo stesso oggetto

// const newObj = {};
// const cat2 = Object.assign(newObj, cat);

const cat2 = Object.assign({}, cat); // Metodo 1 per SHALLOW COPY - richiede un target obj e una o più sources (fonti)
// object assign richiede un target, di solito un oggetto vuoto, e una source, la sorgente
// da cui andremo a trasportare le proprietà

const cat3 = { ...cat, name: "speedy" }; // Metodo 2 per SHALLOW COPY - SPREAD OPERATOR - spalma le proprietà di uno o più oggetti in quello nuovo appena creato e le sovrascrive all'occorrenza
console.log(cat);

cat2.name = "spitball";
delete cat2["fur-type"];

cat2.location.state = "US";

cat3.location = { ...cat.location };
cat3.location.state = "UK";
console.log(cat);
console.log(cat2);
console.log(cat3);

const hero = {
  power: "strength",
  planet: "Mars"
};

const hero2 = {
  hairColor: "brown",
  power: "fly"
};

const hero3 = { ...hero, ...hero2, power: "jump" };
console.log(hero3);

let newObj = {};

const objStringified = JSON.stringify(hero3);

const backToObj = JSON.parse(objStringified);
console.log(objStringified);
console.log(backToObj);

// DEEP CLONE

const cat4 = JSON.parse(JSON.stringify(cat)); // Metodo 3 - Deep copy - (Il miglior metodo attuale) con JSON si crea la versione "stringhifizzata" dell'oggetto e poi la si ritrasforma,
// a partire dai suoi caratteri, in nuove referenze in memoria (escluse le funzioni)
const cat5 = structuredClone(cat); // Metodo 4 - Deep copy - Metodo nativo (non ancora completamente supportato) per clonare in maniera profonda proprietà di oggetti (escluse le funzioni)
cat4.location.state = "IT";
cat5.location.state = "Vatican";
console.log(cat4);
console.log(cat5);
