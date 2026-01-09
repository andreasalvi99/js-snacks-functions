/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function countVocals(myWord) {
  const resultVocals = [];
  // Creo un array che contiene solo voccali
  const vocals = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < myWord.length; i++) {
    const currentLetter = myWord[i];

    for (let j = 0; j < vocals.length; j++) {
      const currentVocal = vocals[j];

      if (currentLetter === currentVocal) {
        resultVocals.push(currentLetter);
      }
    }
  }

  return resultVocals.length;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(countVocals(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
