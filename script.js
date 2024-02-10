function generateRandomNumber() {
    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Display the random number in the result element
    document.getElementById('result').innerHTML = 'Random Number: ' + randomNumber;
  }
  