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
let result = ''

if(playerNumber > pcNumber){
    result = 'Vince il giocatore'
}   else if(playerNumber < pcNumber){
    result = 'Vince il computer'
}   else if(playerNumber === pcNumber){
    result = 'Pareggio'
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

// Invento una lista di mail
const emails = ['daniele@gmail.com', 'giorgio@gmail.com', 'andrea@gmail.com', 'giovanni@gmail.com', 'luca@gmail.com']