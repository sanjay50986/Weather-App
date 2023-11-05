const apiKey = "9ab88c2a03901e66d6790c8729099e51";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) 
    {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0] == "Clear") {
            weatherIcon.src = "images/clear.png";

        }
        else if(data.weather[0] == "Rain") {
            weatherIcon.src = "images/rain.png";

        }
        else if(data.weather[0] == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";

        }
        else if(data.weather[0] == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })

    checkWeather();