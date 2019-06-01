const multiplicationTable = function(maxValue) {
    let result = "";

    for (let i = 1; i <= maxValue; i++){
        for (let j = 1; j <= maxValue; j++){
            if (j === maxValue){
                result += i*j;
                result += "\n";
            } else {
                result += i*j + " ";
            }
        }
    }
    return result;
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));