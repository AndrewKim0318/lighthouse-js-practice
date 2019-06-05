const makeCase = function(input, type) {
    let result = "";
    let spaceDetected = false;
    const vowels = ["a", "e", "i", "o", "u"]

    if (typeof type === "string"){
        switch (type){
            case "camel":
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
                break;
            case "pascal":
                for (let i = 0; i < input.length; i++){
                    if (i === 0){
                        result += input[i].toUpperCase();
                    } else if (input[i] === " "){
                        spaceDetected = true;
                    } else if (spaceDetected === true){
                        result += input[i].toUpperCase();
                        spaceDetected = false;
                    } else {
                        result += input[i];
                    }
                }
                break;
            case "snake":
                for (let i = 0; i < input.length; i++){
                    if (input[i] === " "){
                        result += "_";
                    } else {
                        result += input[i];
                    }
                }
                break;
            case "kebab":
                for (let i = 0; i < input.length; i++){
                    if (input[i] === " "){
                        result += "-";
                    } else {
                        result += input[i];
                    }
                }
                break;
            case "title":
                for (let i = 0; i < input.length; i++){
                    if (i === 0){
                        result += input[i].toUpperCase();
                    } else if (input[i] === " "){
                        spaceDetected = true;
                        result += input[i];
                    } else if (spaceDetected === true){
                        result += input[i].toUpperCase();
                        spaceDetected = false;
                    } else {
                        result += input[i];
                    }
                }
                break;
            case "vowel":
                for ( let i = 0; i < input.length; i++){
                    if (vowels.includes(input[i]) === true){
                        result += input[i].toUpperCase();
                    } else {
                        result += input[i];
                    }
                }
                break;
            case "consonant":
                for ( let i = 0; i < input.length; i++){
                    if (vowels.includes(input[i]) === false){
                        result += input[i].toUpperCase();
                    } else {
                        result += input[i];
                    }
                }
                break;
            case "upper":
                result = input.toUpperCase();
                break;
            case "lower":
                result = input.toLowerCase();
                break;
        }
    } else {
        let sortedType = [];
        for (let i = 0 ; i < type.length ; i++){
            if (type[i] === "camel" || type[i] === "pascal" || type[i] === "snake" || type[i] === "kebab" || type[i] === "title"){
                switch (type[i]){
                    case "camel":
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
                        break;
                    case "pascal":
                        for (let i = 0; i < input.length; i++){
                            if (i === 0){
                                result += input[i].toUpperCase();
                            } else if (input[i] === " "){
                                spaceDetected = true;
                            } else if (spaceDetected === true){
                                result += input[i].toUpperCase();
                                spaceDetected = false;
                            } else {
                                result += input[i];
                            }
                        }
                        break;
                    case "snake":
                        for (let i = 0; i < input.length; i++){
                            if (input[i] === " "){
                                result += "_";
                            } else {
                                result += input[i];
                            }
                        }
                        break;
                    case "kebab":
                        for (let i = 0; i < input.length; i++){
                            if (input[i] === " "){
                                result += "-";
                            } else {
                                result += input[i];
                            }
                        }
                        break;
                    case "title":
                        for (let i = 0; i < input.length; i++){
                            if (i === 0){
                                result += input[i].toUpperCase();
                            } else if (input[i] === " "){
                                spaceDetected = true;
                                result += input[i];
                            } else if (spaceDetected === true){
                                result += input[i].toUpperCase();
                                spaceDetected = false;
                            } else {
                                result += input[i];
                            }
                        }
                        break;
                    }
                    
            } else if (type[i] === "consonant" ||type[i] === "vowel"){
                sortedType.shift(type[i]);
            } else if (type[i] === "lower" ||type[i] === "upper"){
                sortedType.push(type[i]);
            }
        }
        for (let i = 0; i < sortedType.length; i++){
            if (result.length === 0){
                switch (sortedType[i]){
                    case "vowel":
                        for ( let i = 0; i < input.length; i++){
                            if (vowels.includes(input[i]) === true){
                                result += input[i].toUpperCase();
                            } else {
                                result += input[i];
                            }
                        }
                        break;
                    case "consonant":
                        for ( let i = 0; i < input.length; i++){
                            if (vowels.includes(input[i]) === false){
                                result += input[i].toUpperCase();
                            } else {
                                result += input[i];
                            }
                        }
                        break;
                    case "upper":
                        result = input.toUpperCase();
                        break;
                    case "lower":
                        result = input.toLowerCase();
                        break;
                }
            } else {
                switch (sortedType[i]){
                    case "vowel":
                        for ( let i = 0; i < input.length; i++){
                            if (vowels.includes(input[i]) === true){
                                input[i] = input[i].toUpperCase();
                            }
                        }
                    break;
                    case "consonant":
                        for ( let i = 0; i < input.length; i++){
                            if (vowels.includes(input[i]) === false){
                                input[i] = input[i].toUpperCase();
                            }
                        }
                        break;
                    case "upper":
                        result = result.toUpperCase();
                        break;
                    case "lower":
                        result = result.toLowerCase();
                        break;
                }
            }
        }
    }

    return result;
  }
  
  console.log(makeCase("this is a string", "camel")); //thisIsAString
  console.log(makeCase("this is a string", "pascal")); //ThisIsAString
  console.log(makeCase("this is a string", "snake")); // this_is_a_string
  console.log(makeCase("this is a string", "kebab")); // this-is-a-string
  console.log(makeCase("this is a string", "title")); //This Is A String
  console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
  console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
  console.log(makeCase("this is a string", ["upper", "snake"])); //THIS_IS_A_STRING