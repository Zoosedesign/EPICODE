var btn = document.getElementById('verifica');
var risultato = document.getElementById('risultato');
var estratto;
var giocatore1 = document.getElementById('giocatore1');
var giocatore2 = document.getElementById('giocatore2');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', verifica);
function verifica() {
    var numero1 = Number(giocatore1 === null || giocatore1 === void 0 ? void 0 : giocatore1.value);
    var numero2 = Number(giocatore2 === null || giocatore2 === void 0 ? void 0 : giocatore2.value);
    if (!numero1 || !numero2 || numero1 == 0 || numero2 == 0) {
        risultato.innerHTML = 'Entrambi i giocatori devono inserire un valore diverso da zero!';
        return;
    }
    else if (numero1 == numero2) {
        risultato.innerHTML = 'I due giocatori devono inserire valori differenti';
        return;
    }
    generazione();
    confronto(numero1, numero2);
}
function generazione() {
    estratto = Math.floor((Math.random() * 100) + 1);
    document.getElementById('estratto').innerHTML = "Numero estratto: ".concat(estratto);
}
function confronto(valore1, valore2) {
    if (valore1 == estratto) {
        risultato.innerHTML = 'Il giocatore 1 ha indovinato!';
    }
    else if (valore2 == estratto) {
        risultato.innerHTML = 'Il giocatore 2 ha indovinato!';
    }
    else if ((Math.abs(estratto - valore1)) < (Math.abs(estratto - valore2))) {
        risultato.innerHTML = 'Nessuno ha indovinato, ma il giocatore 1 si è avvicinato di più';
    }
    else {
        risultato.innerHTML = 'Nessuno ha indovinato, ma il giocatore 2 si è avvicinato di più';
    }
}
