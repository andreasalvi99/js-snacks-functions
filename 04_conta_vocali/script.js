/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
console.log("word:", word);

// Creo un array che contiene solo voccali

const vocals = ["a", "e", "i", "o", "u"];
console.table(vocals);

// Dichiara la funzione qui.

function vocalsInJavascript() {
  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    console.log("currentLetter:", currentLetter);

    for (let i = 0; i < vocals.length; i++) {
      const currentVocal = vocals[i];
      console.log("currentVocal:", currentVocal);

      if (currentLetter === currentVocal) {
      }
    }
    console.log("-----------------------");
  }
  return vocalsInJavascript;
}

// Invoca la funzione qui e stampa il risultato in console

vocalsInJavascript();

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
