function citySearch(event){
    event.preventDefault();
    let searchInputElement = document.querySelector("#weather-search-form");
    let cityElement = document.querySelector("#weather-city");
    cityElement.innerHTML = searchInputElement.value;
}

let searchFormElement = document.querySelector("#weather-form");
searchFormElement.addEventListener("submit", citySearch);