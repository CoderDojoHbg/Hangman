var myButton = document.getElementById("clickButton");
var myText = document.getElementById("helloText");

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


var currentWord = "anders";
var inputWord = document.getElementById("writeWord").value;

myButton.addEventListener('click', inputWrite(inputWord), false);

function inputWrite(input) {
    var check = /input+/g;
    var result = input.match(check);
    console.log(result);
    return result;
}

