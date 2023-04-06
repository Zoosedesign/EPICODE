var mioArray = [2, 4, 7, 5, 1];

document.getElementById('array').innerHTML += mioArray;

function calcolo(valore) {
	return valore + 4;
}

mioArray.forEach(function (numero) {
	document.getElementById('foreach').innerHTML += calcolo(numero) + ' - ';
});

nuovoArray = mioArray.map(calcolo);

nuovoArray.push(12);

document.getElementById('map').innerHTML += nuovoArray;

function filtra(valore) {
	return valore > 7;
}

document.getElementById('filter').innerHTML += nuovoArray.filter(filtra);

document.getElementById('reduce').innerHTML += nuovoArray.reduce(function (
	totale,
	valore
) {
	return totale * valore;
});

for (let i = 10; i >= 0; i--) {
	document.getElementById('for').innerHTML += `${i} - `;
}

var mioArray2 = ['Alessio', 'AndreaC', 'Gabriel', 'Emanuele', 'Erik'];

// for (let i = 0; i < mioArray.length; i++) {
//   document.getElementById('array').innerHTML += `Studente ${mioArray[i]}, `;
// }

for (let index in mioArray2) {
	document.getElementById('array2').innerHTML += `${mioArray2[index]}, `;
}

const persona = {
	nome: 'Dario',
	cognome: 'Antinolfi',
	corso: 'FS0223',
};

for (let prop in persona) {
	document.getElementById(
		'oggetto'
	).innerHTML += `${prop}, ${persona[prop]} - `;
}

var k = 0;
while (k <= 10) {
	document.getElementById('while').innerHTML += `${k}, `;
	k++;
}

k = 0;
do {
	document.getElementById('doWhile').innerHTML += `${k}, `;
	k++;
} while (k <= 10);

// Se k è uguale a 11 per entrambi i cicli, il primo non stamperà nulla, il secondo stamperà 11 prima di interoompersi