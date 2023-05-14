// ----------- VARIABILI GLOBALI --------------
const url = 'https://striveschool-api.herokuapp.com/api/product/';
const APIkey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjg1Mjg4Zjc0MDAwMTQyODc0NDEiLCJpYXQiOjE2ODM4ODAwMTgsImV4cCI6MTY4NTA4OTYxOH0.8osLDa4EoNjHe8CzdsY8Akdm4YFWU0X0NwnIG1Ovv_Y'


// ----------- GESTIONE URL --------------
//cerco nella barra degli indirizzi se ce qualche parametro aggiuntivo rispetto al mio "url"
let urlContent = new URLSearchParams(window.location.search);

//cerco se c'è qualcosa che identifichi il prodotto
let productID = urlContent.get('productID');

// ----------- RECUPERO PRODOTTI --------------
const getProduct = async function () {
    try {
        const response = await fetch(url + productID, {
            headers: {
                'Authorization': APIkey
            }
        })
        if (!response.ok) {
            throw new Error('Errore nel recupero dei prodotti!')
        }
        const product = await response.json()

        //creo il contenuto dei dettagli prodotto
        document.getElementById('detailsBox').innerHTML +=
            `<div class="d-flex flex-column w-50">
            <small class="ps-md-5">Home / ${product.name}</small>
            <img src="${product.imageUrl}" class="d-block d-md-none">
            <figure id="zoom" class="d-none d-md-block"><figure>
          </div>
      
          <article class="ps-md-5 d-flex flex-column">
            <small>${product.brand}</small>
            <h2 class="my-3">${product.name}</h2>
            <p>${product.description}</p>
            <hr>
            <small class="mb-5 mb-md-0">a partire da: <b class="fs-5 fw-semibold">${product.price} €</b></small>

          <a href="./backoffice.html?productID=${product._id}" class="btn btn-primary p-3 position-absolute">
            <svg width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
          </a>

          </article>`
        //creo l'immagine di sfondo del tag figure
        document.getElementsByTagName('figure')[0].style.background = `url("${product.imageUrl}") right/cover no-repeat`;

        // ----------- ZOOM IMMAGINE --------------
        // Ottengo l'elemento container e l'URL dell'immagine
        let container = document.getElementById('zoom'),
            imgSrc = `${product.imageUrl}`;

        // Creo un nuovo oggetto immagine e imposto l'URL della sorgente
        let img = new Image();
        img.src = imgSrc;

        // Attendo il caricamento dell'immagine prima di gestire il mouse
        img.onload = () => {
            // Calcolo il rapporto d'aspetto dell'immagine
            let size = img.naturalHeight / img.naturalWidth,

                // Converto il rapporto in una percentuale e lo imposto come altezza del contenitore
                percentage = size * 100 + '%';
            container.style.height = percentage;

            // Vado a gestire il movimento del mouse
            container.onmousemove = event => {
                //cambio stile mouse da css non funziona
                zoom.style.cursor = 'zoom-in';
                // Ottengo la posizione del contenitore rispetto alla finestra
                let box = event.target.getBoundingClientRect(),

                    // Calcolo la posizione del mouse rispetto al contenitore
                    xPos = event.clientX - box.left,
                    yPos = event.clientY - box.top,

                    // Converto la posizione del mouse in una percentuale basata su larghezza / altezza del contenitore
                    xPercent = xPos / (container.clientWidth / 100) + '%',
                    yPercent = yPos / ((container.clientWidth * size) / 100) + '%';

                // Imposto la posizione di sfondo del contenitore per simulare lo zoom
                Object.assign(container.style, {
                    backgroundPosition: `${xPercent} ${yPercent}`,
                    backgroundSize: img.naturalWidth + 'px'
                });
            };

            // Ripristino la posizione e la dimensione dello sfondo al "mouse leave"
            container.onmouseleave = e => {
                //riporto l'immagine allo stile iniziale
                Object.assign(container.style, {
                    backgroundPosition: 'right',
                    backgroundSize: 'cover'
                });
            };
        };
    } catch (error) {
        console.log(error)
    }
}

window.onload = () => {
    getProduct();
}