console.log('motori di webstorage')

// localStorage e sessionStorage sono come dei piccoli "archivi" presenti nella memoria del browser
// entrambi i motori salvano coppie chiave/valore
// LIMITAZIONE IMPORTANTE: tutti i dati salvati devono essere di tipo STRINGA

// questi motori di "memoria" dividono il proprio spazio in porzioni legate agli URL

// queste memorie sono completamente esposte all'utente finale (è sufficiente aprire gli strumenti di sviluppo)
// quindi evitiamo di utilizzarle per salvare cose molto dedicate o informazioni particolarmente sensibili!

// localStorage.clear() // svuota completamente il localStorage per questo dominio
// sessionStorage.clear() // svuota completamente il sessionStorage per questo dominio

// con setItem() memorizziamo una coppia chiave/valore, indicandoli come parametri
// il valore verrà sempre salvato sotto forma di stringa, se tentiamo di salvare un tipo di dato
// diverso da stringa il motore di storage cercherà di convertirlo a stringa ("cast")
localStorage.setItem('name', 'Stefano')
// localStorage.setItem('count', 10)
localStorage.setItem('alive', true)
// localStorage.setItem('vuoto', null)

// quando tuttavia cercheremo di salvare un valore complesso, come un oggetto o un array, incontreremo un problema
// localStorage.setItem('obj', { name: 'Stefano' }) // <-- [object Object] :(

// per rimuovere un elemento specifico si può utilizzare .removeItem() passando come parametro
// la chiave dell'elemento da rimuovere
// localStorage.removeItem('name')
localStorage.getItem('gigio') // null

// due proprietà con lo stesso nome non possono esistere, al pari delle proprietà di un oggetto
localStorage.setItem('flavio', true)
// qua vado a sovrascrivere la proprietà con nome "flavio" già esistente
localStorage.setItem('flavio', false)

// ci muoviamo sul file notepad.js :)
