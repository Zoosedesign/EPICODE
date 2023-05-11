//-------------------- GLOBAL VARIABLES ------------------------
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const apiKey = 'x8g58VNX0dYe9bETS6WALS6uk82AxyfPAFuKOtv7gJGPKfKkOhFIHGJB';


//-------------------- SEARCH FORM ------------------------
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // get the search term (e.g. "dog") and remove any leading or trailing spaces using the "trim()" method to avoid errors
  const formQuery = searchInput.value.trim();

  if (formQuery) {
    // if the search string is not empty, perform the search in the API
    searchImages(formQuery);
  }
});

//-------------------- CREATE CARD ------------------------
//the button will pass the "query", i.e. the search word
async function searchImages(query) {
  //empty the content of "queryCardBox" every time I click one of the two buttons
  document.getElementById("queryCardBox").innerHTML = "";
  searchInput.value = "";

  try {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization: apiKey
      }
    });
    if (response.ok) {
      const data = await response.json();

      //add ".photos" to access the photos inside the array
      data.photos.forEach(photo => {
        document.getElementById("queryCardBox").innerHTML +=
          `<div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img src="${photo.src.large}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-secondary">
                    View
                  </button>
                  <button type="button" onclick="deleteCard(event)" class="btn btn-sm btn-danger">
                    Hide
                  </button>
                </div>
                <small class="text-muted">${photo.id}</small>
              </div>
            </div>
          </div>
        </div>`;
      });
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

//delete the parent card with class "col-md-4"
const deleteCard = (event) => event.target.closest('.col-md-4').remove();
