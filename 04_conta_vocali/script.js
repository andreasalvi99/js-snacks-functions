/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function countVowels(myWord) {
  const resultVowels = [];
  // Creo un array che contiene solo voccali
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < myWord.length; i++) {
    const currentLetter = myWord[i];

    for (let j = 0; j < vowels.length; j++) {
      const currentVowel = vocals[j];

      if (currentLetter === currentVowel) {
        resultVowels.push(currentLetter);
      }
    }
  }

  return resultVowels.length;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
