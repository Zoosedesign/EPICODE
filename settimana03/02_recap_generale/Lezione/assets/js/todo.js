window.addEventListener('load', function() {
    if(!localStorage.getItem('utente')) { // Se non è stato scritto nulla nel campo di input
        location.href = 'errore.html'; // Carica la pagina di errore
    }
});

var utente = localStorage.getItem('utente'); // Leggo il localStorage

document.getElementById('saluto').innerHTML += utente; // Scrivo il valore del localStorage nell'HTML

document.getElementById('logout').addEventListener('click', function() { // Al logout...
    localStorage.removeItem('utente'); // Cancello il localStorage
    location.href = 'index.html'; // Rimando alla pagina di login
});