var btnCalcola = document.getElementById('calcola');
var btnReset = document.getElementById('reset');
var operazione;
var numero1;
var numero2;
var risultato;
var semaforo = true;

window.addEventListener('load', init);

function init() {
	document.getElementById('risultato').innerHTML = '';
	eventHandler();
}

function eventHandler() {
	leggi();
}

function leggi() {
	btnCalcola.addEventListener('click', function () {
		operazione = document.getElementById('operazione').value;
		numero1 = document.getElementById('numero1').value;
		numero2 = document.getElementById('numero2').value;

		controlla();
        if (semaforo) {
            calcola();
        }
        if (semaforo) {
            scrivi();
            cancellaForm();
        } else {
            return;
        }
	});
}

function controlla() {
	if (operazione == '' || numero1 == '' || numero2 == '') {
		document.getElementById('risultato').innerHTML =
			"Attenzione! Compilare correttamente tutti i campi e scegliere un'operazione";
		semaforo = false;
	} else {
		semaforo = true;
	}
}

function calcola() {
	numero1 = Number(numero1);
	numero2 = Number(numero2);

	switch (operazione) {
		case 'add':
			risultato = numero1 + numero2;
			break;

		case 'sottr':
			risultato = numero1 - numero2;
			break;

		case 'molt':
			risultato = numero1 * numero2;
			break;

		case 'div':
			if (numero2 === 0) {
				document.getElementById('risultato').innerHTML =
					'Non è possibile effettuare una divisione per 0!';
                    semaforo = false;
				return;
			} else {
                semaforo = true;
				risultato = numero1 / numero2;
			}
			break;
	}
}

function scrivi() {
	switch (operazione) {
		case 'add':
			operazione = 'addizione';
			break;

		case 'sottr':
			operazione = 'sottrazione';
			break;

		case 'molt':
			operazione = 'moltiplicazione';
			break;

		case 'div':
			operazione = 'divisione';
			break;
	}
	document.getElementById(
		'risultato'
	).innerHTML = `Il risultato della ${operazione} tra ${numero1} e ${numero2} è ${risultato}`;
}

function cancellaForm() {
	btnReset.addEventListener('click', function () {
		document.getElementById('risultato').innerHTML = '';
	});
}


//FOREACH e MAP
var mioArray = [2,4,7,5,1]

//"valore" è un nome scelto da noi e rappresenta tutti i diversi indici dell'array cioè "2,4,7,5,1"
function calcolo(valore) {
    //qui cerchiamo di dare ad ogni valore più 4
    return valore + 4;
}

//l'operazione di manipolazione dell'array è volante, se verrà richiamata dopo, sarà ritornata ai valori originali, normalmente serve quando devo stampare la manipolazione dell'array
mioArray.forEach(function(numero){
    document.getElementById('foreach').innerHTML += calcolo(numero) + ', ';
});

document.getElementById('dopofor').innerHTML = mioArray;

//l'operazione map crea un array nuovo modificato, ma non modifica l'originale, ci saranno insomma due array alla fine del processo.
nuovoArray = mioArray.map(calcolo);

document.getElementById('map').innerHTML = nuovoArray;

document.getElementById('dopomap').innerHTML = mioArray;


//FILTER
document.getElementById('filter').innerHTML = nuovoArray.filter(function(numero) {
    //stampa temporaneamente tutti i numeri maggiori di 7
    return numero > 7;
});

//REDUCE
document.getElementById('reduce').innerHTML = nuovoArray.reduce(function(totale, valore) {
    //fa la somma a + b = tot + c = tot + d etc
    return totale + valore;
});