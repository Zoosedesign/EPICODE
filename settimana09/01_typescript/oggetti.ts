let corso: {
    nome: string;
    anno: number;
    fullStack: boolean;
}

corso = {
    nome: 'FS0223',
    anno: 2023,
    fullStack: true
}

//oppure 

let corso2: {nome: string;anno: number;fullStack: boolean;} = {nome: 'FS0223',anno: 2023,fullStack: true}

console.log(corso);

corso.nome = 'Altro Corso';
corso.fullStack = false;

console.log(corso);