//esercizio 2

// ---------- ELEMNTI DOM ----------
const list = document.getElementById('list');
const animalForm = document.getElementById('animalForm');
const btnAdd = document.getElementById('btnAdd');
const ownerAlert = document.getElementById('ownerAlert');

// ---------- ARRAY ARCHIVIAZIONE LISTA ----------
const animalList = [];

// ---------- AGGIUNTA ANIMALE ----------
btnAdd.addEventListener('click',(e) => {

    // impedisce alla pagina di resettarsi al click del bottone
    e.preventDefault();

    // gestione dei dati inseriti nel form
    const singleObject = [];

    const elements = animalForm.children;

    for(let i = 0; i < elements.length; i++){
        const singleField = elements[i];

        if(singleField.name !== 'btnAdd'){
            singleObject.push(singleField.value);
        }
    }

    // genera un nuovo oggetto PET e lo inserisce in fondo al nostro array di archiviazione
    animalList.push(new Pet(...singleObject));
    
    // generazione nuova card
    const newCard = document.createElement('div');
    
    // inserimento elementi della card
    newCard.innerHTML = `<div class="rounded-4 p-3 animalCard m-3"><div class="h3 border-bottom">${nome.value}</div><p><b>Padrone:</b> ${padrone.value}</p><p><b>Specie:</b> ${specie.value}</p><p><b>Razza:</b> ${razza.value}</p></div>`;

    // inserisci card nella lista
    list.appendChild(newCard);

    // resetta il form
    animalForm.reset();
})

// ---------- CLASS PET ----------
class Pet{
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }

    // verifica dello stesso padrone 
    sameOwner(otherPet){
        return (this.ownerName === otherPet.ownerName);
    }
}

