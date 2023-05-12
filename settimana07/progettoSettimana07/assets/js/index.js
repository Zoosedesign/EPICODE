// ----------- VARIABILI GLOBALI --------------
const url = 'https://striveschool-api.herokuapp.com/api/product/';
const APIkey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjg1Mjg4Zjc0MDAwMTQyODc0NDEiLCJpYXQiOjE2ODM4ODAwMTgsImV4cCI6MTY4NTA4OTYxOH0.8osLDa4EoNjHe8CzdsY8Akdm4YFWU0X0NwnIG1Ovv_Y'

// ----------- RECUPERO PRODOTTI --------------
const getProduct = function () {
    fetch(url, {
        headers: {
            'Authorization': APIkey
        }
    })
        .then((response) => {
            if (response.ok) {
                //otteniamo i prodotti precedentemente salvati nel backoffice
                return response.json()
            } else {
                throw new Error('Errore nel recupero degli eventi!')
            }
        })
        .then((products) => {
            products.forEach(product => {
                document.getElementById('productBox').innerHTML +=
                    `<div class="col-12 col-sm-6 col-lg-4 px-3">
                <article class="card border-0 h-100">
                  <div class="card-body d-flex flex-column pt-5">
                    <img src="${product.imageUrl}" alt="product image">
                    <span class="card-img-overlay"><small>${product.brand}</small></span>
                    <span id="plus" class="card-img-overlay shadow p-0">
                    <a href="#" class="bg-primary px-3 pb-2 text-white text-decoration-none fs-1">&plus;</a>
                    </span>
        
                    <h3 class="card-title">${product.name}</h3>
                    <hr>
                    <p class="card-text">
                    ${product.description}
                    </p>
                    <small class="mt-auto ms-auto">a partire da: <b>${product.price}€</b></small>
                  </div>
        
                  <div class="bg-dark d-flex">
                    <button type="button" class="btn btn-primary rounded-top-0 fw-bold px-4 py-3">SCOPRI DI PI&Ugrave;</button>
                  </div>
                </article>
              </div>`
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

window.onload = () => {
    getProduct()
}