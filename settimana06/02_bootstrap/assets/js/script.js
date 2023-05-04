//effetto scroll navbar
var header = document.querySelector('header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 32) {
    header.classList.add('rounded-top-0');
  } else {
    header.classList.remove('rounded-top-0');
  }
});

//popolamento card
const product = [
  {
    title: 'Card title',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quia corporis amet, non est dolores?',
    img: 'assets/img/img03.jpg',
    img2: 'assets/img/img01.jpg',
    month: 'GEN - FEB',
  },
  {
    title: 'Card title',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quia corporis amet, non est dolores?',
    img: 'assets/img/img03.jpg',
    img2: 'assets/img/img01.jpg',
    month: 'APR - MAG',
  },
  {
    title: 'Card title',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
    img: 'assets/img/img03.jpg',
    img2: 'assets/img/img01.jpg',
    month: 'APR - GIU',
  },
  {
    title: 'Card title',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quia corporis amet, non est dolores?',
    img: 'assets/img/img03.jpg',
    img2: 'assets/img/img01.jpg',
    month: 'APR - LUG',
  },
  {
    title: 'Card title',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quia corporis amet, non est dolores?',
    img: 'assets/img/img03.jpg',
    img2: 'assets/img/img01.jpg',
    month: 'LUG - SET',
  },
  {
    title: 'Card title',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quia corporis amet, non est dolores?',
    img: 'assets/img/img03.jpg',
    img2: 'assets/img/img01.jpg',
    month: 'SET - OTT',
  },
];

// SECTION SALDI
const row = document.getElementById('saldi-product');

for (let i = 0; i < 4; i++) {
  row.innerHTML += `<div class="col-6 col-lg-4 col-xl-3 px-3 mb-lg-0">
 <div class="card rounded-5 shadow">
  <img src="${product[i].img}" class="card-img-top" alt="residence maldive">
  <article class="card-body d-flex flex-column bg-white rounded-5 rounded-top-0">
    <h4 class="card-title text-secondary">${product[i].title}</h4>
    <p class="card-text">${product[i].text}</p>
    <a href="#" class="btn btn-primary rounded-pill mt-auto px-4 align-self-end"><i class="fa-solid fa-suitcase-rolling"></i> Prenota</a>
  </article>
 </div>
</div>`
}
//elimino l'ultimo elemento quando le card dovranno essere 3
row.lastElementChild.classList.add('d-lg-none', 'd-xl-block');

// SECTION SUMMER
const row2 = document.getElementById('summer-product');

for (let i = 0; i < product.length; i++) {
  row2.innerHTML += `<div class="col-6 col-xl-4 px-3">
 <div class="card rounded-5 shadow">
  <img src="${product[i].img2}" class="card-img-top" alt="residence maldive">
  <span class="card-img-overlay">
  <small class="badge bg-warning  text-primary">HOT</small>
  </span>
  <article class="card-body d-flex flex-column bg-white rounded-5 rounded-top-0">
    <h4 class="card-title text-secondary">${product[i].title}</h4>
    <p class="card-text">${product[i].text}</p>
    <a href="#" class="btn btn-primary rounded-pill mt-auto px-4 align-self-end"><i class="fa-solid fa-suitcase-rolling"></i> Prenota</a>
  </article>
 </div>
</div>`
}

// SECTION LAST MINUTE
const row3 = document.getElementById('lastminute-product');

for (let i = 0; i < product.length; i++) {
  row3.innerHTML += `<div class="col-6 col-md-4 col-xl-2">
  <div class="card bg-light border-0 px-1">
  <img src="${product[i].img2}" class="card-img-top rounded-top-2 rounded-bottom-5" alt="residence maldive">
  <span class="card-img-overlay">
  <small class="badge bg-white shadow text-primary">${product[i].month}</small>
  </span>
  </div>
</div>`
}
