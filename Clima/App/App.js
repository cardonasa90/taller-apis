import { fetchWeather } from './helpers/WeatherHelper.js';
import { renderWeather, renderAdditionalInfo } from './components/render.js';

document.addEventListener("DOMContentLoaded", async function() {
    const locationInput = document.getElementById('location-input');
    const searchButton = document.getElementById('search-button');

    async function searchWeather(location) {
        try {
            const weatherData = await fetchWeather(location);
            renderWeather(weatherData);
            renderAdditionalInfo(weatherData);
            updateTitle(weatherData.name);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert('La ubicación ingresada no existe. Por favor, verifique y vuelva a intentar.');
            } else {
                alert('Ocurrió un error al obtener el clima para esa ubicación. Por favor, intente de nuevo más tarde.');
            }
        }
    }

    searchButton.addEventListener('click', async function() {
        const location = locationInput.value.trim(); 
        if (!location) { 
            alert('Por favor, ingrese una ubicación.');
            return;
        }
        await searchWeather(location);
    });

    if (locationInput.value.trim()) {
        await searchWeather(locationInput.value.trim());
    }

    setInterval(async function() {
        await searchWeather(locationInput.value.trim());
    }, 1800000); 

    function updateTitle(location) {
        document.title = `Clima en ${location}`;
    }
});












