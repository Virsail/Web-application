alert("Hello welcome to my web app");
prompt("Are you ready to get your Akan name?").toUpperCase(); // I'm going to type "yes!"

function fn(){
  var d = new Date();
  
  
  var date = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value) +1;
  var year = parseInt(document.getElementById("year").value);
  
  
  if (day < 0 ||day > 31 ) {
      document.getElementsByClassName("dayerror");
      return false;
  } else if (date == "") {
      document.getElementsByClassName("dayerror");
      return false;
  } else{
      d.setDate(date);
  }
  
  if (month < 0 || day > 12) {
      document.getElementsByClassName("montherror");
      return false;
  } else if (month == "") {
      document.getElementsByClassName("montherror");
      return false;
  } else {
      d.setMonth(month);
  }
  
  if (month < 0) {
      document.getElementsByClassName("yearerror");
      return false;
  } else if (month == "") {
          document.getElementsByClassName("yearerror") ;
      }
  }
  
  
  
  var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
  
  function getAkan() {
      var ismale = document.getElementById('male').checked;
      var isfemale = document.getElementById('female').checked;
      if (ismale == true && isfemale == false) {
        if (day == 0) {
          alert("Bravo! your name is " + male[0]);
        }
        else if (day == 1) {
          alert("Bravo! your name is " + male[1]);
        }
        else if (day == 2) {
          alert("Bravo! your name is " + male[2]);
        }
        else if (day == 3) {
          alert("Bravo! your name is " + male[3]);
        }
        else if (day == 4) {
          alert("Bravo! your name is " + male[4]);
        }
        else if (day == 5) {
          alert("Bravo! your name is " + male[5]);
        }
        else {
          alert("Bravo! your name is " + male[6]);
        }
      } else if (ismale == false && isfemale == true) {
        if (day == 0) {
          alert("Bravo! your name is " + female[0]);
        }
        else if (day == 1) {
          alert("Bravo! your name is " + female[1]);
        }
        else if (day == 2) {
          alert("Bravo! your name is " + female[2]);
        }
        else if (day == 3) {
          alert("Bravo! your name is " + female[3]);
        }
        else if (day == 4) {
          alert("Bravo! your name is " + female[4]);
        }
        else if (day == 5) {
          alert("Bravo! your name is " + female[5]);
        }
        else {
          alert("Bravo! your name is " + female[6]);
        }
      } else {
        alert("get the Akan Name");
      }
    }