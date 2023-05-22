var btn = document.getElementById('verifica') as  HTMLElement;
var risultato = document.getElementById('risultato') as HTMLElement | null;
var estratto: number;
var giocatore1 = document.getElementById('giocatore1') as HTMLInputElement | null;
var giocatore2 = document.getElementById('giocatore2') as HTMLInputElement | null;

btn?.addEventListener('click', verifica);

function verifica(this: HTMLElement): void {
    let numero1: number = Number(giocatore1?.value);
    let numero2: number = Number(giocatore2?.value);

    if (!numero1 || !numero2 || numero1 == 0 || numero2 == 0) {
        risultato!.innerHTML = 'Entrambi i giocatori devono inserire un valore diverso da zero!';
        return;
    } else if (numero1 == numero2) {
        risultato!.innerHTML = 'I due giocatori devono inserire valori differenti';
        return;
    }
    generazione();
    confronto(numero1, numero2);
}

function generazione() {
    estratto = Math.floor((Math.random() * 100) + 1);
    document.getElementById('estratto')!.innerHTML = `Numero estratto: ${estratto}`;
}

function confronto(valore1: number, valore2: number) {
    if (valore1 == estratto) {
        risultato!.innerHTML = 'Il giocatore 1 ha indovinato!';
    } else if (valore2 == estratto) {
        risultato!.innerHTML = 'Il giocatore 2 ha indovinato!';
    } else if ((Math.abs(estratto - valore1)) < (Math.abs(estratto - valore2))) {
        risultato!.innerHTML = 'Nessuno ha indovinato, ma il giocatore 1 si è avvicinato di più';
    } else {
        risultato!.innerHTML = 'Nessuno ha indovinato, ma il giocatore 2 si è avvicinato di più';
    }
}