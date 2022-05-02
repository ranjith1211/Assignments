let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=8dbafa443403fd970127cfff6ada0f72&language=hi&page=1";

let img = "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg"

showMovies()

async function showMovies(){

    let res = await fetch(url);

    let mainData = await res.json();

    let data = mainData.results;

    return (data);
}
display()
async function display(){

    let data = await showMovies();

    data.forEach(function(el){

        let div = document.createElement("div");

       let img = document.createElement("img");
       img.src = `https://image.tmdb.org/t/p/w500/${el.poster_path}`;

       let title =  document.createElement("p");
       title.textContent = el.original_title;

       div.append(img, title);

       document.getElementById('container').append(div);


    })
}