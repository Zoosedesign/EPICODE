// ----------- VARIABILI GLOBALI --------------
const url = 'https://striveschool-api.herokuapp.com/api/product/';
const APIkey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjg1Mjg4Zjc0MDAwMTQyODc0NDEiLCJpYXQiOjE2ODM4ODAwMTgsImV4cCI6MTY4NTA4OTYxOH0.8osLDa4EoNjHe8CzdsY8Akdm4YFWU0X0NwnIG1Ovv_Y'


// ----------- GESTIONE URL --------------
//cerco nella barra degli indirizzi se ce qualche parametro aggiuntivo rispetto al mio "url"
let urlContent = new URLSearchParams(window.location.search);

//cerco se c'è qualcosa che identifichi il prodotto
let productID = urlContent.get('productID');

if (productID) {
    // ----------- CAMBIO DETTAGLI PAGINA --------------
    //cambio titolo pagina
    document.getElementsByTagName('label')[0].innerText = `MODIFICA PRODOTTO`;

    // ----------- ELIMINAZIONE PRODOTTO --------------
    //rendo dinamico il tasto delete nel dom
    const deleteProduct = document.getElementById('delete-button');
    deleteProduct.classList.remove('d-none');
    deleteProduct.addEventListener('click', () => {
        fetch(url + productID, {
            //cancelliamo il prodotto dal server se la scelta è "delete product"
            method: 'DELETE',
            headers: {
                Authorization: APIkey,
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert('Il prodotto è stato rimosso con successo!')
                    location.assign('./index.html')
                } else {
                    throw new Error('Non è stato possibile eliminare il prodotto dal server, ci scusiamo per l\'inconveniente.')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    })

    // ----------- GET RECUPERO DATI PRODOTTO --------------
    fetch(url + productID, {
        headers: {
            Authorization: APIkey,
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Non è possibile recuperare i dati del prodotto.')
            }
        })
        .then((serverData) => {
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
}

// ----------- RACCOLTA DATI FORM PRODOTTO --------------
const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function (event) {
    //essendo un submit evito il refresh di default
    event.preventDefault();

    const name = document.getElementById('name');
    const description = document.getElementById('description');
    const brand = document.getElementById('brand');
    const img = document.getElementById('imageUrl');
    const price = document.getElementById('price');

    //raccolgo i dati dai vari Input
    let newProduct = {
        name: name.value,
        description: description.value,
        brand: brand.value,
        imageUrl: img.value,
        price: price.value,
    }

    // ----------- FETCH PUT or POST --------------
    //decido quale metodo eseguire in base, all'Url, se avrà un ID dovrà essere una modifica e quindi una PUT
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
                alert(productID ? 'Prodotto aggiornato con successo!' : 'Prodotto aggiunto con successo!')
                location.assign('./index.html') // riporto alla pagina home
            } else {
                alert('Non è stato possibile salvare il prodotto')
                throw new Error('Non è stato possibile salvare il prodotto')
            }
        })
        .catch((err) => {
            console.log(err)
        })
})