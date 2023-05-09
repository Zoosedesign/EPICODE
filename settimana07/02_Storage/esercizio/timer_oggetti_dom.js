// seleziono l'elemento HTML con la classe "timer" e il suo figlio di tag "span"
let timer = document.querySelector(".timer span");

// inizializzo una variabile "tempo" a 0
let tempo = 0;

// verifico se c'è un valore salvato in sessionStorage per "timer"
if (sessionStorage.getItem("timer")) {
  // se c'è un valore, lo converto in numero e lo assegno a "tempo"
  tempo = Number(sessionStorage.getItem("timer"));
} else {
  // se non c'è un valore salvato, assegno il valore corrente di "timer" a "tempo"
  tempo = Number(timer.innerHTML);
}

// imposto il valore di "timer" sull'ultimo valore di "tempo"
timer.innerHTML = tempo;

// ogni secondo, incremento il valore di "tempo" di 1, lo salvo in sessionStorage e aggiorno il valore di "timer"
setInterval(() => {
  tempo++;
  sessionStorage.setItem("timer", tempo);
  timer.innerHTML = tempo;
}, 1000);

// questa funzione viene eseguita quando l'utente invia un modulo
const salvaDati = (event) => {
  // prevengo il comportamento di default del form
  event.preventDefault();

  // creo un oggetto "utente" vuoto
  const utente = {};

  // ciclo su ogni figlio del form e aggiungo ogni campo compilato all'oggetto "utente"
  for (let i = 0; i < event.target.children.length; i++) {
    const element = event.target.children[i];
    if (element.localName !== "button") {
      utente[element.name] = element.value;
    }
  }

  // stampo l'oggetto "utente" sulla console
  console.log(utente);
};