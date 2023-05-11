const apiKey = 'x8g58VNX0dYe9bETS6WALS6uk82AxyfPAFuKOtv7gJGPKfKkOhFIHGJB';

//il bottone passerà la "query" cioè la parola di ricerca
function searchImages(query) {
  //svuoto il contenuto  di "queryCardBox" ogni volta che clicco uno dei due bottoni
  document.getElementById("queryCardBox").innerHTML = "";

  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: apiKey
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(ducks => {
      //non metto solo duck ma aggiungo .photos per entrare all'interno
      ducks.photos.forEach(duck => {
        document.getElementById("queryCardBox").innerHTML +=
          `<div class="col-md-4">
            <div class="card mb-4 shadow-sm">
            <img src="${duck.src.large}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" onclick="deleteCard(event)" class="btn btn-sm btn-outline-secondary">
                      Delete
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>`;
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

//cancello la card di genitore più prossimo con ".col-md-4"
deleteCard = (event) => event.target.closest('.col-md-4').remove();