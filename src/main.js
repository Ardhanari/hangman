var phrase = "";
var lettersUsed = "";
var lettersFound = "";
var lettersNotFound = "";
var obscuredPhrase = "";
var result = "";
var alphabet = "";
var alphabetPL = "abcdefghijklmnopqrstuwxyzżźćńółęąś";
var alphabetEN = "abcdefghijklmnopqrstuwxyz";
var alphabetES = "abcdefghijklmnopqrstuwxyzñáéíóúü";

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
    obscuredPhrase = phrase;
    console.log(obscuredPhrase);
    
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

    // unique chars from string 
    function unique_char(str1) {
        var str=str1;
        var uniql="";
        for (var x=0;x < str.length;x++)
        {

        if(uniql.indexOf(str.charAt(x))==-1)
        {
        uniql += str[x];  
        
        }
        }
        return uniql;  
        }  
    var unique_characters_from_a_string = unique_char(phrase);
    console.log(unique_characters_from_a_string);

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
    phrase = document.getElementById('phrase');
    lettersUsed = document.getElementById('used-letters');
    language = document.getElementById('language')
    result = obscurePhrase(phrase, lettersUsed, language);

    console.log(result);
}
