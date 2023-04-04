//il form dovrà ricevere nome e data di nascità, verificando se è ,maggiorenne o minorenne, salutarla e dichiararne la maggiore o minore età

/*
COMPITI SPACCHETTATI DELL'ALGORITMO
1.Leggere il campo anno e memorizzarlo
2.Leggere il campo età e memorizzarlo
3.Con il valore memorizzato nel campo anno calcolare l'età in base all'anno in corso
4.Verificare la maggiore o minore età
5.Scrivere nell'HTML
6.Cancellare il form

EVENTO SCATENANTE (eventHandler)
click sul button

VARIABILI
Globali: btn(const), età (perchè usata nei punto 3 4 5, quindi in più punti), stato
*/

const btn = document.getElementById('verifica');
var eta; //globale perchè viene calcolata, verificata e stampata
var stato; //globale perche viene verificata e stampata

btn.addEventListener('click', function () { //addEventListener parte appena la pagina si apre
    //definiamo i dati che addEventListener deve cercare
    let nome = document.getElementById('nome'); //definito campo nome
    let anno = document.getElementById('anno'); //definito campo anno

    //le funzioni devono essere dichiarate prima nell'eventHandler per dare l'ordine in cui devono essere eseguiti
    calcolaEta(anno.value); //funzione di callback
    verifica();
    scrivi(nome.value); //.value rappresenta e ritorna il valore inserito dall'utente
    cancellaForm(nome,anno); //per resettare i due campi nel nome
})

function calcolaEta(anno) {
    eta = 2023 - anno; //ho valorizzato la variabile eta
}

function verifica() {
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne'; //ho valorizzato così la variabile stato
}

function scrivi(nome){
    document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
    document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + ' anni; sei ' + stato;
}

function cancellaForm(nome,anno){
    nome.value = ''; //per cancellare il campo nome inserito dopo aver cliccato verifica
    anno.value = ''; //per cancellare il campo anno inserito dopo aver cliccato verifica
}