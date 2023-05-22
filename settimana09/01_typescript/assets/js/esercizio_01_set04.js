"use strict";
let randomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
};
let numberExtract = randomNumber();
const player1 = 45;
const player2 = 35;
if (Math.abs(numberExtract - player1) < Math.abs(numberExtract - player2)) {
    console.log(`Il giocatore 1 si è avvicinato di più a ${numberExtract}`);
}
else if (numberExtract === player1) {
    console.log(`Il giocatore 1 ha azzeccato il risultato, il numero era ${numberExtract}`);
}
else if (Math.abs(numberExtract - player2) < Math.abs(numberExtract - player1)) {
    console.log(`Il giocatore 2 si è avvicinato di più a ${numberExtract}`);
}
else if (numberExtract === player2) {
    console.log(`Il giocatore 2 ha azzeccato il risultato, il numero era ${numberExtract}`);
}
else {
    console.log("Entrambi i giocatori si sono avvicinati in egual misura al risultato");
}
