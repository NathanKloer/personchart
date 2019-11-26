document.getElementById("btn").addEventListener("click", submit);

function submit() {

    //assemble form data to be submitted. I like arrays
    const info = [
        firstName = document.getElementById("firstName").value,
        middleName = document.getElementById("middleName").value,
        lastName = document.getElementById("lastName").value,
        dob = document.getElementById("dob").value,
        address = document.getElementById("address").value,
        city = document.getElementById("city").value,
        state = document.getElementById("state").value,
        zip = document.getElementById("zip").value,
        email = document.getElementById("email").value,
    ];

    console.log(info.firstName)

    //entryId will be used to create unique ID's for each entry. An alert will show if 
    //the ID is in use, and the delete button will use the unique ID also to target 
    //their row. Alternative to first, middle, last names, we could use email.
    
    const entryId = info[0] + info[1] + info[2];

    //check if ID already exists (entryID) if it does, reject entry. If it doesn't
    //create the div and assign ID
    if (document.getElementById(entryId)) {
        alert("That person has already been entered. \nPlease submit a new Entry");
        return;
    } else {
        var newEntry = document.createElement("div");
        newEntry.id = entryId;
        newEntry.className = "entry"
    }
    var row = document.getElementById("root");
    row.appendChild(newEntry);

    //goes through info array, populating each with a <p> tag with the info
    for (let i = 0; i < 9; i++) {
        var newLine = document.createElement("p");
        newLine.id = Object.getOwnPropertyNames(info[i]);
        var data = document.createTextNode(info[i]);
        newLine.appendChild(data);
        newEntry.appendChild(newLine);
    };
    //delete button
    var deleteBtn = document.createElement("button")
    deleteBtn.setAttribute(
        "id" , "dlt" ,
        "type" , "button" ,
        "name" , entryId
    );
    deleteBtn.appendChild(document.createTextNode("x"));
    document.getElementById(entryId).append(deleteBtn);

    deleteBtn.addEventListener("click", remove);
    function remove() {
        var entryBin = document.getElementById("root");
        dltTarget = document.getElementById(entryId);
        entryBin.removeChild(dltTarget);
    }
    console.log(info)
};

document.getElementById("updateBtn").addEventListener("click", update);

function update() {
    entryId = document.getElementById("updateInput").value;
    let updateField = prompt("Which Field are You Ediitng?", "")
    let updateValue = prompt("What is the new value?", "")
    const divToAmmend = document.getElementById("entryId")
    console.log(updateField);
    console.log(entryId);
}
