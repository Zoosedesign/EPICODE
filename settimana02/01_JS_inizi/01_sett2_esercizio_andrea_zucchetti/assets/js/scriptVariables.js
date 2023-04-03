var programma = 'è scritto da Javascript';

if (programma === undefined) {
    document.getElementsByClassName('PROGRAMMA').innerHTML = 'non è scritto in javascript';
} else {
    document.getElementsByClassName('PROGRAMMA').innerHTML = programma
}