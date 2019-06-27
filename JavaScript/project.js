var xhr = new XMLHttpRequest();
xhr.open('GET','http://localhost:8080/activity', true);
xhr.responseType = 'text';



xhr.onload = function() {
   if (xhr.status ===200) {
   var activityInfo = JSON.parse(xhr.responseText);
   console.log(activityInfo);

//     console.log(activityInfo[0].ingredients);
//    } 

var myActivityInfo = "";
   for (i=0; i<activityInfo.length; i++) {
       var x=i+1;
   
       myActivityInfo += "Activity Name: "+activityInfo[i].activity_name+" <br>";
       myActivityInfo += "Information: "+activityInfo[i].activity_information+" <br>";
   } // end loop

   document.getElementById('message').innerHTML = myActivityInfo;

}


}
   xhr.send();
