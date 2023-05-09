//chiamo restore content qual'ora ci fosse del testo già salvato
window.onload = () => {restoreContent()}

// ---------- ELEMENTI DOM ----------
// sleziono bottone "SALVA" nell'HTML
let saveButton = document.getElementById('save-button');
// seleziono button "SVUOTA MEMORIA" nell'HTML
let clearButton = document.getElementById('clear-button');
// prendo un riferimento nel DOM alla textarea
let textArea = document.querySelector('textarea');

// ---------- AREA BOTTONI ----------
// inserisco cosa succede al click di salvataggio
saveButton.addEventListener('click', function () {
  // assegno ciò che verràscritta nella text area ad una variabile
  let textAreaContent = textArea.value
  // salvo nel local storage ciò che viene scritto per non perderlo
  localStorage.setItem('savedText', textAreaContent)
})

// inserisco cosa succede al click di cancellazione
clearButton.addEventListener('click', function () {
  // rimuovo il contenuto di savedText, eliminando la chiave
  localStorage.removeItem('savedText')
  // contemporaneamente svuoto anche il contenuto della textarea
  textArea.value = ''
})

const restoreContent = () => {
  // riempe la textarea se trova un local storage 
  let localTextArea = localStorage.getItem('savedText') 
  if (localTextArea) {
    textArea.value = localTextArea
  }
}
