 let id; 

async function showMovie(){
try{

let input = document.getElementById('movie').value;

let url = `https://www.omdbapi.com/?s=${input}&apikey=f3c774f3`;

let res = await fetch(url);

let mainData = await res.json();

return mainData.Search;

}catch(err){
    console.log("Error :", err);
}
}

async function displayMovies(){

    let data = await showMovie();

    if(data === undefined){
        return false;
    }
    document.getElementById('display').innerHTML = null;

     data.forEach(function(el){

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.Poster;

    let title = document.createElement("p");
    title.textContent = `Title : ${el.Title}`;

    let cover = document.createElement("div");

    let year =  document.createElement("p");
    year.textContent = `Year : ${el.Year}`;

   cover.append(title, year);

    div.append(img, cover);

    document.getElementById('display').append(div)
});

document.getElementById('display').style.visibility = "visible";
}


function makeSlowSearch(func, delay){

        clearTimeout(id);
 
       id = setTimeout(function(){
        func();
        }, delay);
      }
