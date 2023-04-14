var nuovaVoce = document.getElementById('nuovoTask');
var addBtn = document.getElementById('inserisci');
var listaTask = [];
var listaHTML = document.getElementById('lista');

window.addEventListener('load', function () {
	if (!localStorage.getItem('utente')) {
		// Se non è stato scritto nulla nel campo di input
		location.href = 'errore.html'; // Carica la pagina di errore
	}

    if(listaTask.length == 0) {
        document.getElementById('titoloLista').innerText = 'Non ci sono task';
    }

    if(localStorage.getItem('tasks')) {
        listaTask = localStorage.getItem('tasks').split(',');
        creaLista();
    }
	var utente = localStorage.getItem('utente'); // Leggo il localStorage
	document.getElementById('saluto').innerHTML += utente; // Scrivo il valore del localStorage nell'HTML
});

addBtn.addEventListener('click', function() {
    let task = nuovaVoce.value;
    if (task == '') {
        alert('Inserire un nuovo task');
        return;
    }
    listaTask.push(task);
    memorizza();
    creaLista();
});

function memorizza() {
    localStorage.setItem('tasks', listaTask);
}

function creaLista() {
    listaHTML.innerHTML = '';
    nuovaVoce.value = '';
    document.getElementById('titoloLista').innerText = 'Lista task';
    let lista = document.createElement('ul'); // Creo la lista una volta sola
    listaTask.forEach((item, i) => { // Creo tanti <li> quante sono le voci nell'array
        let task = document.createElement('li');
        let span = document.createElement('span');
        span.addEventListener('click', function() { // Intercetto il click sul testo del task per indicarlo come completato
            span.style.textDecoration = 'line-through';
        });
        let elimina = document.createElement('button');
        elimina.innerText = '❌';
        elimina.setAttribute('onclick', `cancella(${i})`);
        task.appendChild(elimina);
        span.innerText = item;
        task.appendChild(span);
        lista.appendChild(task);
    });
    listaHTML.appendChild(lista); // Inserisco la lista una volta sola
}

function cancella(indice) {
    listaTask.splice(indice, 1); // Modifico l'array dei task
    memorizza();
    creaLista(); // Ricreo la lista con l'array
}

document.getElementById('logout').addEventListener('click', function () {
	// Al logout...
	localStorage.removeItem('utente'); // Cancello il localStorage
	location.href = 'index.html'; // Rimando alla pagina di login
});
