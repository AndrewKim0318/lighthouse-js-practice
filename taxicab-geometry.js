const blocksAway = function(directions) {
    let x = 0;
    let y = 0;
    let xCounter = 0;
    let yCounter = 0;
    let turns = "";
    lastMove = "";
    lastMoveDirection = "";

    for (let i = 0; i < directions.length; i++){
        if (directions[i] === "right" || directions[i] === "left"){
            turns = directions[i];
        } else if (turns !== "" && xCounter === 0 && yCounter === 0){
            if (turns === "right"){
                x += directions[i];
                xCounter++;
                lastMove = x;
                lastMoveDirection = "+"
            } else {
                y += directions[i];
                yCounter++;
                lastMove = y;
                lastMoveDirection = "+"
            }
            turns = "";
        } else if (turns !== "" && xCounter > yCounter){
            if (turns === "right"){
                y -= directions[i];
                lastMoveDirection = "-"
            } else {
                y += directions[i];
                lastMoveDirection = "+"
            }
            lastMove = y;
            yCounter++;
            turns = "";
        } else if (turns !== "" && xCounter < yCounter){
            if (turns === "right"){
                x += directions[i];
                lastMoveDirection = "+"
            } else {
                x -= directions[i];
                lastMoveDirection = "-"
            }
            lastMove = x;
            xCounter++;
            turns = "";
        } else if (turns !== "" && xCounter === yCounter){
            if (lastMove === x && turns === "right" && lastMoveDirection === "+"){
                y -= directions[i];
                lastMove = y;
                lastMoveDirection = "-"
            } else if (lastMove === x && turns === "right" && lastMoveDirection === "-"){
                y += directions[i];
                lastMove = y;
                lastMoveDirection = "+"
            } else if (lastMove === x && turns === "left" && lastMoveDirection === "+"){
                y += directions[i];
                lastMove = y;
                lastMoveDirection = "+"
            } else if (lastMove === x && turns === "left" && lastMoveDirection === "-"){
                y -= directions[i];
                lastMove = y;
                lastMoveDirection = "-"
            } else if (lastMove === y && turns === "right" && lastMoveDirection === "+"){
                x += directions[i];
                lastMove = x;
                lastMoveDirection = "+"
            } else if (lastMove === y && turns === "right" && lastMoveDirection === "-"){
                x -= directions[i];
                lastMove = x;
                lastMoveDirection = "-"
            } else if (lastMove === y && turns === "left" && lastMoveDirection === "+"){
                x -= directions[i];
                lastMove = x;
                lastMoveDirection = "-"
            } else if (lastMove === y && turns === "left" && lastMoveDirection === "-"){
                x += directions[i];
                lastMove = x;
                lastMoveDirection = "+"
            } 
        }
    }

    let destination = new Object;

    destination["east"] = x;
    destination["north"] = y;

    return destination;
  };
  
  console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
  console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
  console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));