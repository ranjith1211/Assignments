let sub = document.getElementById('form');

sub.addEventListener('submit', display);

let count= 0;

 let flex = document.getElementById('flex1');
    flex.textContent = `Total No Of Tasks ${count}`;

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

    let done = document.createElement("td");
    let db = document.createElement("button");
    db.textContent = 'Done';
    
    done.append(db);

    done.onclick = function(){
        tr.style.backgroundColor = "green";

        tr.style.textDecoration = "line-through";

         tr.style.color = "Yellow";
    }
     

    let remove = document.createElement("td");
    let rb = document.createElement("button");
    rb.textContent = 'Remove';

     remove.append(rb);

       remove.onclick = function(){
          console.log(remove.parentNode.remove());
             count--;
             let flex = document.getElementById('flex1');
            flex.textContent = `Total No Of Tasks ${count}`;

       }

    tr.append( td2, td3, td4, done, remove);

    td1.setAttribute('class', "made");

    let body = document.querySelector('tbody');

    body.append(tr);

    let flex = document.getElementById('flex1');
    flex.textContent = `Total No Of Tasks ${count}`;

}


