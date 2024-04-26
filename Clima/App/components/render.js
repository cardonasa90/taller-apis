export function renderWeather(weatherData) {
    const weatherInfoElement = document.getElementById('weather-view');
    if (weatherInfoElement) {
        weatherInfoElement.innerHTML = `
            <h2>Clima actual en ${weatherData.name}</h2>
            <p>${weatherData.weather[0].description}</p>
            <p>Temperatura: ${weatherData.main.temp} °C</p>
            <p>Humedad: ${weatherData.main.humidity}%</p>
        `;
    } else {
        console.error("Elemento 'weather-view' no encontrado en el DOM.");
    }
}

export function renderAdditionalInfo(weatherData) {
    const additionalInfoElement = document.getElementById('additional-info-view');
    if (additionalInfoElement) {
        additionalInfoElement.innerHTML = `
            <h2>Información adicional:</h2>
            <p>Sensación térmica: ${weatherData.main.feels_like} °C</p>
            <p>Presión atmosférica: ${weatherData.main.pressure} hPa</p>
            <p>Velocidad del viento: ${weatherData.wind.speed} m/s</p>
        `;
    } else {
        console.error("Elemento 'additional-info-view' no encontrado en el DOM.");
    }
}



