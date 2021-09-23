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
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));
   return json;

}
getWords()
// - Eine Funktion um die uufällige Nummer hinter dem Namen zu generieren
// - Eine Funktion mit der wir den ersten Buchstaben des Jeweiligen Wortes groß schreiben (PascalCase)
// - Eine Funktion mit der wir den benutzernahmen generieren und auf die ergebnisse der anderen funktionen zugreifen
// - Einen export, um die Applikation in einer anderen datei zu nutzen