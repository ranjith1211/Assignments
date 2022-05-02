


let list = ["dhaniram","golu","mama","harini","raghey","krishna", "pintu","mangu"];

document.getElementById('remainers').textContent = `People remianing in Que: ${list.length}`;

let btn = document.getElementById('red');

btn.addEventListener('click', register);



  function register(){

      let name = document.getElementById('detail').value;
     
     list.push(name);

     alert(`${name} succesfully Registered for Covid Vaccination`);

     let mypromise = new Promise(function(resolve, reject){

         setInterval(function(){
             if(list[0] == name){
              resolve(`${name} has got Vaccinated`);
              // clearInterval(id);
             }
         },1000)

            setInterval(function(){
             if(list.length == 2){
              reject(`vaccine out of stock visit tomorrow`);
              clearInterval(id);
             }
         },1000)

     });

     mypromise.then(function(res){
       alert(res);
     });

       mypromise.catch(function(res){
       alert(res);
     })
 }

 function startVaccination(){
    document.getElementById('remainers').textContent = `People remianing in Que: ${list.length}`;
   list.shift();
   console.log(list);
 }

 let id = setInterval(startVaccination, 2000);