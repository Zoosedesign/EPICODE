class Studente {
    nome: string;
    cognome: string;
    constructor(_nome: string, _cognome: string) {
        this.nome = _nome;
        this.cognome = _cognome;
    }

    getStudente(): string {
        return `${this.nome} ${this.cognome}`;
    }

    static getStato(): string { // Il modificatore static consente l'accesso a proprietà e metodi di classe SOLTANTO in riferimento alla classe in quanto tale
        return 'Italia';
    }
}

class Docente extends Studente {
    eta: number; // Non è necessario specificare le proprietà della classe madre
    constructor (_eta: number, _nome: string, _cognome: string) { // Nel costruttore vanno indicati i parametri che popoleranno le proprietà, sia i nuovi (quelli che estendono la classe madre) sia quelli ereditati
        super (_nome, _cognome); // con la keyword super indichiamo i parametri che popoleranno le proprietà ereditate
        this.eta = _eta; // con la keyword this indichiamo i parametri che popoleranno le nuove proprietà
    }

    getStato(): string { // Polimorfismo: utilizzo lo stesso metodo della classe madre modificandolo; si intende la tecnica in base alla quale si chiama il metodo della superclasse modificandolo
        return 'Francia';
    }
}

let newStudente = new Studente('Mario', 'Rossi');

console.log(`${newStudente.getStudente()} residente in ${Studente.getStato()}`); // Chiamata alla classe madre Studente per accedere al membro static

let newDocente = new Docente(35, 'Aldo', 'Bianchi');

console.log(`${newDocente.getStudente()}, di anni ${newDocente.eta}, residente in ${newDocente.getStato()}`); // Chiamata alla classe madre Docente per accedere al membro static

class Modificatori { // I modificatori d'accesso non sono modificabili
    static nome: string = 'Dario'; // Il membro static è accessibile e modificabile soltanto chiamando direttamente la classe madre, per cui riceve un valore nella dichiarazione di classe e non va chiamato nel costruttore
    readonly cognome: string; // Il modificatore readonly riceve il valore quando la classe viene istanziata e lo rende costante, non può più essere cambiato neanche intervenendo sulla classe madre
    private eta: number; // Il modificatore private rende la proprietà accessibile e modificabile SOLO dall'interno della classe
    protected email: string; // Il modificatore protected rende la proprietà accessibile e modificabile solo dall'interno della classe e da eventuali sottoclassi
    public frequenta: boolean; // il modificatore public rende la proprietà accessibile e modificabile da qualunque istanza di classe

    constructor(_cognome: string, _anno: number, _email: string, _frequenta: boolean) {
        this.cognome = _cognome;
        this.eta = this.calcolaEta(_anno);
        this.email = _email;
        this.frequenta = _frequenta;
    }

    scrivi(): string {
        return `${Modificatori.nome} ${this.cognome}, di anni ${this.eta}, email ${this.email}`;
    }

    private calcolaEta(valore: number): number { // Utilizzando il modificatore private adottiamo la tecnica dell'incapsulamento: proprietà e metodi private rimangono incapsulati all'interno della classe madre
        let anno = new Date();
        let attuale: number = anno.getFullYear();
        let newEta: number = attuale - valore;
        return newEta;
    }
}

let nuovaClasse = new Modificatori('Del Giudice', 1967, 'dadegi@gmail.com', false);
Modificatori.nome = 'Mario'; // Si può modificare il valore di una proprietà static accedendo direttamente alla classe, MA tutte le istanze della classe avranno il nuovo valore

console.log(nuovaClasse.scrivi());

// nuovaClasse.cognome = 'Rossi'; darà errore perché una proprietà readonly non è modificabile

class newMod extends Modificatori { // La sottoclasse eredita tutte le proprietà e i metodi non static, compresi i modificatori d'accesso; utilizzando la keyword extends adottiamo la tecnica dell'ereditarietà
    corso: string;
    constructor(_cognome: string, _email: string, _anno: number, _frequenta: boolean, _corso: string) {
        super (_cognome, _anno, _email, _frequenta);
        this.corso = _corso;
    }
}

let altraClasse = new newMod('Bianchi', 'pippo@pippo.com', 1985, true, 'FS0223');

console.log(altraClasse);