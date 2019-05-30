const instructorWithLongestName = function(instructors) {
    // find the longest name
    let longestName = "";
    let j;
    for (let i = 0; i < instructors.length; i++){
        if (instructors[i].name.length > longestName.length){
            longestName = instructors[i].name
            j = i;
        }
    // return the index of instructor that contains the longest name
    }
    return instructors[j];
  };
  
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));

  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));