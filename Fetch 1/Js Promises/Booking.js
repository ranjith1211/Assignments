let form = document.getElementById('form');

form.addEventListener('submit', book);

function book(e){
    e.preventDefault();

    let name = document.getElementById('name').value;

    let age = document.getElementById('age').value;

    let mobile = document.getElementById('mobile').value;

    let adhar = document.getElementById('adhar').value;

    let card = document.getElementById('card').value;

    let otp = document.getElementById('otp').value;

    if(name == ""||age==""||mobile==""||adhar==""||card==""||otp==""){
        alert("Please fill all credentials!");
    }else if(age.length != 2){
        alert("age should consist 2 digits");
    }else if(mobile.length != 10){
        alert("age should consist 2 digits");
    }else if(adhar.length != 12){
        alert("age should consist 2 digits");
    }else if(card.length != 16){
        alert("age should consist 2 digits");
    }
    else if(otp.length != 3){
        alert("age should consist 2 digits");
    }
    else{
        alert("The Booking is Successfull!");
    }
    }
    