

let form = document.getElementById('form');

let usersRegistered = JSON.parse(localStorage.getItem("registered")) || [];

form.addEventListener('submit',signup);

function signup(e){
    e.preventDefault();


let name = document.getElementById('name').value;

let mobile = document.getElementById('mobile').value;

let email = document.getElementById('email').value;

let password = document.getElementById('password').value;

let obj = {
    name:name,
    mobile:mobile,
    email:email,
    password:password
}

let count = 0;

usersRegistered.forEach(function(el){
   if(el.name == name && el.mobile == mobile && el.email == email && el.password == password){
       count++;
   }; 
})

if(name == "" || mobile == "" || email == "" || password == ""){
    alert("Please Enter All Credentials");
}else if(count == 1){
    alert("The User has already Registered!");
}
else{
usersRegistered.push(obj);  
    alert("User Signedup Successfully!");
}

localStorage.setItem("registered", JSON.stringify(usersRegistered));

}