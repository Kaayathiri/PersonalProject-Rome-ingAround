


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
    image.src="C://images/"+item.activity_image;
    //image.innerHTML= "<img src='c:/images/1.jpg'></img>";
   
    wrapper.append(image);

   const name = document.createElement('h5');
   name.className = 'card-title';
   name.innerHTML = item.activity_name;
   wrapper.append(name);

   var button = document.createElement("button");
   button. innerText = "+";
 
   wrapper.append(button);

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



xhr = new XMLHttpRequest();
var url = "http://localhost:8080/activity";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () { 
    if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.activity_name + ", " + json.activity_information)
    }
}
var data = JSON.stringify({"activity_name":"Roma","activity_information":"Italy"});
xhr.send(data);


  


