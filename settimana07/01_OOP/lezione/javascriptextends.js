// Classe base: Persona
class Persona {
    constructor(nome, cognome) {
      this.nome = nome;
      this.cognome = cognome;
    }
  
    presentati() {
      console.log(`Ciao, mi chiamo ${this.nome} ${this.cognome}.`);
    }
  }
  
  // Classe derivata: Studente
  class Studente extends Persona {
    constructor(nome, cognome, corsoDiStudi) {
      super(nome, cognome); // Chiama il costruttore della classe base (Persona)
      this.corsoDiStudi = corsoDiStudi;
    }
  
    presentati() {
      super.presentati(); // Chiama il metodo presentati() della classe base (Persona)
      console.log(`Sono uno studente di ${this.corsoDiStudi}.`);
    }
  }
  
  // Classe derivata: Insegnante
  class Insegnante extends Persona {
    constructor(nome, cognome, materia) {
      super(nome, cognome); // Chiama il costruttore della classe base (Persona)
      this.materia = materia;
    }
  
    presentati() {
      super.presentati(); // Chiama il metodo presentati() della classe base (Persona)
      console.log(`Insegno ${this.materia}.`);
    }
  }
  
  // Creazione di istanze delle classi derivate
  const studente = new Studente("Mario", "Rossi", "Informatica");
  const insegnante = new Insegnante("Luigi", "Bianchi", "Matematica");
  
  studente.presentati(); // Output: "Ciao, mi chiamo Mario Rossi. Sono uno studente di Informatica."
  insegnante.presentati(); // Output: "Ciao, mi chiamo Luigi Bianchi. Insegno Matematica."
