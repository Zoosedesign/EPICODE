let mioArray: string[] = ['Pippo','Pluto','Paperino'];

mioArray.push('Gastone');

let arrayMisto: (string | number)[] = ['Pippo', 5];

console.log(arrayMisto);

arrayMisto.push(18);

arrayMisto.push ('Pluto');

console.log(arrayMisto);

// arrayMisto.push(false); Non posso farlo perché posso inserire soltanto valori di tipo string o number

let tupla: [string, number, string] = ['Pippo', 15, 'Pluto'];

console.log(tupla);

// tupla[0] = 25; Non posso farlo perché all'indice 0 è indicato un tipo string

// tupla[3] = 'Nicola'; Non posso farlo perché la tupla ha lunghezza definita

tupla[0] = 'Paperino';

console.log(tupla);

// tupla[3]: number = 18; Non posso aggiungere un indice alla tupla neanche specificandone il tipo

const nuovoArray: number[] = [1,2,3,4,5];

nuovoArray.push(9);

console.log(nuovoArray);