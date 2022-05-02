
let btn = document.getElementById('search');

btn.addEventListener('click', search);

function search(){
    let input = document.getElementById('movie').value;

let url = `https://www.omdbapi.com/?t=${input}&apikey=f3c774f3`;

fetch(url)
.then(function(res){
   return (res.json());
})
.then(function(res){
    return (res);
})
.then(function(res){
   const data = res;
      console.log(data);
      console.log(data.imdbRating);
      showMovies(data);
}).catch(function(err){
    console.log("Error!");
})

}

function showMovies(el){


     document.getElementById('main').innerHTML = null;
    
    let div = document.createElement("div");


    div.setAttribute("id", "container");

    let img = document.createElement("img");
    img.src = el.Poster;

    // console.log(el.Poster);

    let title = document.createElement("h3");
    title.textContent = el.Title;

    let release = document.createElement("p");
    release.textContent =`Release Date: ${el.Released}`;

    let director = document.createElement("p");
    director.textContent =`Director: ${el.Director}`;

    let genre = document.createElement("p");
    genre.textContent =`Genre: ${el.Genre}`;
    
    let actors = document.createElement("p");
    actors.textContent =`Actors: ${el.Actors}`;


    let plot = document.createElement("p");
    plot.textContent =`Plot: ${el.Plot}`

     let imdbRating = document.createElement("p");
    imdbRating.textContent =`Imdb Rating: ${el.imdbRating}`;

    if(8.5 < +(el.imdbRating)){
       imdbRating.textContent =`Imdb Rating: ${el.imdbRating}     Recommended`;
       imdbRating.style.backgroundColor = "gold";
       imdbRating.style.color = "black";
       imdbRating.style.fontWeight = "bolder";
       imdbRating.style.display = "inline-block";
    }
   

    if(el.imdbRating === undefined){
        document.getElementById('main').innerHTML = `<iframe src="https://giphy.com/embed/10kUjYGIEFDHHWkRfT" width="480" height="476" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/404notfoundstore-404-404notfound-404notfoundstoreroma-10kUjYGIEFDHHWkRfT">via GIPHY</a></p>`;
    }
    else{

     div.append(img, title, release, director, actors, genre, imdbRating, plot);


     document.getElementById('main').append(div);


    }


  
}


// Title":"Rishi","Year":"2001","Rated":"N/A","Released":"16 Feb 2001","Runtime":"143 min","Genre":"Action","Director":"Sundar C.","Writer":"Sundar C.","Actors":"C. Arunpandian, Bhuvaneswari, Madhan Bob","Plot":"Rishi is a tough, suave, professional thief who is the right-hand of Satyan, the underworld kingpin. On one of Rishi's missions, he happens to watch Minister Devara kill Hema, a TV reporter who is about to expose him. Before dying, H","Language":"Tamil","Country":"India","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMzIxNTYwMmMtNjRlNy00YWM4LWJkZDMtODYwNThhZjgzMmU5XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"3.8/10"}],"Metascore":"N/A","imdbRating":"3.8","imdbVotes":"56","imdbID":"tt1507347","Type":"movie","DVD":"24 Apr 2020","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}
