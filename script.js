/*
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato.
*/


//Recupero l'elelmento dal DOM
const div = document.getElementById ('dadi') 

// Genero un numero random da 1 a 6 
let playerNumber = Math.floor(Math.random() * 6) + 1; // Numero del giocatore
console.log(playerNumber)
let pcNumber = Math.floor(Math.random() * 6) + 1; // Numero del computer
console.log(pcNumber)

// Calcolo il vincitore
let result = 'Pareggio'

if(playerNumber > pcNumber){
    result = 'Vince il giocatore'
}   else if(playerNumber < pcNumber){
    result = 'Vince il computer'
}  
     

// Output
dadi.innerHTML = `Numero del giocatore: ${playerNumber} Numero del computer: ${pcNumber}  ${result}`






/*
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?
*/



// Recupero l'input dal DOM
const emailField = document.getElementById('email');
const form = document.querySelector('form');
const resultElement = document.getElementById('result');

// Invento una lista di mail autorizzate
const allowedEmails = ['daniele@gmail.com', 'giorgio@gmail.com', 'andrea@gmail.com', 'giovanni@gmail.com'];

// Eventi dinamici
form.addEventListener('submit', function(e){
    e.preventDefault(); // Blocco l'invio del form

   // FASE DI RACCOLTA DATI
   const email = emailField.value.trim(); // email è quella inserita dall'utente; gli do il valore del campo dell'input della mail

   // VALIDAZIONE
   if(!email) return; // Se non hai messo una mail, bloccati

   // FASE DI ELABORAZIONE DATI
   let isAllowed = false; // è un flag; di default parto col negativo perchè è più probabile

   // Controllo se la mail inserità è autorizzata
   for(let i = 0; i < allowedEmails.length; i++){
    const emailToCheck = allowedEmails[i];
        
    if(email === emailToCheck){
        isAllowed = true;
    }
   }

   // FASE DI OUTPUT
   // Calcolo il messaggio giusto
   const message = isAllowed ? 'Benvenuto' : 'Accesso negato';

   // Stampo il risultato in pagina
   resultElement.innerText = message;


})


