/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.

/**
 * This function greets the user
 * @param {string} name user's name
 * @returns {string}
 */
function greet(name) {
  console.log("Ciao", name);
}

// Invoca la funzione qui e stampa il risultato in console

greet(userName);

//Risultato atteso se si passa 'Mario': // ciao Mario
