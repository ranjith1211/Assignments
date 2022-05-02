let order = document.getElementById('order');

let orders = ["chicker tandoori","kashmiri palav","utthappa","utthappa","utthappa"];

let foodPics = 
    {
        dosa:"https://media.istockphoto.com/photos/plain-dosa-dish-picture-id1318600400?b=1&k=20&m=1318600400&s=170667a&w=0&h=aKwtxtg1IdudCXRHrC-CgxxQA19qrnEXN2oXdixZCko=",
        parota:"https://media.istockphoto.com/photos/kerala-parotta-popularly-known-as-paratha-or-porotta-is-a-delicacy-picture-id1205482203?b=1&k=20&m=1205482203&s=170667a&w=0&h=0GwfOzyjTO7_QSWhg0llZasEKmbR6x4niTvLYx_IZk0=",
        palav:"https://media.istockphoto.com/photos/typical-south-indian-variety-lunch-picture-id506104365?b=1&k=20&m=506104365&s=170667a&w=0&h=LkP1aG3gxYLWq2t2uK6F9h2N3GRSfgbACVx_wOCe1js=",
        kaju:"https://media.istockphoto.com/photos/cashew-curry-indian-kaju-masala-served-in-a-bowl-or-pan-selective-picture-id1079581232?b=1&k=20&m=1079581232&s=170667a&w=0&h=slcXW0L_Q9oiDDLbuH5LD-Wc821xtaSlrgUIf1ec8wA="
    };


order.addEventListener('click', ordering);

async function ordering(){

let all = document.querySelectorAll('input');



let order, pic;
all.forEach(function(el){
     if(el.checked == true){
        order = el;
     }
})

for(x in foodPics){
    if(x == order.id){
        pic = foodPics[x];
    }
}

orders.push(order.id);


let mypromise = new Promise(function(resolve, reject){

    setInterval(function(){
        if(orders[0] == order.id){
           resolve(`Your Food is Ready`);
           clearInterval(id);
        }
        },1000);


})

let res = await mypromise;
alert(res);
document.getElementById('img').innerHTML = null;

   let img = document.createElement("img");
   img.src = pic;
   document.getElementById('img').append(img);

   console.log(pic);

   document.getElementById('right').textContent = order.id;
}


function startPreapare(){
     if(orders.length != 0){
            orders.shift();;
        }else{
            clearInterval(id);
        }
}

let id = setInterval(startPreapare, 1000);

