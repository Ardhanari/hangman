// describe("helloWorld", () => {
//     it("returns hello world", () => {
//       var actual = helloWorld();
//       expect(actual).toBe("hello world!");
//     });
//   })




// var dummyLanguageInput = document.createElement('input');
// dummyLanguageInput.id = "language";
// dummyLanguageInput.value = "";
// document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyLanguageInput);


// var dummyResult = document.createElement('div');
// // dummyLanguageInput.id = "result";
// dummyLanguageInput.innerHTML = "";
// // document.getElementById("result") = jasmine.createSpy('HTML Element').and.returnValue(dummyResult);

// const languageInputMock = { 
//     id: "language",
//     value: "en"
// }

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
    it("obscures a given phrase, hiding letters and spaces", () => {
        // Create variables
        let phrase = "Hello my beautiful world!"
        let lettersUsed = "bgwp"
        let language = "en";

        // Act
        // obscurePhrase(phrase, lettersUsed, language);

        // Assert
        expect(obscurePhrase(phrase, lettersUsed, language)).toEqual(["-----/--/b--------/w----!","bw","gp"]);
    });
})
