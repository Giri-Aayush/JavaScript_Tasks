let userInput = prompt("Enter a number:");

while (Number(userInput) > 100 || userInput === "") {
  userInput = prompt("Enter a number again:");
  if (userInput != "") {
    if (Number(userInput) < 100) break;    
  }
}

