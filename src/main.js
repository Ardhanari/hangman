var phrase;
var lettersUsed;
var lettersFound;
var lettersNotFound;
var obscuredPhrase;
var result;

// document.getElementById('contents'); //returns a HTML DOM Object

// var contents = $('#contents');  //returns a jQuery Object
// In jQuery, to get the same result as document.getElementById, you can access the jQuery Object and get the first element in the object (Remember JavaScript objects act similar to associative arrays).

// var contents = $('#contents')[0]; //returns a HTML DOM Object

function setPolishLanguage() { 
    console.log("Polish")
    document.getElementById('phrase-label').innerHTML = "Fraza do ukrycia";
    document.getElementById('used-letters-label').innerHTML = "Użyte litery";
    document.getElementById('language').value = "pl";
}

function setSpanishLanguage() { 
    console.log("Espagnol")
    document.getElementById('phrase-label').innerHTML = "Frase para ocultar";
    document.getElementById('used-letters-label').innerHTML = "Letras utilizadas";
    document.getElementById('language').value = "es";
}

function setEnglishLanguage() { 
    console.log("Eng")
    document.getElementById('phrase-label').innerHTML = "Phrase to obscure";
    document.getElementById('used-letters-label').innerHTML = "Used letters";
    document.getElementById('language').value = "en";
}

function obscurePhrase(phrase, lettersUsed) { // changes var values of obscuredPhrase, lettersFound, lettersNotFound
    
    // Replace everything in the phrase with - except letters found 
    // replace all spaces with /

    console.log("Obscuring done!")

}

function showResult() {
    phrase = document.getElementById('phrase');
    lettersUsed = document.getElementById('used-letters');
    obscurePhrase(phrase, lettersUsed);

    console.log(obscuredPhrase, lettersFound, lettersNotFound)
}
