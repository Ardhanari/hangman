// describe("helloWorld", () => {
//     it("returns hello world", () => {
//       var actual = helloWorld();
//       expect(actual).toBe("hello world!");
//     });
//   })

describe("setPolishLanguage", () => {
    it("sets form's language to Polish", () => {
        // create DOM elements
        var dummyLanguageInput = document.createElement('input');
        dummyLanguageInput.id = "language";
        dummyLanguageInput.value = "";
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyLanguageInput);

        // Act
        setPolishLanguage();

        // Assert
        expect(document.getElementById('language').value).toEqual("pl");
    });
})

describe("obscurePhrase", () => {
    beforeEach(function() {
	    phrase = "";
        obscuredPhrase = "";
        lettersFound = "";
        lettersNotFound = "";
        lettersUsed = "";
        language = "";
  	});

    it("obscures given phrase, hiding letters and spaces in English", () => {
        // Create variables
        let phrase = "Hello my beautiful world!"
        let lettersUsed = "bgwp"
        let language = "en";

        // Assert
        expect(obscurePhrase(phrase, lettersUsed, language)).toEqual(["-----/--/b--------/w----!","bw","gp"]);
    })

    it("obscures given phrase, hiding letters and spaces in Polish", () => {
        // Create variables
        let phrase = "Zażółć gęślą jaźń :)"
        let lettersUsed = "abwłść"
        let language = "pl";

        // Assert
        expect(obscurePhrase(phrase, lettersUsed, language)).toEqual(["-a--łć/--ś--/-a--/:)","ałść","bw"]);
    });

    it("obscures given phrase, hiding letters and spaces in Espagnol", () => {
        // Create variables
        let phrase = "¿Cómo se dice ‘concert’ en español?"
        let lettersUsed = "diceñz"
        let language = "es";

        // Assert
        expect(obscurePhrase(phrase, lettersUsed, language)).toEqual(["¿c---/-e/dice/‘c--ce--’/e-/e---ñ--?","diceñ","z"]);
    });
})


// describe("unique_char", () => {
//     it("create string with only unique characters", () => {
//         // create DOM elements
//         var testString = "Zawsze też był punktualny, więc było to naprawdę coś co nie pasowało do jego zachowania";

//         // Assert
//         expect(unique_char(testString)).toEqual("Zawsze tżbyłpunkl,ięcordśjgh");
//     });
// })