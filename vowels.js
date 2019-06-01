const numberOfVowels = function(data) {
    let vowels = ["a","e","i","o","u"];
    let count = 0;

    for (i = 0; i < data.length; i++){
        for (j = 0; j < vowels.length; j++){
            if (data[i] === vowels[j]){
                count++;
            }
        }
    }
    return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));