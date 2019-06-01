const camelCase = function(input) {
    let result = "";
    let spaceDetected = false;

    for (let i = 0; i < input.length; i++){
        if (input[i] === " "){
            spaceDetected = true;
        } else if (spaceDetected === true){
            result += input[i].toUpperCase();
            spaceDetected = false;
        } else {
            result += input[i];
        }
    }
    return result;
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));