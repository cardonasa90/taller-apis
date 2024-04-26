export async function fetchWeather(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d7e9844050bac3ee122f8c0ed391e440&lang=es&units=metric`);
    if (!response.ok) {
        throw new Error('No se pudo obtener el clima para esa ubicación.');
    }
    const weatherData = await response.json();
    return weatherData;
}
