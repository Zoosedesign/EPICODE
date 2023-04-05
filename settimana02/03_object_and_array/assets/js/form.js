//ElSE e IF
let a = 20;

/* "if" è l'unico elemento obbligatorio, successivamente si potrà chiudere sia con "else" o "elseif" */
if (a < 20) {
    console.log('a è minore di 20');
    // "if" e "else if" è true
} else if (a > 20) {
    console.log('a è maggiore di 20');
    // "else" è false
} else {
    console.log('a è uguale a 20');
}


//FORM
const nomeUtente = document.getElementById('nome');
const cognomeUtente = document.getElementById('cognome');
sendBtn = document.getElementById('invia');
var mioNome;
var mioCognome;

sendBtn.addEventListener('click', function () {
	if (controlla()) {
		conferma();
	}
});

function controlla() {
	mioNome = nomeUtente.value;
	mioCognome = cognomeUtente.value;
	if (mioNome == '') {
		alert('Inserire il nome utente');
		return false;
	} else if (mioCognome == '') {
		alert('Inserire il cognome utente');
		return false;
	} else {
		return true;
	}
}

function conferma() {
	document.getElementById(
		'conferma'
	).innerHTML = `Form inviato correttamente; dati inseriti:<br>Nome: ${mioNome} - Cognome: ${mioCognome}`;
    nomeUtente.value = '';
    cognomeUtente.value = '';
}