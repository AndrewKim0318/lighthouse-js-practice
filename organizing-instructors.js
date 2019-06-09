const organizeInstructors = function(instructors) {
    let courseName = [];
    let instructorNames = [];
    let index = undefined;

    for (let i = 0; i < instructors.length; i++){
        if (courseName.includes(instructors[i].course) === false){
            index = courseName.length;
            courseName[index] = "";
            instructorNames[index] = [];
            courseName[index] += instructors[i].course;
            instructorNames[index].push(instructors[i].name);
        } else if (courseName.includes(instructors[i].course) === true){
            index = courseName.indexOf(instructors[i].course);
            instructorNames[index].push(instructors[i].name);
        }
    }

    let organizedInstructors = {};

    for (let i = 0; i < courseName.length; i++){
        organizedInstructors[courseName[i]] = instructorNames[i];
    }

    return organizedInstructors;

  };
  
  console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
  ]));