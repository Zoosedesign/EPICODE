// icone
let clock = '<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>';

let cam = '<path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>';

let people = '<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>';

let bookmark = '<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />';

let beginner = '<path d="M9,7H7v7h2V7z M14,2v12h-2V2H14z M12,1c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V2c0-0.6-0.4-1-1-1H12z M6,7c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v7c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V7z M1,11c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1V11z"/>';

let intermediate = '<path d="M14,2v12h-2V2H14z M12,1c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V2c0-0.6-0.4-1-1-1H12z M6,7c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v7c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V7z M1,11c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1V11z"/>';

let advance = '<path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>';

let star = '<svg width="16" height="16" fill="#ffaa46" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>';

let halfStar = '<svg width="16" height="16" fill="#ffaa46" viewBox="0 0 16 16"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/></svg>';

let emptyStar = '<svg width="16" height="16" fill="#ffaa46" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>';

//////////////////////////////////////////////////////////
//popolamento dropdown NAV
const homepage = [
    {
        title: 'Brownse',
        link1: {
            url: '#',
            item: 'Primo link',
        },
        link2: {
            url: '#',
            item: 'Secondo link',
        },
        link3: {
            url: '#',
            item: 'Terzo link',
        },
    },
    {
        title: 'Landings',
        link1: {
            url: '#',
            item: 'Primo link',
        },
        link2: {
            url: '#',
            item: 'Secondo link',
        },
        link3: {
            url: '#',
            item: 'Terzo link',
        },
    },
    {
        title: 'Pages',
        link1: {
            url: '#',
            item: 'Primo link',
        },
        link2: {
            url: '#',
            item: 'Secondo link',
        },
        link3: {
            url: '#',
            item: 'Terzo link',
        },
    },
    {
        title: 'Accounts',
        link1: {
            url: '#',
            item: 'Primo link',
        },
        link2: {
            url: '#',
            item: 'Secondo link',
        },
        link3: {
            url: '#',
            item: 'Terzo link',
        },
    },
    {
        phrase1: '30.000 online courses',
        phrase2: 'Enjoy a variety of fresh topic',
        svg: cam,
    },
    {
        phrase1: 'Expert Instruction',
        phrase2: 'Find the right instructor for you',
        svg: people,
    },
    {
        phrase1: 'Lifetime access',
        phrase2: 'Learn on your schedule',
        svg: clock,
    },
];

// dropdown NAV
const ul = document.querySelector('.navbar-nav');

for (let i = 0; i < 4; i++) {
    ul.innerHTML += `<li class="nav-item dropdown ps-3">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
        aria-expanded="false">${homepage[i].title}</a>
    <ul class="dropdown-menu border-0 shadow">
        <li><a class="dropdown-item" href="${homepage[i].link1.url}">${homepage[i].link1.item}</a></li>
        <li><a class="dropdown-item" href="${homepage[i].link2.url}">${homepage[i].link2.item}</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="${homepage[i].link3.url}">${homepage[i].link3.item}</a></li>
    </ul>
</li>`
}

// contenuti ASIDE
const aside = document.getElementById('tips');

for (let i = 4; i < homepage.length; i++) {
    aside.innerHTML += `<div class="col-12 col-md-6 col-xl-4 d-flex pt-3">
    <div class="btn bg-orangeLight rounded-circle d-flex justify-content-around" style="width: 48px;">
        <svg width="16" height="16" fill="rgba(194,129,53,1)" class="align-self-center"
            viewBox="0 0 16 16">
            ${homepage[i].svg}
        </svg>
    </div>
    <div class="ps-3">
        <b class="fw-medium">${homepage[i].phrase1}</b>
        <p class="text-secondary mb-0">${homepage[i].phrase2}</p>
    </div>
</div>`
}

//elimino l'ultimo elemento a determinate dimensioni
aside.lastElementChild.classList.add('d-md-none', 'd-xl-flex');

