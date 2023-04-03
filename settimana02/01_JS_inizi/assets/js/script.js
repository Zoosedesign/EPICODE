document.write('<h3>document.write agisce e scrive solo alla fine di tutto il resto, cioè del body = document in javascript<?h3>') //eseguito come 8' 

// document.write agisce e scrive solo alla fine di tutto il resto, cioè alla fine della pagina caricata, cioè del body il cui sinonimo in JAVASCRIPT è document

document.getElementById('saluto').innerHTML = 'CIAO!'; //eseguito come 3' 
document.getElementById('saluto2').innerHTML = 'Altro saluto'; //eseguito come 4' 

// getElementByID -> è il metodo, in questo caso ricercan l'id Saluto nell'html
// innerHTML -> inserisce nell'html

// window.alert('questo è un alert'); vecchia scrittura
alert('questo è un alert'); //eseguito come 1' // scrittura attuale, si cerca di scrivere sempre di meno
alert(8 + 9); //eseguito come 2' //l'alert (window.alert) blocca il documento

console.log('verifica in console');

var valore = 15; //eseguito come 5' 
console.log(valore); //eseguito come 6' 
console.log(valore + 3); //eseguito come 7' 

// il console.log si visualizza nell'inspector web