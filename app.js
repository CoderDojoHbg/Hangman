var myButton = document.getElementById("clickButton");
var myText = document.getElementById("helloText");



var inputfroma = document.getElementById('inputForm');
var secretWord = prompt('What is the guess?');
var lowSecret = secretWord.toLowerCase();
var textnode = document.createTextNode("");

var textWhat = "";

inputfroma.addEventListener('submit', function (param) {
    param.preventDefault();
    
});

function ReplaceAtFunc(stringToSearch, index, replacement) {
    var returnString = stringToSearch.substr(0, index) + replacement+ stringToSearch.substr(index + replacement.length);
    return returnString;
}



(function () {
    if (textWhat.length < 1) {

        for (var i = 0; i < secretWord.length; i++) {
            textWhat += "*";
        }
        textnode.nodeValue = textWhat;
        console.log("HASRUN!");
    }

})();

function CheckForAvaliableLetters(charToCheck) {
    var currentLetter = charToCheck;

    var letterIndexes = [];
    var foundLetter = false;

    for (var i = 0; i < lowSecret.length; i++) {
        if (lowSecret[i] == currentLetter) {
            letterIndexes.push(i);
        }
    }
    return letterIndexes;
}

function SetSecretWord() {
    //Set Word
    var letterToCheck = document.getElementById("TextId").value;


}

function inputWrite() {

    document.getElementById("mainContent").appendChild(textnode);
    //    textnode.nodeValue = "YES";

    var textNodeValue = textnode.nodeValue;

    var displayTextForOutput = "";
    var letterToCheck = document.getElementById("TextId").value;
    var arrayOfIndicies = CheckForAvaliableLetters(letterToCheck);
    if (arrayOfIndicies.length > 0) {
        for (var i = 0; i < arrayOfIndicies.length; i++) {
            textNodeValue = ReplaceAtFunc(textNodeValue, arrayOfIndicies[i], secretWord[arrayOfIndicies[i]]);
        }
        textnode.nodeValue =  textNodeValue;
    }

    console.log(textnode.nodeValue.toString());
    return letterToCheck;
}



//var currentWord = "anders";
//var inputWord = document.getElementById("writeWord").nodeValue;

//myButton.addEventListener('click', inputWrite(inputWord), true);


//function inputWrite(input) {
//    let check = "BeforeInput";
//    console.log(check);
//    check = input;
//    console.log(check);
//    return check;
//    //var result = input.match(check);
//    //console.log(result);
//    //return result;
//}



/*

myButton.addEventListener('click', inputWrite, false); //doSomething, false);

function doSomething() {
	myText.textContent = "hello, world!";
	
}

var currentWord = "anders";
var inputLetter = "e";
var bodyParts = 0;
//var letterUsed

function inputWrite() {
    var inputWord = document.getElementById("writeWord").value;
    var foundLetter = false;
    for(var i = 0; i < currentWord.length; i++) {
        
        if(currentWord.substr(i, 1).localeCompare(inputWord) === 0) {
            alert("Ja, " + currentWord.substr(i, 1) + " fanns i ordet");
            foundLetter = true;
        }
    }
    if(foundLetter === false) {
        
        bodyParts = bodyParts + 1;
        if(bodyParts > 3){
            alert("ded");
        }
        
    }
    // = toString(bodyParts);
    //myText.textContent = textparts;
    var form = document.getElementById("inputForm");
    form.reset();
}


*/
