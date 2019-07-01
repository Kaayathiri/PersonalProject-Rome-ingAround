// var xhr = new XMLHttpRequest();
// xhr.open('GET','http://localhost:8080/activity', true);
// xhr.responseType = 'text';



// xhr.onload = function() {
//    if (xhr.status ===200) {
//    var activityInfo = JSON.parse(xhr.responseText);
//  //  console.log(activityInfo);



// var myActivityInfo = "";
//    for (i=0; i<activityInfo.length; i++) {
//        var x=i+1;
//        //myActivityInfo += activityInfo[i].id;
//        myActivityInfo += "<br> "+activityInfo[i].activity_name+" <br>";
//        myActivityInfo += ""+activityInfo[i].activity_information+" <br>";
//       // console.log(activityInfo);


//    } // end loop

//    document.getElementById('message').innerHTML = myActivityInfo;

// }


// }
//    xhr.send();


function displayActivityData(data) {



   const container = document.getElementById("cardContainers");
   data.forEach((item) => {
      //console.log("This is the" + data);
      container.append(generateActivity(item));

   });
}
function generateActivity(item) {
   const wrapper = document.createElement('div');
   wrapper.className = 'col-s12-m6';

   const card = document.createElement('p');
   card.className = 'card-content';
   card.innerHTML = item.activity_information;
   wrapper.append(card);

   const image = document.createElement('img');
    image.className = 'card-image';
    wrapper.append(image);

   const name = document.createElement('h5');
   name.className = 'card-title';
   name.innerHTML = item.activity_name;
   wrapper.append(name);

   return wrapper;
}




const xhr = new XMLHttpRequest();



xhr.onload = () => {

   const activityInfo = JSON.parse(xhr.responseText);
   //console.log("response is" + this.response);
   console.log("Data:", activityInfo);
   displayActivityData(activityInfo);



}

xhr.open('GET', 'http://localhost:8080/activity');
xhr.send();



