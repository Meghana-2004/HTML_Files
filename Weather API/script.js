async function getWeather() {
    // const city = document.getElementById("cityInput");
    const city = document.querySelector("#cityInput");
    console.log(city.value);
    if (city.value === "") {
        alert("Please enter a city name.");
        return;
    }
     
    
    const API_KEY = "d5b0a2119548839b34976d7608685fa4"; 
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${API_KEY}`;

    try
    {
        const response = await fetch(URL);
        const data = await response.json();

        if (data.cod !== 200){
            console.log(document.querySelector("#weatherResult").innerText = "404 Error");
            return;
        }
        
        console.log(data);
        let city_val = city.value;
        let temp1 = data.main.temp;
        let description = data.weather[0].description;
        let humidity = data.main.humidity;

        const weatherInfo = `
            🌍 City:  ${city_val}
            🌡 Temperature: ${temp1}°C
            ☁️ Weather: ${description}
            💧 Humidity: ${humidity}%
        `;
        function updateContainerSize() {
            const container = document.querySelector(".container");
            container.style.height = "auto";  
            container.style.padding = "25px"; 
        }
        document.querySelector("#weatherResult").innerText = weatherInfo;
        updateContainerSize();
    }
    catch(error){
        console.log("Error Fetching Data");
        alert("Network Issue!!\n please Try again after Sometime");

    }

}

