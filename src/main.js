var phrase;
var lettersUsed;
var lettersFound;
var lettersNotFound;
var obscuredPhrase;
var result;
var alphabet;
var alphabetPL = "a-zżźćńółęąś";
var alphabetEN = "a-z";
var alphabetES = "a-zñáéíóúü";

// Functions to change languages 
function setPolishLanguage() { 
    console.log("Polish")
    document.getElementById('phrase-label').innerHTML = "Fraza do ukrycia";
    document.getElementById('used-letters-label').innerHTML = "Użyte litery";
    document.getElementById('language').value = "pl";
}

function setEnglishLanguage() { 
    console.log("Eng")
    document.getElementById('phrase-label').innerHTML = "Phrase to obscure";
    document.getElementById('used-letters-label').innerHTML = "Used letters";
    document.getElementById('language').value = "en";
}

function setSpanishLanguage() { 
    console.log("Espagnol")
    document.getElementById('phrase-label').innerHTML = "Frase para ocultar";
    document.getElementById('used-letters-label').innerHTML = "Letras utilizadas";
    document.getElementById('language').value = "es";
}

// Obscures and modifies the string according to letters given by the user
function obscurePhrase(phrase, lettersUsed, language) { // changes var values of obscuredPhrase, lettersFound, lettersNotFound
    
    if (language = "pl") {
        alphabet = alphabetPL;
    }
    else if (language = "en") {
        alphabet = alphabetEN;
    }
    else if (language = "es") {
        alphabet = alphabetES;
    }
    else {
        console.log("Oops, unsupported language!")
    }

    // Replace everything in the phrase with - except letters found 
    // replace all spaces with /
    phrase = phrase.toLowerCase();
    obscuredPhrase = phrase.replace(" ", "/"); // "hello/world"
    for (letter in lettersUsed) {
        if (letter in phrase) {
            obscuredPhrase.replace(letter, "-");
            lettersFound.append(letter);
            console.log(obscuredPhrase);
        }
        else {
            lettersNotFound.append(letter);
        }
    }

    

    console.log("Obscuring done!")

}

// Shows the result on the HTML page
function showResult() {
    phrase = document.getElementById('phrase');
    lettersUsed = document.getElementById('used-letters');
    language = document.getElementById('language')
    obscurePhrase(phrase, lettersUsed, language);

    console.log(obscuredPhrase, lettersFound, lettersNotFound)
}
