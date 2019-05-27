let sumLargestNumbers = function(data){
  //find the largest two values within the array
  var largestNumber = 0;
  var secondLargestNumber = 0;

  for (i = 0; i < data.length; i++){
    if(data[i] > largestNumber){
      secondLargestNumber = largestNumber;
      largestNumber = data[i];
    } else if (data[i] < largestNumber && data[i] > secondLargestNumber){
      secondLargestNumber = data[i];
    }
  }

  let sum = largestNumber + secondLargestNumber;

  return sum

}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));