//////////////////////////////////////////////////////////
//popolamento prima sezione lezioni
const card = [
    {
        img1: {
            src: 'assets/img/course-gatsby.jpg',
            alt: 'corso Gatsby'
        },
        text: 'Revolutionize how you build the web',
        time: '1h 46m',
        level: {
            txt: 'Intermediate',
            svg: intermediate,
        },
        star: `${star} ${star} ${emptyStar} ${emptyStar} ${emptyStar}`,
        rating: '2,0',
        review: '(16,500)',
        price: '$800 ',
        sale: '$850',
        img2: {
            src: 'assets/img/avatar-3.jpg',
            alt: 'user author'
        },
        cite: 'Jenny Wilson',
    },
    {
        img1: {
            src: 'assets/img/course-html.jpg',
            alt: 'corso HTML',
        },
        text: 'HTML Full Course - Build a Website Tutorial',
        time: '3h 16m',
        level: {
            txt: 'Beginner',
            svg: beginner,
        },
        star: `${star} ${star} ${star} ${emptyStar} ${emptyStar}`,
        rating: '3,0',
        review: '(1,600)',
        price: '$550 ',
        sale: '$700',
        img2: {
            src: 'assets/img/avatar-4.jpg',
            alt: 'user author',
        },
        cite: 'Miston Wilson',
    },
    {
        img1: {
            src: 'assets/img/course-graphql.jpg',
            alt: 'corso graphQL',
        },
        text: 'GraphQL: introduction to graphQL for beginners',
        time: '2h 40m',
        level: {
            txt: 'Advance',
            svg: advance,
        },
        star: `${star} ${star} ${halfStar} ${emptyStar} ${emptyStar}`,
        rating: '2,5',
        review: '(1,500)',
        price: '$500 ',
        sale: '$600',
        img2: {
            src: 'assets/img/avatar-5.jpg',
            alt: 'user author',
        },
        cite: 'Brooklyn Simmons',
    },
    {
        img1: {
            src: 'assets/img/course-javascript.jpg',
            alt: 'corso Javascript',
        },
        text: 'A complete beginner\'s Guide to Javascript',
        time: '4h 10m',
        level: {
            txt: 'Advance',
            svg: advance,
        },
        star: `${star} ${star} ${star} ${halfStar} ${emptyStar}`,
        rating: '3,5',
        review: '(7,500)',
        price: '$700 ',
        sale: '$850',
        img2: {
            src: 'assets/img/avatar-1.jpg',
            alt: 'user author',
        },
        cite: 'Jenny Wilson',
    },
    {
        img1: {
            src: 'assets/img/course-node.jpg',
            alt: 'corso Node',
        },
        text: 'Beginning Node.js, Express & MongoDB Development',
        time: '2h 00m',
        level: {
            txt: 'Intermediate',
            svg: intermediate,
        },
        star: `${star} ${star} ${star} ${star} ${emptyStar}`,
        rating: '4,0',
        review: '(15,700)',
        price: '$800 ',
        sale: '$950',
        img2: {
            src: 'assets/img/avatar-3.jpg',
            alt: 'user author',
        },
        cite: 'Sina Ray',
    },
    {
        img1: {
            src: 'assets/img/course-laravel.jpg',
            alt: 'corso Laravel',
        },
        text: 'Laravel: The Ultimate Beginner\'s Guide to Learn',
        time: '1h 00m',
        level: {
            txt: 'Beginner',
            svg: beginner,
        },
        star: `${star} ${star} ${star} ${star} ${halfStar}`,
        rating: '4,5',
        review: '(2,500)',
        price: '$170 ',
        sale: '$220',
        img2: {
            src: 'assets/img/avatar-7.jpg',
            alt: 'user author',
        },
        cite: 'Sobo Rikhan',
    },
    {
        img1: {
            src: 'assets/img/course-react.jpg',
            alt: 'corso React',
        },
        text: 'How to easily create a website with React',
        time: '3h 55m',
        level: {
            txt: 'Advanced',
            svg: advance,
        },
        star: `${star} ${star} ${star} ${star} ${halfStar}`,
        rating: '4,5',
        review: '(1,500)',
        price: '$600 ',
        sale: '$750',
        img2: {
            src: 'assets/img/avatar-2.jpg',
            alt: 'user author',
        },
        cite: 'April Noms',
    },
];

const cardbox1 = document.getElementById('cardbox1');
const cardbox2 = document.getElementById('cardbox2');
const cardbox3 = document.getElementById('cardbox3');

for (let i = 0; i < card.length; i++) {   
    // elimino la penultima card fino a dimensione "lg"
    let classThird = i == card.length - 3 ? "d-none d-lg-block" : "";
    // elimino la ultima card fino a dimensione "md"
    let classFourth = i == card.length - 2 ? "d-none d-md-block" : "";
    // assegno lo "scheletro" della card
    let structure = `<div class="col-6 col-md-4 col-lg-3 px-3 ${classThird} ${classFourth}">
        <article class="card">
            <img src="${card[i].img1.src}" class="card-img-top" alt="${card[i].img1.alt}">
            <div class="card-body pb-0">
                <p class="card-text fw-bold">${card[i].text}</p>
            </div>
            <ul class="list-group list-group-flush border-0">
                <li class="list-group-item border-0 text-secondary fw-light d-flex flex-row align-items-center">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    ${clock}
                    </svg>
                    <small class="px-2">${card[i].time}</small>
                    <svg width="16" height="16" fill="rgba(117,80,254)" viewBox="0 0 16 16">
                    ${card[i].level.svg}
                    </svg>
                    <small class="px-2">${card[i].level.txt}</small>
                </li>
                <li class="list-group-item border-0 text-secondary fw-light d-flex flex-row align-items-center">
                    <div class="pb-1">${card[i].star}</div>
                    <p class="ps-2 m-0" style="color:#ffaa46;">${card[i].rating}</p>
                    <small class="px-2">${card[i].review}</small>
                </li>
                <li class="list-group-item mb-4">
                    <b>${card[i].price} </b>
                    <del class="text-secondary fw-light">${card[i].sale}</del>
                </li>
            </ul>
            <div class="card-body border-top d-flex align-items-center">
                <img class="rounded-circle" src="${card[i].img2.src}" style="width: 30px;"
                    alt="${card[i].img2.alt}">
                <small class="text-secondary ps-3">${card[i].cite}</small>
                <svg width="16" height="16" fill="currentColor" class="ms-auto" viewBox="0 0 16 16">
                ${bookmark}
                </svg>
            </div>
        </article>
    </div>`;
    // creo le card in base a cosa ci serve
    if (i >= 2 && i <= 5) {
        //popolamento prima sezione lezioni
        cardbox1.innerHTML += structure;} 
    
    if (i === 1 || i === 3 || i === 4 || i === 6) {
        //popolamento seconda sezione lezioni
        cardbox2.innerHTML += structure;} 
    
    if (i === 0 || i === 1 || i === 4 || i === 5) {
        //popolamento terza sezione lezioni
        cardbox3.innerHTML += structure;}   
}