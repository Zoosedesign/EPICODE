var programma = ' è scritto da Javascript';

if (programma === undefined) {
    document.getElementById('PROGRAMMA').innerHTML = ' non è scritto in javascript';
} else {
    document.getElementById('PROGRAMMA').innerHTML = programma
}