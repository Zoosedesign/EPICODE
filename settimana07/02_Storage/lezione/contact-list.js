// questa rubrica salverà in localStorage una lista di contatti con nome, cognome e n. di telefono
// alla pressione del tasto salva, dovremo inserire un nuovo contatto alla lista già presente
let contactsList = []
// all'avvio della pagina sarà necessario ripartire dalla lista contatti già salvata, se la troveremo in localStorage

// prendiamoci i riferimenti agli input field
const nameField = document.getElementById('name')
const surnameField = document.getElementById('surname')
const phoneField = document.getElementById('phone')

// prendiamo un riferimento al form
const saveButton = document.getElementById('save-button')

const renderList = function () {
  console.log('sono in renderlist')
  // questa funzione prende il contenuto di contactsList e crea tanti <li> corrispondenti
  // prendiamoci un riferimento alla lista
  let list = document.querySelector('ul')

  // svuotiamo la lista precedente per non rimanere con residui
  list.innerHTML = ''

  // cicliamo contactsList
  contactsList.forEach((contact) => {
    // per ogni contatto creo un <li> e lo appendo alla lista
    const newLi = document.createElement('li')
    newLi.innerText =
      contact.name + ' ' + contact.surname + ' | ' + contact.phone
    list.appendChild(newLi)
  })
}

saveButton.addEventListener('click', function (e) {
  e.preventDefault() // FERMA la pagina dal suo riavvio automatico
  const newUser = {
    name: nameField.value,
    surname: surnameField.value,
    phone: phoneField.value,
  }
  console.log(newUser)
  // funziona! adesso il prossimo passo da fare è aggiungerlo a contactsList
  contactsList.push(newUser)

  // qui, prima di proseguire, sarebbe il caso di salvare il nostro array
  // di contatti anche nel localStorage
  // localStorage.setItem('contactsArray', contactsList)
  // non funziona! stiamo cercando di salvare una struttura dati complessa, come un array/oggetto,
  // dentro un meccanismo che richiede una stringa
  // dobbiamo "stringhifizzare" l'oggetto a dovere!
  const contactsListAsAString = JSON.stringify(contactsList) // funziona per array e oggetti
  console.log("valore dell'array stringhifizzato:", contactsListAsAString)
  // contactsListAsAString ora è un valore PERFETTO per venire memorizzato nel localStorage
  localStorage.setItem('contactsArray', contactsListAsAString)

  // svuotiamo i campi del form prima di renderizzare la lista
  nameField.value = ''
  surnameField.value = ''
  phoneField.value = ''

  // ora aggiorniamo la lista sottostante
  renderList()

  // e poi arriva il problema: dobbiamo salvare un array di oggetti dentro il localStorage
})

window.onload = function () {
  // ora devo controllare se esiste una lista di contatti precedentemente salvata in localStorage
  // in caso ci sia, devo sovrascrivere il valore di contactsList, che normalmente sarebbe un array vuoto,
  // con l'array proveniente dal localStorage
  // controlliamo:
  if (localStorage.getItem('contactsArray')) {
    // ...se abbiamo già una lista contatti da prima...
    // convertiamo la stringa che abbiamo recuperato dal localStorage di nuovo nell'array di oggetti
    let arrayAsAStringFromLocalStorage = localStorage.getItem('contactsArray') // questa è una stringa!!!
    // JSON.parse() fa l'opposto di JSON.stringify
    let newContactsArray = JSON.parse(arrayAsAStringFromLocalStorage) // ora l'ho riconvertito in array :)
    // fornisco alla mia app il nuovo valore iniziale dei contatti
    contactsList = newContactsArray
    // lancio renderList(), che si occuperà di controllare il valore di contactsList e renderizzare gli <li> dentro la <ul>
    renderList()
  }
}
