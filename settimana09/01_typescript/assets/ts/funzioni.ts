function persona(nome: string, cognome: string, eta?: number): string {
	if (eta) {
		return `Signor ${nome} ${cognome} di anni ${eta}`;
	} else {
		return `Signor ${nome} ${cognome}`;
	}
}

console.log(persona("Dario", "Del Giudice", 55));

console.log(persona("Mario", "Rossi"));

// console.log(persona('Nicola')); Non posso passare un solo parametro perché la funzione chiede DUE parametri obbligatori

const mioCorso = (nomeCorso: string, annoCorso: number): string => {
	return `Corso ${nomeCorso} dell'anno ${annoCorso}`;
};

console.log(mioCorso("FS0223", 2023));

const Stati: {
	nome: string;
	capitale: string;
	descrizione: any;
} = {
	nome: "Italia",
	capitale: "Roma",
	descrizione() {
		return `la capitale di ${this.nome} è ${this.capitale}`;
	},
};

console.log(Stati.descrizione());

const divisione = (val1: number, val2: number): void => {
	let risultato = val1 / val2;
	try {
		if (val2 === 0) throw new Error("Errore! Divisione per zero");
		if (risultato !== Infinity) {
			console.log(risultato);
		}
	} catch (err: any) {
		console.error(err.message);
	} finally {
		console.log("La gestione degli errori è stata eseguita");
	}
};

let risultato = divisione(4, 0);
