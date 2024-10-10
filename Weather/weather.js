let search = document.getElementById("search");
let btn = document.getElementById("button");
let temp = document.getElementById("temp");
let cityName = document.getElementById("city");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let image = document.getElementById("image");
let weather = document.getElementById("weather");
const apiKey = "dfacbe54544c9c60535230c9656f18ab";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const responce = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await responce.json();
    if (responce.status == 404) {
        cityName.innerText = "wrong city name"
        weather.style.display = "block";
    }
    console.log(data);
    temp.innerHTML = Math.round( data.main.temp);
    cityName.innerHTML = data.name;
    wind.innerHTML = data.wind.speed;
    humidity.innerHTML = data.main.humidity;

    if(data.weather[0].main == "Clouds"){
        image.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Rain"){
        image.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        image.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Haze"){
        image.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Snow"){
        image.src = "images/snow.png"
    }
    else if(data.weather[0].main == "Clear"){
        image.src = "images/clear.png";
    }
    weather.style.display = "block"
}

// checkWeather(city);
btn.addEventListener("click",()=>{
    checkWeather(search.value);
    search.value = "";
})

