/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.table(names);
const nameStarsWith = [];

// Dichiara la funzione qui.

/**
 *This function examinate every array's item and if the initial word of an item is the same as the one chose then the item gets picked
 * @param {string} word this represents the name that starts with the same letter as the one that will be chosen
 * @returns {string}
 */
function getNamesThatStarsInA(word) {
  const firstLetter = "A";

  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];

    if (currentName.charAt(0) === firstLetter) {
      console.log(currentName);
      nameStarsWith.push(currentName);
    }
  }
}

// Invoca la funzione qui e stampa il risultato in console

getNamesThatStarsInA();
console.log(nameStarsWith);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
