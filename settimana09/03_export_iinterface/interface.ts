interface Discente {
	studente: string;
	eta: number;

	getStudente(): string;
}

interface Corso {
	tecnologia: string;
	durata: number;

	getCorso(): string;
}

// Generalmente i metodi dichiarati ma non definiti vengono utilizzati con le classi astratte, le interfacce di colito vengono utilizzate come modelli per classi di dati

class Studenti implements Discente, Corso {
	studente: string;
	eta: number = 55; // Proprietà con un valore predefinito, modificabile in quanto dichiarata facoltativa nel costruttore
	tecnologia: string;
	durata: number;
	constructor(_studente: string, _tecnologia: string, _durata: number, _eta?: number) {
		this.studente = _studente;
        if (_eta) { // Se arriva un valore dall'istanza di classe, il valore predefinito sarà modificato col nuovo valore
            this.eta = _eta;
        }
		this.tecnologia = _tecnologia;
		this.durata = _durata;
	}

	getStudente(): string {
		return `Lo studente ${this.studente}, di anni ${this.eta}`;
	}

	getCorso(): string {
		return ` sta frequentando il corso di ${this.tecnologia} della durata di ${this.durata} mesi.`;
	}

    descrivi(): string {
        return this.getStudente() + this.getCorso();
    }
}

let nuovoStudente = new Studenti('Dario Del Giudice', 'Front-End', 3, 40); // Passa il parametro facoltativo eta, che modifica il valore predefinito dichiarato nella definizione di classe
console.log(nuovoStudente.descrivi());