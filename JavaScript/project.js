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
    wrapper.append(image);

   const name = document.createElement('h5');
   name.className = 'card-title';
   name.innerHTML = item.activity_name;
   wrapper.append(name);

    const button = document.createElement("button");
    button.innerHTML = "delete";
    button.setAttribute("data-id", item.id);
    button.addEventListener('click', deleteLocation,true);
    wrapper.append(button);
    

   // button.setAttribute("onClick", DeleteFromDatabase(item.id));
   //  if (button.onclick==item.id){
   //     DeleteFromDatabase(item.id)
   //  }

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


//POST 

    const formData = {};

    function AddToMyDatabase(event) {
       //debugger
       for (let add of event) {
           if(add.name) {
               formData[add.name] = add.value;
           }
       }
       console.log('handle submit works!', formData);
    
       const data1 = JSON.stringify(formData);
       regUser(data1);
       return false;
    
    
    function regUser(value) {
       
       const request = new XMLHttpRequest()
    
       request.onload = () => {}
       const address = 'http://localhost:8080/activity';
       request.open('POST', address);
       request.setRequestHeader('Content-Type', 'application/json');
       request.send(value);
    }}



function deleteLocation(){
   const request = new XMLHttpRequest();
  
   request.open('DELETE', 'http://localhost:8080/activity/' + this.getAttribute('data-id'));
   request.send();
}




