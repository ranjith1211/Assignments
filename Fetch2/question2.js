


  let key = "c0c4cc06ef844649271b0b016677759f";

  let pics = ["https://cdn-icons-png.flaticon.com/128/1146/1146869.png", "https://cdn-icons.flaticon.com/png/128/3104/premium/3104619.png?token=exp=1637879983~hmac=29ea3fcbb724a7ef593f4b38af8def31", "https://cdn-icons-png.flaticon.com/128/1581/1581805.png", "https://cdn-icons.flaticon.com/png/128/3151/premium/3151135.png?token=exp=1637879983~hmac=17f9a9f049321af77ea8909f3eb72543", "https://cdn-icons.flaticon.com/png/128/2982/premium/2982243.png?token=exp=1637879983~hmac=ad67a94677509873041081b37f9c1530","https://cdn-icons-png.flaticon.com/128/2907/2907217.png","https://cdn-icons-png.flaticon.com/128/2698/2698194.png","https://cdn-icons-png.flaticon.com/128/2698/2698213.png"];

  let dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  console.log(dayArr);

  let i = 0;

  let count = 0 ;

  console.log(pics.length);

  showWeather()

async function showWeather(){
    
     document.getElementById('dailys').innerHTML = null;
     
    document.getElementById('icons').innerHTML = null;

    let place = document.getElementById('city').value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=c0c4cc06ef844649271b0b016677759f`;

    let res = await fetch(url);

    let data = await  res.json();

   
    let minTemp =  document.createElement("div");
   

    let img1 = document.createElement("img");
    img1.src = "https://cdn-icons-png.flaticon.com/128/4158/4158502.png";

    let line1 = document.createElement("p");
    line1.textContent = `Min ${Math.round(data.main.temp_min - 273.15)}  °C` ;
 
 minTemp.append(img1,line1);



 let maxTemp =  document.createElement("div");


let img2 = document.createElement("img");
    img2.src = "https://cdn-icons-png.flaticon.com/128/4158/4158502.png";

    let line2 = document.createElement("p");
    line2.textContent = `Max ${Math.round(data.main.temp_max - 273.15)}  °C` ;
 
 maxTemp.append(img2,line2);


let temp =  document.createElement("div");

let img3 = document.createElement("img");
    img3.src = "https://cdn-icons-png.flaticon.com/128/4158/4158502.png";

    let line3 = document.createElement("p");
    line3.textContent = `Avg ${Math.round(data.main.temp - 273.15)}  °C` ;
 
 temp.append(img3,line3);



let wind =  document.createElement("div");


let img4 = document.createElement("img");
    img4.src = "https://cdn-icons.flaticon.com/png/128/5378/premium/5378115.png?token=exp=1637874365~hmac=1067137c6e8f262cf12d2b6b5a2ac7b9";

    let line4 = document.createElement("p");
    line4.textContent = `Wind Speed ${data.wind.speed} m/s` ;
 
 wind.append(img4,line4);


let clouds =  document.createElement("div");

  let img5 = document.createElement("img");
    img5.src = "https://cdn-icons-png.flaticon.com/128/6228/6228513.png";

    let line5 = document.createElement("p");
    line5.textContent = `Cloud ${data.clouds.all} units` ;
 
 clouds.append(img5,line5);



let humidity =  document.createElement("div");


let img6 = document.createElement("img");
    img6.src = "https://cdn-icons-png.flaticon.com/128/219/219816.png";

    let line6 = document.createElement("p");
    line6.textContent = `humidity ${data.main.humidity}%` ;
 
 humidity.append(img6,line6);


let sunRise =  document.createElement("div");


let img7 = document.createElement("img");
    img7.src = "https://cdn-icons-png.flaticon.com/128/287/287667.png";

    let line7 = document.createElement("p");
    line7.textContent = `Sunrise at ${unixTimeToHumanReadable(data.sys.sunrise)} ` ;
 
 sunRise.append(img7,line7);


let sunSet =  document.createElement("div");


  let img8 = document.createElement("img");
    img8.src = "https://cdn-icons-png.flaticon.com/128/287/287668.png";

    let line8 = document.createElement("p");
    line8.textContent = `Sunset at  ${unixTimeToHumanReadable(data.sys.sunset)} ` ;
 
 sunSet.append(img8,line8);

let pressure =  document.createElement("div");
 let img9 = document.createElement("img");
    img9.src = "https://cdn-icons-png.flaticon.com/128/2299/2299296.png";

    let line9 = document.createElement("p");
    line9.textContent = `Atm Pressure  ${data.main.pressure}hPa` ;
 
 pressure.append(img9,line9);



document.getElementById('icons').append(minTemp, maxTemp, temp, wind, clouds, humidity, sunRise, sunSet, pressure);

let map = document.getElementById('map');

let frame = `<iframe width="100%" height="385" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${place}+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">best sat navs</a></iframe>`

map.innerHTML = frame;



let lat = data.coord.lat;

let lon = data.coord.lon;

let url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${key}`
 
 let res2 = await fetch(url2);

let mainData2 = await res2.json();

console.log(mainData2.daily);

mainData2.daily.forEach(function(el){

let div = document.createElement("div");

let img = document.createElement("img");
img.src = pics[i];
i++;

if(i == pics.length){
    i = 0;
}


let min = document.createElement("p");
let c = +Math.round(el.temp.min - 273.15);
min.textContent = `min ${c}°`;




let date = document.createElement("p");
let num = new Date().getDay(); 
if(count == 6){
	count = 0;
}
date.textContent = dayArr[(num)+count++];


 
let max = document.createElement("p");
let d = +Math.round(el.temp.max - 273.15);
max.textContent = `max ${d}°`;

div.append(date, img, max, min);

document.getElementById('dailys').append(div);


})


}


	
	function unixTimeToHumanReadable(seconds)
	{

		// Save the time in Human
		// readable format
		let ans = "";

		// Number of days in month
		// in normal year
		let daysOfMonth = [ 31, 28, 31, 30, 31, 30,
							31, 31, 30, 31, 30, 31 ];

		let currYear, daysTillNow, extraTime,
			extraDays, index, date, month, hours,
			minutes, secondss, flag = 0;

		// Calculate total days unix time T
		daysTillNow = parseInt(seconds / (24 * 60 * 60), 10);
		extraTime = seconds % (24 * 60 * 60);
		currYear = 1970;

		// Calculating current year
		while (daysTillNow >= 365)
		{
			if (currYear % 400 == 0 ||
			(currYear % 4 == 0 &&
				currYear % 100 != 0))
			{
				daysTillNow -= 366;
			}
			else
			{
				daysTillNow -= 365;
			}
			currYear += 1;
		}

		// Updating extradays because it
		// will give days till previous day
		// and we have include current day
		extraDays = daysTillNow + 1;

		if (currYear % 400 == 0 ||
		(currYear % 4 == 0 &&
			currYear % 100 != 0))
			flag = 1;

		// Calculating MONTH and DATE
		month = 0; index = 0;
		if (flag == 1)
		{
			while (true)
			{
				if (index == 1)
				{
					if (extraDays - 29 < 0)
						break;

					month += 1;
					extraDays -= 29;
				}
				else
				{
					if (extraDays -
						daysOfMonth[index] < 0)
					{
						break;
					}
					month += 1;
					extraDays -= daysOfMonth[index];
				}
				index += 1;
			}
		}
		else
		{
			while (true)
			{
				if (extraDays - daysOfMonth[index] < 0)
				{
					break;
				}
				month += 1;
				extraDays -= daysOfMonth[index];
				index += 1;
			}
		}

		// Current Month
		if (extraDays > 0)
		{
			month += 1;
			date = extraDays;
		}
		else
		{
			if (month == 2 && flag == 1)
				date = 29;
			else
			{
				date = daysOfMonth[month - 1];
			}
		}

		// Calculating HH:MM:YYYY
		hours = parseInt(extraTime / 3600, 10);
		minutes = parseInt((extraTime % 3600) / 60, 10);
		secondss = parseInt((extraTime % 3600) % 60, 10);

		ans += date.toString();
		ans += "/";
		ans += month.toString();
		ans += "/";
		ans += currYear.toString();
		ans += " ";
		ans += hours.toString();
		ans += ":";
		ans += minutes.toString();
		ans += ":";
		ans += secondss.toString();

		// Return the time
		return ans;
	}
	
	

