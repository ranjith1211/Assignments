
// get data from url 

let getData = async(url) => {
    try{
    let res = await fetch(url);

    let main = await res.json();

    return (main.meals);
    } catch(err){
        console.log("Error :", err);
    }
}

// display data 

let display = (data, location) => {
location.innerHTML = null;

if(data === null){
    let h1 = document.createElement("h1");
    h1.textContent = "Sorry No Matches !";
    h1.style.textAlign = "center";
    location.append(h1);
}
    data.forEach((el) => {

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.strMealThumb;

        let title = document.createElement("p");
        title.textContent = `Dish: ${el.strMeal}`;

        let category = document.createElement("p");
        category.textContent = `Category : ${el.strCategory}`;

        let country = document.createElement("p");
        country.textContent = `Country Origin: ${el.strArea}`;
         
         let source = document.createElement("a");
         source.href = el.strYoutube;
         source.style.marginLeft = "15px";
         source.style.marginTop = "10px";
         source.style.color = "yellow";
         source.textContent = "Youtube Source";
         source.setAttribute('class', "source")
         
         div.append(img, title, category, country, source);

         location.append(div);
    })
}

export {getData, display};