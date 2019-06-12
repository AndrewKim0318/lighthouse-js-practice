let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

function generateBoard (whiteQueen, blackQueen) {
    let number = 0;
    let board = [];

    while (number < 8){
        board[number] = [0, 0, 0, 0, 0, 0, 0, 0];
        if (number === whiteQueen[0] && number === blackQueen[0]){
            board[number][whiteQueen[1]] = 1;
            board[number][blackQueen[1]] = 1
        } else if ( number === blackQueen[0]){
            board[number][blackQueen[1]] = 1;
        } else if ( number === whiteQueen[0]){
            board[number][whiteQueen[1]] = 1;
        }
        number++;
    }

    return board;

}

function queenThreat(generatedBoard){
    
    let queenLocation = [];
    let queenUnderThreat = false;

    //find the queens
    for (let i = 0; i < generatedBoard.length; i++){
        if (generatedBoard[i].indexOf(1) > -1){
            queenLocation.push([i,generatedBoard[i].indexOf(1)]);
        }
    }

    let queenOne = queenLocation[0];
    let queenTwo = queenLocation[1];

    //create a function to check for diagonals
    function diagonalCheck (queenOne, queenTwo){
        let row = queenOne[0];
        let column = queenOne[1];
        let diagonalLocation = [];
        let rowOne;
        let rowTwo;
        let columnOne;
        let columnTwo;
        let result = false;

        function wallFinder(a,b){
            if (a < b){
                if ( a + b < 8){
                    rowOne = 0;
                    columnOne = b - a;
                    rowTwo = 0;
                    columnTwo = b + a;
                } else {
                    rowOne = 0;
                    columnOne = b - a;
                    rowTwo = a + b - 7;
                    columnTwo = 7;
                }
            } else if (a > b){
                if ( a + b < 8){
                    rowOne = a - b;
                    columnOne = 0;
                    rowTwo = 0;
                    columnTwo = a + b;
                } else {
                    rowOne = a - b;
                    columnOne = 0;
                    rowTwo = a + b - 7;
                    columnTwo = 7;
                }
            } else {
                if ( a + b < 8){
                    rowOne = a - b;
                    columnOne = 0;
                    rowTwo = 0;
                    columnTwo = a + b;
                } else {
                    rowOne = a - b;
                    columnOne = 0;
                    rowTwo = a + b - 7;
                    columnTwo = 7;
                }
            }
        }

        wallFinder(row,column);

        while ( rowOne < 8 && columnOne < 8){
            diagonalLocation.push([rowOne,columnOne]);
            rowOne++;
            columnOne++;
        }

        while ( rowTwo < 8 && columnTwo >= 0){
            diagonalLocation.push([rowTwo,columnTwo]);
            rowTwo++;
            columnTwo--;
        }

       for (let i = 0; i < diagonalLocation.length; i++){
           if (diagonalLocation[i][0] === queenTwo[0] && diagonalLocation[i][1] === queenTwo[1]){
               result = true;
           }
       }

        return result;

    }

    //find out if the queens are under threat
    if(whiteQueen[0] === blackQueen[0]){ //check if they are on the same row
        queenUnderThreat = true;
    } else if (whiteQueen[1] === blackQueen[1]) { //check if they are on the same column
        queenUnderThreat = true;
    } else if (diagonalCheck(queenOne, queenTwo) === true) { //check if they are in the same diagonals
        queenUnderThreat = true;
    }
    
    return queenUnderThreat;
}

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));