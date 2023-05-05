//popolamento dropdown NAV
const nav = [
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
];

// dropdown NAV
const ul = document.querySelector('ul');

for (let i = 0; i < nav.length; i++) {
    ul.innerHTML += `<li class="nav-item dropdown ps-3">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
        aria-expanded="false">${nav[i].title}</a>
    <ul class="dropdown-menu border-0">
        <li><a class="dropdown-item" href="${nav[i].link1.url}">${nav[i].link1.item}</a></li>
        <li><a class="dropdown-item" href="${nav[i].link2.url}">${nav[i].link2.item}</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="${nav[i].link3.url}">${nav[i].link3.item}</a></li>
    </ul>
</li>`
}