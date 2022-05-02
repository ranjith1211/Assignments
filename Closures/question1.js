let id;
async function searchMovie(){

try{

let input = document.getElementById('movie').value;

let url = `https://www.omdbapi.com/?s=${input}&apikey=f3c774f3`;

let res = await fetch(url);

let mainData = await res.json();

let data = mainData.Search;

return (data);
}catch(err){
    console.log("Error:", err);
}
}

async function addMovies(){
    document.getElementById('results').innerHTML = null;

    let data = await searchMovie();
    console.log(data);
    if(data === undefined){
        return false;
    }
      data.forEach(function(el){


            let div = document.createElement("div");

            let img = document.createElement("img");
            img.src = el.Poster;

            let title = document.createElement("p");
            title.textContent = el.Title;

            div.append(img, title);

            document.getElementById('results').append(div);

            document.getElementById('results').style.visibility = "visible";


        })
}

function delayIt(fun, time){
 if(id){
     clearTimeout(id);
 }
 
 id = setTimeout(function(){
     fun();
 }, time)
}