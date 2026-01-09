/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
console.log("word:", word);

// Creo un array che contiene solo voccali

const vocals = ["a", "e", "i", "o", "u"];
console.table(vocals);

// Dichiara la funzione qui.
const answer = [];

function vocalsInJavascript(letter) {
  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    console.log(currentLetter);

    if (currentLetter.indexOf(vocals[i]) !== -1) {
      answer.push();
    }
  }
  return answer;
}

// Invoca la funzione qui e stampa il risultato in console

vocalsInJavascript();
console.log(answer);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
