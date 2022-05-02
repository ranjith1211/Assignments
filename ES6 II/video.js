let video = JSON.parse(localStorage.getItem("youtube"));
console.log(video);

let videoId = video.videoId;

console.log(videoId)

let frame  = document.getElementById('framer');

let tag = `<iframe width="625" height="352" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

frame.innerHTML = tag;