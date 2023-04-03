alert('questa è la pagina 2')

console.log('criceto')
console.log('giraffa')
console.log('leone')

document.write('<h3>Esercizio di allenamento a Javascript</h3>')

var outputPrimo = 'output';

if (outputPrimo === undefined) {
    document.getElementById('outputPRIMO').innerHTML = 'non scritto da javascript';
} else {
    document.getElementById('outputPRIMO').innerHTML = outputPrimo + 'scritto da Javascript`;
}