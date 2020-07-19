alert("Hello welcome to my web app");
prompt("Are you ready to get your Akan name?").toUpperCase(); // I'm going to type "yes!"
var century, year, month, dayOfMonth, dayOfWeek, day;
//Get input
function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);


  if(century === ""){
    alert("Input the correct century");
    return false;
  }else if (year === ""){
    alert("Input the correct year");
    return false;
  }else if (month === ""){
    alert("Input the correct month");
    return false;
  }else if(dayOfMonth === ""){
    alert("input the correct date");
    return false;
  }
}
//Calculate func
function calculateDay(){
  getInput();
  dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
  console.log(dayOfWeek); //Test the calculateDay function
  return (Math.floor(dayOfWeek));
  if (dayOfWeek < 0) {
    dayOfWeek = dayOfWeek * -1;
  }
  else if (dayOfWeek > 0) {
    return dayOfWeek;
  }
}
//main caller func
function checkDayOfWeek(){
  day = calculateDay();
   checkGender();
   console.log("The function runs");//Test checkDayOfWeek function
}