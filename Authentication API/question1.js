let main = document.getElementById('dis');

let btn = document.getElementById('serachCover');

btn.onclick = () =>{
    showResults();
}

let showResults = async() =>{
    let key = `AIzaSyDNt9W4UBdWKrTil_sIGQTeQYi2b9jUuSk`;

    let query = document.getElementById('query').value;

    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${key}`;

    let res = await fetch(url);

    let main = await res.json();

    let data = main.items;
    
    display(data);
}

let display = (data) => {
document.getElementById('dis').innerHTML = null;
  data.forEach(({snippet, id: {videoId}})=>{
    console.log(snippet, videoId);
   let div = document.createElement("div");

   let img = document.createElement("img");
   img.src = snippet.thumbnails.medium.url;

   let title = document.createElement("p");
   title.textContent = snippet.title;

   div.append(img, title);

   document.getElementById('dis').append(div);

   div.onclick = () => {
       move(snippet, videoId);
   }
  })
}


let move = (snippet, videoId) => {

    let obj = {
        snippet,
        videoId,
    }
    localStorage.setItem("youtube",JSON.stringify(obj));
    window.open("video.html")
}


let popular = async() => {
    document.getElementById('dis').innerHTML = null;
   let key = `AIzaSyDNt9W4UBdWKrTil_sIGQTeQYi2b9jUuSk`;

    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&locale=hindi&maxResults=20&key=${key}`;

    let res = await fetch(url);

    let main = await res.json();

    let data = main.items;

    data.forEach(({snippet, id: {videoId}})=>{
    console.log(snippet, videoId);
   let div = document.createElement("div");

   let img = document.createElement("img");
   img.src = snippet.thumbnails.medium.url;

   let title = document.createElement("p");
   title.textContent = snippet.title;

   div.append(img, title);

   document.getElementById('dis').append(div);

   div.onclick = () => {
       move(snippet, videoId);
   }
  })
}

popular()

let user = JSON.parse(localStorage.getItem("user"));

document.getElementById('username').innerHTML = user;


