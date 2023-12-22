function searchWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    }

    
    function searchCity(city){
        let apiKey = "a4oe8fb84b2d8f83f294f146t0af1032";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
        axios.get(apiUrl).then(searchWeather);
    }
    
    function searchSubmit(event){
        event.preventDefault();
        let searchInputElement = document.querySelector("#weather-search-form");
        searchCity(searchInputElement.value);
    }

let searchFormElement = document.querySelector("#weather-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Kabul");