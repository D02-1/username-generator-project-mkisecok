const fs = require('fs'); // FileSystem, zum lesen des dateisystems
const path = require('path'); // Path, zum areiten mit dateipfaden


//  Benutzernamen Generator
// Beispiel für Benutzer : ShinySunflower55555 oder FlyingAutomobile34567 oder BeautifulCheesecake44567

//Was benötigen wir?
// - Eine Funktion um die werte aus der JSON datei zu lesen
/**
 * @function getwords
 * @description Reads words from json file.
 * @returns {object}
 */
function getWords()
{
    //Wir lesen eine json datei, die worte enhält, die wir nutzen wollen
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));
   
   //Wir geben die worte zurück
    return json;

}
getWords()
// - Eine Funktion um die uufällige Nummer hinter dem Namen zu generieren

/**
 * @function createRandomNumber
 * @description Creates a random number according to a minimal and maximal value
 * @param {number} minNumber 
 * @param {number} maxNumber 
 * @returns {number}
 */
function createRandomNumber(minNumber, maxNumber)
{
    // Wir erscaffen eine zufallszahl aus einer minimalen und einer maximalen zahl
    const num =Math.floor(Math.random()* (maxNumber -minNumber) + minNumber);

         //Wir geben die zufällige nummer zurück
    return num;
}

// - Eine Funktion mit der wir den ersten Buchstaben des Jeweiligen Wortes groß schreiben (PascalCase)

/**
 * @function capitalizeString
 * @description Takes the first letter of a string and changes it to Uppercase, then returns string
 * @param { string } word 
 * @returns { string }
 */
 function capitalizeString(word)
 {
     // Prüfe ob kein wort vorhanden ist
     if(word === undefined || word.length === 0 || !isNaN(word))
     {
         return "Default";
     }
 
     // Wir nehmen den ersten buchstaben von unserem String, und ändern ihn auf UpperCase
     const wordStart = word.charAt(0).toUpperCase();
 
     // Wir nehmen den rest des strings und ändern ihn auf LowerCase
     const wordRest = word.substring(1).toLowerCase();
 
     // Wir geben den fertigen String zurück
     return wordStart + wordRest;
 }

// - Eine Funktion mit der wir den benutzernahmen generieren und auf die ergebnisse der anderen funktionen zugreifen
// - Einen export, um die Applikation in einer anderen datei zu nutzen
exports.createUsername = (maxNumber) => createRandomNumber(maxNumber)