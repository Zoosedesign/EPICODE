document.getElementById('entra').addEventListener('click', function() {
    let utente = document.getElementById('utente').value;
    if (utente == '') { // Se non c'è il nome utente blocca la procedura
        alert('Inserire il nome utente!');
        return;
    }
    localStorage.setItem('utente', utente); // Scrive nel localStorage il nome utente per passarlo alla pagina successiva e verificare che l'utente sia autenticato
    location.href = 'todo.html'; // passa alla pagina todo.html
});