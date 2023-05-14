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
            <small class="ps-md-5">HOMEPAGE / ${product.name}</small>
            <figure id="zoom"><figure>
          </div>
      
          <article class="ps-md-5 d-flex flex-column">
            <small>${product.brand}</small>
            <h2 class="my-3">${product.name}</h2>
            <p>${product.description}</p>
            <hr>
            <small>a partire da: <b class="fs-5 fw-semibold">${product.price} €</b></small>
      
          <a href="./index.html" class="mt-md-auto my-5">Vuoi scoprire altri prodotti?</a>
          </article>`
        //creo l'immagine di sfondo del tag figure
        document.getElementsByTagName('figure')[0].style.background = `url("${product.imageUrl}") right/cover no-repeat`;

        // ----------- ZOOM IMMAGINE --------------
        let container = document.getElementById('zoom'),
            imgsrc = `${product.imageUrl}`;


        let img = new Image();
        img.src = imgsrc;
        img.onload = () => {
            let ratio = img.naturalHeight / img.naturalWidth,
                percentage = ratio * 100 + '%';

            container.onmousemove = event => {
                let rect = event.target.getBoundingClientRect(),
                    xPos = event.clientX - rect.left,
                    yPos = event.clientY - rect.top,
                    xPercent = xPos / (container.clientWidth / 100) + '%',
                    yPercent = yPos / ((container.clientWidth * ratio) / 100) + '%';

                Object.assign(container.style, {
                    backgroundPosition: xPercent + '' + yPercent,
                    backgroundSize: img.naturalWidth + 'px'
                });
            };

            container.onmouseleave = e => {
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