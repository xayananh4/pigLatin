
//business logic
function convertWord(userInput) {
  let newstring = "";
  let firstLetter = userInput.charAt(0);
  let secondLetter = userInput.charAt(1);

  if (isVowel(firstLetter)) {
    newstring = userInput.slice(1, userInput.length) + userInput.charAt(0) + "ay";
    console.log(newstring);
  } else if(userInput.slice(0, 2).toLowerCase() === "qu"){
    newstring = userInput.slice(2, userInput.length) + userInput.slice(0, 2) + "ay";
    console.log(newstring); 
  } else if (!isVowel(firstLetter)) {
    if (!isVowel(secondLetter)) {
      newstring = userInput.slice(2, userInput.length) + userInput.slice(0, 2) + "ay";
    console.log(newstring);
    } else {
      newstring = userInput.slice(1, userInput.length) + userInput.slice(0, 1) + "ay";
    console.log(newstring);
    }
  }
  return newstring;
}

//UI logic
window.addEventListener("load", function(){
  let userInput = document.getElementById("userInput");
  let para = document.getElementById("result");

  document.querySelector("form#formWord").addEventListener("submit", function(event){
    event.preventDefault();
    let convertedSentence = convertSentence(userInput.value);
    para.innerText = convertedSentence;
  });
});

// Business logic

function isVowel(letter) {
  return 'aeiou'.includes(letter);
}

function convertSentence(sentence) {
  let sentenceArray = sentence.split(" ");
  let convertedArray = sentenceArray.map(function(word){
    return convertWord(word);
  })
  return convertedArray.join(" ");
}