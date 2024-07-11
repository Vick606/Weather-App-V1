import './style.css';

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';


async function getWeatherData(location) {
    try {
        console.log('Fetching weather for:', location);
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${location}`);
        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('API Response:', data);
        
        if (response.ok) {
            return processWeatherData(data);
        } else {
            throw new Error(data.error.message || 'Location not found');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

function processWeatherData(data) {
    return {
        location: data.location.name,
        temperature: data.current.temp_c,
        description: data.current.condition.text,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
        icon: data.current.condition.icon
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
        displayElement.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    } finally {
        loadingElement.style.display = 'none';
    }
});

function getWeatherIcon(iconCode) {
    const iconMap = {
        '01d': 'fas fa-sun',
        '01n': 'fas fa-moon',
        '02d': 'fas fa-cloud-sun',
        '02n': 'fas fa-cloud-moon',
        '03d': 'fas fa-cloud',
        '03n': 'fas fa-cloud',
        '04d': 'fas fa-cloud',
        '04n': 'fas fa-cloud',
        '09d': 'fas fa-cloud-showers-heavy',
        '09n': 'fas fa-cloud-showers-heavy',
        '10d': 'fas fa-cloud-rain',
        '10n': 'fas fa-cloud-rain',
        '11d': 'fas fa-bolt',
        '11n': 'fas fa-bolt',
        '13d': 'fas fa-snowflake',
        '13n': 'fas fa-snowflake',
        '50d': 'fas fa-smog',
        '50n': 'fas fa-smog'
    };

    return iconMap[iconCode] || 'fas fa-question';
}

function displayWeather(weatherData) {
    const displayElement = document.getElementById('weather-display');
    const iconClass = getWeatherIcon(weatherData.icon);
    
    displayElement.innerHTML = `
        <div class="weather-card">
            <i class="${iconClass} weather-icon"></i>
            <h2>${weatherData.location}</h2>
            <p class="temperature">${Math.round(weatherData.temperature)}°C</p>
            <p class="description">${weatherData.description}</p>
            <p>Humidity: ${weatherData.humidity}%</p>
            <p>Wind Speed: ${weatherData.windSpeed} m/s</p>
        </div>
    `;
}