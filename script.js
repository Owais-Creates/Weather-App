// Selecting the html elements.
const cityName = document.querySelector("#name");
const inputCityName = document.querySelector("#city-name");
const weatherIcon = document.querySelector("#weather-icon");
const temperature = document.querySelector("#temp");
const weatherInfo = document.querySelector("#info");
const weatherForecast = document.querySelector("#forecast");
const btn = document.querySelector("#submit");
const apiKey = "020d349326eb7c1d293e2b68cfccf175";

// Function which calls  the API and displays the data on the page.
const getWeather = async (search) => {

    const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`);
    const weatherData = await weatherApi.json();

    if (weatherData.cod == 400) {
        weatherIcon.src = "img/error1.png";
        cityName.innerText = "Not Found";
        temperature.innerHTML = "";
        weatherInfo.innerHTML = "";
        alert("Please enter locaion to proceed");

    }

    if (weatherData.cod == 404) {
        weatherIcon.src = "img/404.png";
        cityName.innerHTML = search;
        temperature.innerHTML = "";
        weatherInfo.innerHTML = "";
        alert("Please enter the right spelling");
    }

    cityName.innerText = `${weatherData.name}`;
    temperature.innerHTML = `<p> ${Math.floor(weatherData.main.temp)} °C </p>`;
    weatherInfo.innerHTML = `<p> ${weatherData.weather[0].main}`;

    if (weatherInfo.innerText == "Haze") {
        weatherIcon.src = "img/haze.png";
        weatherIcon.style.display = "block";

    } else if (weatherInfo.innerText == "Rain") {
        weatherIcon.src = "img/rain.png";
        weatherIcon.style.display = "block";

    } else if (weatherInfo.innerText == "Clouds") {
        weatherIcon.src = "img/clouds.png";
        weatherIcon.style.display = "block";

    } else if (weatherInfo.innerText == "Clear") {
        weatherIcon.src = "img/clears.png";
        weatherIcon.style.display = "block";

    } else if (weatherInfo.innerText == "Strom") {
        weatherIcon.src = "img/strom.png";
        weatherIcon.style.display = "block";

    } else if (weatherInfo.innerText == "Haze") {
        weatherIcon.src = "img/haze.png";
        weatherIcon.style.display = "block";
    }


}

// event listner on btn which calls the getWeather func
btn.addEventListener("click", function () {
    search = inputCityName.value;
    getWeather(search);
    inputCityName.value = ""

}); 
