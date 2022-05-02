let sub = document.getElementById('form');

sub.addEventListener('submit', display);

let count= 1;

function display(e){
    e.preventDefault();

    let task = document.getElementById('task').value;

    function Task(task){
        this.srNo = count;
        this.taskName = task;
        this.date = `${(new Date()).getDate()}/${(new Date()).getMonth() + 1}/${(new Date()).getFullYear()}`;
        this.status = "False";
        count++;
    }

    let taskDetails = new Task(task);

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = taskDetails.srNo;

    let td2 = document.createElement("td");
    td2.textContent = taskDetails.taskName;

    let td3 = document.createElement("td");
  td3.textContent = taskDetails.date;

    let td4 = document.createElement("td");
    td4.textContent = taskDetails.status;


    td4.addEventListener('click', update);

    function update(){
    let status = td4.textContent;
    if(status == "False"){
        td4.textContent = "True";
    }else{
        td4.textContent = "False";
    }
    }

    tr.append(td1, td2, td3, td4);

    let body = document.querySelector('tbody');

    body.append(tr);

}

