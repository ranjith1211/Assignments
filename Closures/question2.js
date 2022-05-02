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
           document.getElementById('frame').innerHTML = null;
        document.getElementById('frame').append("Sorry No Matches Found!");
    }
      data.forEach(function(el){
   
   document.getElementById('frame').innerHTML = null;

            let div = document.createElement("div");

            let img = document.createElement("img");
            img.src = el.Poster;

            let title = document.createElement("p");
            title.textContent = el.Title;

            div.append(img, title);

            document.getElementById('results').append(div);

            document.getElementById('results').style.visibility = "visible";

            let imdbId =  el.imdbID;

            div.onclick = function(){
                show(imdbId)
            };


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


 async function show(imdbId){

     document.getElementById('frame').innerHTML = "";

     let url2 = `https://www.omdbapi.com/?i=${imdbId}&apikey=f3c774f3`;

     let res = await fetch(url2);

     let mainData = await res.json();

     let el = (mainData);
     console.log(el)

     if(el === undefined){
        return false;
     }

           let div = document.createElement("div");

          let img = document.createElement("img");
            img.src = el.Poster;

            let title = document.createElement("p");
            title.textContent =`Title: ${el.Title}`;

             let year = document.createElement("p");
            year.textContent = `Year: ${el.Year}`;

            let rating = document.createElement("p");
            rating.textContent = `Imdb Rating: ${el.imdbRating}`;

             let director = document.createElement("p");
            director.textContent = `Director: ${el.Director}`;

             let actors = document.createElement("p");
            actors.textContent = 
            `Actors: ${el.Actors}`;

            let genre = document.createElement("p");
            genre.textContent =  `Genre: ${el.Genre}`;

             let language = document.createElement("p");
            language.textContent = 
            `Language: ${el.Language}`;

                 let runTime = document.createElement("p");
              runTime.textContent = `Run Time: ${el.Runtime}`;

   
            div.append(img, title, year, rating, director, actors, genre, language, runTime);

            document.getElementById('frame').append(div);

 
}


// let url2 = `https://www.omdbapi.com/?i=${input}&apikey=f3c774f3`

// {"Title":"Batman Begins","Year":"2005","Rated":"PG-13","Released":"15 Jun 2005","Runtime":"140 min","Genre":"Action, Adventure","Director":"Christopher Nolan","Writer":"Bob Kane, David S. Goyer, Christopher Nolan","Actors":"Christian Bale, Michael Caine, Ken Watanabe","Plot":"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.","Language":"English, Mandarin","Country":"United Kingdom, United States","Awards":"Nominated for 1 Oscar. 13 wins & 79 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"8.2","imdbVotes":"1,369,540","imdbID":"tt0372784","Type":"movie","DVD":"18 Oct 2005","BoxOffice":"$206,852,432","Production":"N/A","Website":"N/A","Response":"True"}