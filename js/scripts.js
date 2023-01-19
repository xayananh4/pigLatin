//business logic
function handleSubmission(userInput)
{
  let output = ""
  const textArray1 = userInput.split("");
  console.log(textArray1);
  textArray1.forEach(function (element){
    console.log(output)
    
    if (element.toLowerCase() === "a" || element.toLowerCase() === "e" || element.toLowerCase() === element.toLowerCase() === "i" || element.toLowerCase() === "o" || element.toLowerCase() === "u" ||  element.toLowerCase() ==="y" ) {    
      output += "-";
    } else {
      output += element.toString();
    }
  });
  console.log(output)
  return output;
}

//UI logic
window.addEventListener("load", function(){

let userInput = document.getElementById("userInput");
let para = document.getElementById("result");

document.querySelector("form#formWord").addEventListener("submit", function(event){
  para.innerText = handleSubmission(userInput.value);
  event.preventDefault();
});
});