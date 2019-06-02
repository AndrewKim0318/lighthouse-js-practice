const calculateChange = function(total, cash) {
    let result = "{";
    let change = cash - total;

    let Money = [
        { name: "twentyDollar", value: 2000, numberOf: 0,},
        { name: "tenDollar", value: 1000, numberOf: 0,},
        { name: "fiveDollar", value: 500, numberOf: 0,},
        { name: "twoDollar", value: 200, numberOf: 0,},
        { name: "oneDollar", value: 100, numberOf: 0,},
        { name: "quarter", value: 25, numberOf: 0,},
        { name: "dime", value: 10, numberOf: 0,},
        { name: "nickel", value: 5, numberOf: 0,},
        { name: "penny", value: 1, numberOf: 0,}
    ]

    for (let i = 0; i < Money.length; i++){
        if (Math.floor(change / Money[i].value) !== 0){
            Money[i].numberOf = Math.floor(change/Money[i].value);
            change -= Money[i].numberOf * Money[i].value;
            result += Money[i].name + ": " + Money[i].numberOf + " ";
        }
    }
    result += "}";
    return result;
  };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));