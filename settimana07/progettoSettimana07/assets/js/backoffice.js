// ----------- VARIABILI GLOBALI --------------
const url = 'https://striveschool-api.herokuapp.com/api/product/';
const APIkey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjg1Mjg4Zjc0MDAwMTQyODc0NDEiLCJpYXQiOjE2ODM4ODAwMTgsImV4cCI6MTY4NTA4OTYxOH0.8osLDa4EoNjHe8CzdsY8Akdm4YFWU0X0NwnIG1Ovv_Y'


// ----------- GESTIONE URL --------------
//cerco nella barra degli indirizzi se ce qualche parametro aggiuntivo rispetto al mio "url"
let urlContent = new URLSearchParams(window.location.search);

//cerco se c'è qulacosa che identifichi il prodotto
let productID = urlContent.get('eventId');

if (productID) {
    const save = document.getElementById('add-button');
    const remove = document.getElementById('delete-button');
    
    // ----------- CAMBIO DETTAGLI PAGINA --------------
    //cambio titolo pagina
    document.getElementsByTagName('h2')[0].innerText = `Modifica prodotto &nbsp; | &nbsp; area backoffice`;

    // ----------- ELIMINAZIONE PRODOTTO --------------
    //rimetto il tasto delete nel DOM
    remove.classList.remove(d - none);
    remove.addEventListener('click', () => {
        fetch(url + productID, {
            //cancelliamo il prodotto dal server se la scelta è "delete product"
            method: 'DELETE',
            headers: {
                Authorization: APIkey,
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert('the product has been deleted successfully')
                    location.assign('./index.html')
                } else {
                    throw new Error('we encountered problems deleting the product from the server')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    })

    // ----------- MODIFICA PRODOTTO --------------
    fetch(url + productID)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('I can\'t recover the product')
            }
        })
        .then((serverData) => {
            console.log('data recovered successfully', serverData)
            //ripopoliamo il form con i dati recuperati
            document.getElementById('name').value = serverData.name;
            document.getElementById('description').value = serverData.description;
            document.getElementById('brand').value = serverData.brand;
            document.getElementById('imageUrl').value = serverData.imageUrl;
            document.getElementById('price').value = serverData.price;
        })
        .catch((error) => {
            console.log(error)
        })
} else {
    // modalità CREAZIONE
}

// ----------- INVIO PRODOTTO --------------
const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function (event) {
    //essendo un submit evito il refresh di default
    event.preventDefault();

    let name = document.getElementById('name');
    let description = document.getElementById('description');
    let brand = document.getElementById('brand');
    let img = document.getElementById('imageUrl');
    let price = document.getElementById('price');

    //raccolgo i dati dai vari Input
    let newProduct = {
        name: name.value,
        description: description.value,
        brand: brand.value,
        imageUrl: img.value,
        price: price.value,
    }

    // ----------- FETCH PUT or POST --------------
    //decido quale metodo eseguire in base, all'Url, infatti se presenterà un ID dovrà essere una modifica e quindi una PUT
    fetch(productID ? url + productID : url, {
        method: productID ? 'PUT' : 'POST',
        //il prodotto dobbiamo trasformarlo in una stringa
        body: JSON.stringify(newProduct),
        headers: {
            Authorization: APIkey,
            //avvisiamo l'API che la stringa dovrà essere ricovertita
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                // il prodotto è stato salvato
                alert(productID ? 'PRODUCT CHANGED!' : 'ADD PRODUCT!')
                location.assign('./index.html') // riporto alla pagina home
            } else {
                alert('I can\'t save the product')
                throw new Error('I can\'t save the product')
            }
        })
        .catch((err) => {
            console.log(err)
        })
})