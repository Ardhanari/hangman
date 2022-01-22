// Global variables 
var phrase = "";
var lettersUsed = "";
var lettersFound = "";
var lettersNotFound = "";
var obscuredPhrase = "";
var result = "";
var alphabet = "";
// Alphabets
const alphabetPL = "abcdefghijklmnopqrstuwxyzżźćńółęąś";
const alphabetEN = "abcdefghijklmnopqrstuwxyz";
const alphabetES = "abcdefghijklmnopqrstuwxyzñáéíóúü";

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

    // convert all letters to lowercase
    obscuredPhrase = phrase.toLowerCase();
    console.log(obscuredPhrase);
    
    // check every used letter if it exists inside the phrase
    // append the character into relevant string (lettersFound or lettersNotFound)
    for (var i = 0; i < lettersUsed.length; i++) {
        console.log("inside for loop");
        letter = lettersUsed[i]
        if (!(phrase.includes(letter))) { //gp
            
            if (alphabet.includes(letter)) {
                lettersNotFound += letter;
            }
            else {
                console.log("not a letter");
            }
        }
        else { //bw
            lettersFound += letter;
        }
    }

    // prepare string with unique characters from phrasse
    var unique_characters_from_a_string = unique_char(phrase);
    console.log(unique_characters_from_a_string);

    // check which letters from the phrase need to be replaced with dashes
    // replace space with "/"
    for (var i = 0; i < unique_characters_from_a_string.length; i++) {
        letter = unique_characters_from_a_string[i]
        if (!(lettersFound.includes(letter))) {
            if (alphabet.includes(letter)) {
                console.log(letter);
                obscuredPhrase = obscuredPhrase.replaceAll(letter, "-");
                console.log(obscuredPhrase);
            }
            else {
                if (letter = " ") {
                    obscuredPhrase = obscuredPhrase.replaceAll(letter, "/");
                }
            }
        }
    }

    console.log("Obscuring done!")

    return [obscuredPhrase, lettersFound, lettersNotFound];

}



// Shows the result on the HTML page
function showResult() {
    phrase = document.getElementById('phrase').value.toString();
    lettersUsed = document.getElementById('used-letters').value.toString();
    language = document.getElementById('language').value.toString();
    result = obscurePhrase(phrase, lettersUsed, language);

    console.log(result);
    resultString = `
    <span>Obscured phrase:</span>
    <span>Letters found:</span>
    <span>Letters not found:</span>`

    document.getElementById('result').innerHTML = resultString;
    // after all actions clear the variables
}

// unique chars from string 
function unique_char(text, alphabet) {
    var textLower = text.toLowerCase();
    var uniqueChars = "";
    for (var i=0; i < textLower.length; i++){
        if (uniqueChars.indexOf(textLower.charAt(i))==-1) {
            uniqueChars += textLower[i];  
        }
    }
    // var re = new RegExp(alphabet, "g");
    // uniqueChars = uniqueChars.replace(re, "");
    // // console.log(uniqueChars);
    return uniqueChars;
}  