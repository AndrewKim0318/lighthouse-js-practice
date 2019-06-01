const repeatNumbers = function(data) {
    
    let result = "";
    let repeatValue = undefined;
    let numberOfRepeats = 0;

    for (let i = 0; i < data.length; i++){
        
        let numberOfValues = data.length -1;
        let repetitionDone = 0;

        repeatValue = data[i][0];
        numberOfRepeats = data[i][1];
        
        if (data.length > 1 && i === numberOfValues) {
            while (repetitionDone < numberOfRepeats){
                result += repeatValue;
                repetitionDone++;
            }
        } else if ( data.length > 1 && i !==numberOfValues){
            while (repetitionDone < numberOfRepeats){
                result += repeatValue;
                repetitionDone++;
            }
            result += ", ";
        } else {
            while (repetitionDone < numberOfRepeats){
                result += repeatValue;
                repetitionDone++;
            }
        }
    }
    return result;

  };
  
  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));