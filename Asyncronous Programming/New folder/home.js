let slideContainer = document.createElement("div");

slideContainer.setAttribute("class", "slideCont");

document.getElementById('container').append(slideContainer);

let images = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3668/593668-h",
"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4739/14739-h",
"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9285/1079285-h-900be2795d8d",
"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2687/1052687-h-20cbf695bb0a",
"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2358/1082358-h-f42c8f09eced"]

let img = document.createElement("img");

let index = 0;

img.src = images[index];

img.setAttribute("class", "slidePics");

slideContainer.append(img);

index++;

setInterval(function(){
    slideContainer.innerHTML = null;
    let img = document.createElement("img");

    img.src = images[index];

    img.setAttribute("class", "slidePics");

    slideContainer.append(img);

index++;

if(images.length == index){
    index = 0;
}
},2000);

let movies = [
    {
        name:"Star (2021)",
        releseDate: "1/2/2021",
        poster:"https://ww12.4movierulz.nl/uploads/Star-Malayalam-Poster.jpg",
        imdb:6
    },
       {
        name:"Poster (2021)",
        releseDate: "1/2/2021",
        poster:"https://ww12.4movierulz.nl/uploads/Poster-Telugu-New-Poster.jpg",
        imdb:5
    },
    {
        name:"Baaghi 3 (2021) ",
        releseDate: "1/2/2021",
        poster:"https://ww12.4movierulz.nl/uploads/Baaghi-3-Tamil-Poster.jpg",
        imdb:8
    },
     {
        name:"Dhamaka (2021)  ",
        releseDate: "1/2/2021",
        poster:"https://ww12.4movierulz.nl/uploads/Dhamaka-Hindi.jpg",
        imdb:9
    },
     {
        name:"Bunty Aur Babli 2 (2021)",
        releseDate: "1/2/2021",
        poster:"https://ww12.4movierulz.nl/uploads/Bunty-Aur-Babli-2-Hindi.jpg",
        imdb:7
    },
    {
        name:"Most Eligible Bachelor (2021)",
        releseDate: "1/2/2021",
        poster:"https://ww12.4movierulz.nl/uploads/Most-Eligible-Bachelor-New-Telugu-Image.jpg",
        imdb:4
    },
    {
        name:"Old (2021) ",
        releseDate: "1/2/2021",
        poster:"https://ww12.4movierulz.nl/uploads/Old-English.jpg",
        imdb:6.5
    },
    {
        name:"Snake Eyes (2021) ",
        releseDate: "1/2/2021",
        poster:"https://ww12.4movierulz.nl/uploads/Snake-Eyes-English.jpg",
        imdb:8.2
    },
    {
        name:"Fast And Furious 9 (2021)",
        releseDate: "1/2/2021",
        poster:"https://ww12.4movierulz.nl/uploads/Fast-And-Furious-9-English.jpg",
        imdb:9.2
    }
];

let bucket = document.createElement("div");

let heading = document.createElement("h1");
heading.style.color = "Teal";
heading.style.textAlign = "center";

heading.textContent = "My Favourite Movies";

let butLh = document.createElement("button");
butLh.textContent = "Sort by low rating to high";

butLh.onclick = function(){
 movies = movies.sort((a, b) => a.imdb - b.imdb);
 bucket.innerHTML = null;
 display();
}

let butHl = document.createElement("button");
butHl.textContent = "Sort by High rating to low";

butHl.onclick = function(){
 movies = movies.sort((a, b) => b.imdb - a.imdb);
 bucket.innerHTML = null;
 display();
}
butHl.style.marginLeft = "15px";

bucket.setAttribute("class", "bucket");

document.getElementById('container').append(butLh, butHl, heading, bucket);

heading.style.display = "inline";
heading.style.marginLeft = "100px";

function display(){
movies.forEach(function(el){
let box = document.createElement("div");
 
let img =  document.createElement("img");

img.src = el.poster;

img.setAttribute("class", "gridPics");

let tag = document.createElement("h3");
tag.textContent = `${el.name}`;
tag.setAttribute("class", "paras");

let date = document.createElement("p");
date.textContent = ` release Date: ${el.releseDate}`;
date.setAttribute("class", "paras");

let rating = document.createElement("p");
rating.textContent = `IMDB rating: ${el.imdb}`;
rating.setAttribute("class", "paras");

box.append(img, tag, date, rating);

bucket.append(box);
})
}

display()