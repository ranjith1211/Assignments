// Accessing Form
let sub = document.getElementById('form');

// Adding submit event to form to display names
sub.addEventListener('submit', display);


// counting current names
let count= 1;


// display function declaration
function display(e){
  //preventing form's default behaviour
    e.preventDefault();

   // accesing input entered
    let name = document.getElementById('name').value;


// declaring name Contructor function
    function name(name){
        this.number = count;
        this.nameName = name;
    
        count++;
    }
     // Creating object bu using constructor function
    let nameDetails = new name(name);

   // creating tr and tds for content appending in table
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = nameDetails.number;

    let td2 = document.createElement("td");
    td2.textContent = nameDetails.nameName;

    let td3 = document.createElement("td");
  td3.textContent = nameDetails.date;

    


// appending all tds in tr
    tr.append(td1, td2, td3);

// appending tr in tbody
    let body = document.querySelector('tbody');

    body.append(tr);

}

