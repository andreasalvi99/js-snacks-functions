/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.table(names);

// Dichiara la funzione qui.

/**
 *
 * @param {string} word
 */
function getNamesThatStarsInA(word) {
  const firstLetter = "A";

  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];

    if (currentName.charAt(0) === firstLetter) {
      console.log(currentName);
    }
  }
}

// Invoca la funzione qui e stampa il risultato in console

getNamesThatStarsInA();

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
