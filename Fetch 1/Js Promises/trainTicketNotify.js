let check = document.getElementById('notify');

let BtG = ["messi","ronaldo","tiger","usha","madhav","keshav","raaj", "mahendra"];

let MtG = ["messi","ronaldo","tiger","usha","madhav","keshav","raaj", "mahendra"];

let PtG = ["messi","ronaldo","tiger","usha","madhav","keshav","raaj", "mahendra"];

check.addEventListener('click', checkForSeats);



async function checkForSeats(){

let mypromise = new Promise(function(resolve, reject){

    setInterval(function(){
        if(BtG.length == 4){
            resolve(`Train "Bangalore To Goa" has 4 Seats Available`);
            clearInterval(timer);
        }else if(MtG.length == 4){
            resolve(`Train "Mumbai To Goa" has 4 Seats Available`);
            clearInterval(timer);
        }else if(PtG.length == 4){
            resolve(`Train "Pune To Goa" has 4 Seats Available`);
            clearInterval(timer);
        }
    }, 1000);
});

 let res = await mypromise;

 

   document.getElementById('res').textContent  = res;
  
    window.location.href = "Booking.html"
}

function cancelTickets() {
    let t1 = (Math.random()*5 + 1);
    let t2 = (Math.random()*5 + 1);
    let t3 = (Math.random()*5 + 1);

    document.getElementById('one').textContent = `Train Bangalore To Goa: ${BtG.length} `

document.getElementById('two').textContent = `Train Mumbai To Goa: ${MtG.length} `

document.getElementById('three').textContent = `Train Pune To Goa: ${PtG.length} `

    setTimeout(function(){
        BtG.pop();
    }, t1*1000);
    
     setTimeout(function(){
        MtG.pop();
    }, t2*1000);

     setTimeout(function(){
        PtG.pop();
    }, t3*1000);

    console.log(BtG);
    console.log(MtG);
    console.log(PtG);
}

let timer = setInterval(cancelTickets, 2000);

console.log(PtG);