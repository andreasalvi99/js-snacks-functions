/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const firstLetterArray = [];

// Dichiara la funzione qui.

/**
 *
 * @param {string} letter the first letter ov every array's item
 * @returns {string} only the first letter of every array's item
 */
function pickFirstLetter(letter) {
  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];
    const firstLetter = currentName.charAt(0);
    console.log("firstLetter:", firstLetter);
    firstLetterArray.push(firstLetter);
  }

  return pickFirstLetter;
}

// Invoca la funzione qui e stampa il risultato in console

pickFirstLetter();
console.log(firstLetterArray);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
