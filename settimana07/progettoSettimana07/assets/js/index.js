console.log('NOTA BENE:\nLa durata dei token è impostata a 14 giorni.\nSe cercherai di utilizzare questo Progetto in future ricorda che potrai ottenerne uno nuovo facendo una chiamata POST su:\nhttps://striveschool-api.herokuapp.com/api/account/login inviando come payload:{ “username”: “testusername@yourmail.com”, “password”:”pass” }')

// ----------- VARIABILI GLOBALI --------------
const url = 'https://striveschool-api.herokuapp.com/api/product/';
const APIkey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjg1Mjg4Zjc0MDAwMTQyODc0NDEiLCJpYXQiOjE2ODM4ODAwMTgsImV4cCI6MTY4NTA4OTYxOH0.8osLDa4EoNjHe8CzdsY8Akdm4YFWU0X0NwnIG1Ovv_Y'

// ----------- RECUPERO PRODOTTI --------------
const getProduct = async function () {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': APIkey
            }
        })
        if (!response.ok) {
            throw new Error('Errore nel recupero dei prodotti!')
        }
        const products = await response.json()
        products.forEach(product => {
            document.getElementById('productBox').innerHTML +=
                `<div class="card-wrap col-12 col-sm-6 col-lg-4 p-4 text-dark">
            <article class="card border-0 bg-transparent">
              <div class="card-body bg-design d-flex flex-column p-4">
                <img src="${product.imageUrl}" alt="product image">
                <span class="card-img-overlay ps-4"><small>${product.brand}</small></span>
                
                <span class="card-img-overlay p-0">
                  <a href="./backoffice.html?productID=${product._id}" class="btn btn-primary p-3">
                    <svg width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                  </a>
                </span>
  
                <h3 class="card-title mb-0 fw-medium">${product.name}</h3>
                <hr>
                <p class="card-text">
                  ${product.description}
                </p>
                <small class="mt-5 ms-auto">a partire da: <b class="fs-5 fw-semibold">${product.price}€</b></small>
              </div> 
            </article>
            <a href="./product.html?productID=${product._id}" class="btn btn-primary rounded-top-0 px-4 py-2 d-inline-flex">
              <b class="align-self-center">INFO</b><span class="fs-3 ps-2">&oplus;</span>
            </a>
          </div>`
        })
    } catch (error) {
        console.log(error)
    }
}

window.onload = () => {
    getProduct()
}