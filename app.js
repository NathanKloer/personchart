// input information
// take information, append it to a grid

// var form = {
//     firstName=document.getElementById("firstName").value,
//     mi=document.getElementById("mi").value,
//     lastName=document.getElementById("lastName").value,
//     dob=document.getElementById("dob").value,
//     email=document.getElementById("email").value,
//     address=document.getElementById("address").value,
//     city=document.getElementById("city").value,
//     state=document.getElementById("state").value,
//     zip=document.getElementById("zip").value,
// }



document.getElementById("btn").addEventListener("click", submit);

function submit() {
    // var newLine = document.createElement("br");
    // newLine.append("root");

    let info = [firstName, middleName, lastName, dob, address, city, state, zip, email]
    info.firstName = document.getElementById("firstName").value
    info.mi = document.getElementById("middleName").value
    info.lastName = document.getElementById("lastName").value
    info.dob = document.getElementById("dob").value
    info.address = document.getElementById("address").value
    info.city = document.getElementById("city").value
    info.state = document.getElementById("state").value
    info.zip = document.getElementById("zip").value
    info.email = document.getElementById("email").value

    var newEntry = document.createElement("div");
    if (document.getElementById(info.firstName + info.mi + info.lastName)) {
        alert("That person has already been entered. \nPlease submit a new Entry");
        return;
    } else {
        newEntry.id = info.firstName + info.mi + info.lastName;
    }
    newEntry.className = "entry"
    var element = document.getElementById("root");
    element.appendChild(newEntry);

    for (let i = 0; i < 9; i++) {
        var newLine = document.createElement("p");
        var node = document.createTextNode(info[i].value);
        newLine.appendChild(node);
        newEntry.appendChild(newLine);
        var element = document.getElementById(info.firstName + info.mi + info.lastName);
        element.appendChild(newLine);
    }


    // var newEntry = document.createElement("p");
    // var node = document.createTextNode(info.firstName + info.mi + info.lastName + info.dob + info.email + info.address + info.city + info.state + info.zip);
    // newEntry.appendChild(node);
    // var element = document.getElementById("root");
    // element.appendChild(newEntry);



    //document.getElementById("root").append(info.firstName, info.mi, info.lastName, info.dob, info.email, info.address, info.city, info.state, info.zip)
}