let inputBox = document.getElementById("inputBox");
let searchBtn = document.getElementById("searchBtn");
let weatherImage = document.querySelector(".weather-image");
let temperature = document.querySelector(".temperature")
let description = document.querySelector(".description");
let humidity = document.getElementById("humidity")
let windSpeed = document.getElementById("wind-speed");
let location_not_found = document.querySelector(".location-not-found");
let weather_body = document.querySelector(".weather-body")


async function checkWeather(city){
    const api_key = "9501fb0218e57bebe9d19674e29e8a14";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`).then(response => response.json()) //converts into string
    console.log(weather_data)

    if(weather_data.cod === '404'){
        location_not_found.style.display = 'flex'
        weather_body.style.display = 'none'
        console.log(error);
        return
    }

    weather_body.style.display = 'flex'
    temperature.innerHTML = `${Math.round(weather_data.main.temp -273.15)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    windSpeed.innerHTML = `${weather_data.wind.speed}Km/h`

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherImage.src = "image1.png";
            break;
        case 'Clear':
            weatherImage.src = "clear-image.png"
            break;
        case 'Rain':
            weatherImage.src = "rainy.png";
            break;
        case 'Mist':
            weatherImage.src = 'mist.webp';
            break;
        case 'Snow':
            weatherImage.src = "snow.png";
            break;
    }
}


searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value)
})