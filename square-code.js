const squareCode = function(message) {
    //remove all the spaces from the message
    let firstChange = "";
    let secondChange = [];
    let result = "";
    let remainder = 0;

    for (let i = 0; i < message.length; i ++){
        if (message[i] !== " "){
            firstChange += message[i];
        }
    }

    // currently the firstChange is the message without the spaces
    // square root the length of the firstChange
    let sideLength = Math.ceil(Math.sqrt(firstChange.length));

    // Code the message
    for (let i = 0; i < firstChange.length; i++){
        remainder = i % sideLength;
        if (secondChange[remainder] === undefined){
            secondChange[remainder] = "";
            secondChange[remainder] += firstChange[i];
        } else {
            secondChange[remainder] += firstChange[i];
        }
    }

    //concatenate the array to form the coded message
    
    for (let i = 0; i < secondChange.length; i++){
        if (i === secondChange.length -1){
            result += secondChange[i];
        } else {
            result += secondChange[i] + " ";
        }
    }
    return result;
  };
  
  console.log(squareCode("chill out"));
  console.log(squareCode("feed the dog"));
  console.log(squareCode("have a nice day"));
  console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));