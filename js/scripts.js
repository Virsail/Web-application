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
//arrays
var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//get selected radio button
function checkGender(){
  var gen = document.getElementsByName("rads");
  if(gen[0].checked == true){
      var gender = "male";
  }else if(gen[1].checked == true){
      var gender = "female";
  }else {
    console.log("pass");//Test the radio buttons
  }
  switch(gender){
    case gender = "male":
          switch(day){
            case (0 || -0):
              document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
            break;
            case (1 || -1):
              document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
            break;
            case (2 || -2):
              document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + maleNames[2];
            break;
            case (3 || -3):
              document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is "+ maleNames[3];
            break;
            case (4 || -4):
              document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + maleNames[4];
            break;
            case (5 || -5):
              document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + maleNames[5];
            break;
            case (6 || -6):
              document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
            break;
            default:
            // console.console.log("Pass");//Test male case
          }
          break;
          case gender = "female":
                  switch(day){
                    case 0 || -0:
                      document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + femaleNames[0];
                    break;
                    case 1 || -1:
                      document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + femaleNames[1];
                    break;
                    case 2 || -2:
                      document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + femaleNames[2];
                    break;
                    case 3 || -3:
                      document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is " + femaleNames[3];
                    break;
                    case 4 || -4:
                      document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + femaleNames[4];
                    break;
                    case 5 || -5:
                      document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + femaleNames[5];
                    break;
                    case 6 || -6:
                      document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + femaleNames[6];
                    break;
  
                }