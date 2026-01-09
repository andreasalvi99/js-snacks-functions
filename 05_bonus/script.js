/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.

function greetMe(yourName) {
  const hour = new Date().getHours();

  const outputMessage1 = "Buongiorno";
  const outputMessage2 = "Buon pomeriggio";
  const outputMessage3 = "Buonasera";

  if (hour <= 13) {
    console.log(outputMessage1, yourName);
  } else if (hour > 13 && hour <= 17) {
    console.log(outputMessage2, yourName);
  } else {
    console.log(outputMessage3, yourName);
  }
}

// Invoca la funzione qui e stampa il risultato in console

greetMe(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
