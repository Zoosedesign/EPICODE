//effetto scroll navbar
var header = document.querySelector('header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 32) {
    header.classList.add('rounded-top-0');
  } else {
    header.classList.remove('rounded-top-0');
  }
});

//popolamento card section saldi
const product = [
  {
    title: 'Card title',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quia corporis amet, non est dolores?',
    img: 'assets/img/img03.jpg',
    img2: 'assets/img/img01.jpg',
  },
  {
    title: 'Card title',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quia corporis amet, non est dolores?',
    img: 'assets/img/img03.jpg',
    img2: 'assets/img/img01.jpg',
  },
  {
    title: 'Card title',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
    img: 'assets/img/img03.jpg',
    img2: 'assets/img/img01.jpg',
  },
  {
    title: 'Card title',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quia corporis amet, non est dolores?',
    img: 'assets/img/img03.jpg',
    img2: 'assets/img/img01.jpg',
  },
  {
    title: 'Card title',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quia corporis amet, non est dolores?',
    img: 'assets/img/img03.jpg',
    img2: 'assets/img/img01.jpg',
  },
  {
    title: 'Card title',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quia corporis amet, non est dolores?',
    img: 'assets/img/img03.jpg',
    img2: 'assets/img/img01.jpg',
  },
];

// prendo l'elemento da riempire
// creo la card di bootstrap
// inserisco dentro l'elemento
let row = document.getElementById('saldi-product');

for (let i = 0; i < 4; i++) {
  row.innerHTML += `<div class="col-6 col-lg-4 col-xl-3 px-3 mb-5 mb-lg-0">
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

let row2 = document.getElementById('summer-product');

for (let i = 0; i < product.length; i++) {
  row2.innerHTML += `<div class="col-6 col-xl-4 px-3 mb-5">
 <div class="card rounded-5 shadow">
  <img src="${product[i].img2}" class="card-img-top" alt="residence maldive">
  <article class="card-body d-flex flex-column bg-white rounded-5 rounded-top-0">
    <h4 class="card-title text-secondary">${product[i].title}</h4>
    <p class="card-text">${product[i].text}</p>
    <a href="#" class="btn btn-primary rounded-pill mt-auto px-4 align-self-end"><i class="fa-solid fa-suitcase-rolling"></i> Prenota</a>
  </article>
 </div>
</div>`
}
