const singer = {
  name: "Gianni",
  surname: "Morandi",
  sayHello: function () {
    // return "Hello my name is " + singer.name + " " + singer.surname;
    console.log("THIS", this); // la keyword "this" prende come valore la referenza dell'oggetto di riferimento, non è quindi un valore fisso.

    return "Hello my name is " + this.name + " " + this.surname;
  }
};

const operaSinger = { ...singer, name: "Maria", surname: "Callas" };

console.log(operaSinger);
console.log(singer.sayHello());
console.log(operaSinger.sayHello());

const singer2 = {
  name: "Gianni",
  surname: "Morandi",
  sayHello: () => {
    // non usare una arrow function come metodo!

    console.log("SINGER2 THIS", this); // la arrow function eredita il "this" dal contesto lessicale, o per meglio dire, il livello superiore
    // il livello superiore sarà fuori dall'oggetto singer2 però... quindi l'oggetto globale e this.name non esisterà (chiaramente window.name non esiste)

    return "Hello my name is " + this.name + " " + this.surname; // undefined e undefined
  }
};

console.log(singer2.sayHello());

const singer3 = {
  name: "Gianni",
  surname: "Morandi",
  skills: ["singer", "presenter", "influencer"],
  sayHello: function () {
    // return "Hello my name is " + singer.name + " " + singer.surname;
    console.log("OUTER THIS", this); // la keyword "this" prende come valore la referenza dell'oggetto di riferimento, non è quindi un valore fisso.

    // const innerFunc = function () {
    //   console.log("INNER THIS", this); // se non fosse per il .bind() sottostante il "this" nel contesto di una funzione annidata in un metodo sarebbe sempre l'oggetto window
    //   console.log("THIS NAME", this.name);
    // }.bind(this); // questo this viene "appiccicato" ("bindato") dal contesto esterno di riferimento

    // innerFunc();

    // la arrow function torna molto molto utile nel caso in cui serva usare una funzione all'interno di un metodo e mantenere il riferimento al this del nostro oggetto
    const innerFunc2 = () => {
      console.log("INNER THIS", this); // il "this" di una arrow function eredita il valore dal contesto esterno come sappiamo, e quindi in questo caso è esattamente quello che ci serve!
      console.log("THIS NAME", this.name);
    }; // in questo caso il this viene ereditato in automatico dal contesto esterno di riferimento

    innerFunc2();

    // this.skills.forEach(function(skill) {
    //   console.log("INNER THIS", this); // usando una funzione normale come callback per il forEach (che viene eseguita in un altro contesto) si perderà il riferimento al this
    //   console.log("Hello my name is " + this.name + " " + this.surname + ", " + "I am a: " + skill);
    // });

    this.skills.forEach(skill => {
      console.log("INNER THIS", this); // le arrow function sono pensate proprio per casi come questo in cui siamo obbligati ad usare una funzione definita dentro ad un altra funzione
      // normalmente perderemmo il contesto del this, ma grazie alla arrow function che eredita il this dal suo contesto lessicale o contesto esterno in questo caso,
      // avremo così mantenuto il valore del this del nostro oggetto di riferimento

      console.log("Hello my name is " + this.name + " " + this.surname + ", " + "I am a: " + skill);
    });
  }
};

singer3.sayHello();
