//chiamo restore content qual'ora ci fosse del testo già salvato
window.onload = () => {restoreContent()}

// ---------- ELEMENTI DOM ----------
// sleziono bottone "SALVA" nell'HTML
let saveButton = document.getElementById('save-button');
// seleziono button "SVUOTA MEMORIA" nell'HTML
let clearButton = document.getElementById('clear-button');

let textArea = document.querySelector('textarea');
let boxText = document.querySelector('p');

// ---------- AREA BOTTONI ----------
// inserisco cosa succede al click di salvataggio
saveButton.addEventListener('click', function () {
  // assegno ciò che verrà scritta nella text area ad una variabile
  let textAreaContent = textArea.value
  // salvo nel local storage ciò che viene scritto per non perderlo
  localStorage.setItem('savedText', textAreaContent)
  textArea.value = ''
})

// inserisco cosa succede al click di cancellazione
clearButton.addEventListener('click', function () {
  // rimuovo il contenuto di savedText, eliminando la chiave
  localStorage.removeItem('savedText')
  // contemporaneamente svuoto anche il contenuto della textarea
  textArea.value = '';
  boxText.innerHTML = '';
})

// ---------- TIMER ----------
// Inizializza il contatore o leggi il valore esistente, lo mettiamo prima del setInterval e non dentro, perchè se no partirebbe un secondo dopo.
var time = sessionStorage.getItem('timePast');
if (time) {
time = Number(time);
} else {
  time = 0;
}

// Aggiorna il contatore ogni secondo
setInterval(function() {
  time++;
  // Aggiorna il valore del contatore nella pagina HTML
  document.getElementById('counter').innerHTML = `Tempo trascorso: <b>${time} secondi</b>`;
  // Salva il valore del contatore in sessionStorage
  sessionStorage.setItem('timePast', time);
}, 1000);

// ---------- RESTORE CONTENT ----------
const restoreContent = () => {
  // riempe il paragrafo <p> se trova un local storage 
  const savedText = localStorage.getItem('savedText');
  if (savedText !== null) { 
    boxText.innerHTML = `In precedenza era stato salvato: <b>${savedText}</b>.`;
  }
}
