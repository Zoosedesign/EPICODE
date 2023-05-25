// Custom type
type Combinable = number | string;
type ConversionDescriptor = boolean | string;

function combina(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

console.log(combina('Hello ', 25, 'ciao'));

// Asserzione di tipo
let code: any = true;
let codiceImpiegato = code;

// code = 12345;

if (typeof(codiceImpiegato) === 'number') {
    codiceImpiegato = <number> code;
} else {
    codiceImpiegato = <any> code;
}
console.log(typeof(codiceImpiegato));
console.log(codiceImpiegato);

// Intersection type
type Admin = {
    nome: string,
    privilegi: string[]
}

type Impiegato = {
    matricola: number,
    startDate: Date
}

type SuperAdmin = Admin & Impiegato; // INTERSECTION TYPE

let direttore: Admin = {
    nome: 'Mario Rossi',
    privilegi: ['Gestione ufficio', 'Gestione permessi']
}

console.log(direttore);

let funzionario: Impiegato =  {
    matricola: 12345,
    startDate: new Date('2023-01-01')
}

console.log(funzionario);

const amministratore: SuperAdmin = {
    nome: 'Aldo Bianchi',
    privilegi: ['Gestione bilanci', 'Investimenti aziendali', 'Direzione CDA'],
    matricola: 5689,
    startDate: new Date('2022-06-01')
}
console.log(amministratore);
console.log(`${amministratore.nome}, privilegi: ${amministratore.privilegi}`);