import './style.css';

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeatherData(location) {
    try {
        const response = await fetch(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
        if (!response.ok) throw new Error('Location not found');
        const data = await response.json();
        return processWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

function processWeatherData(data) {
    return {
        location: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
    };
}

document.getElementById('weather-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const location = document.getElementById('location-input').value;
    const loadingElement = document.getElementById('loading');
    const displayElement = document.getElementById('weather-display');

    loadingElement.style.display = 'block';
    displayElement.innerHTML = '';

    try {
        const weatherData = await getWeatherData(location);
        displayWeather(weatherData);
    } catch (error) {
        displayElement.innerHTML = `<p>Error: ${error.message}</p>`;
    } finally {
        loadingElement.style.display = 'none';
    }
});

function displayWeather(weatherData) {
    const displayElement = document.getElementById('weather-display');
    displayElement.innerHTML = `
        <h2>${weatherData.location}</h2>
        <p>Temperature: ${weatherData.temperature}°C</p>
        <p>Description: ${weatherData.description}</p>
        <p>Humidity: ${weatherData.humidity}%</p>
        <p>Wind Speed: ${weatherData.windSpeed} m/s</p>
    `;
}