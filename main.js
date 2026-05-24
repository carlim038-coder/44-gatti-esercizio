document.getElementById('btnCalcola').addEventListener('click', function() {
    // Leggiamo i valori dagli input HTML
    let totaleGatti = parseInt(document.getElementById('totaleGatti').value);
    let gattiPerFila = parseInt(document.getElementById('gattiPerFila').value);

    

    // Calcoli
    let numeroFile = Math.floor(totaleGatti / gattiPerFila);
    let gattiFuori = totaleGatti % gattiPerFila;
    let gattiMancanti = gattiFuori === 0 ? 0 : (gattiPerFila - gattiFuori);

    
    // Output nel DOM
    let messaggio = `Ci sono ${numeroFile} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${gattiFuori}`;
    document.getElementById('displayRisultato').innerText = messaggio;
});