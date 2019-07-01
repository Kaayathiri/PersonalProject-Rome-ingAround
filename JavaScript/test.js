function displaySuperherodata(data) {

    document.getElementById("heading").innerText = data.squadName;
 
    const container = document.getElementById("cardContainers");
 
    // for (let member of data.members) {
 
    //     const memberNameElement = document.createElement('h3');
    //     const membersPowers = document.createElement('p');
 
    //     memberNameElement.innerHTML = member.name;
    //     membersPowers.innerHTML = member.powers;
 
    //     memberNameElement.className = 'memberNameClass';
    //     membersPowers.className = 'memberPowersClass';
 
    //     container.append(memberNameElement);
    //     container.append(membersPowers);
 
    // }
 
    // data.members.forEach(function (item, id) {
    //     container.append(generateMember(item, id));
    // });
 
    data.members.forEach((item) => {
        container.append(generateMember(item));
    });
 
 }
 
 function generateMember(item) {
 
    const wrapper = document.createElement('div');
    wrapper.className = 'col-sm-4';
 
    const card = document.createElement('div');
    card.className = 'card border-success text-center';
    wrapper.append(card);
 
    const body = document.createElement('div');
    body.className = 'card-body';
    card.append(body);
 
    const name = document.createElement('h5');
    name.className = 'card-title';
    name.innerHTML = item.name;
    body.append(name);
 
    const powers = document.createElement('p');
    powers.className = 'card-text';
    powers.innerHTML = item.powers.reduce((prev_item, curr_item) => prev_item + ', ' + curr_item);
    body.append(powers);
 
    return wrapper;
 
    // const el = document.createElement('p');
    // el.innerHTML = item.powers;
    // return el;
 }
 
 const request = new XMLHttpRequest()
 
 request.onload = () => {
    const parsedData = JSON.parse(request.responseText);
    console.log("Data:", parsedData);
    displaySuperherodata(parsedData);
 
 
 }