const urlDecode = function(text) {
    let propertyName = [];
    let properties = [];
    let equalEncountered = false;
    let propertyNameString = "";
    let propertiesString = "";
    let spaceDetector = "";

    for (let i = 0; i < text.length; i++){
        if ( text[i] === "="){
            equalEncountered = true;
            propertyName.push(propertyNameString);
        } else if (text[i] === "&"){
            equalEncountered = false;
            properties.push (propertiesString);
            propertyNameString = "";
            propertiesString = "";
        } else if (text[i] === "%"){
            spaceDetector += text[i];
        } else if (text[i] === "2"){
            if (spaceDetector.includes("%") === true){
                spaceDetector += text[i];
            } else {
                spaceDetector = "";
            }
        } else if (text[i] === "0"){
            if (spaceDetector.includes("%") === true && spaceDetector.includes("2") === true){
                propertiesString += " ";
                spaceDetector = "";
            } else {
                spaceDetector = "";
            }
        } else if (i === text.length - 1){
            propertiesString += text[i];
            properties.push (propertiesString);
        } else if (equalEncountered === false){
            propertyNameString += text[i];
        } else if (equalEncountered === true){
            propertiesString += text[i];
        } 
    }
    
    let urlDecoder = new Object;

    for (let i = 0; i < propertyName.length; i++){
        urlDecoder[propertyName[i]] = properties[i]
    }

    return urlDecoder;
  };
  
  console.log(urlDecode("duck=rubber"));
  console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
  console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
  console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);