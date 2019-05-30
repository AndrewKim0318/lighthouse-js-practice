//This was copied in order to create an array of all the letter in the alphabet (Upper and lower case)
const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps.concat(caps.map(letter => letter.toLowerCase()));
  })();

const urlEncode = function(text) {
    // index the first and last letter within the string
    let firstLetter = false;
    let result = "";
    let numberOfSpaces = 0;

    for (let i = 0; i < text.length; i++){
        //start adding letters to result when first letter is detected
        if (firstLetter === false && letters.includes(text[i]) === true && numberOfSpaces === 0){
            firstLetter = true;
            result += text[i];
        } else if ( firstLetter === true && letters.includes(text[i]) === true && numberOfSpaces === 0){
            // continue adding letters after the first letter
            result += text[i];
        } else if ( firstLetter === true && letters.includes(text[i]) === false){
            // check to see if there are any letters behind the space(s)
            numberOfSpaces++;
        } else if ( firstLetter === true && letters.includes(text[i]) === true && numberOfSpaces > 0){
            // if there are letters behind the spaces, add %20
            while (numberOfSpaces > 0){
                result += "%20";
                numberOfSpaces--;
            }
            result += text[i];
        }
    }
    return result;
  };
  
  console.log(urlEncode("Lighthouse Labs"));
  console.log(urlEncode(" Lighthouse Labs "));
  console.log(urlEncode("blue is greener than purple for sure"));