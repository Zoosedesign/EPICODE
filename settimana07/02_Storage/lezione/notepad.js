// voglio poter memorizzare il contenuto della textarea alla pressione del tasto SALVA
// il contenuto dovrà essere memorizzato all'interno del localStorage
// all'avvio della pagina, se verrà trovato del contenuto precedentemente salvato,
// questo dovrà venire impostato come CONTENUTO INIZIALE della textarea

// prendo un riferimento nel DOM al bottone "SALVA"
let saveButton = document.getElementById('save-button')
// let saveButton = document.querySelector('#save-button') // alternativa, meno ottimizzata

// prendo un riferimento nel DOM al bottone "SVUOTA MEMORIA"
let clearButton = document.getElementById('clear-button')

// prendo un riferimento nel DOM alla textarea
let textArea = document.querySelector('textarea')
// let textArea = document.getElementsByTagName('textarea')[0] // <-- [0] perchè getElementsByTagName torna SEMPRE una array

// inserisco un comportamento custom al click
saveButton.addEventListener('click', function () {
  // salvo in una variabile il contenuto testuale della textarea
  let textAreaContent = textArea.value
  console.log('testo nella textarea', textAreaContent)
  // ora salvo textAreaContent in localStorage, con una chiave di nome "savedText"
  localStorage.setItem('savedText', textAreaContent)
})

clearButton.addEventListener('click', function () {
  // rimuovo il contenuto di savedText, eliminando la chiave
  localStorage.removeItem('savedText')
  // contemporaneamente svuoto anche il contenuto della textarea
  textArea.value = ''
})

const restoreContent = function () {
  // questa funzione cerca se esiste del contenuto precedentemente salvato,
  // se lo trova va a riempire con esso la textarea
  // cerchiamo la chiave "savedText" nel localStorage
  let previouslySavedText = localStorage.getItem('savedText') // <-- string || null
  if (previouslySavedText) {
    // testo salvato trovato! vado a utilizzarlo per riempirmi la textarea
    textArea.value = previouslySavedText
  } else {
    // comparirà solo il placeholder
  }
}

// dobbiamo invocare restoreContent all'avvio della pagina!
window.onload = function () {
  // questo event listener verrà eseguito AUTOMATICAMENTE all'avvio della pagina!
  restoreContent()
}
