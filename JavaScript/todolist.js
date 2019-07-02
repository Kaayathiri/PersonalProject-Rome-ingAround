



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