const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/activity',true);
xhr.responseType = 'text';

xhr.onload = () => {
   const activityInfo = JSON.parse(xhr.responseText);
   
   console.log("Data:", activityInfo);

   var myActivityInfo = "";
   for (i=0; i<activityInfo.length; i++) {
       var x=i+1;
       //myActivityInfo += "<br>"+ "Activity: "+" <br>";
       myActivityInfo += "No.: "+activityInfo[i].id+" <br>";
       myActivityInfo += "Activity Name: "+activityInfo[i].activity_information+" <br>";
   }
   document.getElementById('message').innerHTML = myActivityInfo;
}
xhr.send();





//POST 

// xhr = new XMLHttpRequest();
// var url = "http://localhost:8080/activity";
// xhr.open("POST", url, true);
// xhr.setRequestHeader("Content-type", "application/json");
// xhr.onreadystatechange = function () { 
   
//         var json = JSON.parse(xhr.responseText);
//         console.log(json.activity_name + ", " + json.activity_information)
//     }

// var data = JSON.stringify({"activity_name":"Roma","activity_information":"Italy"});
// xhr.send(data);