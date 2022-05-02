

let form = document.getElementById('form');

let usersRegistered = JSON.parse(localStorage.getItem("registered"));

form.addEventListener('submit',login);

function login(e){
    e.preventDefault();

let email = document.getElementById('email').value;

let password = document.getElementById('password').value;



let count = 0;
usersRegistered.forEach(function(el){
    if(el.email == email && el.password == password){
        count++;
    }
})

if(email == "" || password == ""){
    alert("Please Enter All Credentials");
}else if(count == 1){
     alert("User LoggedIn Successfully!");
   window.location.href = "home.html";
}else{
alert("Invalid Credentials");
}

localStorage.setItem("registered", JSON.stringify(usersRegistered));

}