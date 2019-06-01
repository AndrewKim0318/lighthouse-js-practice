const talkingCalendar = function(date) {
    let year = "";
    let month = "";
    let day = "";
    const monthName= ["January","February","March","April","May","June","July", "August","September","October","November","December"];

    for (let i = 0; i < date.length; i++){
        if (i >= 0 && i <= 3){
            year += date[i];
        } else if ( i > 3 && i <= 7 && date[i] !== "/") {
            month += date[i];
        } else if ( i > 7) {
            day += date[i];

        }
        if (i === date.length - 1){

            month = monthName[month - 1] + " ";

            if (day === "01" || day === "21" || day === "31"){
                day += "st, ";
            } else if ( day === "02" || day === "22"){
                day += "nd, ";
            } else if ( day === "03" || day === "23"){
                day += "rd, ";
            } else {
                day += "th, ";
            }

            if (day.charAt(0) === "0"){
                day = day.substr(1);
            } 
        }
    }
    let result = month + day + year;
    return result;

  };
  
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));