console.log('Hello World!');

let nome: string = 'Mario';

console.log(`Il tuo nome è ${nome}`);

let verifica: boolean = 5<3 ? true : false;

console.log(verifica);

for (let i: number = 0; i < 5; i++) {
    console.log(i);
}

let sconosciuto: unknown;

sconosciuto = "nome";

console.log(sconosciuto);

sconosciuto = 15;

console.log(sconosciuto);

let dedotto: number[] = [1,2,3,4,5];

console.log(typeof dedotto);

let costruito = new String('pippo');

let copiato = costruito;

console.log(copiato);