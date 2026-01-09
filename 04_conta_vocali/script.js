/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
console.log("word:", word);

// Dichiara la funzione qui.
function countVocals(myWord) {
  const resultVocals = [];
  // Creo un array che contiene solo voccali
  const vocals = ["a", "e", "i", "o", "u"];
  console.table(vocals);

  for (let i = 0; i < myWord.length; i++) {
    const currentLetter = myWord[i];
    console.log("currentLetter:", currentLetter);

    for (let j = 0; j < vocals.length; j++) {
      const currentVocal = vocals[j];
      console.log("currentVocal:", currentVocal);

      if (currentLetter === currentVocal) {
        console.log("Questa è una vocale? ", currentLetter === currentVocal);
        resultVocals.push(currentLetter);
      }
    }
    console.log("-------------------------------");
  }

  return resultVocals.length;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(countVocals(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
