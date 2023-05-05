//popolamento dropdown NAV
const homepage = [
    {
        title: 'Brownse',
        link1: {
            url: '#',
            item: 'Primo link'
        },
        link2: {
            url: '#',
            item: 'Secondo link'
        },
        link3: {
            url: '#',
            item: 'Terzo link'
        },
    },
    {
        title: 'Landings',
        link1: {
            url: '#',
            item: 'Primo link'
        },
        link2: {
            url: '#',
            item: 'Secondo link'
        },
        link3: {
            url: '#',
            item: 'Terzo link'
        },
    },
    {
        title: 'Pages',
        link1: {
            url: '#',
            item: 'Primo link'
        },
        link2: {
            url: '#',
            item: 'Secondo link'
        },
        link3: {
            url: '#',
            item: 'Terzo link'
        },
    },
    {
        title: 'Accounts',
        link1: {
            url: '#',
            item: 'Primo link'
        },
        link2: {
            url: '#',
            item: 'Secondo link'
        },
        link3: {
            url: '#',
            item: 'Terzo link'
        },
    },
    {
        phrase1: '30.000 online courses',
        phrase2: 'Enjoy a variety of fresh topic',
        path: 'fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"',
    },
];

// dropdown NAV
const ul = document.querySelector('.navbar-nav');

for (let i = 0; i < homepage.length; i++) {
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

for (let i = 4; i < nav.length; i++) {
    aside.innerHTML += `<div class="col-12 col-md-4 d-flex">
    <div class="btn bg-orangeLight rounded-circle d-flex justify-content-around" style="width: 48px;">
        <svg width="16" height="16" fill="rgba(194,129,53,1)" class="align-self-center"
            viewBox="0 0 16 16">
            <path ${homepage[i].path} />
        </svg>
    </div>
    <div class="ps-3">
        <b class="fw-medium">${homepage[i].phrase1}</b>
        <p class="text-secondary mb-0">${homepage[i].phrase2}</p>
    </div>
</div>`
}