// una fetch() ritorna una promise
// per gestire una promise, il modo più comune è utilizzare l'approccio .then() .catch()

// una fetch si compone di 2 parametri: l'URL della risorsa, e un oggetto di configurazione opzionale
// in caso di inserimento del solo PRIMO parametro, come nell'esempio sotto, la chiamata utilizzerà
// il metodo HTTP di default: GET
const url = 'https://jsonplaceholder.typicode.com/photos';
const APIkey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjg1Mjg4Zjc0MDAwMTQyODc0NDEiLCJpYXQiOjE2ODM4ODAwMTgsImV4cCI6MTY4NTA4OTYxOH0.8osLDa4EoNjHe8CzdsY8Akdm4YFWU0X0NwnIG1Ovv_Y' //esempio password

fetch(url, {
  //se è GET si può non specificare perchè è di default
  method: 'GET', // Specifica che la richiesta HTTP è di tipo GET.
  headers: {
    Authorization: `Bearer ${password}` // Aggiunge l'intestazione Authorization con la password fornita.
  }
})
  .then((response) => {
    // la fetch è stata risolta :)
    // il parametro response ci fornirà informazioni sulla chiamata andata a buon fine
    console.log('oggetto response', response)
    // quello che non troveremo direttamente in quest'oggetto è il dato veicolato dalla response!
    // per ottenerlo, è necessario utilizzare un metodo sulla risposta chiamato .json()
    if (response.ok) {
      // questo ci indica l'esito dell'operazione
      return response.json()
    } else {
      // forziamo l'entrata nel blocco catch(), perchè fetch() non rejecta quasi mai
      throw new Error("Errore nell'esecuzione della richiesta")
    }
  })
  .then((photos) => {
    // ora siamo riusciti ad aspettare correttamente la fine del metodo .json()
    // e abbiamo ottenuto finalmente l'array di foto che cercavamo dalla riga 7!
    // ed è quindi solamente qui che abbiamo accesso alle foto!
    console.log('foto ottenute: ', photos)
  })
  .catch((error) => {
    // la fetch è stata rejectata :(
    console.log(error)
  })
