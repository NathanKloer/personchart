document.getElementById("btn").addEventListener("click", submit);

var person = function (firstName, middleName, lastName, dob, address, city, state, zip, email) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.dob = dob;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.email = email;
}

function submit() {
    const arr = [
        document.getElementById("firstName").value,
        document.getElementById("middleName").value,
        document.getElementById("lastName").value,
        document.getElementById("dob").value,
        document.getElementById("address").value,
        document.getElementById("city").value,
        document.getElementById("state").value,
        document.getElementById("zip").value,
        document.getElementById("email").value,
    ];

    console.log(arr.firstName)
    if (document.getElementById(arr[9])) {
        alert("That person has already been entered. \nPlease submit a new Entry");
        return;
    } else {
        var newEntry = document.createElement("div");
        // newEntry.id = entryId;
        newEntry.className = "entry"
    }

    const newEntriant = new person(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8])
    console.log(newEntriant);

    var row = document.getElementById("root");
    row.appendChild(newEntry);

    //goes through info array, populating each with a <p> tag with the info
    for (let i = 0; i < 9; i++) {
        var newLine = document.createElement("p");
        var data = document.createTextNode(arr[i]);
        newLine.appendChild(data);
        newEntry.appendChild(newLine);
    }
};