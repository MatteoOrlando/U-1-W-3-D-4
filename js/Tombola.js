const numTombola = Array.from({ length: 90 }, (_, index) => index + 1);

function inizGriglia() {
  let griglia = document.getElementById('griglia');

  //Creo la funzione, ed all interno la variabile che mi permetterá creazione di un div in cui appenderó il numero creato
  for (let i = 1; i <= 90; i++) {
    let cella = document.createElement('div');
    cella.className = 'cella';
    cella.textContent = i;

    cella.addEventListener('click', function() {
      this.classList.toggle('estratto');
    });

    griglia.appendChild(cella);
  }
}

function estraiNumero() {
  if (numTombola.length > 0) {
    let indiceCasuale = Math.floor(Math.random() * numTombola.length);
    let numeroEstratto = numTombola.splice(indiceCasuale, 1)[0];

    let numeroEstrattoDiv = document.getElementById('numeroEstratto');
    numeroEstrattoDiv.textContent = 'Numero estratto: ' + numeroEstratto;

    let cellaCorr = document.querySelector('.cella.estratto[data-numero="' + numeroEstratto + '"]');
    if (cellaCorr) 
    {
      cellaCorr.classList.add('estratto');
    }
  } else {
    alert('La tombola è vuota!');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  inizGriglia();
});