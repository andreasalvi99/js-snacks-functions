/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
console.log("word:", word);

// Creo un array che contiene solo voccali

const vocals = ["a", "e", "i", "o", "u"];
console.table(vocals);

// Dichiara la funzione qui.
function countVocals(word) {
  let vocalsNum = "";
  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    console.log("currentLetter:", currentLetter);

    for (let j = 0; j < vocals.length; j++) {
      const currentVocal = vocals[j];
      console.log("currentVocal:", currentVocal);

      if (currentLetter === currentVocal) {
        console.log("Questa è una vocale? ", currentLetter === currentVocal);
      }
    }
    console.log("-------------------------------");
  }

  return vocalsNum;
}
// Invoca la funzione qui e stampa il risultato in console
countVocals(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
